﻿using System.Collections.Generic;

using Seac.Coverage.Dto;

namespace Seac.Coverage.Services
{
    public interface IEmployeService
    {
        EmployeDto GetWithArea(long id);
        EmployeDto FindByFullName(string fullName);
        IEnumerable<EmployeDto> GetAll();
        IEnumerable<EmployeDto> GetAllWithAreaNotNull();
        IEnumerable<EmployeDto> GetAllWithAreaNull();
    }
}
