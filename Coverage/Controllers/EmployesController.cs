using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using Seac.Coverage.Services;
using Seac.Coverage.Dto;

namespace Seac.Coverage.Controllers
{
    [Route("employes")]
    public class EmployesController : BaseController
    {
        private readonly IAreaService _areaService;
        private readonly IEmployeService _employeService;

        public EmployesController(IAreaService areaService, IEmployeService employeService)
        {
            _areaService = areaService;
            _employeService = employeService;
        }

        [HttpGet("{id}")]
        public EmployeDto Get(long id) => _employeService.GetWithArea(id);

        [HttpGet]
        public IEnumerable<EmployeDto> GetAll() => _employeService.GetAllWithArea();

        [HttpPost]
        public void Post([FromBody]EmployeDto employe) => _employeService.Update(employe);

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            _employeService.Delete(id);
            return new NoContentResult();
        }

        [HttpGet("area")]
        public IEnumerable<AreaBaseDto> GetAllArea() => _areaService.GetAllArea();

        [HttpPost("area")]
        public AreaBaseDto AddArea([FromBody]AreaBaseDto area) => _areaService.AddArea(area);

        [HttpDelete("area/{id}")]
        public IActionResult DeleteArea(long id)
        {
            _areaService.DeleteArea(id);
            return new NoContentResult();
        }
    }
}
