using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

using AutoMapper;

using Seac.Coverage.Dto;
using Seac.Coverage.Extensions;
using static Seac.Coverage.Utils.GeneralConstants;
using Seac.Coverage.Enum;

namespace Seac.Coverage.Services
{
    public class CoverageService : ICoverageService
    {
        private readonly IAreaService _areaService;
        private readonly IEmployeService _employeService;
        private readonly ILeaveService _leaveService;
        private readonly IInflexibilityPeriodsService _inflexibilityPeriodsService;

        public CoverageService(IAreaService areaService, IEmployeService employeService, ILeaveService leaveService, IInflexibilityPeriodsService inflexibilityPeriodsService)
        {
            _areaService = areaService;
            _employeService = employeService;
            _leaveService = leaveService;
            _inflexibilityPeriodsService = inflexibilityPeriodsService;
        }

        public IList<AreaCoverageGaps> GetLeavesOverlaps(DateTime from, DateTime to)
        {
            List<AreaCoverageGaps> leaveOverlaps = new List<AreaCoverageGaps>();
            Action<AreaCoverageGaps> actionForArea = leaveOverlaps.Add;
            FindLeavesOverlaps(from, to, actionForArea);
            return leaveOverlaps;
        }

        public IList<EmployesCoverageGaps> GetLeavesOverlapsByEmploye(DateTime from, DateTime to)
        {
            List<EmployesCoverageGaps> employeLeaveOverlaps = new List<EmployesCoverageGaps>();
            Action<IList<EmployesCoverageGaps>, AreaDto, AreaCoverageGaps> actionForEmploye = CreateEmployeCoverageGaps;
            return SortEmployesCoverageGaps(employeLeaveOverlaps, FindLeavesOverlaps(from, to, null, actionForEmploye, employeLeaveOverlaps));
        }


        public IList<DateTime> GetInflexibiltyDays(long employeId, DateTime from, DateTime to)
        {
            List<AreaCoverageGaps> leaveOverlaps = new List<AreaCoverageGaps>();
            Action<AreaCoverageGaps> actionForArea = leaveOverlaps.Add;
            FindLeavesOverlaps(from, to, actionForArea, null, null, employeId);
            var inflexibiltyDays = leaveOverlaps.SelectMany(areaGap => areaGap.Gaps).Select(gap => DateTime.ParseExact(gap.Date, DateIsoFormat, CultureInfo.InvariantCulture)).Distinct().ToList();
            inflexibiltyDays.AddRange(GetInflexibiltyPeriodsDays(_inflexibilityPeriodsService.GetByEmployeAndDates(employeId, from, to).ToList(), from, to));
            return inflexibiltyDays.Distinct().ToList();
        }

        public EmployesFlexibility GetFlexibilityComposition()
        {
            List<EmployeDto> allEmployesWithArea = _employeService.GetAllWithAreaNotNull().ToList();
            List<EmployeDto> allEmployesNoArea = _employeService.GetAllWithAreaNull().ToList();
            List<AreaDto> areas = _areaService.GetAllWithEmploye().ToList();
            List<EmployeDto> inflexible = new List<EmployeDto>();

            foreach (AreaDto a in areas)
            {
                if (a.EmployeList.Count == 1)
                {
                    allEmployesWithArea.Remove(allEmployesWithArea.FirstOrDefault(e => e.Id == a.EmployeList[0].Id));
                    a.EmployeList[0].State = EmployeState.Inflexible;
                    inflexible.Add(new EmployeDto(a.EmployeList[0]));
                }
            }

            return new EmployesFlexibility(GetFlexibleEmployes(allEmployesWithArea, areas), inflexible.Distinct().OrderBy(e => e.Surname).ToList(), allEmployesNoArea);
        }

