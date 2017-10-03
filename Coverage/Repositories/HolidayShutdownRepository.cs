using Seac.Coverage.Models;
using Seac.Coverage.Models.Context;
using Seac.Coverage.Repositories.Base;

namespace Seac.Coverage.Repositories
{
    public class HolidayShutdownRepository : BaseRepository<HolidayShutdown>, IHolidayShutdownRepository
    {
        public HolidayShutdownRepository(DomainContext context) : base(context)
        {
        }
    }
}
