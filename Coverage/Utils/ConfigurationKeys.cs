namespace Seac.Coverage.Utils
{
    public static class ConfigurationKeys
    {
        public static readonly string ServerConfFileName = "hosting.json";
        public static readonly string ServerName = "Server:name";
        public static readonly string ServerHttpPort = "Server:Endpoints:Http:Port";
        public static readonly string ServerHttpsPort = "Server:Endpoints:Https:Port";
        public static readonly string ServerHttpsCertificatePath = "Certificates:Https:Path";
        public static readonly string ServerHttpsCertificatePassword = "Certificates:Https:Password";

        public static readonly string ActiveDirectoryUrl = "Authentication:ActiveDirectory:ConnectionUr";
        public static readonly string ActiveDirectoryDomain = "Authentication:ActiveDirectory:DomainName";

        public static readonly string AppConnectionString = "Database:AppConnectionString";
        public static readonly string QuartzConnectionString = "Database:QuartzConnectionString";

    }
}