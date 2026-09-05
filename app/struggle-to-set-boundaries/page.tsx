import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Struggle to Set Boundaries? | RealWithin",
  description:
    "Understand why setting boundaries can feel difficult, what may make you change your mind, and how to notice when the same pattern keeps returning.",
};

export default function StruggleToSetBoundariesPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I struggle to set boundaries?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may know that something is too much for you, but still find
              it difficult to say so.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You might worry about disappointing someone, creating tension or
              seeming difficult.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes the hardest part of a boundary is not knowing what you
              need. It is staying with that need when another person reacts.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="A boundary can be something simple">
              <p>
                Boundaries do not always need to be big rules or serious
                conversations.
              </p>

              <p className="mt-4">
                They can appear in small choices about your time, energy,
                privacy and what you are comfortable with.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Saying you cannot help today.</li>
                <li>Asking for more time before making a decision.</li>
                <li>Choosing not to discuss something personal.</li>
                <li>Changing plans when you do not have the energy.</li>
                <li>Asking someone not to speak to you in a certain way.</li>
                <li>Saying what you need instead of hoping they will notice.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Why can setting a boundary feel uncomfortable?">
              <p>
                A boundary can create a moment where what you need is different
                from what someone else wants.
              </p>

              <p className="mt-4">
                That difference may feel uncomfortable, especially if you care
                a lot about keeping things calm or making other people happy.
              </p>

              <p className="mt-4">
                You may understand your own limit clearly until someone
                questions it. Then you may start wondering whether you are
                asking for too much.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether you change your boundary after someone reacts">
              <p>
                Sometimes another person&apos;s response gives you useful
                information and you may genuinely decide to change your mind.
              </p>

              <p className="mt-4">
                Other times, you may change the boundary mainly because their
                disappointment, disagreement or frustration feels difficult to
                sit with.
              </p>

              <p className="mt-4">
                It can help to notice what happens between your first answer
                and the answer you eventually give.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What did I want to say before I thought about their reaction?
                </Question>

                <Question>
                  What am I worried will happen if I keep this boundary?
                </Question>

                <Question>
                  Did I change my mind because something changed, or because
                  the conversation became uncomfortable?
                </Question>

                <Question>
                  Are there certain people with whom my boundaries become
                  harder to keep?
                </Question>
              </div>
            </section>

            <ContentSection title="Guilt does not always mean the boundary is wrong">
              <p>
                You may feel guilty after saying no or asking for something to
                change.
              </p>

              <p className="mt-4">
                That feeling can make you question whether you were unfair.
              </p>

              <p className="mt-4">
                Sometimes there may be something worth reconsidering. But
                feeling uncomfortable by itself does not tell you whether the
                boundary was reasonable.
              </p>

              <p className="mt-4">
                It can help to return to why you needed the boundary in the
                first place.
              </p>
            </ContentSection>

            <ContentSection title="You can care about someone and still have limits">
              <p>
                Caring about another person does not mean you will always have
                the same needs, plans or expectations.
              </p>

              <p className="mt-4">
                You can want to help and still be too tired. You can understand
                why someone is disappointed and still decide that your answer
                needs to stay the same.
              </p>

              <p className="mt-4">
                Both things can be true at the same time.
              </p>
            </ContentSection>

            <ContentSection title="Look for what happens across different situations">
              <p>
                Finding one boundary difficult does not necessarily mean you
                struggle with boundaries in general.
              </p>

              <p className="mt-4">
                But if you often know what you need and then move away from it
                after someone reacts, there may be a repeated response worth
                noticing.
              </p>

              <p className="mt-4">
                Looking across several moments can help you see when your
                boundaries become hardest to keep and what tends to affect
                them.
              </p>
            </ContentSection>

            {/* RELATED */}
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
                  href="/people-pleasing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I people-please? →
                </Link>

                <Link
                  href="/disappointing-people"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I worry about disappointing people? →
                </Link>

                <Link
                  href="/over-explaining"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I over-explain myself? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what happens when your needs meet someone else&apos;s
              reaction.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on moments like these. As
              your Reflections build across different days, it can help you
              notice whether the same worries, choices or reactions keep
              appearing.
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