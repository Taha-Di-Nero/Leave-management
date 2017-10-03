using System.ComponentModel.DataAnnotations.Schema;

namespace Seac.Coverage.Models
{
    [Table("inflexibility_periods_employe")]
    public class EmployeInflexibilityPeriod : BaseEntity
    {
        public EmployeInflexibilityPeriod()
        {
        }

        public EmployeInflexibilityPeriod(Employe employe, InflexibilityPeriod inflexibilityPeriod)
        {
            this.Employe = employe;
            this.InflexibilityPeriod = inflexibilityPeriod;
        }

        [ForeignKey("employe_id")]
        public Employe Employe { get; set; }

        [ForeignKey("inflexibility_periods_id")]
        public InflexibilityPeriod InflexibilityPeriod { get; set; }
    }
}