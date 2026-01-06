# Use an official node image as the base (Node version 23)
FROM node:23-alpine

# Build arguments for cache busting
ARG BUILD_DATE
ARG VCS_REF
LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.vcs-ref=$VCS_REF

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
    npm run build && \
    # Remove dev dependencies to reduce image size
    npm prune --production

# Expose the application port
EXPOSE 3000

# Switch to non-root user for security
USER node

# Start the application in production mode
CMD ["npm", "start"]