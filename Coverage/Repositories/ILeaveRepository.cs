using Seac.Coverage.Enum;
using Seac.Coverage.Models;
using Seac.Coverage.Repositories.Base;
using System;
using System.Collections.Generic;

namespace Seac.Coverage.Repositories
{
    public interface ILeaveRepository : IRepository<Leave>
    {
        IEnumerable<Leave> GetLeavesRange(DateTime init, DateTime end);

        IEnumerable<Leave> GetLeavesRangeByEmploye(long id, DateTime init, DateTime end);

        IEnumerable<Leave> GetLeavesBySate(LeaveState state);

        IEnumerable<Leave> GetNotApprovedLeaves();
    }
}
