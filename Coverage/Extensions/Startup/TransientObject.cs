using Microsoft.Extensions.DependencyInjection;

using Seac.Coverage.Quartz;
using Seac.Coverage.Repositories;
using Seac.Coverage.Services;

namespace Seac.Coverage.Extensions.Startup
{
    public static class TransientObject
    {
        public static void AddTransient(this IServiceCollection services)
        {
            services.AddTransient<IAreaRepository, AreaRepository>();
            services.AddTransient<IEmployeRepository, EmployeRepository>();
            services.AddTransient<ILeaveRepository, LeaveRepository>();
            services.AddTransient<IHolidayShutdownRepository, HolidayShutdownRepository>();
            services.AddTransient<IInflexibilityPeriodRepository, InflexibilityPeriodRepository>();
            services.AddTransient<IInflexibilityPeriodMotivationRepository, InflexibilityPeriodMotivationRepository>();

            services.AddTransient<IJobRepository, JobRepository>();

            services.AddTransient<IAreaService, AreaService>();
            services.AddTransient<ICoverageService, CoverageService>();
            services.AddTransient<ILeaveService, LeaveService>();
            services.AddTransient<IEmployeService, EmployeService>();
            services.AddTransient<IHolidayShutdownsService, HolidayShutdownsService>();
            services.AddTransient<IInflexibilityPeriodsService, InflexibilityPeriodsService>();
            services.AddTransient<IMailService, MailService>();
        }
    }
}

