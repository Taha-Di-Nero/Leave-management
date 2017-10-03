using Seac.Coverage.Models;

namespace Seac.Coverage.Dto
{
    public class AreaBaseDto
    {
        public long Id { get; set; }
        public string Description { get; set; }

        public AreaBaseDto() { }

        public AreaBaseDto(Area a)
        {
            Id = a.Id;
            Description = a.Description;
        }
    }
}