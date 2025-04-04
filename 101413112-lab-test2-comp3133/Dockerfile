# Use official Node.js image as base
FROM node:20-alpine AS build-stage

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY .. .

# Build Angular app
RUN npm run build --prod

# Use Nginx to serve the Angular app
FROM nginx:alpine AS production-stage
COPY --from=build-stage /app/dist/101413112-lab-test2-comp3133 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
