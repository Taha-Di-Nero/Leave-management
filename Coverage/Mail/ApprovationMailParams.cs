using System.Net.Mail;

using Seac.Coverage.Enum;

namespace Seac.Coverage.Mail
{
    public class ApprovationMailParams
    {
        public NotificationType Type { get; set; }
        public MailAddress Sender { get; set; }
        public MailAddress[] Recipients { get; set; }
        public string ServerLink { get; set; }
        public string Message { get; set; }

        public ApprovationMailParams(NotificationType type, string serverLink, MailAddress[] recipients, string message = "", MailAddress sender = null)
        {
            Type = type;
            Sender = sender;
            Recipients = recipients;
            ServerLink = serverLink;
            Message = message;
        }
    }
}