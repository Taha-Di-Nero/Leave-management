using System;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;

using Seac.Coverage.Export;
using Seac.Coverage.Attributes;
using Seac.Coverage.Services;
using Seac.Coverage.Dto;
using Seac.Coverage.Enum;

using static Seac.Coverage.Utils.GeneralConstants;
using static Seac.Coverage.Mail.MailManager;

namespace Seac.Coverage.Controllers
{
    [Route("leave")]
    public class LeaveController : BaseController
    {
        private readonly ILeaveService _leaveService;
        private readonly ICoverageService _coverageService;
        private readonly IEmployeService _employeService;

        public LeaveController(ILeaveService leaveService, ICoverageService coverageService, IEmployeService employeService)
        {
            _leaveService = leaveService;
            _coverageService = coverageService;
            _employeService = employeService;
        }

        [HttpGet("employe/{from}/{to}")]
        public IEnumerable<LeaveDto> GetLeavesByEmploye(string from, string to, string employeId) => _leaveService.GetLeavesByEmploye(GetDateParam(from), GetDateParam(to), GetEmployeId(employeId));

        [HttpGet("state/{state}")]
        public IEnumerable<LeaveDto> GetLeavesByEmploye(LeaveState state) => _leaveService.GetLeavesByState(state);

        [HttpGet("plan/{year}")]
        public IEnumerable<LeaveDto> GetYearLeaves(int year) => _leaveService.GetYearLeaves(year);

        [HttpPost("employe/plan")]
        public UpdatePlanResponse UpdateLeavesPlan([FromBody] LeavesPlanUpdate leaves, string employeId, NotificationType notificationType)
        {
            var loggedEmploye = GetLoggedEmploye();
            var targetEmploye = _employeService.GetWithArea(GetEmployeId(employeId));

            var response = _leaveService.UpdateLeavesPlan(_coverageService, leaves, targetEmploye.Id, loggedEmploye);
            if (SendNotification(notificationType, loggedEmploye, targetEmploye, response))
            {
                SendMail(notificationType, GetSender(loggedEmploye), new MailAddress[] { GetRecipients(targetEmploye) }, GetServerUrl()).ConfigureAwait(false);
            }

            return response;
        }

        [HttpGet("plan/export/{year}")]
        [DeleteFileAttribute]
        public FileResult ExportLeavesPlan(int year)
        {
            var yearInit = new DateTime(year, 1, 1);
            var yearEnd = new DateTime(year, 12, 31);
            var xlsxFilePath = Path.GetTempFileName();

            var leaves = _leaveService.GetLeavesRange(yearInit, yearEnd);
            leaves = leaves.Where(l => l.State == LeaveState.Approved);
            var employes = _employeService.GetAll();

            var leavesPlanExporter = new LeavesPlanExporter(leaves.ToList(), employes.ToList());
            leavesPlanExporter.Export(new FileStream(xlsxFilePath, FileMode.Create), year);

            Response.Headers.Append(HeaderNames.ContentType, AttachmentFileName);
            return PhysicalFile(xlsxFilePath, MediaTypeNames.Application.Octet);
        }

        private bool SendNotification(NotificationType notificationType, EmployeDto loggedEmploye, EmployeDto targetEmploye, UpdatePlanResponse response)
        {
            bool send = notificationType == NotificationType.Approved || notificationType == NotificationType.Rejected;
            send &= (response.RemovedDates.Length > 0 || response.SavedDates.Length > 0);
            send &= loggedEmploye.Profile == EmployeProfile.Manager && loggedEmploye.Id != targetEmploye.Id;
            return send;
        }

        private MailAddress GetSender(EmployeDto sender) => new MailAddress(sender.Email, string.Concat(sender.Surname, " ", sender.Name));

        private MailAddress GetRecipients(EmployeDto recipient) => new MailAddress(recipient.Email, string.Concat(recipient.Surname, " ", recipient.Name));

        private string GetServerUrl() => string.Format("{0}://{1}", Request.Scheme, Request.Host);

        private long GetEmployeId(string employeId) => employeId != null ? Convert.ToInt64(employeId) : GetLoggedEmploye().Id;
    }
}
