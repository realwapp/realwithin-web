import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[#8c928b]">
          Account
        </p>

        <h1 className="mt-4 font-serif text-5xl tracking-tight text-[#292d29] sm:text-6xl">
          Delete your account
        </h1>

        <p className="mt-8 text-xl leading-9 text-[#606660]">
          You can permanently delete your RealWithin account and the personal
          RealWithin information associated with it.
        </p>

        <div className="mt-12 space-y-8">
          <Card title="Delete your account in RealWithin">
            <p>Open RealWithin and go to:</p>

            <div className="my-5 rounded-2xl bg-[#ecece1] px-6 py-5 font-semibold text-[#4b514b]">
              Settings → Delete Account
            </div>

            <p>
              Follow the confirmation steps shown in the app. Account deletion
              is irreversible once completed.
            </p>
          </Card>

          <Card title="If you cannot access the app">
            <p>
              You can request account deletion by emailing us from the email
              address connected to your RealWithin account.
            </p>

            <a
              href="mailto:support@realwithin.com?subject=Delete%20my%20RealWithin%20account"
              className="mt-6 inline-flex rounded-full bg-[#68786b] px-6 py-3 font-semibold text-white"
            >
              Email support@realwithin.com
            </a>
          </Card>

          <Card title="What happens to your information">
            <p>
              When your account is deleted, personal information associated
              with your RealWithin account will be deleted or scheduled for
              deletion from our systems and relevant service providers as
              appropriate.
            </p>

            <p className="mt-4">
              Limited information may be retained where necessary for
              legitimate legal, security, fraud-prevention or regulatory
              purposes.
            </p>
          </Card>

          <Card title="Subscriptions">
            <p>
              Deleting your RealWithin account or removing the app from your
              device does not necessarily cancel an active Apple App Store or
              Google Play subscription.
            </p>

            <p className="mt-4">
              If you have an active subscription, you should separately manage
              or cancel it through Apple, Google or the subscription-management
              options available in RealWithin.
            </p>
          </Card>

          <p className="text-sm leading-6 text-[#777d77]">
            For more information about how RealWithin handles personal
            information, read our{" "}
            <Link
              href="/privacy"
              className="font-medium text-[#617166] underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[32px] bg-[#fffdf8] p-7 shadow-[0_12px_40px_rgba(70,60,45,0.05)] sm:p-9">
      <h2 className="text-2xl font-semibold text-[#414641]">{title}</h2>
      <div className="mt-5 leading-8 text-[#666c66]">{children}</div>
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