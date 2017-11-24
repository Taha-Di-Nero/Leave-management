node {
    stage 'Checkout'
        checkout scm
    stage('.NetCore Build') {
        bat 'dotnet msbuild'
        withSonarQubeEnv('sonar') {
            dir('Coverage') {
                bat 'sonar-scanner'
            }
        }
   }
}
