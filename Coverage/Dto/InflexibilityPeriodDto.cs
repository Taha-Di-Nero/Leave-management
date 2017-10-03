using System;
using System.Collections.Generic;

using Seac.Coverage.Dto;

namespace Seac.Coverage.Dto
{
    public class InflexibilityPeriodDto
    {
		public long Id { get; set; }
		
        public DateTime From { get; set; }

        public DateTime To { get; set; }

        public InflexibilityPeriodMotivationDto InflexibilityPeriodMotivation { get; set; }

        public IList<EmployeDto> Employes { get; set; }

    }
}
