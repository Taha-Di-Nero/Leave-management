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
            Profile = employe.Profile;
            State = employe.State;
        }

        public EmployeDto(Employe employe, EmployeState state)
        {
            Id = employe.Id;
            Name = employe.Name;
            Surname = employe.Surname;
            Profile = employe.Profile;
            State = state;
        }

        public override bool Equals(object obj)
        {
            if (obj == null || !(obj is EmployeBaseDto) || !(obj is EmployeBaseDto))
            {
                return false;
            }
            if (base.Equals(obj))
            {
                return true;
            }
            EmployeBaseDto other = (EmployeBaseDto)obj;
            if (Id != other.Id)
                return false;
            if (Name == null)
            {
                if (other.Name != null)
                    return false;
            }
            else if (Name != other.Name)
                return false;
            if (Surname == null)
            {
                if (other.Surname != null)
                    return false;
            }
            else if (Surname != other.Surname)
                return false;
            return true;
        }

        public override int GetHashCode()
        {
            const int prime = 31;
            int result = 1;
            result = prime * result + ((Id <= 0) ? 0 : Id.GetHashCode());
            result = prime * result + ((Name == null) ? 0 : Name.GetHashCode());
            result = prime * result + ((Surname == null) ? 0 : Surname.GetHashCode());
            return result;
        }
    }
}