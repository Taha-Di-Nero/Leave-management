using System;

using Quartz;

namespace Seac.Coverage.Quartz
{
    public static class QuartzServicesUtilities
    {
        public static void StartJob<TJob>(IScheduler scheduler) where TJob : IJob
        {
            var jobName = typeof(TJob).FullName;

            var job = JobBuilder.Create<TJob>().WithIdentity(jobName).Build();

            var trigger = TriggerBuilder.Create().WithIdentity(jobName + "trigger").WithSchedule(CronScheduleBuilder.WeeklyOnDayAndHourAndMinute(DayOfWeek.Sunday, 0, 0)).ForJob(jobName).Build();

            scheduler.ScheduleJob(job, trigger);
        }
    }
}
