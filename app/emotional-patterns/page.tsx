import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Recognise Emotional Patterns | RealWithin",
  description:
    "Learn how to notice emotional patterns by looking at what you feel, what tends to happen before it, and how you respond across different situations.",
};

export default function EmotionalPatternsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to recognise emotional patterns
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Your feelings can change from day to day, so it may not be
              obvious when the same kind of reaction keeps returning.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              An emotional pattern may become clearer when you look at several
              moments and notice what happened, how you felt and what you did
              next.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with the feeling you noticed">
              <p>
                You do not need to understand the whole situation straight
                away.
              </p>

              <p className="mt-4">
                Start by noticing what you felt. Maybe you felt anxious after a
                conversation, heavy after agreeing to something, or relieved
                when a plan was cancelled.
              </p>

              <p className="mt-4">
                The feeling on its own may not tell you why it happened, but it
                gives you something real to look at.
              </p>
            </ContentSection>

            <ContentSection title="Look at what happened just before">
              <p>
                The same feeling can appear for many different reasons.
              </p>

              <p className="mt-4">
                It can help to notice what was happening before the feeling
                became stronger.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Did someone disagree with you?</li>
                <li>Did you have to make a decision?</li>
                <li>Did you feel ignored or misunderstood?</li>
                <li>Did someone seem disappointed?</li>
                <li>Were you waiting for an answer or feeling unsure?</li>
                <li>Did something remind you of another situation?</li>
              </ul>
            </ContentSection>

            <ContentSection title="Notice what you tend to do next">
              <p>
                Emotional patterns are not only about the feeling itself.
              </p>

              <p className="mt-4">
                What you do afterwards can also be useful to notice.
              </p>

              <p className="mt-4">
                You may ask for reassurance, pull away, explain yourself more,
                change your decision, avoid the situation or keep thinking
                about what happened.
              </p>

              <p className="mt-4">
                If a similar response appears after similar feelings, that may
                be part of the pattern.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  When else have I felt something similar recently?
                </Question>

                <Question>
                  What tends to happen before this feeling appears?
                </Question>

                <Question>
                  What do I usually do once I start feeling this way?
                </Question>

                <Question>
                  Does this happen more often with certain people, situations
                  or choices?
                </Question>
              </div>
            </section>

            <ContentSection title="Look across several moments">
              <p>
                One strong feeling does not automatically mean there is a
                pattern.
              </p>

              <p className="mt-4">
                It may become more useful to think about a pattern when similar
                feelings or reactions appear across different days.
              </p>

              <p className="mt-4">
                For example, you may notice that uncertainty often leads you to
                ask for reassurance, or that someone&apos;s disappointment often
                makes you question a choice you had already made.
              </p>

              <p className="mt-4">
                Seeing several examples can help you understand the connection
                more clearly.
              </p>
            </ContentSection>

            <ContentSection title="The same feeling can still mean different things">
              <p>
                It is important not to assume that one feeling always has the
                same cause.
              </p>

              <p className="mt-4">
                Feeling anxious before one conversation may be very different
                from feeling anxious before a decision or while waiting for
                news.
              </p>

              <p className="mt-4">
                Try to stay close to what actually happened rather than forcing
                different moments into the same explanation.
              </p>
            </ContentSection>

            <ContentSection title="Notice when your response starts to change">
              <p>
                Emotional patterns can change too.
              </p>

              <p className="mt-4">
                A situation that once stayed on your mind for hours may begin
                to pass more quickly. You may feel unsure but no longer need to
                ask someone for reassurance straight away.
              </p>

              <p className="mt-4">
                These smaller changes can be difficult to notice while they are
                happening. Looking back across time can make them easier to
                see.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/notice-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to notice patterns in yourself →
                </Link>

                <Link
                  href="/repeating-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I keep repeating the same patterns? →
                </Link>

                <Link
                  href="/understand-yourself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How can I understand myself better? →
                </Link>

                <Link
                  href="/reassurance"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I need reassurance so often? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Some emotional patterns are easier to see over time.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin lets you reflect on how you feel and what is happening
              in everyday moments. As your Reflections build across different
              days, it can help you notice possible Patterns and changes that
              may be harder to see from one moment alone.
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