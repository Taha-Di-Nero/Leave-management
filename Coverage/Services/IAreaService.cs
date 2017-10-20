using System.Collections.Generic;

using Seac.Coverage.Dto;

namespace Seac.Coverage.Services
{
    public interface IAreaService
    {
        IEnumerable<AreaBaseDto> GetAllArea();
        IEnumerable<AreaDto> GetAllWithEmploye();
        IEnumerable<AreaDto> FindByEmployeId(long employeId);

        AreaBaseDto AddArea(AreaBaseDto area);
        void DeleteArea(long id);

    }
}
