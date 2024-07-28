# Use an official Node.js runtime as a parent image
FROM node:18 as build

# Declaring environment variables
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /new-web-app


# Step 1: Build the React application
COPY package.json .
COPY yarn.lock .

RUN yarn install
RUN yarn add @types/react-router-dom --dev
COPY . .
RUN yarn run build

# Step 2: Serve the application using Nginx
FROM nginx:alpine as production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /new-web-app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
