
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System.Collections.Generic;

namespace Seac.Coverage.Export
{
    public class ExportStyleManager
    {
        private Dictionary<string, XSSFCellStyle> _excelStyle;
        private readonly IWorkbook _wb;

        public ExportStyleManager(IWorkbook wb)
        {
            _wb = wb;
            CreateStyles();
        }

        public XSSFCellStyle GetStyle(string styleName) => _excelStyle[styleName];

        private void CreateStyles()
        {
            _excelStyle = new Dictionary<string, XSSFCellStyle>();

            IFont titleFont = Getfont(18, new XSSFColor(new byte[] { 255, 255, 255 }));
            IFont normalFont = Getfont(10, new XSSFColor(new byte[] { 39, 51, 89 }));

            IFont leaveFont = Getfont(10, new XSSFColor(new byte[] { 255, 255, 255 }));
            IFont notWorkDayFont = Getfont(10, new XSSFColor(new byte[] { 255, 0, 0 }));

            XSSFCellStyle style = _wb.CreateCellStyle() as XSSFCellStyle;
            style.Alignment = HorizontalAlignment.Center;
            style.VerticalAlignment = VerticalAlignment.Center;

            style.SetFillForegroundColor(new XSSFColor(new byte[] { 63, 81, 181 }));
            style.FillPattern = FillPattern.SolidForeground;
            style.SetFont(titleFont);
            _excelStyle["title"] = style;

            XSSFColor workDayBorderColor = new XSSFColor(new byte[] { 39, 51, 89 });
            XSSFColor foreGroundColor = new XSSFColor(new byte[] { 255, 255, 255 });
            XSSFColor notWorkDayBorderColor = new XSSFColor(new byte[] { 255, 0, 0 });

            _excelStyle["workday"] = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            _excelStyle["notWorkDay"] = GetCellCommonStyle(notWorkDayFont, notWorkDayBorderColor, foreGroundColor, BorderStyle.Thin);

            style = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            style.Alignment = HorizontalAlignment.Left;
            _excelStyle["employe"] = style;

            _excelStyle["workdayMonthEnd"] = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Double);

            _excelStyle["notWorkDayMonthEnd"] = GetCellCommonStyle(notWorkDayFont, notWorkDayBorderColor, foreGroundColor, BorderStyle.Double);

            foreGroundColor = new XSSFColor(new byte[] { 239, 243, 255 });

            _excelStyle["workdayOdd"] = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            _excelStyle["notWorkDayOdd"] = GetCellCommonStyle(notWorkDayFont, notWorkDayBorderColor, foreGroundColor, BorderStyle.Thin);

            style = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            style.Alignment = HorizontalAlignment.Left;
            _excelStyle["employeOdd"] = style;

            _excelStyle["workdayMonthEndOdd"] = GetCellCommonStyle(normalFont, workDayBorderColor, foreGroundColor, BorderStyle.Double);

            _excelStyle["notWorkDayMonthEndOdd"] = GetCellCommonStyle(notWorkDayFont, notWorkDayBorderColor, foreGroundColor, BorderStyle.Double);

            foreGroundColor = new XSSFColor(new byte[] { 63, 81, 181 });
            IDataFormat format = _wb.CreateDataFormat();
            _excelStyle["leave"] = GetCellCommonStyle(leaveFont, workDayBorderColor, foreGroundColor, BorderStyle.Thin);
            _excelStyle["leave"].DataFormat = format.GetFormat(";;;");

            _excelStyle["leave"].FillPattern = FillPattern.BigSpots;
        }

        private XSSFCellStyle GetCellCommonStyle(IFont font, XSSFColor color, XSSFColor foregroundColor, BorderStyle borderRight)
        {
            XSSFCellStyle style = _wb.CreateCellStyle() as XSSFCellStyle;
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

        private IFont Getfont(int size, XSSFColor color)
        {
            XSSFFont titleFont = _wb.CreateFont() as XSSFFont;
            titleFont.FontHeight = size;
            titleFont.SetColor(color);
            titleFont.IsBold = true;
            return titleFont;
        }
    }
}
