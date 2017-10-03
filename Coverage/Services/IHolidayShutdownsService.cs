using System.Collections.Generic;

using Seac.Coverage.Models;

namespace Seac.Coverage.Services
{
    public interface IHolidayShutdownsService
    {
        HolidayShutdown Get(long id);
        IEnumerable<HolidayShutdown> GetAll();
        void Update(HolidayShutdown period);
        void Delete(HolidayShutdown period);
    }
}
