import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Keep Repeating the Same Patterns? | RealWithin",
  description:
    "Understand why the same thoughts, reactions or relationship patterns can keep returning, and how noticing them over time may help you understand yourself better.",
};

export default function RepeatingPatternsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I keep repeating the same patterns?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes you can know that something is not working for you and
              still find yourself reacting in a similar way again.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              The useful question may not only be why it happened again, but
              what keeps appearing around it.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What a repeating pattern can look like">
              <p>
                A pattern is not always something dramatic. It can be a small
                reaction, thought or choice that keeps appearing in different
                situations.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Saying yes when you really want to say no.</li>
                <li>Looking for reassurance when you feel uncertain.</li>
                <li>Questioning yourself after making a decision.</li>
                <li>Overthinking conversations after they have ended.</li>
                <li>Putting someone else&apos;s needs before your own.</li>
                <li>Reacting strongly to the same kind of situation.</li>
              </ul>

              <p className="mt-4">
                One moment on its own may not mean very much. It becomes more
                useful when you start noticing the same kind of response across
                different days or situations.
              </p>
            </ContentSection>

            <ContentSection title="Why can the same patterns keep returning?">
              <p>
                Familiar reactions can happen quickly. You may respond before
                you have had much time to think about what you actually want or
                need.
              </p>

              <p className="mt-4">
                Sometimes a response may also have felt useful in the past.. Avoiding
                conflict, asking for reassurance or thinking through every
                possibility may have felt useful in certain situations.
              </p>

              <p className="mt-4">
                That does not mean the same response will always help you now.
                It simply means that noticing the pattern may come before
                changing it.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  When have I felt or reacted like this before?
                </Question>

                <Question>
                  What usually happens just before this response appears?
                </Question>

                <Question>
                  What am I trying to avoid, protect or feel more certain about?
                </Question>

                <Question>
                  Does this happen with one person or situation, or in several
                  parts of my life?
                </Question>
              </div>
            </section>

            <ContentSection title="Look across moments, not just at one">
              <p>
                It can be difficult to recognise a pattern while you are inside
                one moment.
              </p>

              <p className="mt-4">
                You may understand why you reacted that way today. Then a week
                later, something similar happens for a different reason.
              </p>

              <p className="mt-4">
                Looking back across several moments can make the connection
                easier to see. You may start noticing what tends to happen
                before the reaction, what you tell yourself and what you
                usually do next.
              </p>
            </ContentSection>

            <ContentSection title="Noticing a pattern does not mean judging yourself">
              <p>
                Seeing something repeat does not automatically mean you are
                doing something wrong.
              </p>

              <p className="mt-4">
                A pattern can give you useful information. It can help you understand how you
                tend to respond and whether that response still feels useful
                to you.
              </p>

              <p className="mt-4">
                You do not need to change everything immediately. Sometimes the
                first useful step is simply being able to recognise what is
                happening while it is happening.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <Link
                href="/overthinking"
                className="mt-5 inline-block text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
              >
                Why do I overthink everything? →
              </Link>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              See what keeps returning.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin lets you add short Reflections about everyday moments.
              As they build across different days, it can help you notice
              Patterns that may be difficult to see from one moment alone.
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