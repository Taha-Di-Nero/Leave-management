using System.ComponentModel.DataAnnotations.Schema;

namespace Seac.Coverage.Models
{
    [Table("area_employe")]
    public class EmployeArea : BaseEntity
    {
        [ForeignKey("employe_id")]
        public Employe Employe { get; set; }

        [ForeignKey("area_id")]
        public Area Area { get; set; }
    }
}