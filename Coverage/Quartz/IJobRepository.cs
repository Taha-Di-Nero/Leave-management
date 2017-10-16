using System.Collections.Generic;

using Seac.Coverage.Models;

namespace Seac.Coverage.Quartz
{
    public interface IJobRepository
    {
        IEnumerable<Leave> GetNotApprovedLeaves();

        IEnumerable<Employe> GetManagers();
    }
}