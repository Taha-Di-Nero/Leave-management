using System;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;

using Seac.Coverage.Dto;
using Seac.Coverage.Services;

namespace Seac.Coverage.Controllers
{
    [Route("coverage")]
    public class CoverageController : BaseController
    {
        private readonly ICoverageService _coverageService;

        public CoverageController(ICoverageService coverageService)
        {
            _coverageService = coverageService;
        }

        [HttpGet("overlaps/area/{from}/{to}")]
        public IList<AreaCoverageGaps> GetLeavesOverlaps(string from, string to) => _coverageService.GetLeavesOverlaps(GetDateParam(from), GetDateParam(to));

        [HttpGet("overlaps/employe/{from}/{to}")]
        public IList<EmployesCoverageGaps> GetLeavesOverlapsByEmploye(string from, string to) => _coverageService.GetLeavesOverlapsByEmploye(GetDateParam(from), GetDateParam(to));

        [HttpGet("employe/{employeId}/inflexibility/{from}/{to}")]
        public IList<DateTime> GetInflexibiltyDays(long employeId, string from, string to) => _coverageService.GetInflexibiltyDays(employeId, GetDateParam(from), GetDateParam(to));

        [HttpGet("employe/flexibility")]
        public EmployesFlexibility GetFlexibilityComposition() => _coverageService.GetFlexibilityComposition();

    }
}