/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "dclaevazetcjjkrzczpc.supabase.co",
        pathname: "/storage/v1/object/public/pizzas/**",
      },
    ],
  },
};

export default nextConfig;
