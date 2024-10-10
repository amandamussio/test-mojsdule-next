/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: assetHost ? assetHost : undefined,
    async headers() {
        return [
            {
                source: '/:all*(.js|.css)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, must-revalidate',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
