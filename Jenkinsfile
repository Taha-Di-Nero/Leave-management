node {
    stage 'Checkout'
        checkout scm
    stage 'Build'
        bat 'dotnet restore --configfile NuGet.Config'
    stage 'Build'
        bat 'dotnet msbuild'
}
