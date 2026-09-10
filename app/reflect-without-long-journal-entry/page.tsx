import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Reflect Without Writing a Long Journal Entry | RealWithin",
  description:
    "Learn how to reflect in a simple way without writing long journal entries, and how short reflections can still help you understand yourself over time.",
};

export default function ReflectWithoutLongJournalEntryPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to reflect without writing a long journal entry
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Reflection does not need to mean sitting down and writing several
              pages about your day.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              A few honest sentences can still help you notice what affected
              you, what is taking your attention and how you are responding.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              The aim is not to write more. It is to notice something useful.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Reflection can be short">
              <p>
                You do not need a long journal entry for a reflection to be
                meaningful.
              </p>

              <p className="mt-4">
                Sometimes one or two sentences about how you feel or what is on
                your mind are enough to capture an important moment.
              </p>

              <p className="mt-4">
                A short reflection can also be easier to return to regularly,
                especially when you are busy or tired.
              </p>
            </ContentSection>

            <ContentSection title="Start with what is most noticeable">
              <p>
                You do not need to explain your whole day.
              </p>

              <p className="mt-4">
                Begin with the thing that has your attention right now.
              </p>

              <PromptList
                items={[
                  "How do I feel right now?",
                  "What has affected me most today?",
                  "What do I keep thinking about?",
                  "Was there a moment I reacted more strongly than expected?",
                  "What feels unfinished or difficult to let go of?",
                ]}
              />

              <p className="mt-5">
                Choose one question and answer only that if it feels enough.
              </p>
            </ContentSection>

            <ContentSection title="You do not need to explain everything">
              <p>
                Reflection can become harder when you feel that you need to
                understand the whole situation immediately.
              </p>

              <p className="mt-4">
                You may not know why something affected you yet.
              </p>

              <p className="mt-4">
                It is completely reasonable to record what happened, how you
                felt and what you noticed without forcing yourself to find an
                explanation.
              </p>
            </ContentSection>

            <ContentSection title="Focus on one moment">
              <p>
                If writing about an entire day feels too much, choose one
                moment instead.
              </p>

              <p className="mt-4">
                It could be a conversation, a decision, something you avoided
                or a moment when your mood changed.
              </p>

              <p className="mt-4">
                Looking closely at one small moment can sometimes tell you more
                than trying to summarise everything that happened.
              </p>
            </ContentSection>

            <ContentSection title="Short reflections become more useful when they build">
              <p>
                One short reflection may not tell you very much on its own.
              </p>

              <p className="mt-4">
                But several reflections across different days can begin to show
                whether similar thoughts, feelings or reactions keep appearing.
              </p>

              <p className="mt-4">
                This is where short reflection can become surprisingly useful.
                The value comes from having several real moments to compare.
              </p>
            </ContentSection>

            <ContentSection title="You can notice patterns without writing more">
              <p>
                Longer writing does not automatically create deeper
                understanding.
              </p>

              <p className="mt-4">
                What matters more is whether your reflections capture enough
                context to notice possible repetition.
              </p>

              <p className="mt-4">
                For example, a few short reflections might show that you often
                second-guess yourself after difficult conversations or look for
                reassurance when you feel uncertain.
              </p>
            </ContentSection>

            <ContentSection title="Leave room for change">
              <p>
                Reflection is not only about identifying things that repeat.
              </p>

              <p className="mt-4">
                Short entries can also help you notice when something starts to
                feel different.
              </p>

              <p className="mt-4">
                You may respond more calmly, need less reassurance or handle a
                situation differently from how you did before.
              </p>
            </ContentSection>

            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A simple way to reflect in a few minutes
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Name how you feel",
                  "Notice what has your attention",
                  "Choose one moment that affected you",
                  "Write what happened without trying to solve it",
                  "Notice how you responded",
                  "Stop when you feel you have captured enough",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] bg-[#f3f1e8] px-5 py-4 text-[16px] leading-7 text-[#555b55]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <ContentSection title="Consistency can matter more than length">
              <p>
                If long journaling feels difficult to maintain, shorter
                reflection may suit you better.
              </p>

              <p className="mt-4">
                A small reflection you actually return to can be more useful
                than a detailed journal you stop using after a few days.
              </p>

              <p className="mt-4">
                Over time, those small moments can give you more context for
                understanding what keeps appearing and what may be changing.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/journaling-vs-self-reflection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Journaling vs self-reflection →
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
                  How to journal when you don’t know what to write →
                </Link>

                <Link
                  href="/app-to-understand-yourself-over-time"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  App to help you understand yourself over time →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Reflection does not have to feel like homework.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin is built around short Reflections about how you feel
              and what is on your mind. As those moments build across
              different days, it can help surface possible Patterns and
              meaningful changes over time.
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

function PromptList({ items }: { items: string[] }) {
  return (
    <div className="mt-6 space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-[18px] bg-[#f3f1e8] px-5 py-4 text-[16px] leading-7 text-[#555b55]"
        >
          {item}
        </div>
      ))}
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