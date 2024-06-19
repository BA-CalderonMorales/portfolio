const nextConfig = {

    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/routes/v1/home',
                permanent: true,
            },
            {
                source: '/home',
                destination: '/routes/v1/home',
                permanent: true,
            },
            {
                source: '/about',
                destination: '/routes/v1/about',
                permanent: true,
            },
            {
                source: '/contact',
                destination: '/routes/v1/contact',
                permanent: true,
            },
            {
                source: '/work-history',
                destination: '/routes/v1/work-history',
                permanent: true,
            },
            {
                source: '/skills',
                destination: '/routes/v1/skills',
                permanent: true,
            }
        ];
    }

};

export default nextConfig;