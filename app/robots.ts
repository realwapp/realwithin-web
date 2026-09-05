import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/best-journaling-apps-self-reflection"],
      },
    ],
    sitemap: "https://realwithin.com/sitemap.xml",
    host: "https://realwithin.com",
  };
}