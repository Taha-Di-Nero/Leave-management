using System.Collections.Generic;

using Seac.Coverage.Models;
using Seac.Coverage.Enum;

namespace Seac.Coverage.Dto
{
    public class EmployeDto : EmployeBaseDto
    {

        public IList<IList<EmployeBaseDto>> Groups { get; set; } = new List<IList<EmployeBaseDto>>();
        public IList<AreaBaseDto> AreaList { get; set; } = new List<AreaBaseDto>();

        public EmployeDto() { }

        public EmployeDto(EmployeBaseDto employe)
        {
            Id = employe.Id;
            Name = employe.Name;
            Surname = employe.Surname;
            Email = employe.Email;
            Profile = employe.Profile;
            State = employe.State;
        }

        public EmployeDto(Employe employe, EmployeState state) : base(employe)
        {
            State = state;
        }
    }
}