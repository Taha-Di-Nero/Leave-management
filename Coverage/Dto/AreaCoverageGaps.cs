using System.Collections.Generic;

namespace Seac.Coverage.Dto
{
    public class AreaCoverageGaps
    {
        public string Area { get; set; }
        public bool SingleEmploye { get; set; }
        public List<EmployeBaseDto> Employes { get; }
        public List<DayCoverageGaps> Gaps { get; } = new List<DayCoverageGaps>();

        public AreaCoverageGaps(string area, IList<EmployeBaseDto> employes, bool singleEmploye)
        {
            Area = area;
            SingleEmploye = singleEmploye;
            Employes = employes as List<EmployeBaseDto>;
        }

    }
}