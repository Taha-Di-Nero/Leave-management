using Microsoft.Extensions.DependencyInjection;

using Seac.Coverage.Quartz;
using Seac.Coverage.Repositories;

namespace Seac.Coverage.Extensions.Startup
{
    public static class RepositoriesConfig
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddTransient<IAreaRepository, AreaRepository>();
            services.AddTransient<IEmployeRepository, EmployeRepository>();
            services.AddTransient<ILeaveRepository, LeaveRepository>();
            services.AddTransient<IHolidayShutdownRepository, HolidayShutdownRepository>();
            services.AddTransient<IInflexibilityPeriodRepository, InflexibilityPeriodRepository>();
            services.AddTransient<IInflexibilityPeriodMotivationRepository, InflexibilityPeriodMotivationRepository>();

            services.AddTransient<IJobRepository, JobRepository>();
        }
    }
}

