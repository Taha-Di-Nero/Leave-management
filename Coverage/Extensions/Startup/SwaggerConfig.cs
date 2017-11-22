using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace Seac.Coverage.Extensions.Startup
{
    public static class SwaggerConfig
    {
        private static string _endpoint = "/swagger/v1/swagger.json";

        public static void UseSwaggerConf(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint(_endpoint, "Coverage Rest API");
            });
        }

        public static void AddSwagger(this IServiceCollection services)
        {

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Coverage Rest API", Version = "v1" });
            });
        }
    }
}