        private IList<DayCoverageGaps> FindLeaveOverlaps(IList<LeaveDto> leaves, int employeNumber)
        {
            IList<DayCoverageGaps> leavesOverlaps = new List<DayCoverageGaps>();
            IList<DateTime> period = leaves.Select(l => l.Date).Distinct().ToList();

            foreach (DateTime day in period)
            {
                DayCoverageGaps dayLeaveOverlaps = new DayCoverageGaps(day.ToString(DateIsoFormat));

                List<LeaveDto> dayLeaves = leaves.Where(l => day == l.Date).ToList();
                List<LeaveDto> morningLeaves = dayLeaves.Where(l => l.MFrom != TimeSpan.Zero).ToList();
                List<LeaveDto> afternoonLeaves = dayLeaves.Where(l => l.AFrom != TimeSpan.Zero).ToList();

                if (morningLeaves.Count > 0 && morningLeaves.Count == employeNumber)
                {
                    dayLeaveOverlaps.DayGaps.AddRange(GetMayBeLeaveOverlap(morningLeaves.Max(d => d.MFrom), morningLeaves.Max(d => d.MTo)));
                }
                if (afternoonLeaves.Count > 0 && afternoonLeaves.Count == employeNumber)
                {
                    dayLeaveOverlaps.DayGaps.AddRange(GetMayBeLeaveOverlap(afternoonLeaves.Max(d => d.AFrom), afternoonLeaves.Max(d => d.ATo)));
                }

                if (dayLeaveOverlaps.DayGaps.Count > 0)
                    leavesOverlaps.Add(dayLeaveOverlaps);
            }

            return leavesOverlaps;
        }

        private IList<CoverageGap> GetMayBeLeaveOverlap(TimeSpan maxBegin, TimeSpan minEnd)
        {
            IList<CoverageGap> leaveOverlaps = new List<CoverageGap>();

            if (maxBegin < minEnd)
            {
                leaveOverlaps.Add(new CoverageGap(maxBegin.ToString("hh\\:mm"), minEnd.ToString("hh\\:mm")));
            }

            return leaveOverlaps;
        }


        private void CreateEmployeCoverageGaps(IList<EmployesCoverageGaps> employeLeaveOverlaps, AreaDto a, AreaCoverageGaps areaCoverageGaps)
        {


            foreach (DayCoverageGaps gaps in areaCoverageGaps.Gaps)
            {
                List<EmployesCoverageGaps> temp = employeLeaveOverlaps.Where(e => e.Date == gaps.Date).ToList();
                temp = temp.Where(e => e.Employes.ValueEqual(a.EmployeList) && e.DayGaps.ValueEqual(gaps.DayGaps)).ToList();
                if (temp.Count == 0)
                {
                    var employesCoverageGaps = new EmployesCoverageGaps
                    {
                        Date = gaps.Date
                    };
                    employesCoverageGaps.Areas.Add(a);
                    employesCoverageGaps.Employes.AddRange(a.EmployeList);
                    employesCoverageGaps.DayGaps.AddRange(gaps.DayGaps);
                    employeLeaveOverlaps.Add(employesCoverageGaps);
                }
                else
                {
                    temp[0].Areas.Add(a);
                }
            }
        }

        private IList<EmployesCoverageGaps> SortEmployesCoverageGaps(IList<EmployesCoverageGaps> employeLeaveOverlaps, int areaNumber)
        {
            foreach (EmployesCoverageGaps ecg in employeLeaveOverlaps)
            {
                ecg.AreaNumber = areaNumber;
                ecg.Areas = ecg.Areas.OrderBy(a => a.Description).ToList();
                ecg.Employes = ecg.Employes.OrderBy(e => e.Surname).ThenBy(e => e.Name).ToList();
            }
            employeLeaveOverlaps = employeLeaveOverlaps.OrderBy(ecg => ecg.Employes[0].Surname).ToList();
            return employeLeaveOverlaps;
        }


