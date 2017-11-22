using System;
using System.Linq;
using System.Collections.Generic;

using AutoMapper;

using Seac.Coverage.Models;
using Seac.Coverage.Repositories;
using Seac.Coverage.Dto;
using Seac.Coverage.Enum;

namespace Seac.Coverage.Services
{
    public class InflexibilityPeriodsService : IInflexibilityPeriodsService
    {
        private readonly IMapper _mapper;
        private readonly IInflexibilityPeriodRepository _inflexibilityPeriodRepository;
        private readonly IInflexibilityPeriodMotivationRepository _inflexibilityPeriodMotivationRepository;

        public InflexibilityPeriodsService(IMapper mapper, IInflexibilityPeriodRepository inflexibilityPeriodRepository, IInflexibilityPeriodMotivationRepository inflexibilityPeriodMotivationRepository)
        {
            _mapper = mapper;
            _inflexibilityPeriodRepository = inflexibilityPeriodRepository;
            _inflexibilityPeriodMotivationRepository = inflexibilityPeriodMotivationRepository;
        }

        public InflexibilityPeriodDto Get(long id)
        {
            var entity = _inflexibilityPeriodRepository.Get(id);
            var dto = _mapper.Map<InflexibilityPeriod, InflexibilityPeriodDto>(entity);
            dto.Employes = entity.EmployeInflexibilityPeriod.Select(ei => new EmployeDto(ei.Employe, EmployeState.Indifferent)).ToList();
            return dto;
        }

        public IEnumerable<InflexibilityPeriodDto> GetAll()
        {
            var entities = _inflexibilityPeriodRepository.GetAllWithEmploye().ToList();
            var dtos = _mapper.Map<List<InflexibilityPeriod>, List<InflexibilityPeriodDto>>(entities);
            dtos.ForEach(ip => ip.Employes = entities.Find(ent => ent.Id == ip.Id).EmployeInflexibilityPeriod.Select(ei => new EmployeDto(ei.Employe, EmployeState.Indifferent)).ToList());
            return dtos;
        }

        public IEnumerable<InflexibilityPeriodDto> GetByEmployeAndDates(long employeId, DateTime init, DateTime end)
        {
            var entities = _inflexibilityPeriodRepository.GetByEmployeAndDates(employeId, init, end).ToList();
            return _mapper.Map<IList<InflexibilityPeriod>, IList<InflexibilityPeriodDto>>(entities);
        }

        public void Update(InflexibilityPeriodDto period)
        {
            if (period.Id > 0)
            {
                _inflexibilityPeriodRepository.Delete(_inflexibilityPeriodRepository.Get(period.Id));
                period.Id = 0;
            }
            var entity = _mapper.Map<InflexibilityPeriodDto, InflexibilityPeriod>(period);
            var employes = _mapper.Map<IList<EmployeDto>, IList<Employe>>(period.Employes);
            entity.EmployeInflexibilityPeriod = employes.Select(e => new EmployeInflexibilityPeriod(e, entity)).ToList();
            _inflexibilityPeriodRepository.Update(entity);
        }

        public void Delete(long id) => _inflexibilityPeriodRepository.Delete(_inflexibilityPeriodRepository.Get(id));

        public IEnumerable<InflexibilityPeriodMotivationDto> GetAllMotivation() => _mapper.Map<IList<InflexibilityPeriodMotivation>, IList<InflexibilityPeriodMotivationDto>>(_inflexibilityPeriodMotivationRepository.GetAll().ToList());

        public InflexibilityPeriodMotivationDto AddMotivation(InflexibilityPeriodMotivationDto motivation)
        {
            motivation.Id = _inflexibilityPeriodMotivationRepository.Add(_mapper.Map<InflexibilityPeriodMotivationDto, InflexibilityPeriodMotivation>(motivation));
            return motivation;
        }

        public void DeleteMotivation(long id) => _inflexibilityPeriodMotivationRepository.Delete(_inflexibilityPeriodMotivationRepository.Get(id));
    }
}
