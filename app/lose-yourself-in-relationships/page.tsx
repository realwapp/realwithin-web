import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Lose Myself in Relationships? | RealWithin",
  description:
    "Understand why you may lose touch with your own needs, preferences or routines in relationships, and how to notice when it starts happening.",
};

export default function LoseYourselfInRelationshipsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I lose myself in relationships?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes a relationship becomes so important that your own
              preferences, routines or needs begin to receive less attention.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may adjust often, make choices around the other person or
              slowly stop doing things that used to feel like part of your own
              life.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice where healthy compromise ends and where
              your own voice starts becoming harder to hear.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Relationships naturally change how you use your time">
              <p>
                Being close to someone usually means making space for them in
                your life.
              </p>

              <p className="mt-4">
                Plans change. Routines shift. You consider another person when
                making decisions.
              </p>

              <p className="mt-4">
                That does not automatically mean you are losing yourself.
                Compromise is part of many relationships.
              </p>

              <p className="mt-4">
                The question is whether your own needs and preferences still
                have a place too.
              </p>
            </ContentSection>

            <ContentSection title="Notice how often you change your preference">
              <p>
                You may begin by thinking one thing and then quickly move
                towards what the other person wants.
              </p>

              <p className="mt-4">
                Sometimes you genuinely do not mind.
              </p>

              <p className="mt-4">
                Other times, you may change your answer because disagreement,
                disappointment or tension feels harder than giving something
                up.
              </p>

              <p className="mt-4">
                Looking at what you first wanted can help you see the
                difference.
              </p>
            </ContentSection>

            <ContentSection title="Losing yourself can happen gradually">
              <p>
                It may not feel like one big decision.
              </p>

              <p className="mt-4">
                It can appear through many small changes.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>You stop making time for things you enjoyed alone.</li>
                <li>You see friends less often without really deciding to.</li>
                <li>You ask what they want before thinking about what you want.</li>
                <li>You avoid opinions that may create disagreement.</li>
                <li>Your plans increasingly depend on their availability.</li>
                <li>You feel guilty when choosing time for yourself.</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What parts of my life still feel clearly mine?
                </Question>

                <Question>
                  What have I stopped doing since this relationship became more
                  important?
                </Question>

                <Question>
                  When do I change my preference because I worry about their
                  reaction?
                </Question>

                <Question>
                  Do I still make choices that are only about what matters to
                  me?
                </Question>

                <Question>
                  What do I miss from the way I lived before?
                </Question>
              </div>
            </section>

            <ContentSection title="Closeness does not require becoming the same">
              <p>
                Two people can care about each other and still have different
                interests, opinions, friendships and ways of spending time.
              </p>

              <p className="mt-4">
                You do not have to enjoy everything together or agree on every
                decision for the relationship to matter.
              </p>

              <p className="mt-4">
                Keeping some parts of your life separate can help you stay
                connected to your own preferences as well as the relationship.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether disagreement changes how safe it feels to be yourself">
              <p>
                You may find it easy to know what you want until the other
                person disagrees.
              </p>

              <p className="mt-4">
                Then you may explain more, soften your view or decide that your
                preference does not matter.
              </p>

              <p className="mt-4">
                Sometimes changing your mind is reasonable. But if disagreement
                repeatedly makes your own position disappear, that may be worth
                noticing.
              </p>
            </ContentSection>

            <ContentSection title="Your needs do not have to compete with the relationship">
              <p>
                Wanting time alone, seeing friends, protecting a routine or
                having a different opinion does not automatically mean you care
                less about someone.
              </p>

              <p className="mt-4">
                Your own needs can exist alongside the needs of the
                relationship.
              </p>

              <p className="mt-4">
                Recognising them can make compromise more balanced because you
                know what both people are actually giving and receiving.
              </p>
            </ContentSection>

            <ContentSection title="Reconnect with what mattered before the relationship">
              <p>
                Think about the parts of your life that felt meaningful before
                this relationship became central.
              </p>

              <p className="mt-4">
                That might include friendships, hobbies, work, quiet time,
                movement, creativity or simply making plans without checking
                with anyone else.
              </p>

              <p className="mt-4">
                You may not want your old life back exactly as it was. But it
                can remind you of parts of yourself that still matter.
              </p>
            </ContentSection>

            <ContentSection title="Look for the pattern across relationships">
              <p>
                Adjusting a lot in one relationship does not necessarily mean
                you always lose yourself.
              </p>

              <p className="mt-4">
                But if you notice a similar shift across different
                relationships, it may be useful to compare what tends to happen.
              </p>

              <p className="mt-4">
                Perhaps you become less direct, give up your routines or make
                the other person&apos;s needs more important each time closeness
                increases.
              </p>

              <p className="mt-4">
                Looking across several experiences can help you see whether a
                repeated response is really there.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/guilty-putting-myself-first"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel guilty when I put myself first? →
                </Link>

                <Link
                  href="/recognise-what-you-need"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to recognise what you need →
                </Link>

                <Link
                  href="/struggle-to-set-boundaries"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to set boundaries? →
                </Link>

                <Link
                  href="/avoid-vulnerability"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I avoid vulnerability? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice whether your own voice gets quieter as closeness grows.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday choices,
              relationships and reactions. As your Reflections build across
              different days, it can help you notice possible Patterns and
              meaningful changes in how you respond.
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