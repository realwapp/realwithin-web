import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Second-Guess Myself? | RealWithin",
  description:
    "Understand why you may question your decisions after making them, what can keep the doubt going, and what may help you trust yourself more.",
};

export default function SecondGuessingPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I second-guess myself?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You make a decision, but instead of feeling settled, you start
              wondering if you got it wrong.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Maybe the other option was better. Maybe you should ask someone
              else. Maybe you should change your mind.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes the difficult part is not making the decision. It is
              trusting yourself after you have made it.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What second-guessing can look like">
              <p>
                Second-guessing can happen with big decisions, but it can also
                show up in small everyday choices.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Changing your mind soon after making a choice.</li>
                <li>Asking several people what they think.</li>
                <li>Looking for signs that you made the right decision.</li>
                <li>Thinking about what might have happened if you chose differently.</li>
                <li>Feeling unsure even when you had a good reason for your choice.</li>
                <li>Wanting someone else to confirm that you did the right thing.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Why can you keep questioning your decisions?">
              <p>
                Sometimes you second-guess yourself because you want to avoid
                making a mistake.
              </p>

              <p className="mt-4">
                You may also care a lot about how your choice affects other
                people. If someone seems disappointed or disagrees with you,
                that can make a decision you felt comfortable with suddenly
                feel less certain.
              </p>

              <p className="mt-4">
                Asking for another opinion can be useful. But if each new
                opinion makes it harder to hear your own, you may end up
                feeling less clear than before.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What made this choice feel right when I first made it?
                </Question>

                <Question>
                  Did something new happen, or did I simply start feeling unsure?
                </Question>

                <Question>
                  Am I asking for useful advice, or hoping someone will make the
                  decision feel safe for me?
                </Question>

                <Question>
                  Would I still question this choice if nobody else knew about it?
                </Question>
              </div>
            </section>

            <ContentSection title="A different opinion does not always mean your choice was wrong">
              <p>
                Someone else may have chosen differently from you. That does not
                automatically make their choice better.
              </p>

              <p className="mt-4">
                People make decisions based on different needs, priorities and
                situations. Advice can help you see another point of view, but
                you are still the person who has to live with the choice.
              </p>

              <p className="mt-4">
                It can help to notice when another person&apos;s reaction starts
                to matter more than the reasons you had for making your own
                decision.
              </p>
            </ContentSection>

            <ContentSection title="Notice what happens after you decide">
              <p>
                One difficult decision does not necessarily mean you have a
                pattern of doubting yourself.
              </p>

              <p className="mt-4">
                But if you often make a choice and then begin checking,
                comparing or asking for reassurance, that may be useful to
                notice.
              </p>

              <p className="mt-4">
                Looking back across different decisions can help you see what
                tends to bring the doubt back and whether the same response
                keeps appearing.
              </p>
            </ContentSection>

            {/* RELATED READING */}
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
                  href="/replaying-conversations"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I replay conversations in my head? →
                </Link>

                <Link
                  href="/repeating-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I keep repeating the same patterns? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what happens after you make a choice.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday decisions,
              doubts and reactions. As your Reflections build over time, it can
              help you notice whether the same kind of self-doubt keeps
              returning.
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