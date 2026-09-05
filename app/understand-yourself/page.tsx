import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Can I Understand Myself Better? | RealWithin",
  description:
    "Explore simple ways to understand yourself better by noticing your feelings, reactions, choices and patterns over time.",
};

export default function UnderstandYourselfPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How can I understand myself better?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Understanding yourself does not always come from finding one big
              answer about who you are.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can start by paying more attention to the small things:
              what affects you, what keeps coming back, what matters to you
              and what begins to change.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with what is happening now">
              <p>
                It can be hard to understand yourself when you only think in
                broad terms such as “What kind of person am I?”
              </p>

              <p className="mt-4">
                It may be easier to start with a real moment from your day.
                Notice how you felt, what happened and what seemed important
                to you.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>What made me feel lighter or more tense today?</li>
                <li>What did I keep thinking about?</li>
                <li>When did I feel most comfortable being myself?</li>
                <li>What did I avoid or put off?</li>
                <li>What mattered more to me than I expected?</li>
              </ul>
            </ContentSection>

            <ContentSection title="Notice your reactions, not just the situation">
              <p>
                Two people can experience the same situation very differently.
                Your reaction can sometimes tell you something useful about
                what matters to you.
              </p>

              <p className="mt-4">
                For example, feeling disappointed may point towards something
                you hoped for. Feeling uncomfortable may show that a situation
                did not sit well with you. Feeling relieved may tell you that
                some pressure has lifted.
              </p>

              <p className="mt-4">
                You do not need to turn every feeling into a lesson. Simply
                noticing your response can help you understand the moment more
                clearly.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to ask yourself
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What has been taking up a lot of my attention recently?
                </Question>

                <Question>
                  What situations seem to bring out the same reaction in me?
                </Question>

                <Question>
                  What do I often need but find difficult to ask for?
                </Question>

                <Question>
                  Is anything starting to feel different from how it felt a few
                  weeks or months ago?
                </Question>
              </div>
            </section>

            <ContentSection title="Look for what repeats">
              <p>
                One moment can tell you something about one day. Several
                similar moments may show you something more.
              </p>

              <p className="mt-4">
                You might notice that you often doubt yourself after making a
                decision, worry about disappointing people or replay certain
                conversations afterwards.
              </p>

              <p className="mt-4">
                Seeing the same response in different situations can help you
                understand what tends to affect you and what you may want to
                pay more attention to.
              </p>
            </ContentSection>

            <ContentSection title="Notice what changes too">
              <p>
                Understanding yourself is not only about finding what stays the
                same.
              </p>

              <p className="mt-4">
                Your needs, priorities and reactions can change. Something that
                once felt very difficult may start to feel easier. Something
                you used to accept may begin to bother you.
              </p>

              <p className="mt-4">
                Looking back over time can make these smaller changes easier to
                notice.
              </p>
            </ContentSection>

            <ContentSection title="You do not need to have yourself completely figured out">
              <p>
                Self-understanding can grow gradually.
              </p>

              <p className="mt-4">
                You may understand one reaction today and notice a different
                part of yourself later. Some questions may stay open for a
                while.
              </p>

              <p className="mt-4">
                The aim does not have to be finding a perfect explanation for
                everything you do. It can simply be knowing yourself a little
                better than you did before.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/repeating-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I keep repeating the same patterns? →
                </Link>

                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>

                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Small moments can tell you more over time.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on how you feel and what
              is on your mind. As your Reflections build, it can help you
              notice repeated Patterns and meaningful changes across different
              days.
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