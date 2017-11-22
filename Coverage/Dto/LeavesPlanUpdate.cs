using System.Collections.Generic;

namespace Seac.Coverage.Dto
{
    public class LeavesPlanUpdate
    {
        public List<LeaveDto> AddedLeaves { get; set; }

        public List<LeaveDto> RemovedLeaves { get; set; }
    }
}