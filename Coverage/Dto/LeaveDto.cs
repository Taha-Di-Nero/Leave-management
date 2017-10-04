using System;

using Seac.Coverage.Enum;

namespace Seac.Coverage.Dto
{
    public class LeaveDto
    {
        public long Id { get; set; }

        public DateTime Date { get; set; }

        public TimeSpan MFrom { get; set; }

        public TimeSpan MTo { get; set; }

        public TimeSpan AFrom { get; set; }

        public TimeSpan ATo { get; set; }

        public LeaveState State { get; set; }

        public EmployeDto Employe { get; set; }

    }
}