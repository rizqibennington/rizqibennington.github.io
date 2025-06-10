#!/bin/bash

# Deployment script for Next.js Portfolio to GitHub Pages
# This script helps automate the deployment process

set -e

echo "🚀 Starting deployment process for Next.js Portfolio..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the portfolio-nextjs directory."
    exit 1
fi

# Check if Node.js and npm are installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Environment check passed"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the project
echo "🏗️  Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Create .nojekyll file for GitHub Pages
echo "📄 Creating .nojekyll file..."
touch out/.nojekyll

echo "🎉 Deployment preparation complete!"
echo ""
echo "📋 Next steps:"
echo "1. Copy the contents of the 'out' directory to your GitHub Pages repository"
echo "2. Or push this repository to GitHub and let GitHub Actions handle the deployment"
echo ""
echo "🌐 Your site will be available at: https://rizqibennington.github.io"
echo ""
echo "✨ Deployment script completed successfully!"
