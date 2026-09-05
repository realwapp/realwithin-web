import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Notice Patterns in Yourself | RealWithin",
  description:
    "Learn how to notice repeated thoughts, feelings and reactions in everyday life without forcing meaning into every moment.",
};

export default function NoticePatternsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to notice patterns in yourself
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              A pattern can be difficult to see when you are looking at one
              moment at a time.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may only notice it after similar thoughts, feelings or
              reactions have appeared in several different situations.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              The aim is not to find a hidden meaning in everything you do. It
              is simply to notice what seems to come back.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with real moments">
              <p>
                Patterns are easier to notice when you begin with something
                specific that actually happened.
              </p>

              <p className="mt-4">
                Instead of asking, “What are my patterns?”, think about a
                recent moment that stayed with you.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>A conversation you kept thinking about.</li>
                <li>A decision you started questioning afterwards.</li>
                <li>A time you agreed to something you did not really want.</li>
                <li>A situation where you suddenly felt tense or unsure.</li>
                <li>A moment when you wanted reassurance from someone.</li>
              </ul>

              <p className="mt-4">
                One moment does not prove that something is a pattern. It
                simply gives you somewhere to start.
              </p>
            </ContentSection>

            <ContentSection title="Notice what happened before your reaction">
              <p>
                It can help to look at what was happening just before you felt
                or reacted in a certain way.
              </p>

              <p className="mt-4">
                Maybe someone seemed disappointed. Maybe you had to make a
                decision without knowing the outcome. Maybe you felt ignored,
                rushed or unsure how another person felt about you.
              </p>

              <p className="mt-4">
                If similar situations often bring up a similar response, that
                connection may be worth paying attention to.
              </p>
            </ContentSection>

            <ContentSection title="Look at what you tend to do next">
              <p>
                A pattern can also appear in what you do after a feeling shows
                up.
              </p>

              <p className="mt-4">
                You may ask someone for reassurance, explain yourself more,
                change your decision, avoid a conversation or keep thinking
                about what happened.
              </p>

              <p className="mt-4">
                You do not need to decide whether the response is good or bad.
                First, notice whether the same response appears in other
                moments too.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  Have I felt or reacted like this in another situation?
                </Question>

                <Question>
                  What tends to happen just before this reaction appears?
                </Question>

                <Question>
                  What do I usually do when I feel this way?
                </Question>

                <Question>
                  Does this happen more often with certain people, choices or
                  situations?
                </Question>
              </div>
            </section>

            <ContentSection title="Compare different moments">
              <p>
                It is easier to see a possible pattern when you compare several
                moments instead of trying to understand one in isolation.
              </p>

              <p className="mt-4">
                For example, you may notice that you question yourself after
                several different decisions. Or that you often worry about
                disappointing people when you try to say no.
              </p>

              <p className="mt-4">
                The situations may be different, but part of your response may
                be similar.
              </p>
            </ContentSection>

            <ContentSection title="Do not force every moment into a pattern">
              <p>
                Not everything that happens twice has a deeper meaning.
              </p>

              <p className="mt-4">
                People can react differently depending on the day, the person
                or the situation. A strong reaction may also make complete
                sense in one particular moment.
              </p>

              <p className="mt-4">
                It can be more useful to stay curious and wait for enough
                examples before deciding that something really keeps
                returning.
              </p>
            </ContentSection>

            <ContentSection title="Notice change as well as repetition">
              <p>
                Patterns are not only about what stays the same.
              </p>

              <p className="mt-4">
                You may begin reacting differently to something that used to
                affect you strongly. You may stop needing as much reassurance,
                feel more comfortable saying no or trust a decision sooner.
              </p>

              <p className="mt-4">
                These smaller changes can also tell you something useful when
                you look back across time.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
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
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>

                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Some patterns are easier to see across time.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday moments. As
              your Reflections build across different days, it can help you
              notice possible Patterns that appear more than once and changes
              that may otherwise be easy to miss.
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