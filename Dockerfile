# Use the official Bun image
FROM oven/bun:1.4.4

# Set the working directory
WORKDIR /app

# Copy manifest, lockfile and bunfig (enforces 7-day minimumReleaseAge)
COPY package.json bun.lock bunfig.toml ./

# Install dependencies
RUN bun install --frozen-lockfile

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
