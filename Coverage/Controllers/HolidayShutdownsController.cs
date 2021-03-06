﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using Seac.Coverage.Models;
using Seac.Coverage.Services;

namespace Seac.Coverage.Controllers
{
    [Route("holidayShutdowns")]
    public class HolidayShutdownsController : BaseController
    {

        private readonly IHolidayShutdownsService _holidayShutdownService;

        public HolidayShutdownsController(IHolidayShutdownsService holidayShutdown)
        {
            _holidayShutdownService = holidayShutdown;
        }

        [HttpGet("{id}")]
        public HolidayShutdown Get(long id) => _holidayShutdownService.Get(id);

        [HttpGet]
        public IEnumerable<HolidayShutdown> GetAll() => _holidayShutdownService.GetAll();

        [HttpPost]
        public IActionResult Post([FromBody]HolidayShutdown period)
        {
            _holidayShutdownService.Update(period);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _holidayShutdownService.Delete(_holidayShutdownService.Get(id));
            return new NoContentResult();
        }
    }
}
