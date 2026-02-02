/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dclaevazetcjjkrzczpc.supabase.co",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
