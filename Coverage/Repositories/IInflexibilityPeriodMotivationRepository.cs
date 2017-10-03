using Seac.Coverage.Models;
using Seac.Coverage.Repositories.Base;

namespace Seac.Coverage.Repositories
{
    public interface IInflexibilityPeriodMotivationRepository : IRepository<InflexibilityPeriodMotivation>
    {
        long Add(InflexibilityPeriodMotivation entity);
    }
}
