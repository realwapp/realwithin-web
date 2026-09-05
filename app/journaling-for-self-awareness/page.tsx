import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journaling for Self-Awareness | RealWithin",
  description:
    "Learn how journaling can support self-awareness by helping you notice your feelings, reactions, choices and patterns across different days.",
};

export default function JournalingForSelfAwarenessPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Journaling for self-awareness
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Journaling can give you a place to notice what you are feeling,
              thinking and reacting to.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You do not need to write pages every day. A few honest words
              about one moment can sometimes be enough to understand it more
              clearly.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              The value can grow when you look across different days and notice
              what keeps returning or what begins to change.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with what is happening today">
              <p>
                You do not need to begin with a big question about who you are.
              </p>

              <p className="mt-4">
                Start with something real from today. Maybe a conversation
                stayed on your mind, a decision made you unsure or something
                affected you more than you expected.
              </p>

              <p className="mt-4">
                Writing about a specific moment can make reflection easier than
                trying to understand everything at once.
              </p>
            </ContentSection>

            <ContentSection title="Write about what you noticed, not what you think you should feel">
              <p>
                Journaling can be more useful when you stay close to what
                actually happened.
              </p>

              <p className="mt-4">
                You might write that you felt relieved, annoyed, anxious,
                hopeful or unsure.
              </p>

              <p className="mt-4">
                You do not need to make the feeling sound reasonable or explain
                it perfectly. Start with what you noticed.
              </p>
            </ContentSection>

            <ContentSection title="Pay attention to your reaction">
              <p>
                What you did after a feeling appeared can also tell you
                something useful.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Did you ask someone for reassurance?</li>
                <li>Did you change your mind?</li>
                <li>Did you avoid saying what you wanted?</li>
                <li>Did you keep replaying the situation?</li>
                <li>Did you explain yourself more than you planned?</li>
                <li>Did you pull away or need more space?</li>
              </ul>

              <p className="mt-4">
                You may not know what the reaction means straight away. The
                first step is simply noticing it.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Simple journaling questions
              </h2>

              <div className="mt-6 space-y-4">
                <Question>How do I feel right now?</Question>

                <Question>
                  What has stayed on my mind today?
                </Question>

                <Question>
                  What happened before I started feeling this way?
                </Question>

                <Question>
                  What did I want or need in that moment?
                </Question>

                <Question>
                  Have I felt or reacted like this recently?
                </Question>
              </div>
            </section>

            <ContentSection title="Short entries can still be useful">
              <p>
                Journaling does not need to take a long time.
              </p>

              <p className="mt-4">
                A short note about how you feel, what happened and what is on
                your mind can give you something to look back on later.
              </p>

              <p className="mt-4">
                Writing less may also make it easier to keep reflecting when
                you are busy or do not know exactly what to say.
              </p>
            </ContentSection>

            <ContentSection title="Look across different days">
              <p>
                One journal entry mainly tells you about one moment.
              </p>

              <p className="mt-4">
                When you have several entries, you can begin looking for
                similarities.
              </p>

              <p className="mt-4">
                You may notice that the same kind of situation brings up doubt,
                that certain conversations stay on your mind or that you often
                put your own needs aside when someone else is disappointed.
              </p>

              <p className="mt-4">
                A repeated pattern is easier to consider when it is supported
                by several real moments rather than one entry alone.
              </p>
            </ContentSection>

            <ContentSection title="Look for change as well as repetition">
              <p>
                Journaling can also help you notice when something is becoming
                different.
              </p>

              <p className="mt-4">
                You may respond more calmly to something that used to affect
                you strongly. You may trust a decision for longer or feel more
                comfortable saying what you need.
              </p>

              <p className="mt-4">
                These changes can be difficult to notice from day to day.
                Looking back can make them clearer.
              </p>
            </ContentSection>

            <ContentSection title="Try not to force every entry into a conclusion">
              <p>
                Not every journal entry needs to reveal something important.
              </p>

              <p className="mt-4">
                Some days may simply show you that you were tired, busy,
                hopeful or uncertain.
              </p>

              <p className="mt-4">
                It can be more useful to let meaning build across several
                reflections than to decide too quickly what one moment says
                about you.
              </p>
            </ContentSection>

            {/* RELATED READING */}
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

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Reflection does not need to be long.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin starts with a short check-in about how you feel and
              what is on your mind. As your Reflections build across different
              days, it can help you notice possible Patterns and meaningful
              changes that may be harder to see from one day alone.
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