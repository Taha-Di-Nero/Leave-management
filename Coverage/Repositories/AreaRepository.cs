using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

using Seac.Coverage.Models;
using Seac.Coverage.Models.Context;
using Seac.Coverage.Repositories.Base;

namespace Seac.Coverage.Repositories
{
    public class AreaRepository : BaseRepository<Area>, IAreaRepository
    {
        public AreaRepository(DomainContext context) : base(context)
        {
        }

        public Area GetWithEmploye(long id) => Context.Set<Area>().Include(a => a.EmployeArea).ThenInclude(ea => ea.Employe).Where(a => a.Id == id).SingleOrDefault();

        public IEnumerable<Area> GetAllWithEmploye() => Context.Set<Area>().Include(a => a.EmployeArea).ThenInclude(ea => ea.Employe).ToList();


        public IEnumerable<Area> FindByEmployeId(long employeId)
        {
            var areas = Context.Set<Area>().Where(a => a.EmployeArea.Any(ea => ea.Employe.Id == employeId)).ToList();
            areas.ForEach(area => Context.Entry(area).Collection(a => a.EmployeArea).Load());
            areas.ForEach(area => area.EmployeArea.ToList().ForEach(ea => Context.Entry(ea).Reference(e => e.Employe).Load()));
            return areas;
        }

        public long Add(Area entity)
        {
            Insert(entity);
            return entity.Id;
        }


    }
}
