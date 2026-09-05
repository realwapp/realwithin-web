import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Apologise So Much? | RealWithin",
  description:
    "Understand why you may apologise so often, when an apology is useful, and how to notice when sorry becomes an automatic response.",
};

export default function ApologiseTooMuchPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I apologise so much?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes “sorry” comes out before you have even decided whether
              you did anything wrong.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may apologise for asking a question, needing something,
              disagreeing, taking up someone&apos;s time or simply being in the
              way.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice when an apology is taking responsibility
              and when it has become an automatic way of making yourself
              smaller.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Apologies can be useful">
              <p>
                Saying sorry matters when you have hurt someone, made a mistake
                or failed to follow through on something.
              </p>

              <p className="mt-4">
                A clear apology can show that you understand the effect of what
                happened and are willing to take responsibility.
              </p>

              <p className="mt-4">
                The difficulty may come when you apologise even when there is
                nothing clear to take responsibility for.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you apologise for">
              <p>
                Frequent apologies can appear in very ordinary situations.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Asking someone to repeat themselves.</li>
                <li>Needing more time before answering.</li>
                <li>Disagreeing with someone.</li>
                <li>Asking for help.</li>
                <li>Saying no to a request.</li>
                <li>Expressing a feeling or need.</li>
                <li>Walking past someone or taking up normal space.</li>
              </ul>

              <p className="mt-4">
                Looking at the situations can help you see whether “sorry” is
                connected to something you did or simply to being noticed.
              </p>
            </ContentSection>

            <ContentSection title="An apology can sometimes be an attempt to reduce tension">
              <p>
                If another person seems disappointed or uncomfortable, saying
                sorry may feel like a quick way to make the moment easier.
              </p>

              <p className="mt-4">
                You may apologise before deciding whether you actually believe
                you did something wrong.
              </p>

              <p className="mt-4">
                The apology may calm the conversation, but it can also make your
                own position less clear.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What exactly am I apologising for?
                </Question>

                <Question>
                  Did I do something wrong, or does this moment simply feel
                  uncomfortable?
                </Question>

                <Question>
                  Am I saying sorry because someone seems disappointed?
                </Question>

                <Question>
                  Would I expect another person to apologise for the same thing?
                </Question>

                <Question>
                  Are there certain people around whom I apologise more often?
                </Question>
              </div>
            </section>

            <ContentSection title="Try replacing unnecessary apologies with clearer words">
              <p>
                Sometimes the sentence works better without “sorry.”
              </p>

              <p className="mt-4">
                Instead of “Sorry, can I ask something?” you might simply ask
                the question.
              </p>

              <p className="mt-4">
                Instead of “Sorry I&apos;m late replying,” when no quick reply
                was expected, you might say, “Thanks for waiting.”
              </p>

              <p className="mt-4">
                Instead of apologising for disagreeing, you can say, “I see it
                differently.”
              </p>
            </ContentSection>

            <ContentSection title="Disappointing someone does not always mean you did something wrong">
              <p>
                Another person may be unhappy that you said no, changed a plan
                or chose something different from what they wanted.
              </p>

              <p className="mt-4">
                Their disappointment can be real without automatically meaning
                you owe an apology.
              </p>

              <p className="mt-4">
                Sometimes two people simply want different things.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether sorry appears before your real message">
              <p>
                You may begin an important sentence with an apology.
              </p>

              <p className="mt-4">
                “Sorry, but I need some time.” “Sorry, but that doesn&apos;t
                work for me.” “Sorry, but I disagree.”
              </p>

              <p className="mt-4">
                Removing the apology can help you hear what you were actually
                trying to communicate.
              </p>
            </ContentSection>

            <ContentSection title="You can be considerate without taking responsibility for everything">
              <p>
                Caring about how your actions affect other people is useful.
              </p>

              <p className="mt-4">
                But not every uncomfortable feeling around you belongs to you
                to fix.
              </p>

              <p className="mt-4">
                You can listen, explain your position and be respectful without
                automatically deciding that you caused the problem.
              </p>
            </ContentSection>

            <ContentSection title="Look for when the apology becomes automatic">
              <p>
                Saying sorry once does not tell you much about a wider pattern.
              </p>

              <p className="mt-4">
                But if apologies repeatedly appear when you ask for something,
                disagree, set a limit or take up normal space, it may be useful
                to compare those moments.
              </p>

              <p className="mt-4">
                Over time, you may begin to see what tends to trigger the
                apology and whether you are becoming more comfortable speaking
                without one.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/over-explaining"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I over-explain myself? →
                </Link>

                <Link
                  href="/disappointing-people"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I worry about disappointing people? →
                </Link>

                <Link
                  href="/responsible-for-others-feelings"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel responsible for other people&apos;s feelings? →
                </Link>

                <Link
                  href="/how-to-be-more-assertive"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to be more assertive →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what comes just before “sorry.”
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday conversations,
              choices and reactions. As your Reflections build across different
              days, it can help you notice possible Patterns in when you
              apologise and what tends to bring that response up.
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