import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Start a Self-Reflection Habit | RealWithin",
  description:
    "Learn how to start a simple self-reflection habit that fits into everyday life without needing long journal entries or a perfect routine.",
};

export default function StartSelfReflectionHabitPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to start a self-reflection habit
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Self-reflection does not need to become another big task on your
              list.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              A useful habit can be short, simple and connected to something you
              already do.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              The aim is not to analyse every day. It is to create enough space
              to notice what is happening in your life over time.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Make the habit smaller than you think it needs to be">
              <p>
                You do not need thirty minutes, several pages of writing or a
                complicated routine.
              </p>

              <p className="mt-4">
                A reflection can take a few minutes.
              </p>

              <p className="mt-4">
                You might simply notice how you feel, what stayed on your mind
                and whether anything important happened today.
              </p>

              <p className="mt-4">
                Starting small can make it easier to return tomorrow.
              </p>
            </ContentSection>

            <ContentSection title="Connect reflection to something you already do">
              <p>
                New habits can be easier to remember when they have a clear
                place in your day.
              </p>

              <p className="mt-4">
                You might reflect after dinner, when you get into bed, after
                your morning coffee or when you finish work.
              </p>

              <p className="mt-4">
                The exact time matters less than having a moment that naturally
                reminds you.
              </p>
            </ContentSection>

            <ContentSection title="Use the same simple starting questions">
              <p>
                You do not need to find a new prompt every day.
              </p>

              <p className="mt-4">
                Repeating a few simple questions can make the habit easier and
                give you something consistent to look back on.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>How do I feel today?</li>
                <li>What stayed on my mind?</li>
                <li>What affected me more than I expected?</li>
                <li>What felt good or easier today?</li>
                <li>Is there anything I want to remember?</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A simple daily reflection
              </h2>

              <div className="mt-6 space-y-4">
                <Question>How do I feel right now?</Question>

                <Question>
                  What is taking up most of my attention today?
                </Question>

                <Question>
                  Was there one moment I want to look at more closely?
                </Question>

                <Question>
                  What did I need or want in that moment?
                </Question>

                <Question>
                  Is there anything here I have noticed before?
                </Question>
              </div>
            </section>

            <ContentSection title="Do not wait for an important day">
              <p>
                Reflection can feel easier when something major has happened.
              </p>

              <p className="mt-4">
                But ordinary days can be useful too.
              </p>

              <p className="mt-4">
                A small irritation, a good conversation, a moment of relief or
                a choice you barely noticed may become more meaningful when
                something similar appears again later.
              </p>
            </ContentSection>

            <ContentSection title="Let some reflections stay ordinary">
              <p>
                Not every reflection needs to end with an insight.
              </p>

              <p className="mt-4">
                Sometimes the most accurate reflection is simply that you were
                tired, had a normal day or do not know what you think yet.
              </p>

              <p className="mt-4">
                Forcing a deeper meaning can make the habit feel like work
                instead of observation.
              </p>
            </ContentSection>

            <ContentSection title="Missing a day does not break the habit">
              <p>
                A reflection habit does not need to be perfect to be useful.
              </p>

              <p className="mt-4">
                You may miss a day because you are busy, travelling or simply
                forget.
              </p>

              <p className="mt-4">
                You can continue the next time you remember instead of treating
                the gap as a reason to stop.
              </p>
            </ContentSection>

            <ContentSection title="Try not to turn reflection into overthinking">
              <p>
                A habit becomes less useful if every reflection turns into a
                long attempt to explain everything.
              </p>

              <p className="mt-4">
                Notice when you have reached the end of the information you
                currently have.
              </p>

              <p className="mt-4">
                You can leave a question open and see whether later experiences
                add anything new.
              </p>
            </ContentSection>

            <ContentSection title="Look back occasionally instead of analysing every day">
              <p>
                The value of regular reflection often appears across several
                entries rather than inside one.
              </p>

              <p className="mt-4">
                After a few weeks, you may notice that the same concern appears
                more than once, that certain situations affect you repeatedly
                or that an old response is becoming less common.
              </p>

              <p className="mt-4">
                Looking back can help you see the wider picture without asking
                every individual day to explain something important.
              </p>
            </ContentSection>

            <ContentSection title="Keep the habit useful for you">
              <p>
                There is no single correct way to reflect.
              </p>

              <p className="mt-4">
                You may prefer writing, a short app check-in or simply answering
                a few questions quietly.
              </p>

              <p className="mt-4">
                What matters is whether the habit helps you notice your own
                experiences more clearly and whether you can realistically keep
                returning to it.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/what-is-self-reflection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  What is self-reflection? →
                </Link>

                <Link
                  href="/reflect-without-overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to reflect without overthinking →
                </Link>

                <Link
                  href="/journal-when-you-dont-know-what-to-write"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to journal when you don&apos;t know what to write →
                </Link>

                <Link
                  href="/self-reflection-questions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Self-reflection questions to understand yourself better →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              A few minutes today can become useful context later.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin keeps Reflection short. As your Reflections build
              across different days, it can help you notice possible Patterns
              and meaningful changes that may be hard to see in one moment.
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