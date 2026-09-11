import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shared from RealWithin",
  description:
    "Discover RealWithin, a place to reflect on how you feel and notice patterns and changes over time.",

  openGraph: {
    title: "Shared from RealWithin",
    description:
      "Discover RealWithin, a place to reflect on how you feel and notice patterns and changes over time.",
    url: "https://realwithin.com/share/you",
    siteName: "RealWithin",
    type: "website",
    images: [
      {
        url: "https://realwithin.com/realwithin-share.png",
        alt: "RealWithin",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shared from RealWithin",
    description:
      "Discover RealWithin, a place to reflect on how you feel and notice patterns and changes over time.",
    images: ["https://realwithin.com/realwithin-share.png"],
  },
};

export default function SharedYouPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      {/* HEADER */}
      <header className="border-b border-[#e3ddd2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#303430]">
              <span className="absolute inset-y-0 right-0 w-1/2 bg-[#303430]" />
            </span>

            <span className="font-serif text-2xl text-[#292d29]">
              RealWithin
            </span>
          </Link>

          <Link
            href="#download"
            className="rounded-full bg-[#68786b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5d6c60]"
          >
            Download app
          </Link>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute -left-40 top-0 h-[410px] w-[410px] rounded-full bg-[#efe5d5]/70 blur-3xl" />
          <div className="absolute -right-40 top-0 h-[440px] w-[440px] rounded-full bg-[#e7e9d9]/70 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-24 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a88353]">
              Shared from RealWithin
            </p>

            <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Someone shared a RealWithin YOU insight with you.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#646a64]">
              YOU is built from reflections over time. It can help someone
              notice themes, changes and perspectives in what they have shared.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#646a64]">
              Your own RealWithin will be based only on what you choose to
              share.
            </p>

            <div
              id="download"
              className="mt-9 flex flex-col items-center scroll-mt-24"
            >
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://apps.apple.com/app/id6803466360"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download RealWithin on the App Store"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-[50px] w-auto"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=app.realwithin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get RealWithin on Google Play"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-[65px] w-auto"
                  />
                </a>
              </div>

              <Link
                href="/try"
                className="mt-5 text-sm font-semibold text-[#687068] underline decoration-[#aeb5ad] underline-offset-4 transition hover:text-[#303430]"
              >
                Try the web preview
              </Link>

              <p className="mt-2 text-sm text-[#858a84]">
                No account needed for the preview.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-y border-[#ded8cc] bg-[#fdfaf4]">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <div className="grid gap-8 text-center sm:grid-cols-3">
              <div>
                <h2 className="text-lg font-semibold text-[#414641]">
                  Reflect
                </h2>

                <p className="mx-auto mt-2 max-w-xs text-[15px] leading-6 text-[#747a74]">
                  Share how you feel and what is on your mind.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#414641]">
                  Notice
                </h2>

                <p className="mx-auto mt-2 max-w-xs text-[15px] leading-6 text-[#747a74]">
                  See possible patterns and meaningful changes across
                  different days.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#414641]">
                  Understand
                </h2>

                <p className="mx-auto mt-2 max-w-xs text-[15px] leading-6 text-[#747a74]">
                  Build a clearer picture from your own reflections over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL DOWNLOAD CTA */}
        <section className="border-b border-[#ded8cc] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-10 lg:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f] sm:text-4xl">
              Discover what you might notice over time.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[#6c726c]">
              Download RealWithin and start with how you feel today.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://apps.apple.com/app/id6803466360"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download RealWithin on the App Store"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-[50px] w-auto"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=app.realwithin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get RealWithin on Google Play"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-[65px] w-auto"
                />
              </a>
            </div>

            <Link
              href="/try"
              className="mt-5 inline-flex text-sm font-semibold text-[#687068] underline decoration-[#aeb5ad] underline-offset-4 transition hover:text-[#303430]"
            >
              Or try the web preview
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#f8f3e9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[#747973] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 RealWithin</p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-[#343934]">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-[#343934]">
              Terms
            </Link>

            <Link href="/support" className="hover:text-[#343934]">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}