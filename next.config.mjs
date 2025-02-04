const nextConfig = {
    rewrites: async () => {
        return [
            // v1 routes
            {
                source: '/home',
                destination: '/routes/home',
            },
            {
                source: '/about',
                destination: '/routes/about',
            },
            {
                source: '/contact',
                destination: '/routes/contact',
            }
        ]
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            }
        ];
    }
};

export default nextConfig;