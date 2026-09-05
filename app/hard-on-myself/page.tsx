import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Am I So Hard on Myself? | RealWithin",
  description:
    "Understand why you may judge yourself more harshly than other people, what tends to bring self-criticism up, and how to notice the pattern more clearly.",
};

export default function HardOnMyselfPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why am I so hard on myself?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You make a mistake, fall behind or handle something differently
              from how you hoped, and your mind quickly starts judging you.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may expect more from yourself than you would expect from
              someone else in the same situation.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Noticing how you speak to yourself can help you see when useful
              reflection starts turning into harsh self-criticism.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="High standards and harsh judgement are not the same thing">
              <p>
                Wanting to do something well can be useful. It can help you
                prepare, improve and take responsibility for your choices.
              </p>

              <p className="mt-4">
                The tone can change when a mistake stops being about what
                happened and starts becoming a judgement about you.
              </p>

              <p className="mt-4">
                Instead of thinking, “I could have handled that differently,”
                you may start thinking that you always get things wrong or
                should have known better.
              </p>
            </ContentSection>

            <ContentSection title="Notice when the criticism becomes stronger">
              <p>
                You may not be equally hard on yourself in every situation.
              </p>

              <p className="mt-4">
                Certain moments may bring it up more strongly.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Making a mistake in front of someone else.</li>
                <li>Feeling that you have disappointed someone.</li>
                <li>Not reaching a goal as quickly as you expected.</li>
                <li>Comparing your progress with another person.</li>
                <li>Changing your mind after making a decision.</li>
                <li>Looking back and wishing you had acted differently.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Look at the words you use about yourself">
              <p>
                The way you describe a difficult moment can change how it feels.
              </p>

              <p className="mt-4">
                There is a difference between saying, “That did not go how I
                wanted,” and turning the same moment into, “I never get anything
                right.”
              </p>

              <p className="mt-4">
                One describes what happened. The other turns one experience
                into a much bigger conclusion about you.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What actually happened, without adding a judgement about
                  myself?
                </Question>

                <Question>
                  Would I speak to someone else this way in the same situation?
                </Question>

                <Question>
                  Am I expecting myself to have known something I could not
                  have known at the time?
                </Question>

                <Question>
                  Is there something useful I can learn without turning it into
                  a criticism of who I am?
                </Question>

                <Question>
                  Which situations seem to make me judge myself most strongly?
                </Question>
              </div>
            </section>

            <ContentSection title="Looking back can make things seem more obvious">
              <p>
                After something happens, it can feel as though you should have
                known exactly what to do.
              </p>

              <p className="mt-4">
                But you made the original choice without knowing everything
                that you know now.
              </p>

              <p className="mt-4">
                It may be more useful to ask what information you had at the
                time and whether your response made sense with what you knew
                then.
              </p>
            </ContentSection>

            <ContentSection title="You can take responsibility without attacking yourself">
              <p>
                Being less harsh with yourself does not mean pretending that
                every choice was good.
              </p>

              <p className="mt-4">
                You can recognise that you made a mistake, apologise when
                needed or decide what you want to do differently next time.
              </p>

              <p className="mt-4">
                Understanding what happened may give you more useful
                information than repeatedly telling yourself that you should
                have been better.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether the standard keeps moving">
              <p>
                Sometimes you reach something you wanted and immediately focus
                on what is still missing.
              </p>

              <p className="mt-4">
                Something that once would have felt like progress may quickly
                become something you believe you should already have done.
              </p>

              <p className="mt-4">
                If this happens often, it may be useful to notice whether you
                give yourself time to recognise progress before expecting the
                next thing.
              </p>
            </ContentSection>

            <ContentSection title="Look for the pattern across different moments">
              <p>
                Being disappointed with yourself once does not mean you are
                generally too hard on yourself.
              </p>

              <p className="mt-4">
                But if mistakes, uncertainty or slower progress often lead to
                strong self-criticism, the repeated response may be worth
                noticing.
              </p>

              <p className="mt-4">
                Looking across several situations can help you see what tends
                to bring that voice out and whether it is beginning to change.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/compare-myself-to-others"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I compare myself to others? →
                </Link>

                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>

                <Link
                  href="/self-sabotage"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I self-sabotage? →
                </Link>

                <Link
                  href="/become-more-self-aware"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to become more self-aware →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice how you respond when things do not go as planned.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday thoughts,
              feelings and reactions. As your Reflections build across
              different days, it can help you notice whether the same kind of
              self-criticism keeps returning and when it begins to change.
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