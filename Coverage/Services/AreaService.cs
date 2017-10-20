using System.Collections.Generic;
using System.Linq;

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

        public IEnumerable<AreaBaseDto> GetAllArea() => _mapper.Map<IEnumerable<Area>, IEnumerable<AreaBaseDto>>(_areaRepository.GetAll().OrderBy(a => a.Description));

        public IEnumerable<AreaDto> GetAllWithEmploye() => _mapper.Map<IEnumerable<Area>, IEnumerable<AreaDto>>(_areaRepository.GetAllWithEmploye());


        public AreaBaseDto AddArea(AreaBaseDto area)
        {
            area.Id = _areaRepository.Add(_mapper.Map<AreaBaseDto, Area>(area));
            return area;
        }

        public void DeleteArea(long id) => _areaRepository.Delete(_areaRepository.Get(id));
    }
}
