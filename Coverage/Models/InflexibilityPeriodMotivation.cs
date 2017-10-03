using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Seac.Coverage.Models;

namespace Seac.Coverage.Models
{
    [Table("inflexibility_periods_motivation")]
    public class InflexibilityPeriodMotivation : BaseEntity
    {
        public InflexibilityPeriodMotivation()
        {
        }

        [Column("description")]
        public string Description { get; set; }
    }
}