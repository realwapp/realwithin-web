import Link from "next/link";
import type { ReactNode } from "react";

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
        {/* INTRO */}
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl tracking-tight text-[#292d29] sm:text-5xl">
            Delete your account
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#606660]">
            You can permanently delete your RealWithin account and the personal
            information linked to it.
          </p>
        </div>

        {/* DELETE OPTIONS */}
        <div className="mt-10 space-y-5">
          <Card title="Delete your account in RealWithin">
            <p>Open RealWithin and go to:</p>

            <div className="my-4 rounded-[18px] bg-[#ecece1] px-5 py-4 font-semibold text-[#4b514b]">
              Settings → Delete Account
            </div>

            <p>
              Follow the confirmation steps in the app. Once your account has
              been deleted, this cannot be undone.
            </p>
          </Card>

          <Card title="If you cannot access the app">
            <p>
              You can ask us to delete your account by emailing us from the
              email address linked to your RealWithin account.
            </p>

            <a
              href="mailto:support@realwithin.com?subject=Delete%20my%20RealWithin%20account"
              className="mt-5 inline-flex rounded-full bg-[#68786b] px-6 py-3 font-semibold text-white transition hover:bg-[#59695c]"
            >
              Email support
            </a>

            <p className="mt-3 text-sm text-[#7f857f]">
              support@realwithin.com
            </p>
          </Card>

          <Card title="What happens to your information">
            <p>
              When your account is deleted, personal information linked to your
              RealWithin account will be deleted or scheduled for deletion from
              our systems and relevant service providers.
            </p>

            <p className="mt-4">
              Some limited information may be kept where required for legal,
              security, fraud-prevention or regulatory reasons.
            </p>
          </Card>

          <Card title="Subscriptions">
            <p>
              Deleting your RealWithin account or removing the app from your
              device does not necessarily cancel an active Apple App Store or
              Google Play subscription.
            </p>

            <p className="mt-4">
              If you have an active subscription, cancel or manage it separately
              through Apple, Google or the subscription options available in
              RealWithin.
            </p>
          </Card>

          <p className="pt-2 text-sm leading-6 text-[#777d77]">
            For more information about how RealWithin handles your personal
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
  children: ReactNode;
}) {
  return (
    <section className="rounded-[24px] border border-[#e4ded3] bg-[#fffdf8] p-6 sm:p-7">
      <h2 className="text-xl font-semibold text-[#414641]">
        {title}
      </h2>

      <div className="mt-4 leading-7 text-[#666c66]">
        {children}
      </div>
    </section>
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