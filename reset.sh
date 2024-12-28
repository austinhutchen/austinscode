#!/bin/bash
set -e  # Exit immediately if any command exits with a non-zero status

# Define helper function for logging
log() {
  echo "$(date +'%Y-%m-%d %H:%M:%S') - $1"
}

log "Starting deployment script..."

# Environment Setup
log "Setting NODE_ENV to production..."
export NODE_ENV=production

# Check Node.js and npm versions
log "Checking Node.js version..."
node -v || { log "Node.js is not installed"; exit 1; }
log "Checking npm version..."
npm -v || { log "npm is not installed"; exit 1; }

# Backup existing build (if applicable)
log "Backing up existing build..."
if [ -d "./build" ]; then
  cp -r ./build ./backup || { log "Failed to backup build directory"; exit 1; }
  log "Backup completed."
else
  log "No build directory found to backup."
fi

# Cleanup
log "Removing node_modules and lock files..."
rm -rf node_modules package-lock.json || { log "Failed to remove node_modules or package-lock.json"; exit 1; }

# Clean and verify npm cache
log "Cleaning npm cache..."
npm cache clean --force || { log "Failed to clean npm cache"; exit 1; }
npm cache verify || { log "Failed to verify npm cache"; exit 1; }

# Upgrade and install dependencies
log "Upgrading npm packages..."
npm upgrade || { log "Failed to upgrade npm packages"; exit 1; }
log "Updating npm packages..."
npm update || { log "Failed to update npm packages"; exit 1; }
log "Installing @types/node..."
npm install --save @types/node || { log "Failed to install @types/node"; exit 1; }

# Clean and reproducible install
log "Installing dependencies with npm ci..."
npm ci || { log "Failed to install dependencies"; exit 1; }

# Lint and test
log "Running linting..."
npm run lint || { log "Linting failed"; exit 1; }
log "Running tests..."
npm test || { log "Tests failed"; exit 1; }

# Predeploy and deploy
log "Running predeploy script..."
npm run predeploy || { log "Predeploy script failed"; exit 1; }
log "Running deploy script..."
npm run deploy || { log "Deploy script failed"; exit 1; }

# Optional: Parallelize deployments (uncomment if needed)
log "Running parallel deployments..."
npm run deploy:production &
npm run deploy:staging &


log "Deployment script completed successfully!"
