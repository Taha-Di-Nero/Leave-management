using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;


using Quartz;
using Quartz.Spi;
using Quartz.Impl;

using Seac.Coverage.Quartz;

namespace Seac.Coverage.Extensions.Startup
{
    public static class QuartzExtension
    {
        public static void AddQuartz(this IServiceCollection services, params Type[] jobs)
        {
            services.AddSingleton<IJobFactory, QuartzJobFactory>();
            services.Add(jobs.Select(jobType => new ServiceDescriptor(jobType, jobType, ServiceLifetime.Singleton)));

            services.AddSingleton(provider =>
            {
                var schedulerFactory = new StdSchedulerFactory();
                var scheduler = schedulerFactory.GetScheduler().Result;
                scheduler.JobFactory = provider.GetService<IJobFactory>();
                scheduler.Start();
                return scheduler;
            });
        }

        public static void StartQuartz(this IApplicationBuilder app)
        {
            QuartzServicesUtilities.StartJob<NotificationsJob>(app.ApplicationServices.GetService(typeof(IScheduler)) as IScheduler);
        }
    }

}