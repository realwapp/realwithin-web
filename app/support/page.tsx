import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[#8c928b]">
          RealWithin Support
        </p>

        <h1 className="mt-4 font-serif text-5xl tracking-tight text-[#292d29] sm:text-6xl">
          How can we help?
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-[#606660]">
          If you need help with RealWithin, your account, Premium or your
          personal information, you can contact us.
        </p>

        <a
          href="mailto:support@realwithin.com"
          className="mt-8 inline-flex rounded-full bg-[#68786b] px-7 py-4 font-semibold text-white transition hover:bg-[#59695c]"
        >
          support@realwithin.com
        </a>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          <SupportCard
            title="Account help"
            text="Help with signing in, accessing your account or other account questions."
          />

          <SupportCard
            title="Premium & subscriptions"
            text="Help with Premium access, purchases, restoring purchases or subscription management."
          />

          <SupportCard
            title="Privacy & your data"
            text="Questions about your personal information, privacy rights or how RealWithin handles your data."
            link="/privacy"
            linkText="Read Privacy Policy"
          />

          <SupportCard
            title="Delete your account"
            text="Find instructions for permanently deleting your RealWithin account and associated information."
            link="/delete-account"
            linkText="Delete account information"
          />
        </div>

        <section className="mt-16 rounded-[36px] bg-[#e9eadf] px-7 py-10 sm:px-10">
          <h2 className="text-2xl font-semibold text-[#414641]">
            When contacting support
          </h2>

          <p className="mt-4 leading-8 text-[#656b65]">
            Please contact us from the email address connected to your
            RealWithin account where possible. Do not include passwords,
            payment-card information or sensitive reflection content in your
            email.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SupportCard({
  title,
  text,
  link,
  linkText,
}: {
  title: string;
  text: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <section className="rounded-[32px] bg-[#fffdf8] p-7 shadow-[0_12px_40px_rgba(70,60,45,0.05)]">
      <h2 className="text-xl font-semibold text-[#414641]">{title}</h2>

      <p className="mt-4 leading-7 text-[#6b716b]">{text}</p>

      {link && linkText && (
        <Link
          href={link}
          className="mt-6 inline-block font-medium text-[#617166] underline underline-offset-4"
        >
          {linkText}
        </Link>
      )}
    </section>
  );
}

function Header() {
  return (
    <header className="border-b border-[#ded8cc]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#303430]">
            <span className="absolute inset-y-0 right-0 w-1/2 bg-[#303430]" />
          </span>
          <span className="font-serif text-2xl text-[#292d29]">RealWithin</span>
        </Link>

        <nav className="flex gap-5 text-sm text-[#737872]">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ded8cc]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-9 text-sm text-[#777c76] sm:flex-row sm:justify-between sm:px-10">
        <p>© 2026 RealWithin</p>

        <div className="flex flex-wrap gap-5">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
          <Link href="/delete-account">Delete account</Link>
        </div>
      </div>
    </footer>
  );
}