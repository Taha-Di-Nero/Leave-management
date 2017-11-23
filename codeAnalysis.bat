%1/SonarQube.Scanner.MSBuild.exe begin /k:"coverage" /d:sonar.host.url="http://localhost:9000" /d:sonar.login="f410b0383635c1a35a0e0c705ad84f99b2afebaa"
dotnet msbuild
%1/SonarQube.Scanner.MSBuild.exe end /d:sonar.login="f410b0383635c1a35a0e0c705ad84f99b2afebaa"
