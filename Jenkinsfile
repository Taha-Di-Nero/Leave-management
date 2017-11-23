node {
    stage 'Checkout'
        checkout scm
    stage 'Angular'
        dir('Coverage/webapp/src/app') {
            bat 'npm --version'
            bat 'npm install' 
            bat 'npm run build' 
        }        
    stage 'Build'
        bat 'dotnet restore'
    stage 'Build'
        bat 'dotnet msbuild'
}
