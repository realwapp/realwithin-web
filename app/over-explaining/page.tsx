import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Over-Explain Myself? | RealWithin",
  description:
    "Understand why you may feel the need to explain yourself in detail, what may be behind it, and how to notice when the same pattern keeps returning.",
};

export default function OverExplainingPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I over-explain myself?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes a simple answer does not feel like enough.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may give more detail, explain your reasons again or keep
              talking because you want the other person to understand why your
              choice makes sense.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can be useful to notice what you are hoping the extra
              explanation will change.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What over-explaining can look like">
              <p>
                Explaining yourself is normal. Sometimes people need more
                information to understand a situation.
              </p>

              <p className="mt-4">
                Over-explaining can feel different. You may already have given
                a clear answer but still feel the need to add more.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Giving a long reason for saying no.</li>
                <li>Repeating the same point in different ways.</li>
                <li>Adding details because someone seems disappointed.</li>
                <li>Trying to prove that your choice is reasonable.</li>
                <li>Explaining yourself before anyone has questioned you.</li>
                <li>Thinking afterwards that you should have said even more.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Why can a short answer feel uncomfortable?">
              <p>
                Sometimes you may worry that a simple answer could be
                misunderstood.
              </p>

              <p className="mt-4">
                You may want the other person to know that you are not being
                rude, selfish or unfair. You may also hope that if you explain
                enough, they will agree with your decision.
              </p>

              <p className="mt-4">
                This can make it hard to stop talking even when you have
                already said what you needed to say.
              </p>
            </ContentSection>

            <ContentSection title="You may be looking for understanding or approval">
              <p>
                There is a difference between wanting someone to understand
                your reasons and needing them to agree with you.
              </p>

              <p className="mt-4">
                Sometimes extra explanation is useful because the other person
                genuinely needs more information.
              </p>

              <p className="mt-4">
                Other times, you may notice that you keep explaining because
                their disagreement or disappointment feels difficult to leave
                unresolved.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  Have I already explained enough for the other person to
                  understand my answer?
                </Question>

                <Question>
                  Am I adding more information because it is useful, or because
                  I want them to agree with me?
                </Question>

                <Question>
                  What am I worried they will think if I stop explaining?
                </Question>

                <Question>
                  Do I over-explain more often with certain people or in
                  certain situations?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice what happens when someone does not agree">
              <p>
                It may be easier to give a short answer when the other person
                accepts it straight away.
              </p>

              <p className="mt-4">
                The harder moment may come when they question your choice, look
                disappointed or give an opinion you were not expecting.
              </p>

              <p className="mt-4">
                You may then start adding reasons that were not part of your
                original answer. Noticing that change can help you see what
                makes the situation uncomfortable.
              </p>
            </ContentSection>

            <ContentSection title="A clear answer does not always need a long defence">
              <p>
                Sometimes your reasons are personal, simple or difficult to put
                into words.
              </p>

              <p className="mt-4">
                You may still choose to explain more when it helps the
                conversation. But you do not always need to find the perfect
                explanation before your choice can be reasonable for you.
              </p>

              <p className="mt-4">
                It can help to notice when explaining stops being about sharing
                information and starts becoming an attempt to remove someone
                else&apos;s disagreement.
              </p>
            </ContentSection>

            <ContentSection title="Look for whether the same response keeps returning">
              <p>
                One long explanation does not necessarily mean you have a
                pattern.
              </p>

              <p className="mt-4">
                But if you often explain your choices in detail, worry about
                being misunderstood or keep talking until someone seems
                satisfied, it may be worth looking across several moments.
              </p>

              <p className="mt-4">
                You may begin to see which situations make you feel that your
                first answer is not enough.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/guilty-saying-no"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel guilty saying no? →
                </Link>

                <Link
                  href="/disappointing-people"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I worry about disappointing people? →
                </Link>

                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
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
              Notice when a simple answer starts becoming a long explanation.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday moments like
              these. As your Reflections build across different days, it can
              help you notice whether the same worries or reactions appear in
              different situations.
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