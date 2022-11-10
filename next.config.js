/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: { appDir: false },
  reactStrictMode: false,
  images: {
    formats: ["image/webp"],
    domains: [
      "stage-unbox-bling-images.s3.amazonaws.com",
      "unbox-bling-images.s3.amazonaws.com",
      "admin.stage-unbox.com.br",
      "admin.unbox.com.br",
      "unbox-customer-private-documents-stage.s3.amazonaws.com",
      "unbox-customer-private-documents.s3.amazonaws.com",
      "unbox-cms-strapi-images.s3.amazonaws.com",
      "unbox-customer-images-production.s3.amazonaws.com",
      "unbox-customer-private-documents-production.s3.amazonaws.com",
      "unbox-customer-store-images.s3.amazonaws.com",
      "unbox-logo-images.s3.amazonaws.com",
      "unbox-storefront-production.s3.amazonaws.com",
      "unbox-storefront-production-serverless.s3.amazonaws.com",
      "unbox-images.s3.amazonaws.com",
      "unbox-stage-images.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
