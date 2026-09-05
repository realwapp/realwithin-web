import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Recognise What You Need | RealWithin",
  description:
    "Learn how to recognise what you need by noticing your feelings, reactions, limits and repeated situations more clearly.",
};

export default function RecogniseWhatYouNeedPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to recognise what you need
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes you know that something feels wrong before you know
              what you need to be different.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may feel tired, irritated, disappointed or distant without
              immediately knowing what would help.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Recognising your needs can start by looking more closely at what
              affected you and what felt missing in that moment.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with the moment that affected you">
              <p>
                You do not always need to begin by asking, “What do I need?”
              </p>

              <p className="mt-4">
                Sometimes it is easier to start with what happened.
              </p>

              <p className="mt-4">
                Maybe you agreed to something when you were already tired,
                felt left out of a decision or noticed that someone interrupted
                you several times.
              </p>

              <p className="mt-4">
                Looking closely at the situation can make the missing need
                easier to see.
              </p>
            </ContentSection>

            <ContentSection title="Your feelings can give you a clue">
              <p>
                Feelings do not always tell you exactly what you need, but they
                can point towards something worth noticing.
              </p>

              <p className="mt-4">
                Frustration may appear when something important feels blocked.
                Disappointment may appear when you hoped for something that did
                not happen.
              </p>

              <p className="mt-4">
                Feeling drained may make you wonder whether you need rest,
                space, help or fewer demands.
              </p>

              <p className="mt-4">
                These are possibilities, not fixed meanings. What fits depends
                on your actual situation.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you keep wishing had been different">
              <p>
                After a difficult moment, you may find yourself thinking:
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>“I wish they had asked me first.”</li>
                <li>“I needed more time.”</li>
                <li>“I wanted them to listen instead of fixing it.”</li>
                <li>“I should have said I was too tired.”</li>
                <li>“I wanted to feel included.”</li>
                <li>“I needed some space before answering.”</li>
              </ul>

              <p className="mt-4">
                These thoughts can sometimes show you what mattered in the
                situation.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What part of this situation affected me most?
                </Question>

                <Question>
                  What do I wish had happened differently?
                </Question>

                <Question>
                  What would have made this moment easier for me?
                </Question>

                <Question>
                  Did I know what I needed but find it difficult to say?
                </Question>

                <Question>
                  Have I noticed the same need in other situations recently?
                </Question>
              </div>
            </section>

            <ContentSection title="A need is not always a request for someone else">
              <p>
                Sometimes what you need can be something you provide for
                yourself.
              </p>

              <p className="mt-4">
                You may need time before answering, a quieter evening, more
                information before making a decision or permission to change
                your mind.
              </p>

              <p className="mt-4">
                Other needs may involve another person, such as clearer
                communication, support or more respect for a limit you have
                expressed.
              </p>
            </ContentSection>

            <ContentSection title="Try to make the need specific">
              <p>
                “I need things to be better” can be difficult to act on.
              </p>

              <p className="mt-4">
                A more specific need may be easier to understand.
              </p>

              <p className="mt-4">
                Perhaps you need one evening without plans, more notice before
                someone asks for your time or a chance to finish speaking before
                someone responds.
              </p>

              <p className="mt-4">
                Specific does not mean demanding. It simply makes the need
                clearer.
              </p>
            </ContentSection>

            <ContentSection title="Notice when you dismiss the need too quickly">
              <p>
                You may recognise what you need and immediately tell yourself
                it is unreasonable, inconvenient or not important enough.
              </p>

              <p className="mt-4">
                Sometimes a need genuinely cannot be met exactly as you would
                like.
              </p>

              <p className="mt-4">
                But understanding it can still help you decide what compromise
                is possible instead of pretending the need was never there.
              </p>
            </ContentSection>

            <ContentSection title="Different needs can exist at the same time">
              <p>
                You may want closeness and also need space.
              </p>

              <p className="mt-4">
                You may want to help someone and also need time for yourself.
              </p>

              <p className="mt-4">
                You may want stability while also wanting something in your
                life to change.
              </p>

              <p className="mt-4">
                Having two needs that pull in different directions does not
                mean one of them is false.
              </p>
            </ContentSection>

            <ContentSection title="Look for needs that keep returning">
              <p>
                One difficult day may simply be one difficult day.
              </p>

              <p className="mt-4">
                But if you repeatedly wish for more space, clearer
                communication, more support or more choice, it may be useful to
                compare those moments.
              </p>

              <p className="mt-4">
                Over time, repeated situations can make it easier to see what
                tends to matter most to you and where something may need to
                change.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/understand-your-emotions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to understand your emotions better →
                </Link>

                <Link
                  href="/struggle-to-know-what-i-want"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to know what I want? →
                </Link>

                <Link
                  href="/struggle-to-set-boundaries"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to set boundaries? →
                </Link>

                <Link
                  href="/how-to-be-more-assertive"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to be more assertive →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what feels missing in the moments that stay with you.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday feelings,
              choices and reactions. As your Reflections build across different
              days, it can help you notice recurring needs, possible Patterns
              and meaningful changes over time.
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