FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./app .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# FROM node:14
# # Set the working directory inside the container
# WORKDIR /app
# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./
# # Install dependencies
# RUN npm install
# # Copy the entire project to the working directory
# COPY . .
# # Build the React app for production
# RUN npm run build
# # Expose port 3000 to the outside world
# EXPOSE 3000
# # Command to run the React app
# CMD ["npm", "start"]
