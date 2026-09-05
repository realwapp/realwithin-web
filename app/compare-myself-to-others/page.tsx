import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Compare Myself to Others? | RealWithin",
  description:
    "Understand why you may compare yourself to other people, what tends to trigger it, and how to notice when comparison starts affecting how you see yourself.",
};

export default function CompareMyselfToOthersPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I compare myself to others?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You can feel fine about your own life until you see what someone
              else is doing.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Suddenly you may start wondering whether you are behind, whether
              you should be doing more or whether their choices say something
              about yours.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Comparison can sometimes show you what matters to you. It can
              also make it harder to see your own situation clearly.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Comparison can happen very quickly">
              <p>
                You may not decide to compare yourself with someone. It can
                happen almost automatically.
              </p>

              <p className="mt-4">
                You hear about their job, relationship, home, appearance,
                progress or plans, and your attention turns back to your own
                life.
              </p>

              <p className="mt-4">
                The comparison may leave you feeling motivated, unsure,
                disappointed or as if something about your own progress is not
                enough.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you are actually comparing">
              <p>
                Comparison can feel broad, but there is often something
                specific underneath it.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Where you are in life.</li>
                <li>How quickly you are making progress.</li>
                <li>How confident or successful someone appears.</li>
                <li>Relationships or family life.</li>
                <li>Appearance or lifestyle.</li>
                <li>How certain someone seems about their choices.</li>
              </ul>

              <p className="mt-4">
                Being more specific can help you understand what the comparison
                is bringing up for you.
              </p>
            </ContentSection>

            <ContentSection title="You may be comparing different situations">
              <p>
                Two lives can look similar from the outside while being very
                different underneath.
              </p>

              <p className="mt-4">
                You may not know another person&apos;s starting point,
                priorities, support, difficulties or the choices they made to
                get where they are.
              </p>

              <p className="mt-4">
                That does not mean you should ignore what you admire in someone
                else. It simply means the comparison may not tell the whole
                story.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What exactly am I comparing right now?
                </Question>

                <Question>
                  What do I imagine their life has that mine does not?
                </Question>

                <Question>
                  Is this showing me something I genuinely want, or something I
                  feel I should want?
                </Question>

                <Question>
                  How did I feel about my own situation before I saw theirs?
                </Question>

                <Question>
                  Are there certain people or situations that bring comparison
                  up more often?
                </Question>
              </div>
            </section>

            <ContentSection title="Comparison can sometimes point towards something you value">
              <p>
                Not every comparison needs to be dismissed.
              </p>

              <p className="mt-4">
                Sometimes noticing envy, admiration or frustration can show you
                something you care about.
              </p>

              <p className="mt-4">
                You might realise you want more freedom, creativity, rest,
                connection or progress in an area of your own life.
              </p>

              <p className="mt-4">
                The useful part may be understanding what the feeling points to,
                rather than deciding that you need someone else&apos;s exact
                life.
              </p>
            </ContentSection>

            <ContentSection title="Notice when comparison changes how you see your own progress">
              <p>
                Something you felt proud of can suddenly seem small when you
                compare it with someone further ahead.
              </p>

              <p className="mt-4">
                Your progress has not necessarily changed. The point of
                comparison has.
              </p>

              <p className="mt-4">
                It may help to return to what mattered to you before the
                comparison began.
              </p>
            </ContentSection>

            <ContentSection title="Look at your own direction">
              <p>
                Another person&apos;s life can give you ideas, but it cannot
                fully tell you what is right for you.
              </p>

              <p className="mt-4">
                Your priorities may be different. You may want a different
                pace, different relationships or a different kind of success.
              </p>

              <p className="mt-4">
                Asking what you actually want can be more useful than asking
                whether you are ahead or behind someone else.
              </p>
            </ContentSection>

            <ContentSection title="Look for when comparison keeps returning">
              <p>
                Comparing yourself with someone once does not necessarily mean
                there is a wider pattern.
              </p>

              <p className="mt-4">
                But if certain situations repeatedly make you question your
                progress, choices or value, it may be useful to notice what
                tends to trigger that response.
              </p>

              <p className="mt-4">
                Across several moments, you may begin to see which comparisons
                affect you most and what they seem to bring your attention
                towards.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>

                <Link
                  href="/take-things-personally"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I take things personally? →
                </Link>

                <Link
                  href="/understand-yourself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How can I understand myself better? →
                </Link>

                <Link
                  href="/become-more-self-aware"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to become more self-aware →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what comparison brings up for you.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday feelings,
              thoughts and reactions. As your Reflections build across
              different days, it can help you notice whether similar
              comparisons or doubts keep returning.
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