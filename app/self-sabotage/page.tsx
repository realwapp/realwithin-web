import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Self-Sabotage? | RealWithin",
  description:
    "Understand why you may sometimes make choices that seem to work against what you want, and how noticing what happens before and after can help you see the pattern more clearly.",
};

export default function SelfSabotagePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I self-sabotage?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may know what you want, but sometimes find yourself doing
              something that seems to move you in the opposite direction.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You put something off, pull away, change your mind or avoid a
              step you had planned to take.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can be more useful to understand what was happening in that
              moment than to simply tell yourself you ruined your own progress.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What people often mean by self-sabotage">
              <p>
                People often use the word self-sabotage when their actions do
                not seem to match what they say they want.
              </p>

              <p className="mt-4">
                That can look different from one person or situation to
                another.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Putting off something that matters to you.</li>
                <li>Giving up soon after making progress.</li>
                <li>Pulling away when something starts going well.</li>
                <li>Changing a decision because doubt suddenly feels stronger.</li>
                <li>Avoiding a conversation you know you need to have.</li>
                <li>Returning to a choice that has left you unhappy before.</li>
              </ul>

              <p className="mt-4">
                One choice like this does not automatically mean you have a
                pattern. The context matters.
              </p>
            </ContentSection>

            <ContentSection title="The choice may make sense in the moment">
              <p>
                A decision can look confusing when you only compare it with
                your long-term goal.
              </p>

              <p className="mt-4">
                In the moment, however, the choice may offer something you
                need. Avoiding a difficult task can bring relief. Pulling away
                may feel safer than staying uncertain. Changing your mind may
                reduce the worry of making the wrong choice.
              </p>

              <p className="mt-4">
                This does not mean the choice is always helpful. It means there
                may be a reason it feels easier at that moment.
              </p>
            </ContentSection>

            <ContentSection title="Look at what happens just before">
              <p>
                Instead of asking only, “Why did I do that again?”, try looking
                at what happened before the choice.
              </p>

              <p className="mt-4">
                You may have started feeling unsure, pressured, disappointed or
                worried about what would happen next.
              </p>

              <p className="mt-4">
                Noticing that moment can help you understand what the choice
                was responding to.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What was I feeling just before I changed direction?
                </Question>

                <Question>
                  What did this choice make easier for me in that moment?
                </Question>

                <Question>
                  Was I avoiding something difficult, uncertain or
                  uncomfortable?
                </Question>

                <Question>
                  Have I responded in a similar way in other situations?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice the difference between short-term relief and what you want later">
              <p>
                Some choices can make a difficult feeling smaller straight
                away.
              </p>

              <p className="mt-4">
                Cancelling something may remove pressure. Avoiding a
                conversation may remove conflict for the day. Giving up on a
                decision may stop you worrying about whether it will work.
              </p>

              <p className="mt-4">
                The useful question may be whether the choice still feels right
                after the uncomfortable moment has passed.
              </p>
            </ContentSection>

            <ContentSection title="Try not to turn one setback into a story about yourself">
              <p>
                Changing your mind, avoiding something or making a choice you
                later regret does not tell you everything about who you are.
              </p>

              <p className="mt-4">
                There may have been a practical reason, a difficult day or
                information you did not have before.
              </p>

              <p className="mt-4">
                Looking at several moments gives you a better chance of seeing
                whether something really keeps repeating.
              </p>
            </ContentSection>

            <ContentSection title="Look for what keeps returning">
              <p>
                If similar situations often lead to a similar response, there
                may be something useful to notice.
              </p>

              <p className="mt-4">
                For example, you may find that progress often brings doubt, or
                that difficult conversations make you want to pull away.
              </p>

              <p className="mt-4">
                Seeing the pattern does not tell you what you have to do next.
                It can simply give you a clearer picture of what tends to
                happen.
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
                  href="/question-every-decision"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I question every decision I make? →
                </Link>

                <Link
                  href="/notice-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to notice patterns in yourself →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what happens before you change direction.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday choices,
              doubts and reactions. As your Reflections build across different
              days, it can help you notice whether similar responses keep
              appearing and what tends to happen around them.
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