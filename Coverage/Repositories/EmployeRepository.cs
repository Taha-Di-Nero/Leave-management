using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

using Seac.Coverage.Models;
using Seac.Coverage.Models.Context;
using Seac.Coverage.Repositories.Base;

namespace Seac.Coverage.Repositories
{
    public class EmployeRepository : BaseRepository<Employe>, IEmployeRepository
    {
        public EmployeRepository(DomainContext context) : base(context)
        {
        }

        public Employe GetWithArea(long id)
        {
            return Context.Set<Employe>().Include(e => e.EmployeArea).ThenInclude(ea => ea.Area).Where(e => e.Id == id).SingleOrDefault();
        }

        public IEnumerable<Employe> GetAllWithArea()
        {
            return Context.Set<Employe>().Include(e => e.EmployeArea).ThenInclude(ea => ea.Area).ToList();
        }

        public IEnumerable<Employe> GetAllWithAreaNotNull()
        {
            return Context.Set<Employe>().Where(e => e.EmployeArea.Count > 0).Include(e => e.EmployeArea).ThenInclude(ea => ea.Area).ToList();
        }

        public IEnumerable<Employe> GetAllWithAreaNull()
        {
            return Context.Set<Employe>().Where(e => e.EmployeArea.Count <= 0).OrderBy(e => e.Surname).ToList();
        }

        public Employe FindByFullName(string fullName)
        {
            return Context.Set<Employe>().Where(e => (e.Surname + " " + e.Name) == fullName).Include(e => e.EmployeArea).ThenInclude(ea => ea.Area).SingleOrDefault();
        }
    }
}
