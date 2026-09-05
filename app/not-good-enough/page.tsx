import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Feel Like I'm Not Good Enough? | RealWithin",
  description:
    "Understand why you may sometimes feel that you are not good enough, what tends to bring that feeling up, and how to notice the thoughts around it.",
};

export default function NotGoodEnoughPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I feel like I&apos;m not good enough?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You can be doing well and still feel as though you should be
              doing more.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              A mistake, someone else&apos;s success or one difficult moment
              may suddenly make you question yourself.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice what brings this feeling up and whether one
              moment is becoming a much bigger judgement about you.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Notice what happened before the feeling appeared">
              <p>
                Feeling that you are not good enough may become stronger in
                certain situations.
              </p>

              <p className="mt-4">
                You may have made a mistake, received criticism, compared
                yourself with someone else or felt that another person was
                disappointed.
              </p>

              <p className="mt-4">
                Looking at what happened just before can help you understand
                what the feeling is responding to.
              </p>
            </ContentSection>

            <ContentSection title="One difficult moment can become a bigger judgement">
              <p>
                Something may not go how you hoped, and your mind may quickly
                move from the event to a conclusion about yourself.
              </p>

              <p className="mt-4">
                A mistake can become “I&apos;m not capable.” A rejection can
                become “I&apos;m not wanted.” Slower progress can become
                “I&apos;m behind everyone else.”
              </p>

              <p className="mt-4">
                It can help to separate what actually happened from the wider
                meaning you started giving it.
              </p>
            </ContentSection>

            <ContentSection title="Notice the standard you are measuring yourself against">
              <p>
                Sometimes “good enough” is difficult to reach because the
                standard keeps changing.
              </p>

              <p className="mt-4">
                You may achieve something you once wanted and quickly focus on
                what is still missing.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>What do you believe you should already have achieved?</li>
                <li>Who are you comparing your progress with?</li>
                <li>What would actually count as enough?</li>
                <li>Would you expect the same from someone else?</li>
                <li>Has your standard changed as you have made progress?</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What happened just before I started feeling this way?
                </Question>

                <Question>
                  What am I telling myself this moment means about me?
                </Question>

                <Question>
                  Am I judging myself by one moment or by a wider picture?
                </Question>

                <Question>
                  Whose standard am I trying to meet?
                </Question>

                <Question>
                  Are there situations where I feel more secure in myself?
                </Question>
              </div>
            </section>

            <ContentSection title="Comparison can change how your own progress feels">
              <p>
                You may feel pleased with something until you see someone who
                appears further ahead.
              </p>

              <p className="mt-4">
                Your progress has not disappeared, but the comparison may
                change how you see it.
              </p>

              <p className="mt-4">
                It can help to return to what mattered to you before you started
                measuring yourself against someone else.
              </p>
            </ContentSection>

            <ContentSection title="Other people's reactions do not tell you everything about your value">
              <p>
                Praise, criticism, attention and rejection can all affect how
                you feel about yourself.
              </p>

              <p className="mt-4">
                But another person&apos;s response is also shaped by their own
                needs, expectations and point of view.
              </p>

              <p className="mt-4">
                Their reaction may give you useful information without becoming
                a complete judgement about who you are.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you overlook about yourself">
              <p>
                When you feel that you are not good enough, your attention may
                move quickly towards what is missing.
              </p>

              <p className="mt-4">
                You may give less attention to things you handled well,
                decisions you made carefully or progress that happened slowly.
              </p>

              <p className="mt-4">
                Looking at the wider picture does not mean ignoring what you
                want to improve. It can simply make the picture more complete.
              </p>
            </ContentSection>

            <ContentSection title="Look for when the same feeling keeps returning">
              <p>
                Feeling unsure about yourself in one difficult moment does not
                necessarily mean there is a wider pattern.
              </p>

              <p className="mt-4">
                But if criticism, comparison, mistakes or other people&apos;s
                reactions often lead to the same conclusion that you are not
                enough, that repeated response may be worth noticing.
              </p>

              <p className="mt-4">
                Looking across several moments can help you see what tends to
                bring the feeling up and whether your response begins to change.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/hard-on-myself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why am I so hard on myself? →
                </Link>

                <Link
                  href="/compare-myself-to-others"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I compare myself to others? →
                </Link>

                <Link
                  href="/perfectionism"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why am I a perfectionist? →
                </Link>

                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what makes you start questioning your value.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday thoughts,
              feelings and reactions. As your Reflections build across
              different days, it can help you notice whether the same doubts
              keep returning and what tends to bring them up.
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