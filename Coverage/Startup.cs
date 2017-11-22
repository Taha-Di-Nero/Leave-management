using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using Seac.Coverage.Extensions.Startup;
using Seac.Coverage.Quartz;

namespace Coverage
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            Configuration = configuration;
            HostingEnvironment = env;
        }

        public IHostingEnvironment HostingEnvironment { get; }
        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMySqlDbContext(Configuration);
            services.AddTransient();
            services.AddLogging();
            if (HostingEnvironment.IsDevelopment())
            {
                services.AddSwagger();
            }
            services.AddHttps();
            services.AddDistributedMemoryCache();
            services.AddSession();
            services.AddAutoMapper();
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddAuthenticationManager();
            services.AddGzipCompression();

            services.AddMvc();
            services.AddQuartz(typeof(NotificationsJob));
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseSession();
            app.DisableCache();
            app.UseHttps(Configuration);
            loggerFactory.AddConsole();
            if (env.IsDevelopment())
            {
                app.UseSwaggerConf();
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }

            app.UseResponseCompression();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseBasicAuthentication();
            app.UseMvc();

            app.StartQuartz();
        }
    }
}
