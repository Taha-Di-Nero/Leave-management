using System;
using System.Linq;
using System.Collections.Generic;

using Microsoft.EntityFrameworkCore;

using Seac.Coverage.Models;
using Seac.Coverage.Models.Context;
using Seac.Coverage.Repositories.Base;
using Seac.Coverage.Enum;

namespace Seac.Coverage.Repositories
{
    public class LeaveRepository : BaseRepository<Leave>, ILeaveRepository
    {
        public LeaveRepository(DomainContext context) : base(context)
        {
        }

        public IEnumerable<Leave> GetLeavesRange(DateTime init, DateTime end) =>
            Context.Set<Leave>().AsNoTracking().Include(l => l.Employe.EmployeArea).ThenInclude(ea => ea.Area).Include(l => l.Employe.EmployeArea).ThenInclude(ea => ea.Employe)
            .Where(l => l.Date >= init && l.Date <= end).OrderBy(l => l.Date).ToList();

        public IEnumerable<Leave> GetLeavesRangeByEmploye(long id, DateTime init, DateTime end) =>
           Context.Set<Leave>().AsNoTracking().Include(l => l.Employe.EmployeArea).ThenInclude(ea => ea.Area).Include(l => l.Employe.EmployeArea).ThenInclude(ea => ea.Employe)
            .Where(l => l.Date >= init && l.Date <= end && l.Employe.Id == id).OrderBy(l => l.Date).ToList();

        public IEnumerable<Leave> GetLeavesBySate(LeaveState state) =>
          Context.Set<Leave>().AsNoTracking().Include(l => l.Employe.EmployeArea).ThenInclude(ea => ea.Area).Include(l => l.Employe.EmployeArea).ThenInclude(ea => ea.Employe)
            .Where(l => l.State == state).OrderBy(l => l.Date).ToList();

        public IEnumerable<Leave> GetNotApprovedLeaves() =>
           Context.Set<Leave>().AsNoTracking().Include(l => l.Employe.EmployeArea).ThenInclude(ea => ea.Area).Include(l => l.Employe.EmployeArea).ThenInclude(ea => ea.Employe)
            .Where(l => l.State != LeaveState.Approved).OrderBy(l => l.Date).ToList();

    }
}
