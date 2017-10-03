using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Seac.Coverage.Models
{
    [Table("holiday_shutdowns")]
    public class HolidayShutdown : BaseEntity
    {
        public HolidayShutdown()
        {
        }

        [Column("from")]
        public DateTime From { get; set; }

        [Column("to")]
        public DateTime To { get; set; }

    }
}
