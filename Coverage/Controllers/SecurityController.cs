using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;

using Seac.Coverage.Dto;

using static Seac.Coverage.Utils.GeneralConstants;

namespace Seac.Coverage.Controllers
{
    [Route("security")]
    public class SecurityController : BaseController
    {

        [HttpGet("logged/employe")]
        public EmployeDto LoggedEmploye()
        {
            return GetLoggedEmploye();
        }

        [HttpGet("logout")]
        public void Logout()
        {
            HttpContext.Session.Clear();
            HttpContext.Response.Headers.Add(HeaderNames.WWWAuthenticate, $"{BasicRealmHeaderPrefix}{Realm}\"");
            HttpContext.Response.StatusCode = StatusCodes.Status401Unauthorized;
        }

    }
}