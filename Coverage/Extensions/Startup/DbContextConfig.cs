﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using Seac.Coverage.Models.Context;
using Seac.Coverage.Quartz;

using static Seac.Coverage.Utils.ConfigurationKeys;

namespace Seac.Coverage.Extensions.Startup
{
    public static class DbContextConfig
    {
        public static void AddMySqlDbContext(this IServiceCollection services, IConfiguration Configuration)
        {
            services.AddDbContext<DomainContext>(opt => opt.UseMySql(Configuration[AppConnectionString]));
            services.AddDbContext<JobDomainContext>(opt => opt.UseMySql(Configuration[QuartzConnectionString]), ServiceLifetime.Transient, optionsLifetime: ServiceLifetime.Transient);
        }
    }
}
