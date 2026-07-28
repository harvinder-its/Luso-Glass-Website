/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/blogs",
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
