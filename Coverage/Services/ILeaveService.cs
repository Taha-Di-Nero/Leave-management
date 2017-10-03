using System;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;

using Seac.Coverage.Models;
using Seac.Coverage.Dto;

namespace Seac.Coverage.Services
{
    public interface ILeaveService
    {
        IEnumerable<LeaveDto> GetLeavesByEmploye(DateTime from, DateTime to, long employeId);

        IEnumerable<LeaveDto> GetYearLeaves(int year);

        UpdatePlanResponse UpdateLeavesPlan(ICoverageService coverageService, LeavesPlanUpdate leaves, long employeId);

        IEnumerable<LeaveDto> GetLeavesRange(DateTime yearInit, DateTime yearEnd);

    }
}
