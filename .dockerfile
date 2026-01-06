# Use an official node image as the base (Node version 23)
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm ci --only=production=false

# Copy the rest of the application code
# Using COPY with --chown to ensure proper permissions
COPY --chown=node:node . .

# Build the application with ESLint warnings as warnings, not errors
# Clear Next.js cache before building to ensure fresh build
RUN rm -rf .next && npm run build

# Expose the application port
EXPOSE 3000

# Switch to non-root user for security
USER node

# Start the application in production mode
CMD ["npm", "start"]