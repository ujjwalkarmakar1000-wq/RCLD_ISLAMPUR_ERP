<<<<<<< HEAD
const nextConfig = {
  reactStrictMode: true,
};

=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
      ]
    }];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "rcldislampur.in" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};
>>>>>>> 961d2a222d7d8d64e39c1381cf87d18a3666c664
export default nextConfig;
