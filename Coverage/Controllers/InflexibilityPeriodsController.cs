using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using Seac.Coverage.Services;
using Seac.Coverage.Dto;

namespace Seac.Coverage.Controllers
{
    [Route("inflexibilityPeriods")]
    public class InflexibilityPeriodsController : BaseController
    {

        private readonly IInflexibilityPeriodsService _inflexibilityPeriodsService;

        public InflexibilityPeriodsController(IInflexibilityPeriodsService inflexibilityPeriodsService)
        {
            _inflexibilityPeriodsService = inflexibilityPeriodsService;
        }

        [HttpGet("{id}")]
        public InflexibilityPeriodDto Get(long id) => _inflexibilityPeriodsService.Get(id);

        [HttpGet]
        public IEnumerable<InflexibilityPeriodDto> GetAll() => _inflexibilityPeriodsService.GetAll();

        [HttpPost]
        public void Post([FromBody]InflexibilityPeriodDto period) => _inflexibilityPeriodsService.Update(period);

        [HttpDelete("{id}")]
        public void Delete(long id) => _inflexibilityPeriodsService.Delete(id);

        [HttpGet("motivation")]
        public IEnumerable<InflexibilityPeriodMotivationDto> GetAllMotivation() => _inflexibilityPeriodsService.GetAllMotivation();

        [HttpPost("motivation")]
        public InflexibilityPeriodMotivationDto AddMotivation([FromBody]InflexibilityPeriodMotivationDto motivation) => _inflexibilityPeriodsService.AddMotivation(motivation);

        [HttpDelete("motivation/{id}")]
        public void DeleteMotivation(long id) => _inflexibilityPeriodsService.DeleteMotivation(id);
    }
}
