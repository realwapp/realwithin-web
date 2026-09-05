import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Reflect Without Overthinking | RealWithin",
  description:
    "Learn how to reflect without turning every thought into overthinking, using simple questions that keep you close to what actually happened.",
};

export default function ReflectWithoutOverthinkingPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to reflect without overthinking
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Reflection can help you understand a moment better. But sometimes
              it turns into going over the same thought again and again.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              The difference is not always how long you think about something.
              It is whether the thinking is giving you anything new.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              A few simple limits can help you reflect without getting stuck in
              the same loop.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with what actually happened">
              <p>
                Before asking what something means, describe the moment as
                simply as you can.
              </p>

              <p className="mt-4">
                What happened? What was said? What did you do next?
              </p>

              <p className="mt-4">
                Staying close to the facts can help stop one small event from
                becoming a much bigger story too quickly.
              </p>
            </ContentSection>

            <ContentSection title="Notice when you move from facts to interpretation">
              <p>
                Reflection often includes making sense of what happened.
              </p>

              <p className="mt-4">
                But an interpretation is still different from something you
                know.
              </p>

              <p className="mt-4">
                “They were quiet during the conversation” is something you may
                have observed. “They were annoyed with me” is a possible
                explanation.
              </p>

              <p className="mt-4">
                Keeping that difference clear can make reflection more grounded.
              </p>
            </ContentSection>

            <ContentSection title="Ask whether you are learning anything new">
              <p>
                You may return to the same thought because it still feels
                unresolved.
              </p>

              <p className="mt-4">
                Ask yourself whether your thinking has produced new information,
                a clearer question or a useful next step.
              </p>

              <p className="mt-4">
                If the answer is no, you may be repeating the thought rather
                than reflecting on it.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few questions to keep reflection simple
              </h2>

              <div className="mt-6 space-y-4">
                <Question>What actually happened?</Question>

                <Question>How did I feel in that moment?</Question>

                <Question>
                  What am I assuming that I do not actually know?
                </Question>

                <Question>
                  Have I learned anything new from thinking about this again?
                </Question>

                <Question>
                  Is there one useful action I can take, or do I need to leave
                  this for now?
                </Question>
              </div>
            </section>

            <ContentSection title="Do not force a deeper meaning">
              <p>
                Not every feeling, conversation or difficult day needs to reveal
                something important about you.
              </p>

              <p className="mt-4">
                Sometimes you were simply tired. Sometimes a conversation was
                awkward. Sometimes someone else was distracted.
              </p>

              <p className="mt-4">
                Reflection can stay open to meaning without assuming that every
                moment contains a hidden explanation.
              </p>
            </ContentSection>

            <ContentSection title="Keep the reflection short when that is enough">
              <p>
                You do not need to keep writing until you reach a big insight.
              </p>

              <p className="mt-4">
                A useful reflection might be only a few sentences.
              </p>

              <p className="mt-4">
                You may simply notice what happened, how you felt and what you
                would like to remember next time.
              </p>
            </ContentSection>

            <ContentSection title="Leave some questions unanswered">
              <p>
                Reflection does not always end with certainty.
              </p>

              <p className="mt-4">
                You may still not know why someone acted a certain way or
                whether a decision will work out.
              </p>

              <p className="mt-4">
                Sometimes the most accurate answer is that you do not know yet.
              </p>

              <p className="mt-4">
                Leaving that uncertainty open can be more useful than forcing an
                explanation.
              </p>
            </ContentSection>

            <ContentSection title="Look for repetition across time, not within one evening">
              <p>
                If you think about the same event for hours, you still have only
                one event.
              </p>

              <p className="mt-4">
                A pattern becomes more meaningful when similar reactions appear
                across different moments.
              </p>

              <p className="mt-4">
                Rather than analysing one experience more deeply, it can be
                useful to notice whether anything similar appears again later.
              </p>
            </ContentSection>

            <ContentSection title="Know when to stop for now">
              <p>
                You can return to something later if new information appears.
              </p>

              <p className="mt-4">
                Stopping does not mean the situation does not matter.
              </p>

              <p className="mt-4">
                It can simply mean you have reached the limit of what you can
                understand from the information you currently have.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
                </Link>

                <Link
                  href="/what-is-self-reflection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  What is self-reflection? →
                </Link>

                <Link
                  href="/self-reflection-questions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Self-reflection questions to understand yourself better →
                </Link>

                <Link
                  href="/journal-when-you-dont-know-what-to-write"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to journal when you don&apos;t know what to write →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Reflect enough to notice. Not enough to get stuck.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin keeps Reflection short and focused on how you feel and
              what is on your mind. Across different days, it can help you
              notice possible Patterns and meaningful changes without asking
              one moment to explain everything.
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