using System;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

using Quartz;
using Seac.Coverage.Mail;
using Seac.Coverage.Models;

using static Seac.Coverage.Utils.ConfigurationKeys;
using static Seac.Coverage.Mail.MailManager;
using Seac.Coverage.Enum;

namespace Seac.Coverage.Quartz
{
    public class NotificationsJob : IJob
    {
        private readonly ILogger<NotificationsJob> _log;
        private readonly IConfiguration _configuration;

        private readonly IJobRepository _jobRepository;

        public NotificationsJob(ILogger<NotificationsJob> log, IJobRepository jobRepository)
        {
            _log = log;
            _configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(ServerConfFileName).Build();
            _jobRepository = jobRepository;
        }

        public Task Execute(IJobExecutionContext context)
        {
            return Execute();
        }

        private async Task Execute()
        {
            try
            {
                var leaves = _jobRepository.GetNotApprovedLeaves();
                if (leaves.Any())
                {
                    var managers = _jobRepository.GetManagers();
                    var param = new ApprovationMailParams(NotificationType.Alert, GetServerUrl(), GetRecipients(managers), GetNotificationMessage(leaves));
                    await SendMail(param);
                }

            }
            catch (Exception ex)
            {
                _log.LogError(1, ex, "An error occurred during execution of notifications job");
            }
        }

        private MailAddress[] GetRecipients(IEnumerable<Employe> recipients)
        {
            return recipients.Select(recipient => new MailAddress(recipient.Email, string.Concat(recipient.Surname, " ", recipient.Name))).ToArray();
        }

        private string GetServerUrl() => string.Format("http://{0}:{1}", _configuration[ServerName], _configuration[ServerHttpPort]);


        private string GetNotificationMessage(IEnumerable<Leave> leaves)
        {
            var msg = "<blockquote>{0}</blockquote>";
            var leavesEmployes = leaves.Select(l => string.Concat(l.Employe.Surname, " ", l.Employe.Name)).Distinct().ToList();
            leavesEmployes.Sort();
            var employeList = string.Join(",<br>", leavesEmployes);
            return string.Format(msg, employeList);
        }
    }
}
