import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Journal When You Don’t Know What to Write | RealWithin",
  description:
    "Learn how to journal when you do not know what to write, using simple prompts that help you reflect without forcing a long or perfect entry.",
};

export default function JournalWhenYouDontKnowWhatToWritePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to journal when you don&apos;t know what to write
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You sit down to journal, but nothing feels clear enough to write
              about.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may feel that you need an important thought, a big problem or
              something meaningful to say before you can begin.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You do not. A useful journal entry can start with something very
              small and ordinary.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with what is true right now">
              <p>
                You do not need to know what the entry will become before you
                start.
              </p>

              <p className="mt-4">
                Write one simple sentence about your current moment.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>“I feel tired today.”</li>
                <li>“My mind keeps going back to one conversation.”</li>
                <li>“Nothing major happened, but I feel unsettled.”</li>
                <li>“Today was actually quite good.”</li>
                <li>“I am not sure what I feel yet.”</li>
              </ul>

              <p className="mt-4">
                That first sentence may be enough, or it may lead naturally to
                something else.
              </p>
            </ContentSection>

            <ContentSection title="You do not need to write a long entry">
              <p>
                Journaling does not have to mean filling several pages.
              </p>

              <p className="mt-4">
                One or two clear sentences can sometimes tell you more than a
                long entry written because you feel you should keep going.
              </p>

              <p className="mt-4">
                If you have said what you wanted to say, you can stop.
              </p>
            </ContentSection>

            <ContentSection title="Use one moment from the day">
              <p>
                If the whole day feels too broad, choose one moment.
              </p>

              <p className="mt-4">
                It does not need to be dramatic.
              </p>

              <p className="mt-4">
                You might write about a message that stayed on your mind, a
                decision you delayed, something that made you laugh or a moment
                when your mood changed.
              </p>

              <p className="mt-4">
                Small moments can be easier to reflect on because they give you
                something specific to describe.
              </p>
            </ContentSection>

            {/* PROMPTS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Simple journal prompts when your mind is blank
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What has stayed on my mind today?
                </Question>

                <Question>
                  What moment affected me more than I expected?
                </Question>

                <Question>
                  What do I wish had gone differently today?
                </Question>

                <Question>
                  What felt good or easier than usual?
                </Question>

                <Question>
                  What am I putting off thinking about?
                </Question>

                <Question>
                  What do I need more or less of tomorrow?
                </Question>
              </div>
            </section>

            <ContentSection title="Write about what you keep thinking about">
              <p>
                Sometimes the easiest subject is already taking up your
                attention.
              </p>

              <p className="mt-4">
                If you keep replaying something, wondering about a decision or
                returning to the same thought, write down what the thought
                actually is.
              </p>

              <p className="mt-4">
                Then ask whether you have learned anything new or whether you
                are repeating the same question.
              </p>
            </ContentSection>

            <ContentSection title="Describe before you explain">
              <p>
                You do not have to understand why something happened before you
                write about it.
              </p>

              <p className="mt-4">
                Start with what you know.
              </p>

              <p className="mt-4">
                What happened? What did you notice? What did you say or do?
                How did you feel afterwards?
              </p>

              <p className="mt-4">
                Staying close to the actual moment can help you avoid forcing an
                explanation before you have enough information.
              </p>
            </ContentSection>

            <ContentSection title="You can journal about good moments too">
              <p>
                A journal does not need to become a record of everything that
                went wrong.
              </p>

              <p className="mt-4">
                You can write about something that felt easier, a choice you
                were happy with or a moment you want to remember.
              </p>

              <p className="mt-4">
                These entries can also help you notice what matters to you and
                what may be changing.
              </p>
            </ContentSection>

            <ContentSection title="Try not to judge the entry while you are writing it">
              <p>
                You may stop because what you are writing feels obvious,
                repetitive or not important enough.
              </p>

              <p className="mt-4">
                A journal entry does not need to sound clever or meaningful.
              </p>

              <p className="mt-4">
                Its value can come from recording what was true for you in that
                moment.
              </p>
            </ContentSection>

            <ContentSection title="Look back for repetition, not perfection">
              <p>
                A single entry may feel ordinary.
              </p>

              <p className="mt-4">
                Its meaning may become clearer when you compare it with later
                entries.
              </p>

              <p className="mt-4">
                You may notice that the same concern keeps returning, that a
                certain situation affects you repeatedly or that something that
                once felt difficult is beginning to feel different.
              </p>

              <p className="mt-4">
                That wider view can be more useful than trying to make every
                individual entry important on its own.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/journaling-for-self-awareness"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Journaling for self-awareness →
                </Link>

                <Link
                  href="/self-reflection-questions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Self-reflection questions to understand yourself better →
                </Link>

                <Link
                  href="/what-is-self-reflection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  What is self-reflection? →
                </Link>

                <Link
                  href="/journaling-app-self-reflection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Journaling app for self-reflection →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              You do not need a perfect journal entry to notice something useful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin starts with a short reflection about how you feel and
              what is on your mind. As your Reflections build across different
              days, it can help you notice possible Patterns and meaningful
              changes that may be difficult to see from one entry alone.
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