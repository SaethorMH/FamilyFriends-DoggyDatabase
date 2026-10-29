/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.8.105"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.thedogapi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/dog-api-uploads-prod/**",
      },
    ],
  },
};

export default nextConfig;
