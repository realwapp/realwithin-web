import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Become More Self-Aware | RealWithin",
  description:
    "Learn simple ways to become more self-aware by noticing your feelings, reactions, choices and repeated patterns in everyday life.",
};

export default function BecomeMoreSelfAwarePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to become more self-aware
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Self-awareness is about noticing what is happening inside you
              and how it may affect the choices you make.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You do not need to understand everything about yourself at once.
              It can begin with paying closer attention to ordinary moments in
              your day.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Notice how you feel">
              <p>
                A simple place to start is noticing how you feel before trying
                to explain why.
              </p>

              <p className="mt-4">
                You might feel tired, anxious, hopeful, frustrated or relieved.
                The feeling does not need to be strong or unusual to be worth
                noticing.
              </p>

              <p className="mt-4">
                Giving yourself a moment to name what you feel can make it
                easier to pay attention to what is happening around it.
              </p>
            </ContentSection>

            <ContentSection title="Pay attention to what affects you">
              <p>
                Your reactions can sometimes show you what matters to you.
              </p>

              <p className="mt-4">
                You may notice that certain conversations stay on your mind,
                some decisions bring a lot of doubt or someone&apos;s reaction
                changes how you feel about your own choice.
              </p>

              <p className="mt-4">
                Instead of judging the reaction, try to notice what seemed to
                bring it up.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you do when a feeling appears">
              <p>
                Self-awareness is not only about recognising emotions. It can
                also help to notice what you tend to do next.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Do you ask someone for reassurance?</li>
                <li>Do you start questioning your decision?</li>
                <li>Do you avoid saying what you really want?</li>
                <li>Do you explain yourself more than you planned?</li>
                <li>Do you keep thinking about what happened afterwards?</li>
              </ul>

              <p className="mt-4">
                These responses may be different depending on the situation.
                Looking at several moments can help you see whether anything
                keeps returning.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few questions to ask yourself
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What has affected me more than I expected recently?
                </Question>

                <Question>
                  When do I feel most comfortable being myself?
                </Question>

                <Question>
                  What situations seem to bring out the same reaction in me?
                </Question>

                <Question>
                  Is there anything I keep needing, avoiding or thinking about?
                </Question>
              </div>
            </section>

            <ContentSection title="Look at your choices as well as your feelings">
              <p>
                The choices you make can also tell you something about what
                matters to you.
              </p>

              <p className="mt-4">
                For example, you may keep choosing peace over disagreement,
                certainty over risk or someone else&apos;s needs over your own.
              </p>

              <p className="mt-4">
                This does not mean there is anything wrong with those choices.
                The useful part is noticing what tends to guide you.
              </p>
            </ContentSection>

            <ContentSection title="Look for patterns across time">
              <p>
                It can be hard to see yourself clearly from one day alone.
              </p>

              <p className="mt-4">
                A reaction may seem unimportant until you notice something
                similar happening again in another situation.
              </p>

              <p className="mt-4">
                Looking back across several moments can help you see what tends
                to repeat, what seems to affect you most and what may be
                starting to change.
              </p>
            </ContentSection>

            <ContentSection title="Leave room for yourself to change">
              <p>
                Being self-aware does not mean deciding exactly what kind of
                person you are and staying with that answer.
              </p>

              <p className="mt-4">
                Your reactions, needs and priorities can change over time.
              </p>

              <p className="mt-4">
                Something that used to bother you may become easier. You may
                become more comfortable saying no, trusting a decision or
                asking for what you need.
              </p>

              <p className="mt-4">
                Noticing those changes is also part of understanding yourself.
              </p>
            </ContentSection>

            <ContentSection title="Try to stay curious rather than judging yourself">
              <p>
                Self-awareness can become less useful if every reaction turns
                into a reason to criticise yourself.
              </p>

              <p className="mt-4">
                Instead of asking, “Why am I like this?”, it may help to ask,
                “What was happening for me in that moment?”
              </p>

              <p className="mt-4">
                That keeps the focus on understanding what happened rather than
                turning one moment into a fixed idea about who you are.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/understand-yourself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How can I understand myself better? →
                </Link>

                <Link
                  href="/notice-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to notice patterns in yourself →
                </Link>

                <Link
                  href="/emotional-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to recognise emotional patterns →
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
              Start with one small moment.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on how you feel and what
              is on your mind. As your Reflections build across different days,
              it can help you notice possible Patterns and meaningful changes
              that may be easier to see over time.
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