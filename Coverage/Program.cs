using System;
using System.IO;
using System.Net;

using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

using static Seac.Coverage.Utils.ConfigurationKeys;

namespace Coverage
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            var configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(ServerConfFileName).Build();
            WebHost.CreateDefaultBuilder(args).UseStartup<Startup>().UseKestrel(options =>
            {
                options.Listen(IPAddress.Any, Convert.ToInt32(configuration[ServerHttpPort]));
                options.Listen(IPAddress.Any, Convert.ToInt32(configuration[ServerHttpsPort]), listenOptions =>
                {
                    listenOptions.UseHttps(configuration[ServerHttpsCertificatePath], configuration[ServerHttpsCertificatePass]);
                });
            }).Build().Run();
        }
    }
}
