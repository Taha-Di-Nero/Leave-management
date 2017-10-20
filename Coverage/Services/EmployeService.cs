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

        public void Update(EmployeDto employe)
        {
            if (employe.Id > 0)
            {
                _employeRepository.Delete(_employeRepository.Get(employe.Id));
                employe.Id = 0;
            }
            var entity = _mapper.Map<EmployeDto, Employe>(employe);
            var areas = _mapper.Map<IList<AreaBaseDto>, IList<Area>>(employe.AreaList);
            entity.EmployeArea = areas.Select(a => new EmployeArea(a, entity)).ToList();
            _employeRepository.Update(entity);
        }

        public void Delete(long id) => _employeRepository.Delete(_employeRepository.Get(id));
    }
}
