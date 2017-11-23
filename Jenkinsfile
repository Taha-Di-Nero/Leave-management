node {
    agent any
	stages { 
		stage 'Checkout'
			checkout scm
		stage 'Angular Build'
			dir('Coverage/webapp/src/app') {
				bat 'npm --version'
				bat 'npm install' 
				bat 'npm run buildNoProgress' 
			}        
		stage('.NetCore Build') {
			bat 'dotnet restore'
			def sqScannerMsBuildHome = tool 'msbuild'
			withSonarQubeEnv('sonar') {
				bat "${sqScannerMsBuildHome}\\MSBuild.SonarQube.Runner.exe begin /k:coverage /d:sonar.host.url=%SONAR_HOST_URL% /d:sonar.login=%SONAR_AUTH_TOKEN%"
				bat 'dotnet msbuild'
				bat "${sqScannerMsBuildHome}\\MSBuild.SonarQube.Runner.exe end /d:sonar.login=%SONAR_AUTH_TOKEN%"
			}
		}
	}
}
