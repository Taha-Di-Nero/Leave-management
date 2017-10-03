using System.DirectoryServices;

using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using Seac.Coverage.Dto;
using Microsoft.Extensions.DependencyInjection;

using static Seac.Coverage.Utils.ConfigurationKeys;
using Seac.Coverage.Services;

namespace Seac.Coverage.Authentication
{
    public class AuthenticationManager : IAuthenticationManager
    {
        private readonly string _adUrl;
        private readonly string _domain;

        public AuthenticationManager(IConfiguration Configuration)
        {
            _adUrl = Configuration[ActiveDirectoryUrl];
            _domain = Configuration[ActiveDirectoryDomain];
        }

        public EmployeDto Authenticate(HttpContext context, string username, string password)
        {
            string fullName = ValidateUserNamePassword(username, password);
            EmployeDto employe = context.RequestServices.GetRequiredService<IEmployeService>().FindByFullName(fullName);
            return employe;
        }

        private string ValidateUserNamePassword(string username, string password)
        {
            string fullname = null;

            using (DirectoryEntry dirEntry = new DirectoryEntry(_adUrl, $"{username}@{_domain}", password))
            {
                using (DirectorySearcher search = new DirectorySearcher(dirEntry))
                {
                    search.Filter = "(samaccountname=" + username + ")";
                    SearchResult result = search.FindOne();
                    if (result != null)
                    {
                        fullname = result.GetDirectoryEntry().Name;
                        fullname = fullname.Substring(fullname.IndexOf("=") + 1);
                    }
                }
            }
            return fullname;
        }

    }
}
