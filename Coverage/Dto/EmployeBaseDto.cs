using Seac.Coverage.Enum;
using Seac.Coverage.Models;

namespace Seac.Coverage.Dto
{
    public class EmployeBaseDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public EmployeProfile Profile { get; set; }
        public EmployeState State { get; set; } = EmployeState.Indifferent;

        public EmployeBaseDto() { }

        public EmployeBaseDto(Employe employe)
        {
            Id = employe.Id;
            Name = employe.Name;
            Surname = employe.Surname;
            Profile = employe.Profile;
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