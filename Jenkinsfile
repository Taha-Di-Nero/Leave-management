node {
    stage 'Checkout'
        checkout scm
    stage 'Build'
        bat 'dotnet restore'
    stage 'Build'
        bat 'dotnet msbuild'
}
