using System.Net.Mail;

using Seac.Coverage.Dto;
using Seac.Coverage.Enum;
using Seac.Coverage.Mail;

using static Seac.Coverage.Mail.MailManager;
using static Seac.Coverage.Utils.Utils;

namespace Seac.Coverage.Services
{
    public class MailService : IMailService
    {
        private readonly IEmployeService _employeService;

        public MailService(IEmployeService employeService) {
            _employeService = employeService;
        }

        public void SendNotification(NotificationType notificationType, EmployeDto loggedEmploye, long targetEmployeId, UpdatePlanResponse response, string serverLink)
        {
            var targetEmploye = _employeService.GetWithArea(targetEmployeId);
            if (SendNotification(notificationType, loggedEmploye, targetEmploye, response))
            {
                var param = new ApprovationMailParams(notificationType, serverLink, new MailAddress[] { GetRecipients(targetEmploye) }, GetNotificationMessage(response), GetSender(loggedEmploye));
                SendMail(param).ConfigureAwait(false);
            }
        }

        private bool SendNotification(NotificationType notificationType, EmployeDto loggedEmploye, EmployeDto targetEmploye, UpdatePlanResponse response)
        {
            bool send = notificationType == NotificationType.Approved || notificationType == NotificationType.Rejected;
            send &= (response.RemovedDates.Length > 0 || response.SavedDates.Length > 0);
            send &= loggedEmploye.Profile == EmployeProfile.Manager && loggedEmploye.Id != targetEmploye.Id;
            return send;
        }

        private string GetNotificationMessage(UpdatePlanResponse response)
        {
            var msg = "Le date:<blockquote>{0}</blockquote>sono state {1}.";
            var days = ConcatDays(response.SavedDates.Length > 0 ? response.SavedDates : response.RemovedDates);

            var intervals = string.Join(",<br>", days);
            return string.Format(msg, intervals, response.SavedDates.Length > 0 ? "aggiunte" : "rimosse");
        }

        private MailAddress GetSender(EmployeDto sender) => new MailAddress(sender.Email, string.Concat(sender.Surname, " ", sender.Name));

        private MailAddress GetRecipients(EmployeDto recipient) => new MailAddress(recipient.Email, string.Concat(recipient.Surname, " ", recipient.Name));
    }
}
