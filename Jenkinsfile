node {
    stage 'Checkout'
        checkout scm
    stage('.NetCore Build') {
        def sqScannerMsBuildHome = tool 'MsBuild scanner'
        withSonarQubeEnv('sonar') {
            bat "MSBuild.SonarQube.Runner.exe begin /k:coverage /d:sonar.host.url=%SONAR_HOST_URL% /d:sonar.login=%SONAR_AUTH_TOKEN%"
            bat 'dotnet msbuild'
            bat "MSBuild.SonarQube.Runner.exe end"
        }
   }
}
