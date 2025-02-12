# Use the official Bun image
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb (if it exists)
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

ARG NEXT_PUBLIC_PORTFOLIO_EMAIL
ARG NEXT_PUBLIC_PORTFOLIO_URL
ENV NEXT_PUBLIC_PORTFOLIO_EMAIL=${NEXT_PUBLIC_PORTFOLIO_EMAIL}
ENV NEXT_PUBLIC_PORTFOLIO_URL=${NEXT_PUBLIC_PORTFOLIO_URL}


# Build the Next.js application
RUN bun run build

EXPOSE 3000

# Start the Next.js application
CMD ["bun", "run", "start"]
