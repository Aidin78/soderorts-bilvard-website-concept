import type { NextConfig } from "next";

/**
 * Permanent redirects from the current WordPress URLs so existing links and
 * search rankings carry over. Thin location pages (bilverkstad-*, bilservice-*)
 * and unverified brake pages (bromsbyte-*) are consolidated, not recreated.
 */
const legacyRedirects: [source: string, destination: string][] = [
  ["/biltvatt-stockholm", "/tjanster/biltvatt"],
  ["/bilrekond-i-stockholm", "/tjanster/bilrekond"],
  ["/bilrekond-stockholm", "/tjanster/bilrekond"],
  ["/dackskifte-dackbyte-stockholm", "/tjanster/dackbyte"],
  ["/dackhotell-stockholm", "/tjanster/dackhotell"],
  ["/dackverkstad-stockholm", "/tjanster/dackverkstad"],
  ["/dack-pa-lager", "/tjanster/dackverkstad"],
  ["/bilforvaring-och-mc-forvaring", "/tjanster/ovriga-tjanster"],
  ["/prislista", "/priser"],
  ["/boka-tid-v2", "/boka"],
  ["/boka-tid-ovrigt", "/boka"],
  ["/hitta-hit", "/kontakt"],
  ["/cookie-policy", "/integritet"],
  ["/dataskyddspolicy", "/integritet"],
  ["/blog", "/tjanster"],
  ["/2022/04/28/lackforsegling", "/tjanster/ovriga-tjanster"],
  ["/2022/05/12/tonade-fonster-solfilm", "/tjanster/ovriga-tjanster"],
  ["/2022/05/12/motortvatt-stockholm", "/tjanster/ovriga-tjanster"],
  ["/2022/05/01/utvandig-invandig-bilrekond", "/tjanster/bilrekond"],
  ["/2022/05/25/utvandig-och-invandig-biltvatt", "/tjanster/biltvatt"],
  ["/bilverkstad-:area", "/"],
  ["/bilservice-:area", "/tjanster"],
  ["/bromsbyte-:area", "/tjanster"],
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
