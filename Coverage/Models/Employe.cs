﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

using Seac.Coverage.Enum;

namespace Seac.Coverage.Models
{
    [Table("employe")]
    public class Employe : BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }

        public EmployeProfile Profile { get; set; }
        public IList<EmployeArea> EmployeArea { get; set; }
        public IList<EmployeInflexibilityPeriod> EmployeInflexibilityPeriod { get; set; }
    }
}