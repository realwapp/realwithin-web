import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build Self-Trust | RealWithin",
  description:
    "Learn how to build self-trust by noticing your own views, making decisions with the information you have, and looking at how you respond over time.",
};

export default function BuildSelfTrustPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to build self-trust
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Self-trust does not mean believing that every choice you make
              will be right.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can mean knowing that you can make a thoughtful decision,
              respond to what happens next and change direction when new
              information matters.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Building that trust often starts by noticing when you stop
              listening to your own judgement.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Notice your own view before asking everyone else">
              <p>
                Advice can be useful. Other people may see something you have
                missed or have experience that helps.
              </p>

              <p className="mt-4">
                But if you always ask what someone else thinks first, your own
                view can become harder to recognise.
              </p>

              <p className="mt-4">
                Before asking for advice, try noticing what you think and why.
                You can still hear other opinions afterwards.
              </p>
            </ContentSection>

            <ContentSection title="Self-trust does not require complete certainty">
              <p>
                Many choices have no guaranteed outcome.
              </p>

              <p className="mt-4">
                You may have good reasons for choosing something and still feel
                unsure about what will happen.
              </p>

              <p className="mt-4">
                Trusting yourself can sometimes mean accepting that reasonable
                decisions can still contain uncertainty.
              </p>
            </ContentSection>

            <ContentSection title="Pay attention to what makes you abandon your first answer">
              <p>
                You may feel clear about something until another person
                disagrees or looks disappointed.
              </p>

              <p className="mt-4">
                Then you may begin explaining, checking or changing your mind.
              </p>

              <p className="mt-4">
                Sometimes there is genuinely new information to consider.
                Other times, the difficult part is simply that someone else
                sees the situation differently.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What did I think before I asked anyone else?
                </Question>

                <Question>
                  What information was my original choice based on?
                </Question>

                <Question>
                  Has anything important changed, or do I simply feel less
                  certain?
                </Question>

                <Question>
                  What happens to my confidence when someone disagrees with me?
                </Question>

                <Question>
                  Which choices have I handled well even when the outcome was
                  not perfect?
                </Question>
              </div>
            </section>

            <ContentSection title="Keep small promises to yourself">
              <p>
                Self-trust can also grow through ordinary actions.
              </p>

              <p className="mt-4">
                If you decide to protect some time, finish a small task or say
                no to something that does not work for you, notice whether you
                follow through.
              </p>

              <p className="mt-4">
                These moments may seem small, but they can give you real
                examples of listening to your own decisions.
              </p>
            </ContentSection>

            <ContentSection title="Learn from a decision without using it against yourself">
              <p>
                Trusting yourself does not mean pretending every decision was
                good.
              </p>

              <p className="mt-4">
                Sometimes you will look back and wish you had done something
                differently.
              </p>

              <p className="mt-4">
                You can ask what you missed, what you learned and what you
                would change next time without turning the experience into
                proof that you cannot trust yourself.
              </p>
            </ContentSection>

            <ContentSection title="Notice when you already handled uncertainty well">
              <p>
                It is easy to remember the decisions you regret and overlook
                the many choices you managed reasonably well.
              </p>

              <p className="mt-4">
                Think about times when you made a choice without knowing
                exactly what would happen and adjusted as you learned more.
              </p>

              <p className="mt-4">
                Those moments can give you a more complete picture of how you
                actually handle uncertainty.
              </p>
            </ContentSection>

            <ContentSection title="Let your own experience become evidence">
              <p>
                Self-trust may become stronger when it is based on real moments
                rather than a general idea that you should simply believe in
                yourself.
              </p>

              <p className="mt-4">
                You may notice that you recover after mistakes, recognise when
                a choice needs changing or become clearer about what works for
                you.
              </p>

              <p className="mt-4">
                Looking across those experiences can show you how your judgement
                develops over time.
              </p>
            </ContentSection>

            <ContentSection title="Look for what is changing">
              <p>
                You may not suddenly feel completely confident in yourself.
              </p>

              <p className="mt-4">
                Change may be smaller: asking fewer people for reassurance,
                staying with a decision for longer or noticing your own view
                before someone else gives theirs.
              </p>

              <p className="mt-4">
                These repeated changes can be useful signs that your
                relationship with your own judgement is becoming different.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/trust-your-decisions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to trust your own decisions →
                </Link>

                <Link
                  href="/need-validation-from-others"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I need validation from others? →
                </Link>

                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>

                <Link
                  href="/struggle-to-know-what-i-want"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to know what I want? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              See how your relationship with your own judgement changes.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday choices,
              doubts and reactions. As your Reflections build across different
              days, it can help you notice recurring Patterns and meaningful
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