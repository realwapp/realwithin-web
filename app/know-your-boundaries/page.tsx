import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Know What Your Boundaries Are | RealWithin",
  description:
    "Learn how to notice your personal boundaries by paying attention to your feelings, energy, needs and reactions in everyday situations.",
};

export default function KnowYourBoundariesPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to know what your boundaries are
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              It is difficult to communicate a boundary if you are not yet sure
              what feels okay for you.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes your boundaries become clearer when you notice the
              moments that leave you uncomfortable, tired, pressured or wishing
              you had answered differently.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You do not need to decide all your boundaries at once. You can
              begin by paying attention to what happens in everyday situations.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Notice when something feels like too much">
              <p>
                Your reactions can sometimes give you useful information about
                where a limit may be.
              </p>

              <p className="mt-4">
                You may feel uncomfortable when someone asks for more of your
                time, brings up something private or expects you to agree
                quickly.
              </p>

              <p className="mt-4">
                The feeling does not automatically tell you what the boundary
                should be. But it can be a reason to look more closely at what
                you need.
              </p>
            </ContentSection>

            <ContentSection title="Think about the moments you regret saying yes">
              <p>
                Sometimes a boundary becomes clearer after you have already
                crossed your own limit.
              </p>

              <p className="mt-4">
                You may agree to something and later wish you had said no,
                asked for more time or chosen something different.
              </p>

              <p className="mt-4">
                Instead of only focusing on the regret, look at what made the
                original yes difficult for you afterwards.
              </p>
            </ContentSection>

            <ContentSection title="Pay attention to your time and energy">
              <p>
                Boundaries are not only about what other people say or do.
              </p>

              <p className="mt-4">
                They can also involve how much time, attention or energy you
                are able to give.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>How much time can you realistically give?</li>
                <li>When do you need time alone?</li>
                <li>What responsibilities can you take on?</li>
                <li>What leaves you feeling stretched too far?</li>
                <li>When do you need more time before answering?</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  When have I recently wished I had said no?
                </Question>

                <Question>
                  What situations leave me feeling pressured or uncomfortable?
                </Question>

                <Question>
                  What do I often agree to and then feel unhappy about later?
                </Question>

                <Question>
                  Where do I need more time, space or privacy?
                </Question>

                <Question>
                  Which limits are easy for me to keep, and which become harder
                  when someone reacts?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice where your first answer changes">
              <p>
                Sometimes you know what you want at first.
              </p>

              <p className="mt-4">
                Then someone asks again, explains why they need something or
                seems disappointed.
              </p>

              <p className="mt-4">
                If your answer often changes at that point, it may be useful to
                notice what you were trying to protect before the conversation
                became uncomfortable.
              </p>
            </ContentSection>

            <ContentSection title="Your boundaries may be different with different people">
              <p>
                You may be comfortable sharing something with one person and
                not another.
              </p>

              <p className="mt-4">
                You may also have more time or energy available on one day than
                another.
              </p>

              <p className="mt-4">
                A boundary does not always need to be exactly the same in every
                situation. Context can matter.
              </p>
            </ContentSection>

            <ContentSection title="A boundary can change over time">
              <p>
                What works for you now may not always be what works for you
                later.
              </p>

              <p className="mt-4">
                Your responsibilities, relationships and priorities can change.
                You may also become clearer about something that used to feel
                uncertain.
              </p>

              <p className="mt-4">
                It can help to see boundaries as something you can notice and
                review rather than a fixed set of rules you must get right
                forever.
              </p>
            </ContentSection>

            <ContentSection title="Look for repeated moments">
              <p>
                One uncomfortable situation may simply be one difficult
                situation.
              </p>

              <p className="mt-4">
                But if you repeatedly feel drained after agreeing, avoid saying
                what you need or wish you had protected more of your time, the
                repetition may tell you something useful.
              </p>

              <p className="mt-4">
                Looking across different moments can help you see where a
                boundary may already be trying to become clearer.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/struggle-to-set-boundaries"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to set boundaries? →
                </Link>

                <Link
                  href="/guilty-saying-no"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel guilty saying no? →
                </Link>

                <Link
                  href="/people-pleasing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I people-please? →
                </Link>

                <Link
                  href="/over-explaining"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I over-explain myself? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Your limits can become clearer across different moments.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday situations,
              feelings and choices. As your Reflections build across different
              days, it can help you notice whether the same needs or reactions
              keep returning.
            </p>

            <Link
              href="/try"
              className="mt-8 inline-flex rounded-full bg-[#68786b] px-7 py-3.5 font-semibold text-white transition hover:bg-[#5d6c60]"
            >
              Try RealWithin
            </Link>

            <p className="mt-3 text-sm text-[#7d837d]">
              No account needed for the preview.
            </p>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="mx-auto max-w-4xl px-6 py-10 text-center sm:px-10">
          <p className="mx-auto max-w-2xl text-sm leading-6 text-[#7c817c]">
            RealWithin is for personal reflection, not medical or mental health
            advice.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-[#414641] sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 text-[17px] leading-8 text-[#626862]">
        {children}
      </div>
    </section>
  );
}

function Question({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[18px] bg-[#f3f1e8] px-5 py-4 text-[16px] leading-7 text-[#555b55]">
      {children}
    </div>
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
    <footer className="border-t border-[#ded8cc] bg-[#f8f3e9]">
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