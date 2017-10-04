using System;
using System.ComponentModel.DataAnnotations.Schema;

using Seac.Coverage.Enum;

namespace Seac.Coverage.Models
{
    [Table("leave")]
    public class Leave : BaseEntity
    {
        public Leave()
        {
            MFrom = new TimeSpan(8, 30, 0);
            MTo = new TimeSpan(12, 30, 0);
            AFrom = new TimeSpan(14, 0, 0);
            ATo = new TimeSpan(18, 0, 0);
        }

        [Column("date")]
        public DateTime Date { get; set; }

        [Column("m_from")]
        public TimeSpan MFrom { get; set; }

        [Column("m_to")]
        public TimeSpan MTo { get; set; }

        [Column("a_from")]
        public TimeSpan AFrom { get; set; }

        [Column("a_to")]
        public TimeSpan ATo { get; set; }

        public LeaveState State { get; set; }

        [ForeignKey("employe_id")]
        public Employe Employe { get; set; }
    }
}