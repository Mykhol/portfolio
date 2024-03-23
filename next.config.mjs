/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
            hostname: "leerob.io",
            pathname: "**"
        }
      ]  
    }
};

export default nextConfig;
