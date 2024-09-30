/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'referrer-policy',
            value: 'no-referrer-when-downgrade',
          },
        ]
      }
    ]
  }
};

export default nextConfig;
