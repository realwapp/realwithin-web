import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Pull Away When Someone Gets Close? | RealWithin",
  description:
    "Understand why you may sometimes pull away when a relationship starts feeling closer, what tends to happen before it, and how to notice the pattern.",
};

export default function PullAwayWhenClosePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I pull away when someone gets close?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may enjoy getting to know someone, then notice yourself
              becoming less comfortable as the connection grows closer.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You might reply less, need more space, focus on reasons the
              relationship may not work or suddenly feel unsure about something
              that felt good before.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              That does not automatically mean you do not want the connection.
              It can help to notice what changed for you when the closeness
              increased.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with what changed">
              <p>
                Sometimes the wish for distance appears after something
                specific.
              </p>

              <p className="mt-4">
                The other person may have become more affectionate, asked for
                more time together, talked about the future or shared something
                more personal.
              </p>

              <p className="mt-4">
                Looking at what happened just before you wanted space can help
                you understand the reaction more clearly.
              </p>
            </ContentSection>

            <ContentSection title="Closeness can bring new uncertainty">
              <p>
                A relationship can feel different once it begins to matter
                more.
              </p>

              <p className="mt-4">
                There may be more to lose, more expectations to think about or
                more parts of yourself to share.
              </p>

              <p className="mt-4">
                You may begin asking questions that were not important when the
                connection felt lighter.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>What if this becomes too serious?</li>
                <li>What if I lose some of my freedom?</li>
                <li>What if they expect more than I can give?</li>
                <li>What if I get hurt later?</li>
                <li>What if I change my mind?</li>
                <li>What if they know me better and see me differently?</li>
              </ul>
            </ContentSection>

            <ContentSection title="Needing space and pulling away are not always the same thing">
              <p>
                Wanting time alone can be completely reasonable.
              </p>

              <p className="mt-4">
                You may need space to think, rest or keep other parts of your
                life in balance.
              </p>

              <p className="mt-4">
                The useful question may be whether you are choosing space
                because you genuinely need it, or whether distance suddenly
                feels safer when the relationship becomes more important.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What happened just before I started wanting more distance?
                </Question>

                <Question>
                  What feels different now that the connection is closer?
                </Question>

                <Question>
                  Am I noticing a real problem, or has closeness itself started
                  to feel uncomfortable?
                </Question>

                <Question>
                  What do I imagine might happen if I stay close?
                </Question>

                <Question>
                  Have I reacted in a similar way in other relationships?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice whether small doubts suddenly become bigger">
              <p>
                Every relationship has things you are unsure about.
              </p>

              <p className="mt-4">
                But sometimes small concerns become much more important once
                the relationship starts feeling serious.
              </p>

              <p className="mt-4">
                You may focus strongly on differences, flaws or possible future
                problems that did not seem important before.
              </p>

              <p className="mt-4">
                Those concerns may be meaningful. It can still help to notice
                whether their importance changed at the same time as the
                closeness did.
              </p>
            </ContentSection>

            <ContentSection title="Pay attention to what distance gives you">
              <p>
                Pulling away may change how you feel quite quickly.
              </p>

              <p className="mt-4">
                You may feel less pressure, more in control or relieved that
                you do not need to decide what the relationship means.
              </p>

              <p className="mt-4">
                That relief can be useful information. It may help you
                understand what part of the closeness had started to feel
                difficult.
              </p>
            </ContentSection>

            <ContentSection title="You do not need to force yourself closer">
              <p>
                Not every wish for distance is something that needs to be
                changed.
              </p>

              <p className="mt-4">
                Sometimes you realise that a relationship is not right for you,
                or that it is moving faster than you want.
              </p>

              <p className="mt-4">
                Understanding your reaction is different from deciding that you
                should ignore it.
              </p>

              <p className="mt-4">
                The aim is simply to see more clearly what the distance may be
                responding to.
              </p>
            </ContentSection>

            <ContentSection title="Look for what repeats across relationships">
              <p>
                Pulling away once does not necessarily mean there is a wider
                pattern.
              </p>

              <p className="mt-4">
                But if closeness often leads to doubt, distance or a sudden
                change in how you see the other person, it may be useful to
                compare several experiences.
              </p>

              <p className="mt-4">
                Over time, you may begin to notice what tends to happen just
                before you step back and what you seem to need in those
                moments.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/get-attached-quickly"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I get attached so quickly? →
                </Link>

                <Link
                  href="/repeating-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I keep repeating the same patterns? →
                </Link>

                <Link
                  href="/emotional-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to recognise emotional patterns →
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

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what changes when a connection becomes closer.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday relationships,
              feelings and reactions. As your Reflections build across
              different days, it can help you notice whether similar responses
              keep returning and what tends to happen around them.
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