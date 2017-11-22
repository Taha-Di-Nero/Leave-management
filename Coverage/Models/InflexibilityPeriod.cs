using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Seac.Coverage.Models
{
    [Table("inflexibility_periods")]
    public class InflexibilityPeriod : BaseEntity
    {
        [Column("from")]
        public DateTime From { get; set; }

        [Column("to")]
        public DateTime To { get; set; }

        [ForeignKey("inflexibility_periods_motivation_id")]
        public InflexibilityPeriodMotivation InflexibilityPeriodMotivation { get; set; }

        public List<EmployeInflexibilityPeriod> EmployeInflexibilityPeriod { get; set; }

    }
}
