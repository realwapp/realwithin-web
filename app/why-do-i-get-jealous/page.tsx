import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Get Jealous? | RealWithin",
  description:
    "Understand why jealousy can appear, what may be underneath it, and how to notice the situations, thoughts and reactions that tend to bring it up.",
};

export default function WhyDoIGetJealousPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I get jealous?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Jealousy can appear when something important to you suddenly
              feels less certain.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may notice it around attention, relationships, friendships,
              opportunities or situations where you begin comparing your place
              with someone else&apos;s.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Instead of judging the feeling immediately, it can help to look at
              what happened, what you started thinking and what felt at risk.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with the situation, not the label">
              <p>
                Saying “I&apos;m jealous” can make the feeling seem like one
                simple thing.
              </p>

              <p className="mt-4">
                It may be more useful to look at the actual moment.
              </p>

              <p className="mt-4">
                Did someone give another person attention? Did you feel left out
                of something? Did someone else get an opportunity you wanted?
              </p>

              <p className="mt-4">
                The specific situation can tell you more than the label alone.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you think the situation means">
              <p>
                The event itself and the meaning you give it may be different.
              </p>

              <p className="mt-4">
                Someone spending time with another person is one fact.
              </p>

              <p className="mt-4">
                “They prefer them to me” or “I&apos;m becoming less important”
                is an interpretation.
              </p>

              <p className="mt-4">
                The interpretation may or may not be accurate. Keeping that
                difference clear can help you understand the feeling more
                carefully.
              </p>
            </ContentSection>

            <ContentSection title="Jealousy can involve more than one feeling">
              <p>
                What you call jealousy may include several reactions at once.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Fear of losing something important.</li>
                <li>Feeling left out.</li>
                <li>Uncertainty about where you stand.</li>
                <li>Wanting attention or reassurance.</li>
                <li>Comparing yourself with someone else.</li>
                <li>Disappointment about something you wanted.</li>
              </ul>

              <p className="mt-4">
                Not every jealous moment includes all of these. The useful
                question is which ones fit your situation.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What exactly happened before I felt jealous?
                </Question>

                <Question>
                  What did I start believing the situation meant?
                </Question>

                <Question>
                  What am I worried I might lose or receive less of?
                </Question>

                <Question>
                  Is there evidence for what I am assuming?
                </Question>

                <Question>
                  Do similar situations bring up the same reaction for me?
                </Question>
              </div>
            </section>

            <ContentSection title="Try to separate comparison from information">
              <p>
                Seeing what someone else has can make you notice something you
                want too.
              </p>

              <p className="mt-4">
                That can sometimes be useful information.
              </p>

              <p className="mt-4">
                The difficulty may come when their situation becomes evidence
                that you are doing badly, are less valued or should already have
                the same thing.
              </p>

              <p className="mt-4">
                Their position and yours do not have to mean the same thing.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether you look for proof after the feeling starts">
              <p>
                Once jealousy appears, you may pay more attention to anything
                that seems to confirm it.
              </p>

              <p className="mt-4">
                A small comment, delayed reply or change in attention may begin
                to feel more important.
              </p>

              <p className="mt-4">
                It can help to ask whether you are finding new information or
                reading everything through the feeling you already have.
              </p>
            </ContentSection>

            <ContentSection title="A feeling does not automatically require an action">
              <p>
                Feeling jealous does not mean you need to confront someone,
                check something or make an immediate decision.
              </p>

              <p className="mt-4">
                You can first understand what the feeling is connected to.
              </p>

              <p className="mt-4">
                If there is a real issue to discuss, you may be able to speak
                about it more clearly once you know what actually concerns you.
              </p>
            </ContentSection>

            <ContentSection title="Ask whether there is a need underneath the reaction">
              <p>
                Sometimes jealousy can make you aware of something you want more
                clearly.
              </p>

              <p className="mt-4">
                You may want reassurance, inclusion, clearer communication,
                recognition or more certainty about where you stand.
              </p>

              <p className="mt-4">
                These are possibilities rather than fixed meanings. It helps to
                check which one, if any, fits the moment you are reflecting on.
              </p>
            </ContentSection>

            <ContentSection title="Look for what repeats instead of defining yourself by one moment">
              <p>
                Feeling jealous once does not mean jealousy is a general trait
                of yours.
              </p>

              <p className="mt-4">
                But if similar situations repeatedly bring up the same thoughts
                or reactions, it may be useful to compare them.
              </p>

              <p className="mt-4">
                Over time, you may notice what tends to trigger the feeling,
                what you usually assume and whether your response is beginning
                to change.
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
                  href="/fear-of-rejection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I fear rejection? →
                </Link>

                <Link
                  href="/reassurance"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I need reassurance so often? →
                </Link>

                <Link
                  href="/understand-your-emotions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to understand your emotions better →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what jealousy is asking you to pay attention to.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday feelings,
              relationships and reactions. As your Reflections build across
              different days, it can help you notice possible Patterns and what
              tends to bring similar feelings up.
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