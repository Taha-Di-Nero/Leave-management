node {
    stage 'Checkout'
        checkout scm
    stage 'Angular Build'
        dir('Coverage/webapp/src/app') {
            bat 'npm --version'
            bat 'npm install' 
            bat 'npm run build' 
        }        
    stage('.NetCore Build') {
        bat 'dotnet restore'
        bat 'dotnet msbuild'
    }
}
