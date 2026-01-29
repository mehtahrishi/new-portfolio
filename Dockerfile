# Stage 1: Build the React Application
# We use a node image to build the static assets
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project (creates the dist folder)
RUN npm run build

# Stage 2: Serve with Nginx
# We use a lightweight Nginx image to serve the static files
FROM nginx:alpine AS production

# Copy the build output from the previous stage to the Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
