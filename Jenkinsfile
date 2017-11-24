node {
    stage 'Checkout'
        checkout scm
    stage 'Angular Build'
        dir('Coverage/webapp/src/app') {
            bat 'npm --version'
            bat 'npm install' 
            bat 'npm run buildNoProgress' 
    }        
    stage('.NetCore Build') {
        bat 'dotnet clean'
        bat 'dotnet restore'
        def sqScannerMsBuildHome = tool 'MsBuild scanner'
        withSonarQubeEnv('sonar') {
            bat "MSBuild.SonarQube.Runner.exe begin /k:coverage /d:sonar.host.url=%SONAR_HOST_URL% /d:sonar.login=%SONAR_AUTH_TOKEN%"
            bat 'dotnet msbuild'
            bat "MSBuild.SonarQube.Runner.exe end"
        }
   }
}
