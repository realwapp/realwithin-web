import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Feel Stuck in Life? | RealWithin",
  description:
    "Explore why you may feel stuck in life, what may be keeping you in the same place, and how noticing your needs, choices and repeated patterns can make your next step clearer.",
};

export default function FeelStuckInLifePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I feel stuck in life?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may know that something needs to change without knowing what
              the change should be.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Or you may know what you want but keep delaying the decision,
              waiting for the right moment or returning to the same questions.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Feeling stuck can become easier to understand when you look at
              what is actually staying the same and what makes moving forward
              difficult.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start by making 'stuck' more specific">
              <p>
                Feeling stuck can mean many different things.
              </p>

              <p className="mt-4">
                You may feel unsure about work, a relationship, where you live,
                how you spend your time or what you want next.
              </p>

              <p className="mt-4">
                Try naming the part of life that feels most unchanged or
                difficult right now.
              </p>

              <p className="mt-4">
                A specific problem is usually easier to reflect on than the
                feeling that your whole life is stuck.
              </p>
            </ContentSection>

            <ContentSection title="You may know what you do not want before you know what you do want">
              <p>
                Sometimes clarity begins with recognising what no longer fits.
              </p>

              <p className="mt-4">
                You may know that a routine drains you, a situation feels too
                limiting or something that once suited you no longer feels
                right.
              </p>

              <p className="mt-4">
                That does not automatically tell you what to choose next, but it
                can still be useful information.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you are waiting for">
              <p>
                Sometimes movement is delayed because you are waiting for
                something to become certain.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>To know that a new choice will definitely work.</li>
                <li>To feel completely ready.</li>
                <li>For someone else to approve.</li>
                <li>For the timing to feel perfect.</li>
                <li>For your doubts to disappear.</li>
                <li>For another person to make the first move.</li>
              </ul>

              <p className="mt-4">
                Some of those things may never become fully certain before you
                need to decide.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  Which part of my life actually feels stuck?
                </Question>

                <Question>
                  What do I already know is not working for me?
                </Question>

                <Question>
                  What am I waiting to feel certain about?
                </Question>

                <Question>
                  Is there a decision I keep returning to but not making?
                </Question>

                <Question>
                  What is one small thing I could change without deciding
                  everything at once?
                </Question>
              </div>
            </section>

            <ContentSection title="A big decision may be hiding several smaller ones">
              <p>
                “What should I do with my life?” is a very large question.
              </p>

              <p className="mt-4">
                It may contain smaller questions about work, relationships,
                money, time, home, priorities or what you want more of.
              </p>

              <p className="mt-4">
                Breaking the problem apart can make it easier to see where you
                actually have a choice now.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether fear of the outcome is making the choice feel unclear">
              <p>
                Sometimes you know which direction you prefer but feel unsure
                because you cannot guarantee what will happen next.
              </p>

              <p className="mt-4">
                You may want a change and still worry that you will regret it,
                disappoint someone or lose something important.
              </p>

              <p className="mt-4">
                In that case, the uncertainty may be about the outcome rather
                than about what you want.
              </p>
            </ContentSection>

            <ContentSection title="Look at what has changed, even if your life feels the same">
              <p>
                Feeling stuck can make it easy to focus only on what has not
                moved.
              </p>

              <p className="mt-4">
                But your priorities, reactions or understanding may already be
                changing.
              </p>

              <p className="mt-4">
                You may be less willing to accept something you once accepted,
                clearer about a need or more aware of what keeps draining your
                energy.
              </p>

              <p className="mt-4">
                Those changes may not solve the situation, but they can affect
                what you choose next.
              </p>
            </ContentSection>

            <ContentSection title="Try a small experiment instead of demanding a final answer">
              <p>
                You may not need to solve the whole problem before taking one
                useful step.
              </p>

              <p className="mt-4">
                You could protect one evening for yourself, explore one option,
                have one conversation or change one part of a routine.
              </p>

              <p className="mt-4">
                A small change can give you information that thinking alone
                cannot always provide.
              </p>
            </ContentSection>

            <ContentSection title="Look for what keeps returning">
              <p>
                Feeling stuck for a few days does not necessarily mean there is
                a wider pattern.
              </p>

              <p className="mt-4">
                But if the same dissatisfaction, decision or need keeps
                returning across different weeks or situations, it may deserve
                more attention.
              </p>

              <p className="mt-4">
                Comparing those moments can help you see whether the same thing
                is repeatedly asking for a change.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/struggle-to-know-what-i-want"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to know what I want? →
                </Link>

                <Link
                  href="/identify-personal-values"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to identify your personal values →
                </Link>

                <Link
                  href="/struggle-with-uncertainty"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle with uncertainty? →
                </Link>

                <Link
                  href="/understand-yourself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How can I understand myself better? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              See what keeps asking for your attention.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday feelings,
              choices and changes. As your Reflections build across different
              days, it can help you notice possible Patterns and see when the
              same needs or questions keep returning.
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