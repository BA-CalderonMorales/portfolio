/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/v1/home',
                permanent: true
            },
            {
                source: '/home',
                destination: '/v1/home',
                permanent: true
            },
            {
                source: '/about',
                destination: '/v1/about',
                permanent: true
            },
            {
                source: '/work-history',
                destination: '/v1/work-history',
                permanent: true
            },
            {
                source: '/skills',
                destination: '/v1/skills',
                permanent: true
            },
            {
                source: '/contact',
                destination: '/v1/contact',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
