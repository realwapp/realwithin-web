import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        {/* INTRO */}
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl tracking-tight text-[#292d29] sm:text-5xl">
            How can we help?
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#606660]">
            If you need help with RealWithin, your account, Premium or your
            data, you can contact us.
          </p>

          <a
            href="mailto:support@realwithin.com"
            className="mt-7 inline-flex rounded-full bg-[#68786b] px-6 py-3 font-semibold text-white transition hover:bg-[#59695c]"
          >
            Email support
          </a>

          <p className="mt-3 text-sm text-[#7f857f]">
            support@realwithin.com
          </p>
        </div>

        {/* SUPPORT OPTIONS */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <SupportCard
            title="Account help"
            text="Help with signing in, accessing your account or other account questions."
            href="mailto:support@realwithin.com?subject=RealWithin%20account%20help"
            action="Contact support"
            email
          />

          <SupportCard
            title="Premium & subscriptions"
            text="Help with Premium, purchases, restoring purchases or managing your subscription."
            href="mailto:support@realwithin.com?subject=RealWithin%20Premium%20support"
            action="Contact support"
            email
          />

          <SupportCard
            title="Privacy & your data"
            text="Questions about your data, privacy rights or how RealWithin handles your information."
            href="/privacy"
            action="Read Privacy Policy"
          />

          <SupportCard
            title="Delete your account"
            text="See how to permanently delete your RealWithin account and its data."
            href="/delete-account"
            action="Delete account information"
          />
        </div>

        {/* CONTACT NOTE */}
        <section className="mt-12 rounded-[28px] border border-[#dfe0d5] bg-[#e9eadf] px-6 py-7 sm:px-8">
          <h2 className="text-xl font-semibold text-[#414641]">
            When contacting support
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-[#656b65]">
            If possible, email us from the address linked to your RealWithin
            account. Do not include passwords, payment-card details or private
            Reflection content in your email.
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
  href,
  action,
  email = false,
}: {
  title: string;
  text: string;
  href: string;
  action: string;
  email?: boolean;
}) {
  const cardClasses =
    "group block rounded-[24px] border border-[#e4ded3] bg-[#fffdf8] p-6 transition hover:-translate-y-0.5 hover:border-[#cdd2c8] hover:bg-[#fbfaf4] hover:shadow-[0_10px_30px_rgba(70,60,45,0.05)]";

  const content = (
    <>
      <h2 className="text-lg font-semibold text-[#414641]">
        {title}
      </h2>

      <p className="mt-3 leading-7 text-[#6b716b]">
        {text}
      </p>

      <div className="mt-5 flex items-center gap-2 font-medium text-[#617166]">
        <span className="underline underline-offset-4">
          {action}
        </span>

        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </>
  );

  if (email) {
    return (
      <a href={href} className={cardClasses}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClasses}>
      {content}
    </Link>
  );
}

function Header() {
  return (
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

        <nav className="flex items-center gap-5 text-sm text-[#666c66]">
          <Link
            href="/#journey"
            className="hidden transition hover:text-[#303430] sm:inline"
          >
            How it works
          </Link>

          <Link
            href="/try"
            className="rounded-full bg-[#68786b] px-5 py-2.5 font-semibold text-white transition hover:bg-[#5d6c60]"
          >
            Try RealWithin
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ded8cc]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[#777c76] sm:flex-row sm:items-center sm:justify-between lg:px-10">
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

          <Link href="/delete-account" className="hover:text-[#343934]">
            Delete account
          </Link>
        </div>
      </div>
    </footer>
  );
}