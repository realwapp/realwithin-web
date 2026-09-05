import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Make Decisions Based on Your Values | RealWithin",
  description:
    "Learn how to use your personal values when making decisions, especially when several choices seem reasonable or other people's opinions make things less clear.",
};

export default function DecisionsBasedOnValuesPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to make decisions based on your values
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Some decisions are difficult because more than one option could
              make sense.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              When there is no perfect answer, your values can help you think
              about which choice fits what matters most to you right now.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              This does not remove every doubt. It can give you a clearer reason
              for the choice you make.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start by naming what matters in this decision">
              <p>
                A decision can feel confusing when you are thinking about many
                things at the same time.
              </p>

              <p className="mt-4">
                Try asking what matters most in this particular situation.
              </p>

              <p className="mt-4">
                It might be freedom, stability, honesty, connection, growth,
                rest, creativity or something else that matters to you.
              </p>
            </ContentSection>

            <ContentSection title="Different values can point in different directions">
              <p>
                Difficult decisions often involve more than one important
                thing.
              </p>

              <p className="mt-4">
                You might want security and also want more freedom. You may want
                to support someone and also protect your own time.
              </p>

              <p className="mt-4">
                The difficulty does not always mean you are unclear. Sometimes
                two things you genuinely value are competing with each other.
              </p>
            </ContentSection>

            <ContentSection title="Notice which value needs more attention right now">
              <p>
                You do not always need to choose one value forever.
              </p>

              <p className="mt-4">
                One situation may call for more stability. Another may make
                freedom or honesty more important.
              </p>

              <p className="mt-4">
                Asking what needs more attention in this moment can make the
                decision more practical.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What matters most to me in this decision?
                </Question>

                <Question>
                  Which important things are pulling me in different directions?
                </Question>

                <Question>
                  Which choice feels closer to how I want to live?
                </Question>

                <Question>
                  Am I moving towards something I value, or mainly trying to
                  avoid discomfort?
                </Question>

                <Question>
                  What would I choose if nobody else needed to approve?
                </Question>
              </div>
            </section>

            <ContentSection title="Separate your values from other people's expectations">
              <p>
                Other people may have strong ideas about what you should do.
              </p>

              <p className="mt-4">
                Their advice may be useful, especially when they know something
                you do not.
              </p>

              <p className="mt-4">
                But their priorities may also be different from yours.
              </p>

              <p className="mt-4">
                It can help to ask whether you agree with their advice because
                it fits what matters to you, or because disagreeing feels
                uncomfortable.
              </p>
            </ContentSection>

            <ContentSection title="Look at what each option asks you to give up">
              <p>
                Many decisions involve a trade-off.
              </p>

              <p className="mt-4">
                Choosing more freedom may mean accepting less certainty.
                Choosing stability may mean giving up some flexibility.
              </p>

              <p className="mt-4">
                Thinking about what each option costs can sometimes make the
                real choice clearer.
              </p>
            </ContentSection>

            <ContentSection title="A values-based decision can still feel uncomfortable">
              <p>
                Choosing something that matters to you does not guarantee that
                the choice will feel easy.
              </p>

              <p className="mt-4">
                You may still disappoint someone, feel uncertain or wonder what
                would have happened if you chose differently.
              </p>

              <p className="mt-4">
                Discomfort does not automatically mean the decision went
                against your values.
              </p>
            </ContentSection>

            <ContentSection title="Look back at decisions that felt right to you">
              <p>
                Past choices can give you useful clues.
              </p>

              <p className="mt-4">
                Think about decisions you still feel comfortable with, even if
                they were difficult at the time.
              </p>

              <p className="mt-4">
                What did those choices protect or make possible? You may notice
                the same values appearing more than once.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether your values are changing">
              <p>
                A choice that suited you a few years ago may not fit in the same
                way now.
              </p>

              <p className="mt-4">
                Your priorities can change with new experiences,
                responsibilities and relationships.
              </p>

              <p className="mt-4">
                Looking across your recent choices can help you notice when
                something that once mattered most is becoming less important,
                or when a new priority keeps appearing.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/identify-personal-values"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to identify your personal values →
                </Link>

                <Link
                  href="/struggle-to-know-what-i-want"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to know what I want? →
                </Link>

                <Link
                  href="/trust-your-decisions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to trust your own decisions →
                </Link>

                <Link
                  href="/question-every-decision"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I question every decision I make? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what keeps guiding your choices.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday decisions and
              what matters around them. As your Reflections build across
              different days, it can help you notice recurring priorities,
              Patterns and meaningful changes over time.
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