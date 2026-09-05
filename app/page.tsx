import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

        <nav className="flex items-center gap-5 text-sm text-[#666c66]">
          <Link
            href="#journey"
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

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute -left-40 top-0 h-[410px] w-[410px] rounded-full bg-[#efe5d5]/70 blur-3xl" />
          <div className="absolute -right-40 top-0 h-[440px] w-[440px] rounded-full bg-[#e7e9d9]/70 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:py-20 lg:px-10 lg:py-24">
            <h1 className="mx-auto max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[#292d29] sm:text-6xl lg:text-[72px]">
              Understand yourself.
              <span className="mt-2 block text-[#a88353]">
                Over time.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#646a64]">
              RealWithin helps you reflect on everyday moments and notice
              patterns, changes and insights that can be easy to miss over
              time.
            </p>

            <div className="mt-8 flex flex-col items-center">
              <Link
                href="/try"
                className="rounded-full bg-[#68786b] px-7 py-3.5 font-semibold text-white transition hover:bg-[#5d6c60]"
              >
                Try RealWithin
              </Link>

              <p className="mt-3 text-sm text-[#858a84]">
                No account needed.
              </p>

              <Link
                href="#journey"
                className="mt-5 text-sm font-medium text-[#687068] underline decoration-[#b8bdb6] underline-offset-4 transition hover:text-[#303430]"
              >
                See how it works
              </Link>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section
          id="journey"
          className="border-y border-[#ded8cc] bg-[#fdfaf4]"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#414641] sm:text-4xl">
                See how RealWithin works.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <JourneyCard
                icon="/assets/tabs/reflect.svg"
                title="Reflect"
                text="Share how you feel and what is on your mind today."
              />

              <JourneyCard
                icon="/assets/tabs/patterns.svg"
                title="Patterns"
                text="Notice patterns in how you respond."
              />

              <JourneyCard
                icon="/assets/tabs/memory.svg"
                title="Memory"
                text="See when something meaningful starts to change."
              />

              <JourneyCard
                icon="/assets/tabs/you.svg"
                title="YOU"
                text="Discover deeper insights as your reflections build."
              />
            </div>
          </div>
        </section>

        {/* PRODUCT PROOF */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto h-[390px] w-full max-w-[460px] overflow-hidden rounded-[30px] border border-[#ded8cc] bg-[#f3efe6] shadow-[0_16px_45px_rgba(70,60,45,0.06)] sm:h-[420px]">
                <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#efe5d5]/65 blur-3xl" />
                <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#e4e7d8]/70 blur-3xl" />

                <div className="absolute inset-x-5 bottom-0 top-0 overflow-hidden rounded-t-[24px] sm:inset-x-8">
                  <Image
                    src="/pattern-screen.png"
                    alt="A RealWithin Pattern based on reflections"
                    width={828}
                    height={1792}
                    className="absolute left-1/2 top-[-155px] w-[320px] max-w-none -translate-x-1/2 sm:top-[-175px] sm:w-[360px]"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#414641] sm:text-4xl">
                A single moment can become part of a bigger picture.
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-[#6c726c]">
                Across different days, RealWithin can spot repeated patterns
                and small changes.
              </p>

              <p className="mt-4 max-w-lg text-lg leading-8 text-[#6c726c]">
                It does not define you. It gives you another way to look at
                what you have shared.
              </p>
            </div>
          </div>
        </section>

        {/* TRY REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-10 lg:py-20">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f] sm:text-4xl">
                Start with how you feel right now.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#6c726c]">
                Choose how you feel and get a preview of how the app works.
              </p>

              <Link
                href="/try"
                className="mt-8 inline-flex rounded-full bg-[#68786b] px-7 py-3.5 font-semibold text-white transition hover:bg-[#5d6c60]"
              >
                Try RealWithin
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <TrustItem
              title="You choose what to share"
              text="Share a feeling, a few words, or more when you want to."
            />

            <TrustItem
              title="Built from what you share"
              text="RealWithin uses your reflections to build Patterns, Memory and YOU."
            />

            <TrustItem
              title="Not therapy or diagnosis"
              text="RealWithin is for personal reflection and self-understanding."
            />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden border-t border-[#ded8cc] bg-[#fbf7ef]">
          <div className="absolute left-1/2 top-[-180px] h-[360px] w-[650px] -translate-x-1/2 rounded-full bg-[#eee5d5]/60 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:px-10 lg:py-20">
            <p className="text-lg font-medium text-[#5f655f]">
              Curious what you might notice?
            </p>

            <Link
              href="/try"
              className="mt-6 inline-flex rounded-full bg-[#68786b] px-7 py-3.5 font-semibold text-white transition hover:bg-[#5d6c60]"
            >
              Try RealWithin
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#ded8cc] bg-[#f8f3e9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[#747973] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 RealWithin</p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/self-reflection-library"
              className="hover:text-[#343934]"
            >
              Explore
            </Link>

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
    </div>
  );
}

function JourneyCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#e4ded3] bg-[#fffdf8] p-6">
      <Image
        src={icon}
        alt=""
        width={34}
        height={34}
        className="mx-auto h-[34px] w-[34px] object-contain lg:mx-0"
      />

      <h3 className="mt-4 text-center text-lg font-semibold text-[#414641] lg:text-left">
        {title}
      </h3>

      <p className="mt-2 text-center text-[15px] leading-6 text-[#767b75] lg:text-left">
        {text}
      </p>
    </div>
  );
}

function TrustItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#414641]">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-xs text-[15px] leading-6 text-[#747a74]">
        {text}
      </p>
    </div>
  );
}