using System.IO;
using System.Net.Mail;
using System.Threading.Tasks;

using MimeKit;

using Seac.Coverage.Enum;

namespace Seac.Coverage.Mail
{
    public static class MailManager
    {
        private static string _headerImagePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot", "assets", "images", "email-title.png");
        private static string _approvedBodyImagePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot", "assets", "images", "barcamaldive.png");
        private static string _rejectedBodyImagePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot", "assets", "images", "barcamaldive-rejected.png");
        private static string _headerImageId = "header";
        private static string _bodyImageId = "body";

        private static string _notifySubject = "Ci sono modifiche del piano ferie da approvare.";
        private static string _approvedRejectedSubject = "Piano ferie";

        private static string _notifyEmail = "piani.ferie@seac.it";

        public static async Task SendMail(ApprovationMailParams param)
        {
            param.Sender = CheckSenderMail(param.Sender);

            SmtpClient client = new SmtpClient("servizi");

            MailMessage mailMessage = new MailMessage();
            SetFromTo(mailMessage, param.Sender, param.Recipients);
            mailMessage.Body = BuildBody(param.Type, param.Sender, param.Recipients, param.ServerUrl, param.Message);
            mailMessage.Subject = GetSubject(param.Type);
            mailMessage.Attachments.Add(GetAttachment(_headerImagePath, _headerImageId));
            mailMessage.Attachments.Add(GetAttachment(GetBodyImagePath(param.Type), _bodyImageId));
            mailMessage.IsBodyHtml = true;

            await client.SendMailAsync(mailMessage);
        }

        private static string BuildBody(NotificationType type, MailAddress sender, MailAddress[] recipients, string serverUrl, string msg)
        {
            var builder = new BodyBuilder();
            using (StreamReader SourceReader = File.OpenText(GetBodyPath(type)))
            {
                builder.HtmlBody = SourceReader.ReadToEnd();
            }

            var body = "";
            if (type == NotificationType.Alert)
            {
                body = string.Format(builder.HtmlBody, _headerImageId, _bodyImageId, msg, serverUrl);
            }
            else
            {
                body = string.Format(builder.HtmlBody, _headerImageId, _bodyImageId, recipients[0].DisplayName, msg, sender.DisplayName, serverUrl);
            }
            return body;
        }

        private static Attachment GetAttachment(string attachmentPath, string contentId)
        {
            Attachment attachment = new Attachment(attachmentPath);
            attachment.ContentId = contentId;
            attachment.ContentDisposition.Inline = true;
            return attachment;
        }

        private static string GetBodyPath(NotificationType type)
        {
            var path = "";
            switch (type)
            {
                case NotificationType.Alert:
                    path = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot", "templates", "avviso-email.html");
                    break;
                case NotificationType.Approved:
                    path = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot", "templates", "approvation-email.html");
                    break;
                case NotificationType.Rejected:
                    path = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot", "templates", "reject-email.html");
                    break;
            }
            return path;
        }

        private static string GetBodyImagePath(NotificationType type) => type == NotificationType.Rejected ? _rejectedBodyImagePath : _approvedBodyImagePath;

        private static string GetSubject(NotificationType type)
        {
            return type == NotificationType.Alert ? _notifySubject : _approvedRejectedSubject;
        }

        private static MailAddress CheckSenderMail(MailAddress sender)
        {
            if (sender == null)
            {
                sender = new MailAddress(_notifyEmail);

            }
            return sender;
        }

        private static void SetFromTo(MailMessage mailMessage, MailAddress sender, MailAddress[] recipients)
        {
            mailMessage.From = sender;

            foreach (MailAddress recipient in recipients)
            {
                mailMessage.To.Add(recipient);
            }
        }
    }
}
