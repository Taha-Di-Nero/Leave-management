using System.Collections.Generic;

namespace Seac.Coverage.Dto
{
    public class AreaDto : AreaBaseDto
    {
        public IList<EmployeBaseDto> EmployeList { get; set; } = new List<EmployeBaseDto>();
    }
}