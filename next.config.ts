import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'douniacodes.com' },
        ],
        destination: 'https://www.douniacodes.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
