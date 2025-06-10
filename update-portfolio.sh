#!/bin/bash

# Portfolio Update Script
# This script automates the build and deployment process

set -e

echo "🚀 Starting portfolio update process..."

# Check if we're in the right directory
if [ ! -d "portfolio-nextjs" ]; then
    echo "❌ Error: portfolio-nextjs directory not found. Please run this script from the repository root."
    exit 1
fi

# Navigate to Next.js project
echo "📁 Navigating to Next.js project..."
cd portfolio-nextjs

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

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

# Go back to root directory
echo "📂 Returning to root directory..."
cd ..

# Remove old build files (but keep important files)
echo "🧹 Cleaning old build files..."
rm -rf _next *.html *.js *.svg *.ico *.txt 404/

# Copy new build files
echo "📋 Copying new build files..."
cp -r portfolio-nextjs/out/* .

# Create .nojekyll file for GitHub Pages
echo "📄 Creating .nojekyll file..."
touch .nojekyll

# Add files to git
echo "📝 Adding files to git..."
git add .

# Ask for commit message
echo ""
read -p "📝 Enter commit message (or press Enter for default): " commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update portfolio content and rebuild"
fi

# Commit changes
echo "💾 Committing changes..."
git commit -m "$commit_message"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin master

echo ""
echo "🎉 Portfolio update completed successfully!"
echo "🌐 Your website will be updated at: https://rizqibennington.github.io"
echo "⏱️  Changes may take 1-2 minutes to appear on the live site."
echo ""
echo "✨ Update process finished!"
