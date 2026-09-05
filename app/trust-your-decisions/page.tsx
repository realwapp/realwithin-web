import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Trust Your Own Decisions | RealWithin",
  description:
    "Learn how to trust your decisions more by noticing what guided your choice, what brings doubt back, and when outside opinions begin to change your confidence.",
};

export default function TrustYourDecisionsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to trust your own decisions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Making a decision does not always make the doubt disappear.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may choose something for good reasons and still start
              wondering whether another option would have been better.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Trusting yourself can sometimes mean learning how to stay with a
              reasonable choice even when you cannot feel completely certain.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Remember what guided your choice">
              <p>
                Doubt can make it easy to forget why you made a decision in the
                first place.
              </p>

              <p className="mt-4">
                Before you reopen the whole question, think about what you knew
                when you decided.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>What information did you have?</li>
                <li>What mattered most to you?</li>
                <li>What did you need at the time?</li>
                <li>What made one option feel more suitable than another?</li>
                <li>Did you give yourself enough time to think?</li>
              </ul>

              <p className="mt-4">
                A decision does not need to be perfect to have been reasonable
                with the information you had.
              </p>
            </ContentSection>

            <ContentSection title="Notice what brings the doubt back">
              <p>
                Sometimes new information gives you a real reason to reconsider
                a choice.
              </p>

              <p className="mt-4">
                Other times, the doubt may return because someone disagrees,
                another option suddenly looks attractive or you start thinking
                about everything that could go wrong.
              </p>

              <p className="mt-4">
                It can help to notice the difference between learning something
                new and simply feeling less certain.
              </p>
            </ContentSection>

            <ContentSection title="Other opinions can help without making the decision for you">
              <p>
                Asking someone you trust for advice can give you another point
                of view.
              </p>

              <p className="mt-4">
                But people may give different advice because they have
                different priorities, experiences or needs.
              </p>

              <p className="mt-4">
                Their opinion can be useful information without automatically
                being a better answer for your situation.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What were my main reasons for making this choice?
                </Question>

                <Question>
                  Has anything important changed since I decided?
                </Question>

                <Question>
                  Am I looking for useful information, or hoping someone will
                  make me feel certain?
                </Question>

                <Question>
                  Do I usually trust my decisions until someone else reacts to
                  them?
                </Question>
              </div>
            </section>

            <ContentSection title="Try not to judge a decision only by the outcome">
              <p>
                A good decision can still lead to an outcome you did not want.
              </p>

              <p className="mt-4">
                You cannot always know what will happen when you make a choice.
                Sometimes you can make a thoughtful decision and still face a
                difficult result.
              </p>

              <p className="mt-4">
                It may be more useful to ask whether your decision made sense
                with what you knew at the time.
              </p>
            </ContentSection>

            <ContentSection title="Give yourself time before reopening the decision">
              <p>
                Doubt often feels urgent. You may want to check, ask someone or
                change your mind straight away.
              </p>

              <p className="mt-4">
                If there is no need to decide again immediately, giving the
                choice some time may help you see whether the concern is still
                important later.
              </p>

              <p className="mt-4">
                This does not mean ignoring new information. It simply gives
                you some space before reacting to the first wave of doubt.
              </p>
            </ContentSection>

            <ContentSection title="Look at how you respond across different decisions">
              <p>
                One difficult choice may naturally leave you unsure.
              </p>

              <p className="mt-4">
                But if you often make a decision and then begin checking,
                comparing, asking for reassurance or changing your mind, that
                response may be worth noticing.
              </p>

              <p className="mt-4">
                Looking across several decisions can help you see what tends to
                make it harder to trust your own judgement.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>

                <Link
                  href="/reassurance"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I need reassurance so often? →
                </Link>

                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
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

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what happens after you decide.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday choices and
              doubts. As your Reflections build over time, it can help you
              notice whether the same kind of uncertainty keeps returning and
              what tends to bring it back.
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