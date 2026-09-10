import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How AI Reflection Can Help You Notice Patterns Over Time | RealWithin",
  description:
    "Learn how AI-supported reflection can help connect repeated feelings, reactions and experiences across different days without treating them as fixed facts.",
};

export default function AIReflectionPatternsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How AI reflection can help you notice patterns over time
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Reflection can help you understand one moment more clearly.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              But some things only become noticeable when you look across
              several different moments.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              AI-supported reflection can help organise those moments and
              surface possible connections that may be difficult to remember
              on your own.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="One reflection gives context to one moment">
              <p>
                You might reflect after a difficult conversation, an uncertain
                decision or a day when something affected you more strongly than
                expected.
              </p>

              <p className="mt-4">
                Looking at that moment can help you put words around what
                happened and how you responded.
              </p>

              <p className="mt-4">
                But one reflection alone usually cannot tell you whether the
                reaction is unusual or something that appears more often.
              </p>
            </ContentSection>

            <ContentSection title="Several reflections can reveal repetition">
              <p>
                When reflections build across different days, repeated details
                may become easier to notice.
              </p>

              <PatternList
                items={[
                  "Feeling uncertain before similar kinds of decisions",
                  "Looking for reassurance after difficult conversations",
                  "Pulling away when you feel misunderstood",
                  "Becoming more doubtful around certain situations",
                  "Putting your own needs aside when conflict feels possible",
                  "Returning to the same worry in different circumstances",
                ]}
              />

              <p className="mt-5">
                None of these automatically means there is a fixed pattern.
                Repetition simply gives you something worth looking at more
                closely.
              </p>
            </ContentSection>

            <ContentSection title="AI can help connect related moments">
              <p>
                Remembering everything you reflected on several weeks ago can
                be difficult.
              </p>

              <p className="mt-4">
                AI can help review multiple reflections and look for similar
                themes, feelings or reactions across them.
              </p>

              <p className="mt-4">
                This can make possible connections easier to notice without you
                having to reread every past reflection yourself.
              </p>

              <p className="mt-4">
                The useful part is not that AI decides what something means.
                It is that it can help bring related evidence back into view.
              </p>
            </ContentSection>

            <ContentSection title="Good AI reflection should use your own evidence">
              <p>
                A useful observation should be connected to things you have
                actually shared.
              </p>

              <p className="mt-4">
                If an app suggests that something may be repeating, you should
                be able to understand what moments led to that observation.
              </p>

              <p className="mt-4">
                This makes it easier to decide whether the connection feels
                accurate, incomplete or not relevant to you.
              </p>
            </ContentSection>

            <ContentSection title="AI should not turn possibilities into facts">
              <p>
                Personal experiences are complicated.
              </p>

              <p className="mt-4">
                Similar reactions can happen for different reasons, and the same
                situation may affect you differently at another time.
              </p>

              <p className="mt-4">
                AI-supported reflection should therefore use careful language.
                A possible pattern is something to consider, not a permanent
                statement about who you are.
              </p>
            </ContentSection>

            <ContentSection title="New reflections should be able to change the picture">
              <p>
                Understanding yourself should not become fixed after a few
                entries.
              </p>

              <p className="mt-4">
                New experiences may strengthen an earlier observation, add more
                context or show that something you thought was repeating is
                changing.
              </p>

              <p className="mt-4">
                A useful reflection system should keep updating its picture as
                more of your own experience becomes available.
              </p>
            </ContentSection>

            <ContentSection title="AI can also help you notice change">
              <p>
                Looking across time is not only useful for finding repetition.
              </p>

              <p className="mt-4">
                You may begin responding differently in situations that once
                felt difficult.
              </p>

              <p className="mt-4">
                Perhaps you need less reassurance, recover more quickly from
                uncertainty or express a need that you previously kept quiet.
              </p>

              <p className="mt-4">
                Connecting earlier and more recent reflections can make those
                shifts easier to recognise.
              </p>
            </ContentSection>

            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                What useful AI reflection should do
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Use more than one moment before suggesting a pattern",
                  "Connect observations to reflections you actually shared",
                  "Use tentative language when the evidence is limited",
                  "Allow new reflections to change earlier observations",
                  "Help you notice change as well as repetition",
                  "Support your reflection rather than making decisions for you",
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

            <ContentSection title="AI is most useful when it helps you look back">
              <p>
                The value of AI reflection is not simply getting a response
                after every entry.
              </p>

              <p className="mt-4">
                It can become more useful when it helps you connect what you
                shared today with relevant moments from earlier days.
              </p>

              <p className="mt-4">
                Over time, those connections can give you more context for
                understanding what repeats, what changes and what may deserve
                more attention.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/self-reflection-app-understanding-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Self-reflection app for understanding your patterns →
                </Link>

                <Link
                  href="/app-to-understand-yourself-over-time"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  App to help you understand yourself over time →
                </Link>

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
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Let your reflections build into something more useful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin uses the moments you share across different
              Reflections to surface possible Patterns supported by your own
              evidence. As more reflections are added, those observations can
              gain context and change over time.
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