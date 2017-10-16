using Microsoft.EntityFrameworkCore;

using Seac.Coverage.Models;

namespace Seac.Coverage.Quartz
{
    public class JobDomainContext : DbContext
    {
        public JobDomainContext(DbContextOptions<JobDomainContext> options) : base(options)
        {
        }
        public DbSet<Employe> Employes { get; set; }
        public DbSet<Leave> Leaves { get; set; }
    }
}
