# ----------------------------------------------------------------------------
# Stage 1: Build the image using dependencies from package.json and lock files
# ----------------------------------------------------------------------------
FROM node:16.14.0-alpine AS build
WORKDIR /app

# Cache bursting. Just install dependencies and build on them
COPY package*.json /app/
RUN npm install --silent
COPY . .

# --------------------------------------
# Stage 2: Run the prod app using nginx
# --------------------------------------
RUN npm run build
FROM nginx:alpine

# Copying the nginx conf files so that it's in sync with react-router-dom
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Bring the build files and serve using nginx
COPY --from=build /app/build/ /usr/share/nginx/html