using System;
using System.Globalization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Seac.Coverage.Dto;
using Seac.Coverage.Extensions;

using static Seac.Coverage.Utils.GeneralConstants;
using static Seac.Coverage.Utils.SessionKeys;

namespace Seac.Coverage.Controllers
{
    [Produces("application/json")]
    public abstract class BaseController : Controller
    {
        protected EmployeDto GetLoggedEmploye() => HttpContext.Session.Get<EmployeDto>(LoggedEmployeKey);

        protected DateTime GetDateParam(string dateParam) => DateTime.ParseExact(dateParam, DateParamFormat, CultureInfo.InvariantCulture);
    }
}
