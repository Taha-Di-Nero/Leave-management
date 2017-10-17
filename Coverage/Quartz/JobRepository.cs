using System.Linq;
using System.Collections.Generic;

using Microsoft.EntityFrameworkCore;

using Seac.Coverage.Models;
using Seac.Coverage.Enum;

namespace Seac.Coverage.Quartz
{
    public class JobRepository : IJobRepository
    {
        public JobDomainContext Context { get; set; }

        public JobRepository(JobDomainContext context)
        {
            Context = context;
        }

        public IEnumerable<Leave> GetNotApprovedLeaves() => Context.Set<Leave>().AsNoTracking().Include(l => l.Employe.EmployeArea).ThenInclude(ea => ea.Employe).Where(l => l.State != LeaveState.Approved).OrderBy(l => l.Date).ToList();

        public IEnumerable<Employe> GetManagers() => Context.Set<Employe>().AsNoTracking().Where(e => e.Profile == EmployeProfile.Manager).ToList();
    }
}
