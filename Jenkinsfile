node {
    stage 'Checkout'
        checkout scm
    stage('.NetCore Build') {
        def sqScannerMsBuildHome = tool 'MsBuild scanner'
        withSonarQubeEnv('sonar') {
            dir('Coverage') {
                bat 'sonar-scanner'
            }
        }
   }
}
