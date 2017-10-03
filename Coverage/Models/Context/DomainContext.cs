using Microsoft.EntityFrameworkCore;

namespace Seac.Coverage.Models.Context
{
    public class DomainContext : DbContext
    {
        public DomainContext(DbContextOptions<DomainContext> options) : base(options)
        {
        }

        public DbSet<Area> Areas { get; set; }
        public DbSet<Employe> Employes { get; set; }
        public DbSet<Leave> Leaves { get; set; }

        public DbSet<HolidayShutdown> HolidayShutdown { get; set; }
        public DbSet<InflexibilityPeriod> InflexibilityPeriod { get; set; }
        public DbSet<InflexibilityPeriodMotivation> InflexibilityPeriodMotivation { get; set; }

        public DbSet<EmployeArea> EmployeArea { get; set; }
        public DbSet<EmployeInflexibilityPeriod> EmployeInflexibilityPeriod { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeArea>()
                .HasOne(ea => ea.Area)
                .WithMany(a => a.EmployeArea);
            modelBuilder.Entity<EmployeArea>()
                .HasOne(ea => ea.Employe)
                .WithMany(e => e.EmployeArea);

            modelBuilder.Entity<EmployeInflexibilityPeriod>()
                .HasOne(ei => ei.InflexibilityPeriod)
                .WithMany(i => i.EmployeInflexibilityPeriod);
            modelBuilder.Entity<EmployeInflexibilityPeriod>()
                .HasOne(ei => ei.Employe)
                .WithMany(e => e.EmployeInflexibilityPeriod);
        }
    }
}
