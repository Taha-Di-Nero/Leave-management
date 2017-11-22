using System;
using System.Collections.Generic;

using Seac.Coverage.Dto;
using Seac.Coverage.Enum;

namespace Seac.Coverage.Services
{
    public interface ILeaveService
    {
        IEnumerable<LeaveDto> GetLeavesByEmploye(DateTime from, DateTime to, long employeId);

        IEnumerable<LeaveDto> GetLeavesByState(LeaveState state);

        IEnumerable<LeaveDto> GetNotApprovedLeaves();

        IEnumerable<LeaveDto> GetYearLeaves(int year);

        UpdatePlanResponse UpdateLeavesPlan(ICoverageService coverageService, LeavesPlanUpdate leaves, long employeId, EmployeDto loggedOne, bool force);

        IEnumerable<LeaveDto> GetLeavesRange(DateTime yearInit, DateTime yearEnd);

        string ExportLeavesPlan(int year);

    }
}
