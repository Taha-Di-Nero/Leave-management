using System;
using System.Collections.Generic;

using Seac.Coverage.Models;
using Seac.Coverage.Repositories.Base;

namespace Seac.Coverage.Repositories
{
    public interface IInflexibilityPeriodRepository : IRepository<InflexibilityPeriod>
    {
        InflexibilityPeriod GetWithEmploye(long id);
        IEnumerable<InflexibilityPeriod> GetAllWithEmploye();
        IEnumerable<InflexibilityPeriod> GetByEmployeAndDates(long employeId, DateTime init, DateTime end);
    }
}
