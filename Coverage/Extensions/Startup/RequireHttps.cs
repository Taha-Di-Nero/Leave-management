using System;
using System.IO;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using static Seac.Coverage.Utils.ConfigurationKeys;

namespace Seac.Coverage.Extensions.Startup
{
    public static class RequireHttps
    {
        public static void UseHttps(this IApplicationBuilder app)
        {
            var configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(ServerConfFileName).Build();
            var options = new RewriteOptions().AddRedirectToHttps(StatusCodes.Status301MovedPermanently, Convert.ToInt32(configuration[ServerHttpsPort]));
            app.UseRewriter(options);
        }

        public static void AddHttps(this IServiceCollection services)
        {
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new RequireHttpsAttribute());
            });
        }
    }
}
