using System.Collections.Generic;

namespace Seac.Coverage.Dto
{
    public class AreaCoverageGaps
    {
        public string Area { get; set; }
        public bool SingleEmploye { get; set; }
        public List<EmployeBaseDto> Employes { get; set; } = new List<EmployeBaseDto>();
        public List<DayCoverageGaps> Gaps { get; set; } = new List<DayCoverageGaps>();

        public AreaCoverageGaps(string area, IList<EmployeBaseDto> employes, bool singleEmploye)
        {
            Area = area;
            SingleEmploye = singleEmploye;
            Employes = employes as List<EmployeBaseDto>;
        }

    }
}