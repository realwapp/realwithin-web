import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Self-Reflection? | RealWithin",
  description:
    "Learn what self-reflection means, how it can help you understand your thoughts, feelings and choices, and simple ways to reflect in everyday life.",
};

export default function WhatIsSelfReflectionPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              What is self-reflection?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Self-reflection is taking a moment to notice your thoughts,
              feelings, choices and reactions.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help you look at an experience after it happens instead of
              simply moving straight on to the next thing.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You do not need to analyse everything. Sometimes one simple
              question is enough to notice something you had missed.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Self-reflection starts with noticing">
              <p>
                You might begin by noticing how you feel, what is on your mind
                or which part of the day affected you most.
              </p>

              <p className="mt-4">
                You do not need to understand why straight away.
              </p>

              <p className="mt-4">
                Simply naming what happened can give you a clearer starting
                point.
              </p>
            </ContentSection>

            <ContentSection title="Reflection is different from replaying something">
              <p>
                Thinking about a situation again is not always the same as
                reflecting on it.
              </p>

              <p className="mt-4">
                You can replay the same conversation many times without learning
                anything new.
              </p>

              <p className="mt-4">
                Reflection becomes more useful when you begin asking what you
                felt, what mattered to you, what you assumed or what you did
                next.
              </p>
            </ContentSection>

            <ContentSection title="What can you reflect on?">
              <p>
                Self-reflection can be about ordinary parts of your day.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>A conversation that stayed on your mind.</li>
                <li>A decision you keep questioning.</li>
                <li>A feeling that appeared more strongly than expected.</li>
                <li>Something you wanted but did not say.</li>
                <li>A choice you felt good about.</li>
                <li>A reaction you have noticed more than once.</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Simple self-reflection questions
              </h2>

              <div className="mt-6 space-y-4">
                <Question>How do I feel right now?</Question>

                <Question>
                  What has stayed on my mind today?
                </Question>

                <Question>
                  What affected me more than I expected?
                </Question>

                <Question>
                  What did I need or want in that moment?
                </Question>

                <Question>
                  Have I experienced something similar recently?
                </Question>
              </div>
            </section>

            <ContentSection title="Reflection can help you see the wider picture">
              <p>
                One moment may not tell you very much about yourself.
              </p>

              <p className="mt-4">
                When you reflect across different days, you may begin to notice
                that certain thoughts, feelings or reactions appear more than
                once.
              </p>

              <p className="mt-4">
                You may also notice that something which used to affect you
                strongly is beginning to feel different.
              </p>
            </ContentSection>

            <ContentSection title="Try to stay close to what actually happened">
              <p>
                Reflection can become less useful when you make a big conclusion
                from one moment.
              </p>

              <p className="mt-4">
                For example, one difficult conversation does not necessarily
                mean you always struggle with relationships.
              </p>

              <p className="mt-4">
                It can be more useful to describe what happened first and look
                for repeated evidence across several situations.
              </p>
            </ContentSection>

            <ContentSection title="You do not need a long journal entry">
              <p>
                Self-reflection can take only a few minutes.
              </p>

              <p className="mt-4">
                You might write one or two sentences, think through a question
                while walking or make a short note about something you want to
                remember.
              </p>

              <p className="mt-4">
                The important part is creating enough space to notice what
                happened instead of automatically moving past it.
              </p>
            </ContentSection>

            <ContentSection title="Reflection can include positive moments too">
              <p>
                Self-reflection is not only about problems.
              </p>

              <p className="mt-4">
                You can also notice when something felt good, when you handled a
                situation differently or when a choice felt more like you.
              </p>

              <p className="mt-4">
                These moments can help you see what matters to you and what may
                be changing.
              </p>
            </ContentSection>

            <ContentSection title="Look for patterns without forcing them">
              <p>
                Not every repeated feeling or event has a deeper meaning.
              </p>

              <p className="mt-4">
                But when similar reactions appear across different days, they
                may be worth looking at together.
              </p>

              <p className="mt-4">
                The aim is not to fit every experience into a pattern. It is to
                notice when there is enough evidence that something may really
                be repeating.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/self-reflection-questions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Self-reflection questions to understand yourself better →
                </Link>

                <Link
                  href="/journaling-for-self-awareness"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Journaling for self-awareness →
                </Link>

                <Link
                  href="/become-more-self-aware"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to become more self-aware →
                </Link>

                <Link
                  href="/notice-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to notice patterns in yourself →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Start with one moment from today.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin starts with a short check-in about how you feel and
              what is on your mind. As your Reflections build across different
              days, it can help you notice possible Patterns and meaningful
              changes over time.
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