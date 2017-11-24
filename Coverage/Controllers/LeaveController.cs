using System;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Net.Mime;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;

using Seac.Coverage.Attributes;
using Seac.Coverage.Services;
using Seac.Coverage.Dto;
using Seac.Coverage.Enum;

using static Seac.Coverage.Utils.GeneralConstants;

namespace Seac.Coverage.Controllers
{
    [Route("leave")]
    public class LeaveController : BaseController
    {
        private readonly ILeaveService _leaveService;
        private readonly ICoverageService _coverageService;
        private readonly IMailService _mailService;

        public LeaveController(ILeaveService leaveService, ICoverageService coverageService, IMailService mailService)
        {
            _leaveService = leaveService;
            _coverageService = coverageService;
            _mailService = mailService;
        }

        [HttpGet("employe/{from}/{to}")]
        public IEnumerable<LeaveDto> GetLeavesByEmploye(string from, string to, string employeId) => _leaveService.GetLeavesByEmploye(GetDateParam(from), GetDateParam(to), GetEmployeId(employeId));

        [HttpGet("state/{state}")]
        public IEnumerable<LeaveDto> GetLeavesByEmploye(LeaveState state) => _leaveService.GetLeavesByState(state);

        [HttpGet("plan/{year}")]
        public IEnumerable<LeaveDto> GetYearLeaves(int year) => _leaveService.GetYearLeaves(year);

        [HttpPost("employe/plan")]
        public UpdatePlanResponse UpdateLeavesPlan([FromBody] LeavesPlanUpdate leaves, string employeId, NotificationType notificationType, bool force = false)
        {
            var loggedEmploye = GetLoggedEmploye();
            var targetEmployeId = GetEmployeId(employeId);

            var response = _leaveService.UpdateLeavesPlan(_coverageService, leaves, targetEmployeId, loggedEmploye, force);

            _mailService.SendNotification(notificationType, loggedEmploye, targetEmployeId, response, GetServerUrl());

            return response;
        }

        [HttpGet("plan/export/{year}")]
        [DeleteFile]
        public FileResult ExportLeavesPlan(int year)
        {
            Response.Headers.Append(HeaderNames.ContentType, AttachmentFileName);
            return PhysicalFile(_leaveService.ExportLeavesPlan(year), MediaTypeNames.Application.Octet);
        }

        private string GetServerUrl() => string.Format("{0}://{1}", Request.Scheme, Request.Host);

        private long GetEmployeId(string employeId) => employeId != null ? Convert.ToInt64(employeId) : GetLoggedEmploye().Id;
    }
}
