using System.Net.Mail;

using Seac.Coverage.Enum;

namespace Seac.Coverage.Mail
{
    public class ApprovationMailParams
    {
		public NotificationType Type { get; set; }
		public MailAddress Sender { get; set; }
		public MailAddress[] Recipients { get; set; }
        public string ServerUrl { get; set; }		
        public string Message { get; set; }

        public ApprovationMailParams(NotificationType type, string serverUrl, MailAddress[] recipients, MailAddress sender = null, string message = "") {
            Type = type;
            Sender = sender;
            Recipients = recipients;
            ServerUrl = serverUrl;
            Message = message;
        }
    }
}