        private IList<EmployeDto> GetFlexibleEmployes(List<EmployeDto> flexibleEmployesDto, IList<AreaDto> area)
        {
            flexibleEmployesDto.ForEach(e => e.State = EmployeState.Flexible);

            foreach (AreaDto a in area)
            {
                List<EmployeDto> areaFlexibleEmploye = flexibleEmployesDto.Where(e => a.EmployeList.Contains(e)).ToList();
                areaFlexibleEmploye.ForEach(fe => fe.Groups.Add(a.EmployeList.Where(e => !e.Equals(fe)).ToList()));
            }

            flexibleEmployesDto.ForEach(e => RemoveDuplicatedGroup(e));
            flexibleEmployesDto = flexibleEmployesDto.OrderBy(e => e.Groups.Count).ThenBy(e => e.Surname).ToList();
            return flexibleEmployesDto;
        }

        private void RemoveDuplicatedGroup(EmployeDto employe)
        {
            employe.Groups = employe.Groups.Distinct().OrderBy(e => e.Count).ToList();
            IList<EmployeBaseDto> smallestGroup = employe.Groups[0];
            employe.Groups = employe.Groups.Where(g => !smallestGroup.All(e => g.Contains(e))).ToList();
            if (employe.Groups.Count > 1)
            {
                RemoveDuplicatedGroup(employe);
            }
            employe.Groups.Insert(0, smallestGroup);
        }

        private int FindLeavesOverlaps(DateTime fromDate, DateTime toDate, Action<AreaCoverageGaps> actionForArea, Action<IList<EmployesCoverageGaps>, AreaDto, AreaCoverageGaps> actionForEmploye = null, IList<EmployesCoverageGaps> employesCoverageGaps = null, long employeId = -1)
        {
            List<AreaDto> areas = employeId > 0 ? _areaService.FindByEmployeId(employeId).ToList() : _areaService.GetAllWithEmploye().ToList();
            List<LeaveDto> leaves = _leaveService.GetLeavesRange(fromDate, toDate).ToList();
            if (employeId <= 0)
            {
                leaves = leaves.Where(l => l.State == LeaveState.Approved).ToList();
            }

            foreach (AreaDto a in areas)
            {
                int areaEmployeNumber = a.EmployeList.Count;
                IList<EmployeBaseDto> employesDto = a.EmployeList;
                AreaCoverageGaps areaCoverageGaps = new AreaCoverageGaps(a.Description, employesDto, areaEmployeNumber == 1);
                if (employeId > 0)
                {
                    areaEmployeNumber--;
                }
                IList<DayCoverageGaps> areaLeaveOverlaps = FindLeaveOverlaps(leaves.Where(l => l.Employe.AreaList.Any(ea => ea.Id == a.Id)).ToList(), areaEmployeNumber);
                areaCoverageGaps.Gaps.AddRange(areaLeaveOverlaps);
                if (areaCoverageGaps.Gaps.Count > 0 && actionForArea != null)
                {
                    actionForArea(areaCoverageGaps);
                }
                else if (areaCoverageGaps.Gaps.Count > 0 && actionForEmploye != null)
                {
                    actionForEmploye(employesCoverageGaps, a, areaCoverageGaps);
                }
            }
            return areas.Count;
        }

        private IList<DateTime> GetInflexibiltyPeriodsDays(IList<InflexibilityPeriodDto> inflexibiltyPeriods, DateTime from, DateTime to)
        {
            List<DateTime> inflexibiltyPeriodsDays = new List<DateTime>();
            foreach (InflexibilityPeriodDto inflexibilityPeriodDto in inflexibiltyPeriods)
            {
                var init = inflexibilityPeriodDto.From > from ? inflexibilityPeriodDto.From : from;
                var end = inflexibilityPeriodDto.To < to ? inflexibilityPeriodDto.To : to;
                inflexibiltyPeriodsDays.AddRange(Enumerable.Range(0, end.Subtract(init).Days + 1).Select(d => init.AddDays(d)));
            }
            return inflexibiltyPeriodsDays.Distinct().ToList();
        }

    }
}