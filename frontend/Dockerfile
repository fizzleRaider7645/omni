# Step 1: Build the React application
FROM node:16 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Start the Vite server
CMD ["npm", "run", "dev"]
EXPOSE 5173
