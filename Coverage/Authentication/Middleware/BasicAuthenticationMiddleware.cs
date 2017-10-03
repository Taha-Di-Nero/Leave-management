using System;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;
using Microsoft.Extensions.Logging;

using Seac.Coverage.Extensions;
using Seac.Coverage.Dto;

using static Seac.Coverage.Utils.GeneralConstants;
using static Seac.Coverage.Utils.SessionKeys;


namespace Seac.Coverage.Authentication.Middleware
{
    public class BasicAuthenticationMiddleware
    {
        private readonly ILogger _logger;

        private readonly RequestDelegate _next;
        private readonly IAuthenticationManager _authenticationManager;

        public BasicAuthenticationMiddleware(RequestDelegate next, IAuthenticationManager authenticationManager, ILogger<BasicAuthenticationMiddleware> logger)
        {
            _next = next;
            _authenticationManager = authenticationManager;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            if (FilterNonXhrRequest(context))
            {
                return;
            }

            if (context.Session.Get<EmployeDto>(LoggedEmployeKey) == null)
            {
                var basicAuthenticationHeader = GetBasicAuthenticationHeaderValue(context);
                if (basicAuthenticationHeader.IsValidBasicAuthenticationHeaderValue)
                {
                    try
                    {
                        EmployeBaseDto loggedEmploye = _authenticationManager.Authenticate(context, basicAuthenticationHeader.UserIdentifier, basicAuthenticationHeader.UserPassword);
                        context.Session.Set(LoggedEmployeKey, loggedEmploye);
                    }
                    catch (Exception e)
                    {
                        _logger.LogError(e.StackTrace);
                        SetUnauthorizedHeader(context);
                        return;
                    }
                }
                else
                {
                    SetUnauthorizedHeader(context);
                    return;
                }
            }
            await _next.Invoke(context);
        }

        private BasicAuthenticationHeaderValue GetBasicAuthenticationHeaderValue(HttpContext context)
        {
            var basicAuthenticationHeader = context.Request.Headers[HeaderNames.Authorization]
                .FirstOrDefault(header => header.StartsWith("Basic", StringComparison.OrdinalIgnoreCase));
            var decodedHeader = new BasicAuthenticationHeaderValue(basicAuthenticationHeader);
            return decodedHeader;
        }

        private bool FilterNonXhrRequest(HttpContext context)
        {
            var xhrHeader = context.Request.Headers[XRequestedWithHeader];
            if (xhrHeader != XMLHttpRequest && context.Request.Path != "/")
            {
                var response = context.Response;
                response.Headers.Add(HeaderNames.WWWAuthenticate, $"{BasicRealmHeaderPrefix}{Realm}\"");
                response.StatusCode = StatusCodes.Status301MovedPermanently;
                response.Headers[HeaderNames.Location] = "/";
                context.Request.Path = "/";
                return true;
            }
            return false;
        }

        private void SetUnauthorizedHeader(HttpContext context)
        {
            context.Response.Headers.Add(HeaderNames.WWWAuthenticate, $"{BasicRealmHeaderPrefix}{Realm}\"");
            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
        }
    }
}