const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return [
            {
                source: '/bitbase',
                destination: 'https://zora.co/collect/base:0xd86e6030f57c64de260fcdfabc4d7816fccece07/1',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
