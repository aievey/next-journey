/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://dclaevazetcjjkrzczpc.supabase.co/**")],
  },
};

export default nextConfig;
