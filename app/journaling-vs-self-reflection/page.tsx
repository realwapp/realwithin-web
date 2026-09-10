import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journaling vs Self-Reflection | RealWithin",
  description:
    "Learn the difference between journaling and self-reflection, and how each can help you understand your thoughts, feelings, reactions and patterns.",
};

export default function JournalingVsSelfReflectionPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Journaling vs self-reflection
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Journaling and self-reflection often overlap, but they are not
              exactly the same thing.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Journaling gives you a place to record thoughts and experiences.
              Self-reflection is more about looking at those experiences and
              asking what they may be showing you.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You can journal without reflecting deeply, and you can reflect
              without writing a long journal entry.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What is journaling?">
              <p>
                Journaling usually means writing down what happened, what you
                are thinking or how you feel.
              </p>

              <p className="mt-4">
                Some people write detailed daily entries. Others write only
                when something important happens.
              </p>

              <p className="mt-4">
                The value can come from having a private place to express what
                is on your mind and keeping a record you can return to later.
              </p>
            </ContentSection>

            <ContentSection title="What is self-reflection?">
              <p>
                Self-reflection focuses more on understanding your own
                experience.
              </p>

              <p className="mt-4">
                You might think about why something affected you, how you
                reacted, what you needed or whether you have responded in a
                similar way before.
              </p>

              <p className="mt-4">
                Reflection does not need to produce a perfect explanation. It
                can simply help you notice something that was easy to miss in
                the moment.
              </p>
            </ContentSection>

            <ContentSection title="Journaling can help you capture the moment">
              <p>
                One strength of journaling is that it lets you record details
                while they are still fresh.
              </p>

              <p className="mt-4">
                You can write about what happened, what someone said, how you
                felt and what you were thinking at the time.
              </p>

              <p className="mt-4">
                That record can later become useful if you want to look back
                and compare different moments.
              </p>
            </ContentSection>

            <ContentSection title="Reflection can help you look for meaning">
              <p>
                Reflection takes the experience one step further.
              </p>

              <p className="mt-4">
                Instead of only recording that a conversation upset you, you
                might notice that feeling misunderstood tends to affect you
                strongly.
              </p>

              <p className="mt-4">
                Instead of only writing that you changed your mind, you might
                notice that uncertainty often makes you second-guess decisions
                you had already made.
              </p>

              <p className="mt-4">
                These observations may become clearer when similar moments
                appear more than once.
              </p>
            </ContentSection>

            <ContentSection title="You do not need long entries to reflect">
              <p>
                Some people avoid journaling because writing a lot feels
                difficult, tiring or time-consuming.
              </p>

              <p className="mt-4">
                Self-reflection can be much shorter.
              </p>

              <p className="mt-4">
                A few sentences about what is on your mind, what affected you
                or how you reacted may be enough to create something useful to
                return to later.
              </p>

              <p className="mt-4">
                The important part is not the length. It is whether the
                reflection captures something meaningful about the moment.
              </p>
            </ContentSection>

            <ContentSection title="Both can become more useful across time">
              <p>
                One entry usually gives you information about one moment.
              </p>

              <p className="mt-4">
                Several entries can help you notice whether certain feelings,
                reactions or concerns keep returning.
              </p>

              <p className="mt-4">
                They can also show when something starts to change.
              </p>

              <p className="mt-4">
                This is where both journaling and reflection can become more
                useful than relying only on memory.
              </p>
            </ContentSection>

            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Which one might suit you?
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Choose journaling if you enjoy writing and want a detailed record",
                  "Choose self-reflection if you mainly want to understand your reactions and patterns",
                  "Try shorter reflection if long journal entries feel difficult to maintain",
                  "Use journaling and reflection together if you want both detail and understanding",
                  "Focus on consistency rather than trying to write perfectly",
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

            <ContentSection title="The useful question is what helps you notice more">
              <p>
                There is no need to choose one method because it sounds more
                serious or complete.
              </p>

              <p className="mt-4">
                The better approach is the one you can realistically return to
                and that helps you notice something useful about your own
                experience.
              </p>

              <p className="mt-4">
                For some people that means writing a full journal entry. For
                others, a short reflection is enough.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/what-is-self-reflection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  What is self-reflection? →
                </Link>

                <Link
                  href="/journaling-for-self-awareness"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Journaling for self-awareness →
                </Link>

                <Link
                  href="/journal-when-you-dont-know-what-to-write"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to journal when you don’t know what to write →
                </Link>

                <Link
                  href="/mood-tracking-vs-self-reflection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Mood tracking vs self-reflection →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Reflect without having to write a long journal entry.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin is built around short Reflections about how you feel
              and what is on your mind. As those moments build across
              different days, it can help surface possible Patterns and
              meaningful changes over time.
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