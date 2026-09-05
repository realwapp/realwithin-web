import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Identify Your Personal Values | RealWithin",
  description:
    "Learn how to identify your personal values by noticing what matters to you, what affects your choices, and what keeps returning across everyday situations.",
};

export default function IdentifyPersonalValuesPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to identify your personal values
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Personal values are the things that feel important in how you
              want to live, choose and relate to other people.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may value honesty, freedom, stability, kindness, creativity
              or something completely different.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes your values become easier to see by looking at the
              everyday moments that matter to you most.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with what feels important to you">
              <p>
                You do not need to begin with a long list of values.
              </p>

              <p className="mt-4">
                Think about moments when something felt especially right,
                meaningful or important.
              </p>

              <p className="mt-4">
                What was present in that moment? Maybe you had freedom to make
                your own choice, felt close to someone, created something or
                acted in a way that felt true to you.
              </p>
            </ContentSection>

            <ContentSection title="Notice what bothers you too">
              <p>
                Difficult moments can also show you what matters.
              </p>

              <p className="mt-4">
                You may feel strongly when someone is unfair, when you do not
                have enough freedom or when a relationship does not feel
                honest.
              </p>

              <p className="mt-4">
                The reaction does not automatically tell you what your value
                is, but it can give you somewhere useful to look.
              </p>
            </ContentSection>

            <ContentSection title="Look at the choices you keep making">
              <p>
                Values can sometimes be seen in the things you repeatedly make
                space for.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>What do you protect time for?</li>
                <li>What are you willing to work hard for?</li>
                <li>What do you find difficult to compromise on?</li>
                <li>What makes a decision feel right to you?</li>
                <li>What do you want more of in your everyday life?</li>
                <li>What do you miss when it is absent?</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few questions to ask yourself
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  When have I recently felt proud of a choice I made?
                </Question>

                <Question>
                  What situations make me feel most like myself?
                </Question>

                <Question>
                  What do I find especially difficult when it is missing?
                </Question>

                <Question>
                  What do I want my decisions to reflect more often?
                </Question>

                <Question>
                  Which parts of my life currently feel most important to me?
                </Question>
              </div>
            </section>

            <ContentSection title="Separate what matters to you from what you feel you should value">
              <p>
                It is easy to pick values that sound good or that other people
                expect you to have.
              </p>

              <p className="mt-4">
                You may feel that you should value ambition, stability,
                independence or family in a certain way.
              </p>

              <p className="mt-4">
                Try asking what actually affects your choices and what you
                genuinely want more of in your own life.
              </p>
            </ContentSection>

            <ContentSection title="Your values can sometimes compete with each other">
              <p>
                A difficult decision does not always mean you do not know what
                matters to you.
              </p>

              <p className="mt-4">
                Sometimes two important things pull in different directions.
              </p>

              <p className="mt-4">
                You may value freedom and stability. You may care about helping
                others and also need more time for yourself.
              </p>

              <p className="mt-4">
                Seeing both values can make the decision easier to understand,
                even if the answer is still difficult.
              </p>
            </ContentSection>

            <ContentSection title="Values can change in importance over time">
              <p>
                What matters most to you does not have to stay exactly the same
                throughout your life.
              </p>

              <p className="mt-4">
                New experiences, relationships or responsibilities may change
                what you give more attention to.
              </p>

              <p className="mt-4">
                You may also realise that something you once thought was
                important no longer guides your choices in the same way.
              </p>
            </ContentSection>

            <ContentSection title="Look for what keeps returning">
              <p>
                One decision may not tell you much about your values.
              </p>

              <p className="mt-4">
                But when the same needs, priorities or tensions appear across
                different situations, they may give you a clearer picture of
                what matters to you.
              </p>

              <p className="mt-4">
                Looking across several moments can help you move from choosing
                a value because it sounds right to recognising how it actually
                appears in your life.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/understand-yourself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How can I understand myself better? →
                </Link>

                <Link
                  href="/become-more-self-aware"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to become more self-aware →
                </Link>

                <Link
                  href="/trust-your-decisions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to trust your own decisions →
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
              Notice what keeps mattering to you.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday feelings,
              choices and experiences. As your Reflections build across
              different days, it can help you notice recurring themes and
              meaningful changes in what matters to you.
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