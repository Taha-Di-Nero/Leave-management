using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;

using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using NPOI.SS.Util;

using Seac.Coverage.Dto;

using static Seac.Coverage.Utils.HollidaysManager;

namespace Seac.Coverage.Export
{
    public class LeavesPlanExporter
    {

        private static readonly String[] days = { "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab" };

        private static readonly String[] months = { "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre" };

        private IWorkbook wb;
        private ExportStyleManager exportStyleManager;

        private readonly List<LeaveDto> leaves = null;
        private List<EmployeDto> employes = null;

        public LeavesPlanExporter(List<LeaveDto> leaves, List<EmployeDto> employes)
        {
            this.leaves = leaves;
            this.employes = employes;
        }

        public void Export(Stream outStram, int year)
        {
            wb = new XSSFWorkbook();
            exportStyleManager = new ExportStyleManager(wb);

            this.employes = employes.OrderBy(e => e.Surname).ThenBy(e => e.Name).ToList();

            ISheet sheet = CreateSheet(year);

            int i = 1;
            int mergeSize = 1;
            IRow headerRow = sheet.CreateRow(0);
            headerRow.HeightInPoints = 30;

            IRow dayNameRow = sheet.CreateRow(1);

            IRow dayNumberRow = sheet.CreateRow(2);

            List<IRow> employesLeavesRows = CreateEmployeLeavesRows(sheet);

            for (int month = 1; month <= 12; month++)
            {

                DateTime calendar = new DateTime(year, month, 1);
                int daysInMonth = DateTime.DaysInMonth(year, month);


                CreateMonthHeader(year, sheet, headerRow, mergeSize, month, daysInMonth);
                mergeSize += daysInMonth;
                for (; i < mergeSize; i++)
                {
                    int weekDay = (int)calendar.DayOfWeek;
                    sheet.SetColumnWidth(i, 4 * 256);
                    CreateDayColumn(calendar, dayNameRow, dayNumberRow, employesLeavesRows, weekDay, i, mergeSize);
                    calendar = calendar.AddDays(1);
                }
                i = mergeSize;

            }

            CreateTotalColumn(sheet, employesLeavesRows, dayNameRow, dayNumberRow, i);
            sheet.CreateFreezePane(1, 3);
            sheet.SetActiveCell(3, 0);

            wb.Write(outStram);
            wb.Close();
        }

        private void CreateDayCells(IList<IRow> employesLeavesRows, String styleName, DateTime date, int cellIndex)
        {
            for (int i = 0; i < employes.Count; i++)
            {
                bool hasLeaves = leaves.Exists(a => a.Employe.Equals(employes[i]) && a.Date.Date == date.Date);
                ICell cell = employesLeavesRows[i].CreateCell(cellIndex);
                cell.CellStyle = GetStyle(styleName, i);
                if (hasLeaves)
                {
                    cell.SetCellValue(1);
                    cell.CellStyle = exportStyleManager.GetStyle("leave");

                }
            }
        }

        private List<IRow> CreateEmployeLeavesRows(ISheet sheet)
        {
            List<IRow> employesLeavesRows = new List<IRow>();
            for (int i = 0; i < employes.Count; i++)
            {
                IRow row = sheet.CreateRow(i + 3);
                ICell cell = row.CreateCell(0);
                cell.SetCellValue(" " + employes[i].Surname + " " + employes[i].Name);
                cell.CellStyle = GetStyle("employe", i);
                employesLeavesRows.Add(row);
            }

            return employesLeavesRows;
        }

        private ISheet CreateSheet(int year)
        {
            ISheet sheet = wb.CreateSheet(year.ToString());

            sheet.DisplayGridlines = false;
            sheet.IsPrintGridlines = false;
            IPrintSetup printSetup = sheet.PrintSetup;
            printSetup.Landscape = true;
            sheet.FitToPage = true;
            sheet.HorizontallyCenter = true;
            sheet.SetColumnWidth(0, 20 * 256);
            return sheet;
        }



        private void CreateMonthHeader(int year, ISheet sheet, IRow headerRow, int mergeSize, int month, int daysInMonth)
        {
            CellRangeAddress range = new CellRangeAddress(0, 0, mergeSize, mergeSize + daysInMonth - 1);
            sheet.AddMergedRegion(range);
            ICell titleCell = headerRow.CreateCell(mergeSize);
            titleCell.SetCellValue(months[month - 1] + " " + year);
            SetTitleBorders(sheet, range);
            titleCell.CellStyle = exportStyleManager.GetStyle("title");
        }

        private void CreateDayColumn(DateTime currentDate, IRow dayNameRow, IRow dayNumberRow, List<IRow> employesLeavesRows, int weekDay, int cellIndex, int monthCellsSize)
        {
            ICell dayNameCell = dayNameRow.CreateCell(cellIndex);
            dayNameCell.SetCellValue(days[weekDay]);
            ICell dayNumberCell = dayNumberRow.CreateCell(cellIndex);
            dayNumberCell.SetCellValue(currentDate.Day);

            String styleName = GetStyleNameForHeader(currentDate, cellIndex, monthCellsSize);
            XSSFCellStyle style = exportStyleManager.GetStyle(styleName);

            dayNameCell.CellStyle = style;
            dayNumberCell.CellStyle = style;
            CreateDayCells(employesLeavesRows, styleName, currentDate, cellIndex);
        }


        private void CreateTotalColumn(ISheet sheet, IList<IRow> employesLeavesRows, IRow dayNameRow, IRow dayNumberRow, int lastCellIndex)
        {
            CellRangeAddress range = new CellRangeAddress(1, 2, lastCellIndex, lastCellIndex);
            XSSFCellStyle style = exportStyleManager.GetStyle("workday");

            sheet.AddMergedRegion(range);
            ICell totalCell = dayNameRow.CreateCell(lastCellIndex);
            totalCell.SetCellValue("Totale");
            SetTitleBorders(sheet, range);
            totalCell.CellStyle = style;
            dayNumberRow.CreateCell(lastCellIndex).CellStyle = style;

            for (int i = 0; i < employes.Count; i++)
            {
                style = GetStyle("workday", i);
                ICell cell = employesLeavesRows[i].CreateCell(lastCellIndex);
                cell.CellStyle = style;
                range = new CellRangeAddress(i + 3, i + 3, 1, lastCellIndex - 1);
                String formula = "SUM(" + range.FormatAsString() + ")";
                cell.SetCellType(CellType.Formula);
                cell.CellFormula = formula;
            }
        }

        private void SetTitleBorders(ISheet sheet, CellRangeAddress range)
        {
            RegionUtil.SetBorderBottom((short)BorderStyle.Thin, range, sheet, wb);
            RegionUtil.SetBorderTop((short)BorderStyle.Thin, range, sheet, wb);
            RegionUtil.SetBorderLeft((short)BorderStyle.Thin, range, sheet, wb);
            RegionUtil.SetBorderRight((short)BorderStyle.Double, range, sheet, wb);

        }

        private static string GetStyleNameForHeader(DateTime day, int i, int mergeSize)
        {
            string styleName = (i < (mergeSize - 1)) ? "workday" : "workdayMonthEnd";
            if (IsHolidayDay(day))
            {
                styleName = (i < (mergeSize - 1)) ? "notWorkDay" : "notWorkDayMonthEnd";
            }
            return styleName;
        }

        private XSSFCellStyle GetStyle(string styleName, int row)
        {
            var styleNameToApply = (row % 2 == 0) ? styleName : styleName + "Odd";
            return exportStyleManager.GetStyle(styleNameToApply);
        }


    }
}
