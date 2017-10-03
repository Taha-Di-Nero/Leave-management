using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Seac.Coverage.Models
{
    [Table("area")]
    public class Area : BaseEntity
    {
        public string Description { get; set; }
        public IEnumerable<EmployeArea> EmployeArea { get; set; }
    }
}