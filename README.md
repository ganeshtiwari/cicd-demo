# Simple CI/CD Demo

A minimal project demonstrating CI/CD with GitHub Actions and GitHub Pages.

## What This Demonstrates

1. **Simple Web App**: A basic counter application with increment/decrement buttons
2. **Automated Testing**: Simple Jest tests to verify the counter functionality
3. **CI/CD Pipeline**: GitHub Actions workflow that:
   - Runs tests on every push
   - Deploys to GitHub Pages when tests pass on the main branch
   - Your page will be available at https://<your-username>.github.io/repo-name/

## How to Use

1. **Fork or Clone this Repository**

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set the source to "GitHub Actions"

3. **Make a Change**:
   - Modify any file
   - Commit and push to the main branch
   - Watch the GitHub Actions workflow run automatically
   - See your updates deployed to GitHub Pages

## Project Files

- `index.html`: Simple webpage with a counter
- `app.js`: JavaScript to handle counter functionality
- `app.test.js`: Basic tests for the counter
- `package.json`: Project configuration with testing setup
- `.github/workflows/deploy.yml`: GitHub Actions workflow definition

## Local Development

1. **Install dependencies**:
   ```
   npm install
   ```

2. **Run tests locally**:
   ```
   npm test
   ```

3. **Open `index.html` in your browser** to see the application
   ```
   python3 -m http.server
   ```