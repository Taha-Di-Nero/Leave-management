using Microsoft.Extensions.DependencyInjection;

using Seac.Coverage.Services;

namespace Seac.Coverage.Extensions.Startup
{
    public static class ServicesConfig
    {
        public static void AddServices(this IServiceCollection services)
        {
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

