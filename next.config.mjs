/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {protocol: 'https', port:'', hostname: 'upload.wikimedia.org'},
    ]
  }
};

export default nextConfig;
