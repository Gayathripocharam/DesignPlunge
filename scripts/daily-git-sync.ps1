$ErrorActionPreference = "Stop"

$projectPath = "C:\Users\Pocha\OneDrive\Attachments\Design Plunge\Design Plunge\Gayathri\DesignPlunge"

Set-Location $projectPath

Write-Host "Starting daily Git sync..."
Write-Host "Project: $projectPath"

# Make sure we are inside the Git repository
git rev-parse --is-inside-work-tree

# Check for changes
$status = git status --porcelain

if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "No changes detected. Nothing to commit."
    exit 0
}

# Stage changes
git add .

# Create dated commit
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "chore: daily project sync - $timestamp"

# Push to GitHub
git push

Write-Host "Daily Git sync completed successfully."
