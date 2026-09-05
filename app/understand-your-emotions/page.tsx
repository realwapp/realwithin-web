import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Understand Your Emotions Better | RealWithin",
  description:
    "Learn how to understand your emotions better by noticing what you feel, what happened around the feeling, what you needed, and what keeps returning over time.",
};

export default function UnderstandYourEmotionsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to understand your emotions better
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes you know that you feel different but cannot immediately
              explain what is happening.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              A feeling may seem stronger than the situation, appear after the
              moment has passed or be difficult to put into words.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Understanding your emotions can begin with noticing them
              carefully before trying to explain or change them.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with what you can notice">
              <p>
                You do not need to understand the whole feeling immediately.
              </p>

              <p className="mt-4">
                Begin with the simplest description you can give.
              </p>

              <p className="mt-4">
                Maybe you feel irritated, heavy, hopeful, disappointed,
                nervous, relieved or simply unsure.
              </p>

              <p className="mt-4">
                Even an imperfect word can give you somewhere to start.
              </p>
            </ContentSection>

            <ContentSection title="Look at what happened before the feeling">
              <p>
                Feelings often appear in a wider situation.
              </p>

              <p className="mt-4">
                Think about what happened shortly before you noticed the
                emotion.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Did someone say something that stayed with you?</li>
                <li>Did a plan change?</li>
                <li>Were you waiting for an answer?</li>
                <li>Did you agree to something you did not really want?</li>
                <li>Did something go better than you expected?</li>
                <li>Were you already tired or under pressure?</li>
              </ul>

              <p className="mt-4">
                This does not prove what caused the feeling, but it can give
                useful context.
              </p>
            </ContentSection>

            <ContentSection title="Try not to turn one feeling into a conclusion about yourself">
              <p>
                Feeling insecure in one moment does not necessarily mean you are
                an insecure person.
              </p>

              <p className="mt-4">
                Feeling angry once does not mean anger defines you.
              </p>

              <p className="mt-4">
                It can be more accurate to describe what happened in that
                particular moment and see whether anything similar appears
                again later.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What am I feeling right now, as simply as I can describe it?
                </Question>

                <Question>
                  What happened shortly before I noticed this feeling?
                </Question>

                <Question>
                  What part of the situation affected me most?
                </Question>

                <Question>
                  What did I want or need in that moment?
                </Question>

                <Question>
                  Have I noticed a similar feeling in another situation
                  recently?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice the difference between the feeling and the story around it">
              <p>
                A feeling and an interpretation are not always the same thing.
              </p>

              <p className="mt-4">
                You may feel hurt because someone has not replied. Then your
                mind may add, “They do not care about me.”
              </p>

              <p className="mt-4">
                The hurt is something you are experiencing. The explanation
                about why they have not replied may still be uncertain.
              </p>

              <p className="mt-4">
                Separating the two can help you understand what you feel without
                treating every interpretation as a fact.
              </p>
            </ContentSection>

            <ContentSection title="Ask what mattered to you in the moment">
              <p>
                Emotions can sometimes point towards something that felt
                important.
              </p>

              <p className="mt-4">
                Disappointment may appear when something you hoped for did not
                happen. Frustration may appear when something important feels
                blocked.
              </p>

              <p className="mt-4">
                Relief may show you that a pressure you were carrying has
                changed.
              </p>

              <p className="mt-4">
                These are possibilities rather than fixed meanings, so it can
                help to stay curious about what fits your actual situation.
              </p>
            </ContentSection>

            <ContentSection title="You can feel more than one thing at once">
              <p>
                Emotions do not always arrive neatly one at a time.
              </p>

              <p className="mt-4">
                You might feel excited about a new opportunity and worried about
                what you are leaving behind.
              </p>

              <p className="mt-4">
                You may care about someone and still feel frustrated with them.
              </p>

              <p className="mt-4">
                Allowing both feelings to exist can sometimes make the situation
                easier to understand than trying to decide which one is the
                “real” feeling.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you do after the feeling appears">
              <p>
                Your response can give you another useful clue.
              </p>

              <p className="mt-4">
                Perhaps you withdraw, ask for reassurance, explain yourself,
                become quiet, distract yourself or try to solve the situation
                immediately.
              </p>

              <p className="mt-4">
                One response may not mean very much on its own. But similar
                reactions across different moments may be worth noticing.
              </p>
            </ContentSection>

            <ContentSection title="Look across several days, not one moment">
              <p>
                Emotions change with situations, people and circumstances.
              </p>

              <p className="mt-4">
                Looking at one difficult day can give you a very different
                picture from looking across several weeks.
              </p>

              <p className="mt-4">
                Over time, you may begin to notice which feelings return, what
                tends to happen around them and whether your responses are
                starting to change.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/struggle-to-express-feelings"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to express my feelings? →
                </Link>

                <Link
                  href="/emotional-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to recognise emotional patterns →
                </Link>

                <Link
                  href="/become-more-self-aware"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to become more self-aware →
                </Link>

                <Link
                  href="/what-is-self-reflection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  What is self-reflection? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what your feelings look like across different days.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on how you feel and what
              is on your mind. As your Reflections build over time, it can help
              you notice possible Patterns, recurring themes and meaningful
              changes in how you respond.
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