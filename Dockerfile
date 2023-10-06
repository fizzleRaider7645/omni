# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the rest of the application source
COPY . .

# The default port Vite uses is 3000, so let's expose it
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "dev"]
