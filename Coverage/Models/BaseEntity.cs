using System.ComponentModel.DataAnnotations;

namespace Seac.Coverage.Models
{
    public abstract class BaseEntity
    {
        [Key]
        public long Id { get; set; }
    }
}
