node {
    stage 'Checkout'
        checkout scm
    stage 'Angular'
        dir './Coverage/webapp/src/app'
        bat 'npm run build'
    stage 'Build'
    dir './'
        bat 'dotnet restore'
    stage 'Build'
        bat 'dotnet msbuild'
}
