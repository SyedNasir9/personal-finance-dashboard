# Step 1: Use Node.js to build the React app
FROM node:18-alpine as build

WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build


# Step 2: Use NGINX to serve the built app
FROM nginx:stable-alpine

# Remove default HTML files from NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copy build files from previous step into NGINX's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Optional: Use custom nginx.conf if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
COPY nginx.conf /etc/nginx/nginx.conf


