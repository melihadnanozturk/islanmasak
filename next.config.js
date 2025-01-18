/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    basePath: '/islanmasak',
    assetPrefix: '/islanmasak/',
    trailingSlash: true,
}

module.exports = nextConfig