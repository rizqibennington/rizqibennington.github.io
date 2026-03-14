# Rizqi Rahmansyah - Modern Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.
This project has been modernized with a robust **CI/CD pipeline** that deploys automatically to both a **VPS** (with Docker & Nginx) and **GitHub Pages**.

**Live URL:** [https://rizqibennington.com](https://rizqibennington.com)

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS.
- **Responsive & Animated**: Framer Motion for smooth transitions.
- **Auto-Deploy (VPS)**: Commits to `master` trigger a Docker rebuild on the server.
- **Auto-Deploy (Pages)**: Commits to `master` also update the GitHub Pages static site.
- **SSL/HTTPS**: Auto-managed by Certbot & Nginx.

## �️ Architecture

### Directory Structure
- `/portfolio-nextjs` → **Source Code** (Next.js Application).
- `/nginx` → **Nginx Config** for Reverse Proxy.
- `/certbot` → **SSL Certificates** data.
- `.github/workflows` → **CI/CD Pipelines**.
- `docker-compose.yml` → **Orchestration** (Nginx + Certbot + Web).

## 🚀 Getting Started

### 1. Run Locally
```bash
cd portfolio-nextjs
npm install
npm run dev
# Open http://localhost:3000
```

### 2. Deployment (Automatic)
Just push your changes to the `master` branch.
```bash
git add .
git commit -m "Update amazing feature"
git push origin master
```
- **GitHub Actions** will handle the rest (SSH into VPS -> Pull -> Build -> Restart).

### 3. Deployment (Manual / VPS Setup)
If setting up on a new server:
```bash
# Clone Repo
git clone https://github.com/rizqibennington/rizqibennington.github.io.git ~/rizqibennington
cd ~/rizqibennington

# Start Docker (First Time)
./init-letsencrypt.sh  # Follow the prompt to setup SSL
```

## � Project Knowledge for AI Agents
If you are an AI Agent assisting with this project, please refer to [PROJECT_KNOWLEDGE.md](./PROJECT_KNOWLEDGE.md) for detailed architectural rules and deployment instructions.

## 📞 Contact

- **Email**: rizqirahmansyah98@gmail.com
- **WhatsApp**: +6281293062103
- **Website**: https://rizqibennington.com

---
Built with ❤️ by Rizqi Rahmansyah
