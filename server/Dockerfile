# server/Dockerfile

# ---- Base Node ----
    FROM node:18-alpine AS base
    WORKDIR /app
    
    # ---- Dependencies ----
    COPY package*.json ./
    RUN npm install
    
    # ---- Build ----
    COPY tsconfig.json ./
    COPY src ./src
    RUN npm run build
    
    # ---- Production ----
    FROM node:18-alpine
    WORKDIR /app
    COPY --from=base /app/package*.json ./
    COPY --from=base /app/node_modules ./node_modules
    COPY --from=base /app/dist ./dist
    # Set default environment variables (if needed for local testing)
    ENV DB_HOST=localhost
    ENV DB_USER=postgres
    ENV DB_PASSWORD=postgres
    ENV DB_NAME=employeesdb
    ENV DB_PORT=5432

    # Expose the app port
    EXPOSE 80
    
    CMD ["node", "dist/index.js"]
    