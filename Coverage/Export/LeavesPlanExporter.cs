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
        private Dictionary<String, XSSFCellStyle> styles;

        private List<LeaveDto> leaves = null;
        private List<EmployeDto> employes = null;

        public LeavesPlanExporter(List<LeaveDto> leaves, List<EmployeDto> employes)
        {
            this.leaves = leaves;
            this.employes = employes;
        }

        public void Export(Stream outStram, int year)
        {
            wb = new XSSFWorkbook();
            styles = CreateStyles();

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
                    CreateDayColumn(calendar, dayNameRow, dayNumberRow, employesLeavesRows, calendar.Day, weekDay, i, mergeSize);
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

        private void CreateDayCells(List<IRow> employesLeavesRows, String styleName, DateTime date, int cellIndex)
        {
            for (int i = 0; i < employes.Count; i++)
            {
                bool hasLeaves = leaves.Exists(a => a.Employe.Equals(employes[i]) && a.Date.Date == date.Date);
                ICell cell = employesLeavesRows[i].CreateCell(cellIndex);
                cell.CellStyle = GetStyle(styleName, i);
                if (hasLeaves)
                {
                    cell.SetCellValue(1);
                    cell.CellStyle = styles["leave"];

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
            titleCell.CellStyle = styles["title"];
        }

        private void CreateDayColumn(DateTime currentDate, IRow dayNameRow, IRow dayNumberRow, List<IRow> employesLeavesRows, int day, int weekDay, int cellIndex, int monthCellsSize)
        {
            ICell dayNameCell = dayNameRow.CreateCell(cellIndex);
            dayNameCell.SetCellValue(days[weekDay]);
            ICell dayNumberCell = dayNumberRow.CreateCell(cellIndex);
            dayNumberCell.SetCellValue(day);

            String styleName = GetStyleNameForHeader(currentDate, cellIndex, monthCellsSize);
            XSSFCellStyle style = styles[styleName];

            dayNameCell.CellStyle = style;
            dayNumberCell.CellStyle = style;
            CreateDayCells(employesLeavesRows, styleName, currentDate, cellIndex);
        }


        private void CreateTotalColumn(ISheet sheet, List<IRow> employesLeavesRows, IRow dayNameRow, IRow dayNumberRow, int lastCellIndex)
        {
            CellRangeAddress range = new CellRangeAddress(1, 2, lastCellIndex, lastCellIndex);
            XSSFCellStyle style = styles["workday"];

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




        private Dictionary<String, XSSFCellStyle> CreateStyles()
        {
            Dictionary<String, XSSFCellStyle> styles = new Dictionary<String, XSSFCellStyle>();

            IFont titleFont = Getfont(18, new XSSFColor(new byte[] { 255, 255, 255 }));
            IFont normalFont = Getfont(10, new XSSFColor(new byte[] { 39, 51, 89 }));

            IFont leaveFont = Getfont(10, new XSSFColor(new byte[] { 255, 255, 255 }));
            IFont notWorkDayFont = Getfont(10, new XSSFColor(new byte[] { 255, 0, 0 }));

            XSSFCellStyle style = wb.CreateCellStyle() as XSSFCellStyle;
            style.Alignment = HorizontalAlignment.Center;
            style.VerticalAlignment = VerticalAlignment.Center;

            style.SetFillForegroundColor(new XSSFColor(new byte[] { 63, 81, 181 }));
            style.FillPattern = FillPattern.SolidForeground;
            style.SetFont(titleFont);
            styles["title"] = style;

            XSSFColor workDayBorderColor = new XSSFColor(new byte[] { 39, 51, 89 });
            XSSFColor foreGroundColor = new XSSFColor(new byte[] { 255, 255, 255 });
            XSSFColor notWorkDayBorderColor = new XSSFColor(new byte[] { 255, 0, 0 });

            styles["workday"] = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            styles["notWorkDay"] = GetCellCommonStyle(notWorkDayFont, notWorkDayBorderColor, foreGroundColor, BorderStyle.Thin);

            style = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            style.Alignment = HorizontalAlignment.Left;
            styles["employe"] = style;

            styles["workdayMonthEnd"] = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Double);

            styles["notWorkDayMonthEnd"] = GetCellCommonStyle(notWorkDayFont, notWorkDayBorderColor, foreGroundColor, BorderStyle.Double);

            foreGroundColor = new XSSFColor(new byte[] { 239, 243, 255 });

            styles["workdayOdd"] = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            styles["notWorkDayOdd"] = GetCellCommonStyle(notWorkDayFont, notWorkDayBorderColor, foreGroundColor, BorderStyle.Thin);

            style = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            style.Alignment = HorizontalAlignment.Left;
            styles["employeOdd"] = style;

            styles["workdayMonthEndOdd"] = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Double);

            styles["notWorkDayMonthEndOdd"] = GetCellCommonStyle(notWorkDayFont, notWorkDayBorderColor, foreGroundColor, BorderStyle.Double);

            foreGroundColor = new XSSFColor(new byte[] { 63, 81, 181 });
            IDataFormat format = wb.CreateDataFormat();
            styles["leave"] = GetCellCommonStyle(leaveFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            styles["leave"].DataFormat = format.GetFormat(";;;");

            styles["leave"].FillPattern = FillPattern.BigSpots;

            return styles;
        }

        private XSSFCellStyle GetCellCommonStyle(IFont font, XSSFColor color, XSSFColor foregroundColor, BorderStyle borderRight)
        {
            XSSFCellStyle style = wb.CreateCellStyle() as XSSFCellStyle;
            style.SetFillForegroundColor(foregroundColor);
            style.FillPattern = FillPattern.SolidForeground;

            style.Alignment = HorizontalAlignment.Center;
            style.VerticalAlignment = VerticalAlignment.Center;
            style.SetRightBorderColor(color);
            style.BorderRight = borderRight;
            style.SetLeftBorderColor(color);
            style.BorderLeft = BorderStyle.Thin;
            style.SetBottomBorderColor(color);
            style.BorderBottom = BorderStyle.Thin;
            style.SetTopBorderColor(color);
            style.BorderTop = BorderStyle.Thin;
            style.SetFont(font);
            return style;
        }


        private void SetTitleBorders(ISheet sheet, CellRangeAddress range)
        {
            RegionUtil.SetBorderBottom((short)BorderStyle.Thin, range, sheet, wb);
            RegionUtil.SetBorderTop((short)BorderStyle.Thin, range, sheet, wb);
            RegionUtil.SetBorderLeft((short)BorderStyle.Thin, range, sheet, wb);
            RegionUtil.SetBorderRight((short)BorderStyle.Double, range, sheet, wb);

        }


        private IFont Getfont(int size, XSSFColor color)
        {
            XSSFFont titleFont = wb.CreateFont() as XSSFFont;
            titleFont.FontHeight = size;
            titleFont.SetColor(color);
            titleFont.IsBold = true;
            return titleFont;
        }



        private String GetStyleNameForHeader(DateTime day, int i, int mergeSize)
        {
            String styleName = null;
            if (isHolidayDay(day))
            {
                styleName = (i < (mergeSize - 1)) ? "notWorkDay" : "notWorkDayMonthEnd";
            }
            else
            {
                styleName = (i < (mergeSize - 1)) ? "workday" : "workdayMonthEnd";
            }
            return styleName;
        }


        private XSSFCellStyle GetStyle(String styleName, int row)
        {
            return (row % 2 == 0) ? styles[styleName] : styles[styleName += "Odd"];
        }


    }
}
