using System.Collections.Generic;

using Seac.Coverage.Models;
using Seac.Coverage.Repositories;

namespace Seac.Coverage.Services
{
    public class HolidayShutdownsService : IHolidayShutdownsService
    {
        private readonly IHolidayShutdownRepository _holidayShutdownsRepository;

        public HolidayShutdownsService(IHolidayShutdownRepository holidayShutdownsRepository)
        {
            _holidayShutdownsRepository = holidayShutdownsRepository;
        }

        public HolidayShutdown Get(long id) => _holidayShutdownsRepository.Get(id);

        public IEnumerable<HolidayShutdown> GetAll() => _holidayShutdownsRepository.GetAll();

        public void Update(HolidayShutdown period) => _holidayShutdownsRepository.Update(period);

        public void Delete(HolidayShutdown period) => _holidayShutdownsRepository.Delete(period);
    }
}
