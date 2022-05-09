# ----------------------------------------------------------------------------
# Stage 1: Build the image using dependencies from package.json and lock files
# ----------------------------------------------------------------------------
FROM node:16.14.0-alpine AS build
WORKDIR /app

# Cache bursting. Just install dependencies and build on them
COPY package*.json /app/
RUN npm install
COPY . .

# --------------------------------------
# Stage 2: Run the prod app using nginx
# --------------------------------------
RUN npm run build
FROM nginx:alpine

# Bring the build files and serve using nginx
COPY --from=build /app/build/ /usr/share/nginx/html