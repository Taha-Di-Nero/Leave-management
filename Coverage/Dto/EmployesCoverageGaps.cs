using System.Collections.Generic;

namespace Seac.Coverage.Dto
{
    public class EmployesCoverageGaps
    {
        public string Date { get; set; }
        public int AreaNumber { get; set; }
        public List<EmployeBaseDto> Employes { get; set; } = new List<EmployeBaseDto>();
        public List<AreaDto> Areas { get; set; } = new List<AreaDto>();
        public List<CoverageGap> DayGaps { get; set; } = new List<CoverageGap>();

    }
}