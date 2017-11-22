using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

using Seac.Coverage.Models;
using Seac.Coverage.Models.Context;
using Seac.Coverage.Repositories.Base;

namespace Seac.Coverage.Repositories
{
    public class InflexibilityPeriodRepository : BaseRepository<InflexibilityPeriod>, IInflexibilityPeriodRepository
    {
        public InflexibilityPeriodRepository(DomainContext context) : base(context)
        {
        }

        public InflexibilityPeriod GetWithEmploye(long id) => Context.Set<InflexibilityPeriod>().Include(i => i.InflexibilityPeriodMotivation)
                                                                            .Include(i => i.EmployeInflexibilityPeriod).ThenInclude(ei => ei.Employe).Where(i => i.Id == id).SingleOrDefault();
        public IEnumerable<InflexibilityPeriod> GetAllWithEmploye() => Context.Set<InflexibilityPeriod>().Include(i => i.InflexibilityPeriodMotivation)
                                                                            .Include(i => i.EmployeInflexibilityPeriod).ThenInclude(ei => ei.Employe).ToList();
        public IEnumerable<InflexibilityPeriod> GetByEmployeAndDates(long employeId, DateTime init, DateTime end) => Context.Set<InflexibilityPeriod>()
                                                                        .Where(ip => ip.EmployeInflexibilityPeriod.Any(ei => ei.Employe.Id == employeId) && init <= ip.To && ip.From <= end).ToList();
    }
}
