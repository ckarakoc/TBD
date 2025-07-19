$projects = Get-ChildItem -Directory .\docs\

foreach ($project in $projects) {
    $browserPath = Join-Path $project.FullName "browser"

    if (Test-Path $browserPath) {
        Write-Host "Flattening $browserPath → $($project.FullName)"

        robocopy $browserPath $project.FullName /MOVE /E > $null

        # Copy index.html to 404.html inside final folder
        $index = Join-Path $project.FullName "index.html"
#        $errorActionPreference = "SilentlyContinue"
        Copy-Item $index (Join-Path $project.FullName "404.html") -Force
#        $errorActionPreference = "Continue"

        Write-Host "Copied index.html to 404.html in $($project.FullName)"
    }
}
