node {
    stage 'Checkout'
        checkout scm
    stage 'Angular'
        bat './Coverage/webapp/src/app/npm run build' 
    stage 'Build'
        bat 'dotnet restore'
    stage 'Build'
        bat 'dotnet msbuild'
}
