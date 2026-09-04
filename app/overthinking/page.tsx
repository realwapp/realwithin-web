import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Overthink Everything? | RealWithin",
  description:
    "Understand why overthinking can keep happening, what it can feel like, and how noticing your patterns may help you see things more clearly.",
};

export default function OverthinkingPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I overthink everything?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Overthinking often happens when your mind keeps looking for more
              certainty, a better answer or a way to avoid making the wrong
              choice.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              The problem is that more thinking does not always make things
              clearer.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What overthinking can look like">
              <p>
                Overthinking is not always obvious. It can feel like you are
                simply trying to understand something properly.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Going over the same conversation again and again.</li>
                <li>Worrying that you made the wrong choice.</li>
                <li>Thinking about what you should have said differently.</li>
                <li>Looking for reassurance before making a decision.</li>
                <li>Imagining every possible outcome.</li>
                <li>Finding it hard to leave a question unanswered.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Why can it keep happening?">
              <p>
                Sometimes overthinking is less about the situation itself and
                more about what you are trying to get from all the thinking.
              </p>

              <p className="mt-4">
                You may be trying to feel completely sure before you act. You
                may be trying to avoid disappointing someone. Or you may be
                looking for an answer that makes an uncomfortable feeling go
                away.
              </p>

              <p className="mt-4">
                If this happens often, the useful thing to notice may be the
                pattern behind the thinking rather than every individual
                thought.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What am I hoping all this thinking will help me feel?
                </Question>

                <Question>
                  Am I looking for an answer, or am I looking for certainty?
                </Question>

                <Question>
                  Have I already thought about this enough to make a reasonable
                  choice?
                </Question>

                <Question>
                  Does this same kind of thinking happen in other situations
                  too?
                </Question>
              </div>
            </section>

            <ContentSection title="The pattern can matter more than the thought">
              <p>
                One difficult decision may simply be one difficult decision.
                But when the same way of thinking appears across different
                days, relationships or situations, it can tell you something
                more useful.
              </p>

              <p className="mt-4">
                That is why looking across several moments can sometimes show
                you more than looking harder at one moment.
              </p>
            </ContentSection>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what keeps showing up.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin lets you add short Reflections about everyday moments.
              As they build, it can help you notice repeated Patterns and small
              changes that are harder to see from one day alone.
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
            RealWithin is for personal reflection, not medical or mental health advice.
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