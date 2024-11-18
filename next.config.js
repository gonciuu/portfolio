/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_PORTFOLIO_EMAIL: process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL,
        NEXT_PUBLIC_PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
    }
}

module.exports = nextConfig
