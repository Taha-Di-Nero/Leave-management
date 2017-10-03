using System;
using System.Collections.Generic;

using Seac.Coverage.Dto;

namespace Seac.Coverage.Services
{
    public interface IInflexibilityPeriodsService
    {
        InflexibilityPeriodDto Get(long id);
        IEnumerable<InflexibilityPeriodDto> GetAll();
        IEnumerable<InflexibilityPeriodDto> GetByEmployeAndDates(long employeId, DateTime init, DateTime end);
        void Update(InflexibilityPeriodDto period);
        void Delete(long id);

        IEnumerable<InflexibilityPeriodMotivationDto> GetAllMotivation();
        InflexibilityPeriodMotivationDto AddMotivation(InflexibilityPeriodMotivationDto motivation);
        void DeleteMotivation(long id);
    }
}
