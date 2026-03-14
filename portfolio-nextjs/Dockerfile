# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json dan lockfile
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build aplikasi
RUN npm run build

# Stage 2: Serve dengan Nginx
FROM nginx:alpine

# Copy hasil build dari stage 1 ke folder Nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
