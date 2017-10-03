using Microsoft.AspNetCore.Http;

using Seac.Coverage.Dto;

namespace Seac.Coverage.Authentication
{
    public interface IAuthenticationManager
    {
        EmployeDto Authenticate(HttpContext context, string username, string password);
    }
}
