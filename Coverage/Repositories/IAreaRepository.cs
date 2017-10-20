using System.Collections.Generic;

using Seac.Coverage.Models;
using Seac.Coverage.Repositories.Base;

namespace Seac.Coverage.Repositories
{
    public interface IAreaRepository : IRepository<Area>
    {
        Area GetWithEmploye(long id);
        IEnumerable<Area> GetAllWithEmploye();
        IEnumerable<Area> FindByEmployeId(long employeId);

        long Add(Area entity);

    }
}
