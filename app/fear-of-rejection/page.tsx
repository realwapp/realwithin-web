import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Fear Rejection? | RealWithin",
  description:
    "Understand why rejection can feel so difficult, what situations bring the fear up, and how to notice when it starts affecting your choices.",
};

export default function FearOfRejectionPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I fear rejection?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Rejection can be difficult because something you wanted may not
              be wanted in the same way by someone else.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes the possibility of rejection becomes difficult before
              anything has even happened.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may hold back, change what you say or look for signs that
              something is going wrong. Noticing those moments can help you
              understand what the fear is changing for you.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="The possibility of rejection can affect you before the answer">
              <p>
                Sometimes you do not need to be rejected to start reacting to
                the possibility of it.
              </p>

              <p className="mt-4">
                You may notice yourself becoming more careful about what you
                say, whether you ask for something or how much interest you
                show.
              </p>

              <p className="mt-4">
                The uncertainty itself may begin shaping your behaviour.
              </p>
            </ContentSection>

            <ContentSection title="Notice what rejection seems to mean to you">
              <p>
                A no can mean something specific: a person does not want the
                same relationship, an opportunity did not work out or someone
                chose differently.
              </p>

              <p className="mt-4">
                But your mind may turn that into a much wider conclusion.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Maybe I am not good enough.</li>
                <li>Maybe I did something wrong.</li>
                <li>Maybe they never really liked me.</li>
                <li>Maybe I should not have tried.</li>
                <li>Maybe everyone will eventually leave.</li>
              </ul>

              <p className="mt-4">
                It can help to separate what the rejection actually tells you
                from what you begin assuming it says about you.
              </p>
            </ContentSection>

            <ContentSection title="Fear of rejection can change your choices">
              <p>
                Sometimes avoiding rejection means avoiding the situation where
                it could happen.
              </p>

              <p className="mt-4">
                You may decide not to ask, not to share how you feel or not to
                try something unless you already feel confident about the
                answer.
              </p>

              <p className="mt-4">
                That can protect you from an uncomfortable moment. It may also
                mean the fear begins making decisions before you know what the
                real outcome would have been.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What am I worried this person might say or do?
                </Question>

                <Question>
                  What would their rejection seem to mean about me?
                </Question>

                <Question>
                  Am I changing what I really want to say because I am worried
                  about the answer?
                </Question>

                <Question>
                  What would I choose if I knew I could handle either response?
                </Question>

                <Question>
                  Does this fear become stronger in certain relationships or
                  situations?
                </Question>
              </div>
            </section>

            <ContentSection title="Watch for signs that you are trying to predict the answer">
              <p>
                When rejection feels important, small details can begin to feel
                meaningful.
              </p>

              <p className="mt-4">
                A slower reply, different tone or change in plans may lead you
                to wonder whether someone is losing interest or thinking
                differently about you.
              </p>

              <p className="mt-4">
                Sometimes those details do mean something. Sometimes there are
                other explanations.
              </p>

              <p className="mt-4">
                It can help to notice the difference between what you know and
                what you are trying to predict.
              </p>
            </ContentSection>

            <ContentSection title="A rejection is not always a judgement of your value">
              <p>
                People can say no for many reasons.
              </p>

              <p className="mt-4">
                They may want something different, have different priorities or
                simply not feel the same connection.
              </p>

              <p className="mt-4">
                That can still hurt. But it does not automatically give you a
                complete answer about your value as a person.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you do after you feel rejected">
              <p>
                Your response afterwards can also be useful to notice.
              </p>

              <p className="mt-4">
                You may replay the situation, look for something you did wrong,
                withdraw, ask for reassurance or decide that you should not try
                again.
              </p>

              <p className="mt-4">
                These reactions may tell you more about what the moment brought
                up for you than about what the other person intended.
              </p>
            </ContentSection>

            <ContentSection title="Look for what repeats across different situations">
              <p>
                Feeling afraid of one important rejection does not necessarily
                mean there is a wider pattern.
              </p>

              <p className="mt-4">
                But if the possibility of rejection often makes you hold back,
                change yourself or question your value, it may be useful to look
                across several moments.
              </p>

              <p className="mt-4">
                Over time, you may begin to see what situations bring the fear
                up most strongly and what you tend to do when it appears.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/not-good-enough"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel like I&apos;m not good enough? →
                </Link>

                <Link
                  href="/care-what-people-think"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I care so much what people think? →
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
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what the possibility of rejection changes for you.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday feelings,
              choices and relationships. As your Reflections build across
              different days, it can help you notice whether similar worries or
              reactions keep returning.
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