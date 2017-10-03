using System.Collections.Generic;

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

        public IEnumerable<EmployeDto> GetAllWithAreaNotNull() => _mapper.Map<IEnumerable<Employe>, IEnumerable<EmployeDto>>(_employeRepository.GetAllWithAreaNotNull());

        public IEnumerable<EmployeDto> GetAllWithAreaNull() => _mapper.Map<IEnumerable<Employe>, IEnumerable<EmployeDto>>(_employeRepository.GetAllWithAreaNull());
    }
}
