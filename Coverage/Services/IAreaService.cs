using System.Collections.Generic;

using Seac.Coverage.Dto;

namespace Seac.Coverage.Services
{
    public interface IAreaService
    {
        IEnumerable<AreaDto> GetAllWithEmploye();
        IEnumerable<AreaDto> FindByEmployeId(long employeId);
    }
}
