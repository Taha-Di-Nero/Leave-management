using System.Collections.Generic;

using Seac.Coverage.Models;
using Seac.Coverage.Repositories.Base;

namespace Seac.Coverage.Repositories
{
    public interface IEmployeRepository : IRepository<Employe>
    {
        void Update(Employe entity, List<EmployeArea> removedAreas);
        Employe GetWithArea(long id);
        IEnumerable<Employe> GetAllWithArea();
        IEnumerable<Employe> GetAllWithAreaNotNull();
        IEnumerable<Employe> GetAllWithAreaNull();
        Employe FindByFullName(string fullName);
        IEnumerable<Employe> GetManagers();
    }
}
