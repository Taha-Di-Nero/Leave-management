using Seac.Coverage.Models;
using Seac.Coverage.Models.Context;
using Seac.Coverage.Repositories.Base;

namespace Seac.Coverage.Repositories
{
    public class InflexibilityPeriodMotivationRepository : BaseRepository<InflexibilityPeriodMotivation>, IInflexibilityPeriodMotivationRepository
    {
        public InflexibilityPeriodMotivationRepository(DomainContext context) : base(context)
        {
        }

        public long Add(InflexibilityPeriodMotivation entity)
        {
            Insert(entity);
            return entity.Id;
        }
    }
}
