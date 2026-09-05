import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Assume the Worst? | RealWithin",
  description:
    "Understand why your mind may jump to the worst outcome, what tends to trigger it, and how to separate what you know from what you are imagining.",
};

export default function AssumeTheWorstPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I assume the worst?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Something is uncertain, and your mind quickly moves towards the
              outcome you most hope will not happen.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              A late reply can become a problem. A small mistake can feel as
              though everything may go wrong. A difficult conversation can
              become a much bigger future problem before it has even happened.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice when you are responding to what you know
              and when your mind has started filling in what you do not know.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Uncertainty can leave space for many possibilities">
              <p>
                When you do not know what will happen, your mind may try to
                complete the picture.
              </p>

              <p className="mt-4">
                Sometimes it fills that space with possibilities that feel
                threatening or difficult.
              </p>

              <p className="mt-4">
                Thinking about a possible problem can be useful when it helps
                you prepare. It becomes less useful when one possible outcome
                starts feeling like the outcome that will definitely happen.
              </p>
            </ContentSection>

            <ContentSection title="Notice what starts the thought">
              <p>
                The worst-case story often begins with something small or
                unclear.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Someone takes longer than usual to reply.</li>
                <li>A person sounds different in a conversation.</li>
                <li>You make a mistake at work.</li>
                <li>You are waiting for an important answer.</li>
                <li>A plan suddenly changes.</li>
                <li>You notice something that you cannot immediately explain.</li>
              </ul>

              <p className="mt-4">
                Looking at the first moment can help you see how far the thought
                travelled afterwards.
              </p>
            </ContentSection>

            <ContentSection title="Separate what happened from what you predict">
              <p>
                Try describing the situation without explaining what it means.
              </p>

              <p className="mt-4">
                “They have not replied today” is something you may know.
                “They are avoiding me because something is wrong” is an
                interpretation.
              </p>

              <p className="mt-4">
                The interpretation may turn out to be correct, but it is still
                different from the information you currently have.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What do I actually know right now?
                </Question>

                <Question>
                  What have I started assuming will happen?
                </Question>

                <Question>
                  Are there other reasonable explanations?
                </Question>

                <Question>
                  Has anything happened that means I need to act now?
                </Question>

                <Question>
                  What kinds of uncertainty make me expect the worst most often?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice how quickly possibility becomes certainty">
              <p>
                You may begin with “What if something is wrong?” and soon find
                yourself thinking as though something is definitely wrong.
              </p>

              <p className="mt-4">
                The situation has not necessarily changed. Your level of
                certainty about the feared outcome has.
              </p>

              <p className="mt-4">
                Catching that change can help you return to what you actually
                know.
              </p>
            </ContentSection>

            <ContentSection title="More checking may not always give you certainty">
              <p>
                When you expect something bad, you may start looking for signs
                that confirm it.
              </p>

              <p className="mt-4">
                You might reread a message, check something again, ask another
                person what they think or keep going over the situation.
              </p>

              <p className="mt-4">
                Sometimes this gives you useful information. Other times, it
                keeps your attention on the same uncertainty without giving you
                anything new.
              </p>
            </ContentSection>

            <ContentSection title="Ask what you would think if the outcome felt less important">
              <p>
                Some situations feel harder to judge clearly because the
                possible outcome matters a lot to you.
              </p>

              <p className="mt-4">
                A relationship, decision or opportunity may feel important, so
                every uncertain detail can seem more meaningful.
              </p>

              <p className="mt-4">
                It can help to ask whether you would interpret the same
                information differently if you felt less worried about the
                result.
              </p>
            </ContentSection>

            <ContentSection title="Look for what repeats across different situations">
              <p>
                Expecting a bad outcome once does not necessarily mean there is
                a wider pattern.
              </p>

              <p className="mt-4">
                But if uncertainty often leads you quickly towards the most
                difficult explanation, it may be useful to compare several
                moments.
              </p>

              <p className="mt-4">
                Over time, you may begin to see which situations trigger this
                response and whether the same thoughts or actions tend to
                follow.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
                </Link>

                <Link
                  href="/take-things-personally"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I take things personally? →
                </Link>

                <Link
                  href="/reassurance"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I need reassurance so often? →
                </Link>

                <Link
                  href="/fear-of-rejection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I fear rejection? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice where the story goes when you do not know the answer.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday uncertainty,
              thoughts and reactions. As your Reflections build across
              different days, it can help you notice whether similar responses
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