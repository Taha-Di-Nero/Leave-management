using System.Collections.Generic;

using AutoMapper;

using Seac.Coverage.Dto;
using Seac.Coverage.Repositories;
using Seac.Coverage.Models;

namespace Seac.Coverage.Services
{
    public class AreaService : IAreaService
    {
        private readonly IMapper _mapper;
        private readonly IAreaRepository _areaRepository;

        public AreaService(IMapper mapper, IAreaRepository areaRepository)
        {
            _mapper = mapper;
            _areaRepository = areaRepository;
        }

        public IEnumerable<AreaDto> FindByEmployeId(long employeId) => _mapper.Map<IEnumerable<Area>, IEnumerable<AreaDto>>(_areaRepository.FindByEmployeId(employeId));

        public IEnumerable<AreaDto> GetAllWithEmploye() => _mapper.Map<IEnumerable<Area>, IEnumerable<AreaDto>>(_areaRepository.GetAllWithEmploye());
    }
}
