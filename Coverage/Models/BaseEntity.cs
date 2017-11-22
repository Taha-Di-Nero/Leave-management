using System.ComponentModel.DataAnnotations;

namespace Seac.Coverage.Models
{
    public class BaseEntity
    {
        [Key]
        public long Id { get; set; }
    }
}
