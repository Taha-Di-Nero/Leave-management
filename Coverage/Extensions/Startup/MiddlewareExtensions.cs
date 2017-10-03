using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

using Seac.Coverage.Authentication;
using Seac.Coverage.Authentication.Middleware;

namespace Seac.Coverage.Extensions.Startup
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseBasicAuthentication(this IApplicationBuilder app)
        {
            return app.UseMiddleware<BasicAuthenticationMiddleware>();
        }

        public static void AddAuthenticationManager(this IServiceCollection services)
        {
            services.AddSingleton<IAuthenticationManager, AuthenticationManager>();
        }
    }
}
