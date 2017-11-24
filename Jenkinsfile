node {
    stage 'Checkout'
        checkout scm
    stage('.NetCore Build') {
        def sqScannerMsBuildHome = tool 'MsBuild scanner'
        withSonarQubeEnv('sonar') {
            bat '@sonar-scanner'
        }
   }
}
