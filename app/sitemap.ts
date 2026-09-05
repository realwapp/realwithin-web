import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://realwithin.com";

const seoPages = [
  "/overthinking",
  "/repeating-patterns",
  "/replaying-conversations",
  "/second-guessing",
  "/understand-yourself",
  "/guilty-saying-no",
  "/disappointing-people",
  "/reassurance",
  "/overthinking-after-conversations",
  "/notice-patterns",
  "/journaling-app-self-reflection",
  "/over-explaining",
  "/people-pleasing",
  "/emotional-patterns",
  "/trust-your-decisions",
  "/question-every-decision",
  "/self-sabotage",
  "/become-more-self-aware",
  "/self-reflection-questions",
  "/journaling-for-self-awareness",
  "/struggle-to-set-boundaries",
  "/know-your-boundaries",
  "/take-things-personally",
  "/responsible-for-others-feelings",
  "/avoid-difficult-conversations",
  "/compare-myself-to-others",
  "/hard-on-myself",
  "/perfectionism",
  "/not-good-enough",
  "/care-what-people-think",
  "/guilty-putting-myself-first",
  "/get-attached-quickly",
  "/pull-away-when-close",
  "/fear-of-rejection",
  "/struggle-to-ask-for-help",
  "/need-validation-from-others",
  "/assume-the-worst",
  "/struggle-with-uncertainty",
  "/identify-personal-values",
  "/struggle-to-know-what-i-want",
  "/decisions-based-on-values",
  "/what-is-self-reflection",
  "/how-to-be-more-assertive",
  "/build-self-trust",
  "/struggle-to-express-feelings",
  "/understand-your-emotions",
  "/recognise-what-you-need",
  "/avoid-vulnerability",
  "/lose-yourself-in-relationships",
  "/journal-when-you-dont-know-what-to-write",
  "/what-is-self-awareness",
  "/reflect-without-overthinking",
  "/feel-stuck-in-life",
  "/start-self-reflection-habit",
  "/dismiss-my-own-feelings",
  "/needs-are-too-much",
  "/shut-down-during-conflict",
  "/apologise-too-much",
  "/uncomfortable-not-in-control",
  "/why-do-i-get-jealous",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/try`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/self-reflection-library`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/support`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/delete-account`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const seoEntries: MetadataRoute.Sitemap = seoPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...corePages, ...seoEntries];
}