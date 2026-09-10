import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self-Reflection App for Understanding Your Patterns | RealWithin",
  description:
    "Learn how a self-reflection app can help you notice repeated feelings, reactions and choices, and understand possible patterns over time.",
};

export default function SelfReflectionPatternsAppPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              A self-reflection app for understanding your patterns
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              It can be difficult to recognise a pattern while you are living
              through each moment separately.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may notice one difficult conversation, one uncertain
              decision or one strong reaction without realising that something
              similar has happened before.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Reflection across time can make those connections easier to see.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Patterns usually need more than one moment">
              <p>
                One reaction does not necessarily tell you much about yourself.
              </p>

              <p className="mt-4">
                You might feel anxious before one conversation, doubt one
                decision or pull away from someone once. That may simply belong
                to that situation.
              </p>

              <p className="mt-4">
                A pattern becomes more useful to consider when similar
                reactions appear across different moments.
              </p>

              <p className="mt-4">
                This is why reflection over several days or weeks can sometimes
                show you more than looking closely at one entry.
              </p>
            </ContentSection>

            <ContentSection title="Notice what seems to repeat">
              <p>
                Patterns can appear in different parts of everyday life.
              </p>

              <PatternList
                items={[
                  "Similar feelings appearing in similar situations",
                  "Second-guessing yourself after making a decision",
                  "Looking for reassurance when you feel uncertain",
                  "Pulling away when a conversation becomes difficult",
                  "Putting other people's needs before your own",
                  "Reacting more strongly around certain situations or people",
                ]}
              />

              <p className="mt-5">
                Seeing one of these once does not mean it is a pattern. The
                important part is whether something similar keeps appearing.
              </p>
            </ContentSection>

            <ContentSection title="Look at what happens around the reaction">
              <p>
                A useful pattern is not only about what you did.
              </p>

              <p className="mt-4">
                It can also help to notice what happened before the reaction,
                how you felt, what you were hoping for and what you did next.
              </p>

              <p className="mt-4">
                For example, you may notice that uncertainty often leads you to
                ask for reassurance, explain yourself more than you wanted to
                or change a decision you had already made.
              </p>

              <p className="mt-4">
                Looking at the surrounding context can make a repeated reaction
                easier to understand.
              </p>
            </ContentSection>

            <ContentSection title="Short reflections can still reveal useful connections">
              <p>
                You do not need to write a detailed journal entry every day to
                begin noticing patterns.
              </p>

              <p className="mt-4">
                A short reflection about how you feel, what is on your mind or
                what affected you can still become useful when you have several
                moments to look back on.
              </p>

              <p className="mt-4">
                The value comes from having enough honest moments to compare,
                not from making every reflection long.
              </p>
            </ContentSection>

            <ContentSection title="A reflection app can help keep those moments together">
              <p>
                Remembering how you felt several weeks ago can be difficult.
              </p>

              <p className="mt-4">
                A reflection app can give you one place to keep those moments
                so you do not have to rely only on memory.
              </p>

              <p className="mt-4">
                If the app is designed around understanding over time, it may
                also help you look across multiple reflections and notice
                possible connections between them.
              </p>
            </ContentSection>

            <ContentSection title="Patterns should not be treated as fixed labels">
              <p>
                Recognising something that repeats does not mean it defines
                you.
              </p>

              <p className="mt-4">
                Your reactions can depend on the situation, the people around
                you and what is happening in your life at the time.
              </p>

              <p className="mt-4">
                A useful reflection tool should therefore present patterns as
                something to consider rather than as permanent facts about who
                you are.
              </p>
            </ContentSection>

            <ContentSection title="Change can matter as much as repetition">
              <p>
                Reflection is not only useful for finding what stays the same.
              </p>

              <p className="mt-4">
                You may also notice that something which used to affect you
                strongly feels easier now, or that you respond differently in
                situations that once felt difficult.
              </p>

              <p className="mt-4">
                Looking across time can help you notice these changes as well
                as repeated patterns.
              </p>
            </ContentSection>

            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                What to look for in a reflection app
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "A simple way to reflect regularly",
                  "A place where earlier reflections remain easy to revisit",
                  "Support for noticing repeated feelings or reactions",
                  "Connections based on more than one isolated moment",
                  "Space for patterns to change as new reflections are added",
                  "Careful language rather than fixed conclusions about you",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] bg-[#f3f1e8] px-5 py-4 text-[16px] leading-7 text-[#555b55]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <ContentSection title="The aim is to understand, not judge">
              <p>
                Noticing a repeated reaction does not mean you have done
                something wrong.
              </p>

              <p className="mt-4">
                The useful question is often simply: does this happen often
                enough that I want to understand it better?
              </p>

              <p className="mt-4">
                Reflection can give you more context around that question and
                help you notice whether the pattern continues, changes or turns
                out to be less consistent than you first thought.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
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

                <Link
                  href="/how-to-choose-a-self-reflection-app"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to choose a self-reflection app →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what keeps coming up.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin lets you add short Reflections about how you feel and
              what is on your mind. As those Reflections build across different
              days, it can help surface possible Patterns supported by moments
              you have actually shared.
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

function PatternList({ items }: { items: string[] }) {
  return (
    <div className="mt-6 space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-[18px] bg-[#f3f1e8] px-5 py-4 text-[16px] leading-7 text-[#555b55]"
        >
          {item}
        </div>
      ))}
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