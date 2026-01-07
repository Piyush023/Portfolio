# Use an official node image as the base (Node version 23)
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies (including devDependencies needed for build)
RUN npm ci

# Copy the rest of the application code
# Using COPY with --chown to ensure proper permissions
COPY --chown=node:node . .

# Build the application with ESLint warnings as warnings, not errors
# Clear Next.js cache and node_modules/.cache before building to ensure fresh build
RUN rm -rf .next node_modules/.cache && \
    npm run build

# Switch to non-root user for security
USER node

# Start the application in production mode
CMD ["npm", "start"]