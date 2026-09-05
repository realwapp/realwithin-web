import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Struggle to Know What I Want? | RealWithin",
  description:
    "Understand why it can be difficult to know what you want, what may make your own preferences harder to hear, and how reflection can help make them clearer.",
};

export default function StruggleToKnowWhatIWantPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I struggle to know what I want?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes it is easier to know what other people expect from you
              than to know what you actually want.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may think through every option, ask for advice or keep
              changing your mind because no answer feels completely clear.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice what is making your own preference difficult
              to hear.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="You may be trying to find the perfect answer">
              <p>
                Some choices have a clear practical answer. Others involve
                several options that could all work.
              </p>

              <p className="mt-4">
                If you believe there must be one completely right choice, you
                may keep looking for certainty that the situation cannot give
                you.
              </p>

              <p className="mt-4">
                Sometimes knowing what you want means choosing between
                imperfect options rather than discovering one perfect answer.
              </p>
            </ContentSection>

            <ContentSection title="Other people's opinions can become louder than your own">
              <p>
                Advice can be useful, especially when someone has experience or
                information you do not have.
              </p>

              <p className="mt-4">
                But if you ask many people what they would do, their different
                opinions can make your own starting point harder to remember.
              </p>

              <p className="mt-4">
                Before asking someone else, it may help to notice what you were
                leaning towards first.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you feel you should want">
              <p>
                Sometimes the difficulty is not that you have no preference.
              </p>

              <p className="mt-4">
                You may have an idea of what you want but also believe you
                should want something different.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>What would look sensible to other people?</li>
                <li>What would disappoint someone least?</li>
                <li>What choice seems more impressive?</li>
                <li>What do you think someone in your position should choose?</li>
                <li>What would be easiest to explain?</li>
              </ul>

              <p className="mt-4">
                These questions may matter, but they are different from asking
                what feels important to you.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What was my first reaction before I started analysing the
                  choice?
                </Question>

                <Question>
                  What would I choose if nobody else needed to approve?
                </Question>

                <Question>
                  Which option fits what matters to me right now?
                </Question>

                <Question>
                  Am I unclear about what I want, or worried about what will
                  happen if I choose it?
                </Question>

                <Question>
                  Have I felt more certain about similar choices in the past?
                </Question>
              </div>
            </section>

            <ContentSection title="Fear of the outcome can feel like uncertainty about the choice">
              <p>
                Sometimes you may know what you prefer but feel unsure because
                the outcome cannot be guaranteed.
              </p>

              <p className="mt-4">
                You may want to change jobs but worry that the new one will not
                work out. You may want to say no but worry about someone&apos;s
                reaction.
              </p>

              <p className="mt-4">
                In those moments, the question may be less “What do I want?” and
                more “Can I accept the uncertainty that comes with choosing
                it?”
              </p>
            </ContentSection>

            <ContentSection title="Your feelings can give you information without making the decision for you">
              <p>
                Relief, excitement, discomfort or hesitation can sometimes tell
                you something about how an option feels.
              </p>

              <p className="mt-4">
                They do not always mean you should follow or avoid a choice.
              </p>

              <p className="mt-4">
                But noticing them can add useful information alongside the
                practical facts.
              </p>
            </ContentSection>

            <ContentSection title="Look at what you repeatedly move towards">
              <p>
                Your everyday choices may reveal preferences that are harder to
                name directly.
              </p>

              <p className="mt-4">
                Notice what you keep making time for, what gives you energy,
                what you miss when it is absent and which decisions you keep
                returning to.
              </p>

              <p className="mt-4">
                Across several moments, these repeated choices may make your
                priorities easier to see.
              </p>
            </ContentSection>

            <ContentSection title="What you want can change">
              <p>
                Not knowing does not always mean you are disconnected from
                yourself.
              </p>

              <p className="mt-4">
                Sometimes you are between an old preference and a new one that
                has not become clear yet.
              </p>

              <p className="mt-4">
                Your priorities may change as your life changes. Giving
                yourself time to notice that shift can be more useful than
                forcing an answer too quickly.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/identify-personal-values"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to identify your personal values →
                </Link>

                <Link
                  href="/trust-your-decisions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to trust your own decisions →
                </Link>

                <Link
                  href="/question-every-decision"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I question every decision I make? →
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
              Notice what keeps pulling your attention back.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday feelings,
              choices and doubts. As your Reflections build across different
              days, it can help you notice recurring needs, priorities and
              changes that may make your own direction clearer.
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