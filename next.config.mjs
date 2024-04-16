/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {protocol: 'https', port:'', hostname: 'upload.wikimedia.org'},
      {protocol: 'https', port:'', hostname: 'media.istockphoto.com'},
    ]
  }
};

export default nextConfig;
