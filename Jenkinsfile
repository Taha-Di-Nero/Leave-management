node {
    stage 'Checkout'
        checkout scm
    stage('.NetCore Build') {
        def sqScannerMsBuildHome = tool 'MsBuild scanner'
        withSonarQubeEnv('sonar') {
            bat '@powershell -ExecutionPolicy ByPass -File codeAnalysis.ps1'
        }
   }
}
