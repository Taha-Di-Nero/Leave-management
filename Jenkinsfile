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
        bat 'dotnet restore'
        def sqScannerMsBuildHome = tool 'MsBuild scanner'
        withSonarQubeEnv('sonar') {
            bat "codeAnalysis.bat ${sqScannerMsBuildHome}"
        }
   }
}
