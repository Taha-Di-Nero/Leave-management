using System;
using System.Collections.Generic;

using Seac.Coverage.Dto;

namespace Seac.Coverage.Services
{
    public interface ICoverageService
    {
        IList<AreaCoverageGaps> GetLeavesOverlaps(DateTime from, DateTime to);

        IList<EmployesCoverageGaps> GetLeavesOverlapsByEmploye(DateTime from, DateTime to);

        IList<DateTime> GetInflexibiltyDays(long employeId, DateTime from, DateTime to);

        EmployesFlexibility GetFlexibilityComposition();
    }
}