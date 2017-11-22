using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

using AutoMapper;

using Seac.Coverage.Repositories;
using Seac.Coverage.Models;
using Seac.Coverage.Dto;
using Seac.Coverage.Enum;
using Seac.Coverage.Export;

using static Seac.Coverage.Utils.GeneralConstants;

namespace Seac.Coverage.Services
{
    public class LeaveService : ILeaveService
    {
        private readonly IMapper _mapper;
        private readonly ILeaveRepository _leaveRepository;
        private readonly IEmployeRepository _employeRepository;

        public LeaveService(IMapper mapper, IEmployeRepository employeRepository, ILeaveRepository leaveRepository)
        {
            _mapper = mapper;
            _leaveRepository = leaveRepository;
            _employeRepository = employeRepository;
        }

        public IEnumerable<LeaveDto> GetLeavesByEmploye(DateTime from, DateTime to, long employeId)
        {
            var leaves = _leaveRepository.GetLeavesRangeByEmploye(employeId, from, to);

            IEnumerable<LeaveDto> leavesDto = _mapper.Map<IEnumerable<Leave>, IEnumerable<LeaveDto>>(leaves);

            return leavesDto;
        }

        public IEnumerable<LeaveDto> GetLeavesByState(LeaveState state)
        {
            var leaves = _leaveRepository.GetLeavesBySate(state);

            IEnumerable<LeaveDto> leavesDto = _mapper.Map<IEnumerable<Leave>, IEnumerable<LeaveDto>>(leaves);

            return leavesDto;
        }

        public IEnumerable<LeaveDto> GetNotApprovedLeaves()
        {
            var leaves = _leaveRepository.GetNotApprovedLeaves();

            IEnumerable<LeaveDto> leavesDto = _mapper.Map<IEnumerable<Leave>, IEnumerable<LeaveDto>>(leaves);

            return leavesDto;
        }

        public IEnumerable<LeaveDto> GetYearLeaves(int year)
        {
            var yearInit = new DateTime(year, 1, 1);
            var yearEnd = new DateTime(year, 12, 31);
            return _mapper.Map<IEnumerable<Leave>, IEnumerable<LeaveDto>>(_leaveRepository.GetLeavesRange(yearInit, yearEnd));
        }

        public UpdatePlanResponse UpdateLeavesPlan(ICoverageService coverageService, LeavesPlanUpdate leaves, long employeId, EmployeDto loggedOne, bool force)
        {
            Employe currentEmploye = _employeRepository.GetWithArea(employeId);
            var response = force ? new UpdatePlanResponse() : AddRejectedLeavesToResponse(coverageService, leaves.AddedLeaves, currentEmploye);

            if (loggedOne.Profile == EmployeProfile.Manager)
            {
                _leaveRepository.InsertAll(GetLeavesEntity(leaves.AddedLeaves.Where(l => l.State == LeaveState.Approved).ToList(), currentEmploye, LeaveState.Approved));
                _leaveRepository.UpdateAll(GetLeavesEntity(leaves.AddedLeaves.Where(l => l.State == LeaveState.ToAdd).ToList(), currentEmploye, LeaveState.Approved));
                _leaveRepository.DeleteAll(GetLeavesEntity(leaves.RemovedLeaves, currentEmploye, LeaveState.Approved));
            }
            else
            {
                _leaveRepository.InsertAll(GetLeavesEntity(leaves.AddedLeaves, currentEmploye, LeaveState.ToAdd));
                _leaveRepository.DeleteAll(GetLeavesEntity(leaves.RemovedLeaves.Where(l => l.State == LeaveState.ToAdd).ToList(), currentEmploye, LeaveState.ToRemove));
                _leaveRepository.UpdateAll(GetLeavesEntity(leaves.RemovedLeaves.Where(l => l.State == LeaveState.Approved).ToList(), currentEmploye, LeaveState.ToRemove));
            }

            SetUpdatedDatesMessage(leaves.AddedLeaves, leaves.RemovedLeaves, response);
            return response;
        }

        public IEnumerable<LeaveDto> GetLeavesRange(DateTime yearInit, DateTime yearEnd) => _mapper.Map<IEnumerable<Leave>, IEnumerable<LeaveDto>>(_leaveRepository.GetLeavesRange(yearInit, yearEnd));

        public string ExportLeavesPlan(int year)
        {
            var yearInit = new DateTime(year, 1, 1);
            var yearEnd = new DateTime(year, 12, 31);
            var xlsxFilePath = Path.GetTempFileName();

            var leaves = GetLeavesRange(yearInit, yearEnd);
            leaves = leaves.Where(l => l.State == LeaveState.Approved);
            var employes = GetAllEmploye();

            var leavesPlanExporter = new LeavesPlanExporter(leaves.ToList(), employes.ToList());
            leavesPlanExporter.Export(new FileStream(xlsxFilePath, FileMode.Create), year);
            return xlsxFilePath;
        }

        private IEnumerable<EmployeDto> GetAllEmploye() => _mapper.Map<IEnumerable<Employe>, IEnumerable<EmployeDto>>(_employeRepository.GetAll());

        private UpdatePlanResponse AddRejectedLeavesToResponse(ICoverageService coverageService, IList<LeaveDto> leaves, Employe currentEmploye)
        {
            var response = new UpdatePlanResponse();
            if (leaves?.Count > 0 && currentEmploye.EmployeArea.Count > 0)
            {
                var init = leaves.Min(l => l.Date);
                var end = leaves.Max(l => l.Date);

                var daysToRemove = coverageService.GetInflexibiltyDays(currentEmploye.Id, init, end).ToList();
                daysToRemove = daysToRemove.Where(day => leaves.Any(l => l.Date == day)).ToList();
                if (daysToRemove?.Count > 0)
                {
                    response.RejectedDates = daysToRemove.Select(d => d.ToString(DateIsoFormat)).ToArray();
                    daysToRemove.ForEach(day => leaves.Remove(leaves.FirstOrDefault(l => l.Date == day)));
                }
            }
            return response;
        }

        private void SetUpdatedDatesMessage(IList<LeaveDto> addedLeaves, IList<LeaveDto> removedLeaves, UpdatePlanResponse response)
        {
            response.SavedDates = (addedLeaves.Count > 0) ? addedLeaves.Select(d => d.Date.ToString(DateIsoFormat)).ToArray() : new string[0];
            response.RemovedDates = (removedLeaves.Count > 0) ? removedLeaves.Select(d => d.Date.ToString(DateIsoFormat)).ToArray() : new string[0];
        }

        private IList<Leave> GetLeavesEntity(IEnumerable<LeaveDto> leaves, Employe currentEmploye, LeaveState state)
        {
            var entities = _mapper.Map<IEnumerable<LeaveDto>, IEnumerable<Leave>>(leaves).ToList();
            entities.ForEach(l =>
            {
                l.Employe = currentEmploye;
                l.State = state;
            });
            return entities;
        }
    }
}
