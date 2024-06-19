const nextConfig = {

    rewrites: async () => {
        return [
            {
                source: '/home',
                destination: '/routes/v1/home',
            },
            {
                source: '/about',
                destination: '/routes/v1/about',
            },
            {
                source: '/contact',
                destination: '/routes/v1/contact',
            },
            {
                source: '/work-history',
                destination: '/routes/v1/work-history',
            },
            {
                source: '/skills',
                destination: '/routes/v1/skills',
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