/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { hostname: "id.m.wikipedia.org" }
        ]
    }
};

export default nextConfig;
