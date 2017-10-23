using System.Collections.Generic;
using System.Linq;

using AutoMapper;

using Seac.Coverage.Dto;
using Seac.Coverage.Repositories;
using Seac.Coverage.Models;

namespace Seac.Coverage.Services
{
    public class EmployeService : IEmployeService
    {
        private readonly IMapper _mapper;
        private readonly IEmployeRepository _employeRepository;

        public EmployeService(IMapper mapper, IEmployeRepository employeRepository)
        {
            _mapper = mapper;
            _employeRepository = employeRepository;
        }

        public EmployeDto GetWithArea(long id) => _mapper.Map<Employe, EmployeDto>(_employeRepository.GetWithArea(id));

        public EmployeDto FindByFullName(string fullName) => _mapper.Map<Employe, EmployeDto>(_employeRepository.FindByFullName(fullName));

        public IEnumerable<EmployeDto> GetAll() => _mapper.Map<IEnumerable<Employe>, IEnumerable<EmployeDto>>(_employeRepository.GetAll());

        public IEnumerable<EmployeDto> GetAllWithArea() => _mapper.Map<IEnumerable<Employe>, IEnumerable<EmployeDto>>(_employeRepository.GetAllWithArea().OrderBy(e => e.Surname).ThenBy(e => e.Name));

        public IEnumerable<EmployeDto> GetAllWithAreaNotNull() => _mapper.Map<IEnumerable<Employe>, IEnumerable<EmployeDto>>(_employeRepository.GetAllWithAreaNotNull());

        public IEnumerable<EmployeDto> GetAllWithAreaNull() => _mapper.Map<IEnumerable<Employe>, IEnumerable<EmployeDto>>(_employeRepository.GetAllWithAreaNull());

        public IEnumerable<EmployeDto> GetManagers() => _mapper.Map<IEnumerable<Employe>, IEnumerable<EmployeDto>>(_employeRepository.GetManagers());

        public void Update(EmployeDto employe) => UpdateEntity(employe);

        public void Delete(long id) => _employeRepository.Delete(_employeRepository.Get(id));

        private void UpdateEntity(EmployeDto employeDto)
        {
            var entity = employeDto.Id > 0 ? _employeRepository.GetWithArea(employeDto.Id) : _mapper.Map<EmployeDto, Employe>(employeDto); ;
            entity.Surname = employeDto.Surname;
            entity.Name = employeDto.Name;
            entity.Email = employeDto.Email;
            var areas = _mapper.Map<IList<AreaBaseDto>, IList<Area>>(employeDto.AreaList).Select(a => new EmployeArea(a, entity)).ToList();
            if (employeDto.Id > 0)
            {
                var requestAreasDesc = areas.Select(ea => ea.Area.Description).ToList();
                var existingAreasDesc = entity.EmployeArea.Select(ea => ea.Area.Description).ToList();
                var removedAreas = entity.EmployeArea.Where(ea => !requestAreasDesc.Contains(ea.Area.Description)).ToList();
                var addedAreas = areas.Where(ea => !existingAreasDesc.Contains(ea.Area.Description)).ToList();
                entity.EmployeArea.AddRange(addedAreas);
                _employeRepository.Update(entity, removedAreas);
            }
            else
            {
                entity.EmployeArea = areas;
                _employeRepository.Update(entity);
            }
        }
    }
}
