/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PORTFOLIO_EMAIL: process.env.PORTFOLIO_EMAIL,
        PORTFOLIO_URL: process.env.PORTFOLIO_URL,
    }
}

module.exports = nextConfig
