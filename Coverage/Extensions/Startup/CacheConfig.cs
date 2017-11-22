using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;

namespace Seac.Coverage.Extensions.Startup
{
    public static class CacheConfig
    {
        public static void DisableCache(this IApplicationBuilder app)
        {
            app.Use(async (context, next) =>
            {
                HeaderDictionaryTypeExtensions.GetTypedHeaders(context.Response).CacheControl = new CacheControlHeaderValue
                {
                    NoStore = true,
                };
                await next();
            });
        }
    }
}
