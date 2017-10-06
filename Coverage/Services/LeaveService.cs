using System;
using System.Linq;
using System.Collections.Generic;

using AutoMapper;

using Seac.Coverage.Repositories;
using Seac.Coverage.Models;
using Seac.Coverage.Dto;
using Seac.Coverage.Enum;

using static Seac.Coverage.Utils.GeneralConstants;

namespace Seac.Coverage.Services
{
    public class LeaveService : ILeaveService
    {
        private readonly IMapper _mapper;
        private readonly ILeaveRepository _leaveRepository;
        IEmployeRepository _employeRepository;

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
            var leaves = _leaveRepository.GetLeavesRangeBySate(state);

            IEnumerable<LeaveDto> leavesDto = _mapper.Map<IEnumerable<Leave>, IEnumerable<LeaveDto>>(leaves);

            return leavesDto;
        }

        public IEnumerable<LeaveDto> GetYearLeaves(int year)
        {
            var yearInit = new DateTime(year, 1, 1);
            var yearEnd = new DateTime(year, 12, 31);
            return _mapper.Map<IEnumerable<Leave>, IEnumerable<LeaveDto>>(_leaveRepository.GetLeavesRange(yearInit, yearEnd));
        }

        public UpdatePlanResponse UpdateLeavesPlan(ICoverageService coverageService, LeavesPlanUpdate leaves, long employeId, EmployeDto loggedOne)
        {
            Employe currentEmploye = _employeRepository.GetWithArea(employeId);
            var response = AddRejectedLeavesToResponse(coverageService, leaves.AddedLeaves, currentEmploye);

            if (loggedOne.Profile == EmployeProfile.Manager)
            {
                _leaveRepository.InsertAll(GetLeavesEntity(leaves.AddedLeaves, currentEmploye, LeaveState.Approved));
                _leaveRepository.DeleteAll(GetLeavesEntity(leaves.RemovededLeaves, currentEmploye, LeaveState.Approved));
            }
            else
            {
                _leaveRepository.InsertAll(GetLeavesEntity(leaves.AddedLeaves, currentEmploye, LeaveState.ToAdd));
                _leaveRepository.DeleteAll(GetLeavesEntity(leaves.RemovededLeaves.Where(l => l.State == LeaveState.ToAdd).ToList(), currentEmploye, LeaveState.ToRemove));
                _leaveRepository.UpdateAll(GetLeavesEntity(leaves.RemovededLeaves.Where(l => l.State == LeaveState.Approved).ToList(), currentEmploye, LeaveState.ToRemove));
            }

            SetUpdatedDatesMessage(leaves.AddedLeaves, leaves.RemovededLeaves, response);
            return response;
        }

        public IEnumerable<LeaveDto> GetLeavesRange(DateTime yearInit, DateTime yearEnd) => _mapper.Map<IEnumerable<Leave>, IEnumerable<LeaveDto>>(_leaveRepository.GetLeavesRange(yearInit, yearEnd));

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
                    response.RejectedDates = String.Join(", ", daysToRemove.Select(d => d.ToString(DateParamFormat)));
                    daysToRemove.ForEach(day => leaves.Remove(leaves.Where(l => l.Date == day).FirstOrDefault()));
                }
            }
            return response;
        }

        private void SetUpdatedDatesMessage(IList<LeaveDto> addedLeaves, IList<LeaveDto> removededLeaves, UpdatePlanResponse response)
        {
            response.SavedDates = (addedLeaves.Count > 0) ? String.Join(", ", addedLeaves.Select(d => d.Date.ToString(DateParamFormat))) : null;
            response.RemovedDates += (removededLeaves.Count > 0) ? String.Join(", ", removededLeaves.Select(d => d.Date.ToString(DateParamFormat))) : null;
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
