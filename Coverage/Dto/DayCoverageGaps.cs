using System.Collections.Generic;

namespace Seac.Coverage.Dto
{
    public class DayCoverageGaps
    {
        public string Date { get; set; }
        public List<CoverageGap> DayGaps { get; set; } = new List<CoverageGap>();

        public DayCoverageGaps(string date)
        {
            Date = date;
        }
    }
}