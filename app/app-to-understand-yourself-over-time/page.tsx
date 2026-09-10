import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "App to Help You Understand Yourself Over Time | RealWithin",
  description:
    "Learn how reflection across different days can help you understand your feelings, reactions, patterns and changes more clearly over time.",
};

export default function UnderstandYourselfOverTimePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              An app to help you understand yourself over time
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Understanding yourself is rarely about finding one perfect
              answer.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It often comes from noticing your thoughts, feelings and
              reactions across different moments.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              A reflection app can help keep those moments together so changes
              and repeated patterns become easier to notice.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="One day only gives you part of the picture">
              <p>
                How you feel today may be influenced by one conversation, one
                decision, lack of sleep or something else happening around you.
              </p>

              <p className="mt-4">
                That moment can still be worth reflecting on, but it may not
                tell you very much about who you are.
              </p>

              <p className="mt-4">
                When you have reflections from different days, you can begin
                comparing them instead of treating each moment as separate.
              </p>
            </ContentSection>

            <ContentSection title="You may start noticing what keeps coming back">
              <p>
                Across time, some thoughts or reactions may begin to look
                familiar.
              </p>

              <PatternList
                items={[
                  "The same worries appearing in different situations",
                  "Similar reactions when you feel uncertain",
                  "Repeated doubts after making decisions",
                  "Certain situations affecting your mood more strongly",
                  "The same needs being difficult to express",
                  "Similar relationship reactions appearing more than once",
                ]}
              />

              <p className="mt-5">
                Repetition does not automatically mean something is a fixed
                pattern, but it can give you something useful to explore.
              </p>
            </ContentSection>

            <ContentSection title="You can also notice what is changing">
              <p>
                Self-understanding is not only about finding things that repeat.
              </p>

              <p className="mt-4">
                You may notice that a situation which once made you very
                uncertain now feels easier.
              </p>

              <p className="mt-4">
                You may need less reassurance, make decisions more quickly or
                respond differently in conversations that used to feel
                difficult.
              </p>

              <p className="mt-4">
                These changes can be easy to miss when you rely only on how you
                remember the past.
              </p>
            </ContentSection>

            <ContentSection title="Reflection can make your own evidence easier to see">
              <p>
                Memory is useful, but it is not always precise.
              </p>

              <p className="mt-4">
                You may remember that you used to feel differently without
                remembering exactly what was happening at the time.
              </p>

              <p className="mt-4">
                Keeping short reflections gives you real moments to return to.
                That can make it easier to compare what you were thinking,
                feeling or doing then with what is happening now.
              </p>
            </ContentSection>

            <ContentSection title="Short reflections can be enough">
              <p>
                Understanding yourself over time does not require writing long
                journal entries every day.
              </p>

              <p className="mt-4">
                A short reflection about what is on your mind, what affected
                you or how you responded can still become useful later.
              </p>

              <p className="mt-4">
                Several small reflections across different days can sometimes
                show more than one detailed entry written once.
              </p>
            </ContentSection>

            <ContentSection title="A useful app should connect the past with the present">
              <p>
                If your goal is long-term self-understanding, an app should do
                more than simply store entries in date order.
              </p>

              <p className="mt-4">
                It should make it easier to revisit earlier moments, notice
                possible connections and see whether something is repeating or
                changing.
              </p>

              <p className="mt-4">
                This can help turn separate reflections into a clearer picture
                of your experience across time.
              </p>
            </ContentSection>

            <ContentSection title="Your picture of yourself should stay open to change">
              <p>
                Nobody stays exactly the same.
              </p>

              <p className="mt-4">
                Your priorities, reactions and relationships can change as your
                life changes.
              </p>

              <p className="mt-4">
                A useful reflection tool should therefore avoid reducing you to
                a fixed description. New reflections should be able to add
                context, challenge earlier ideas and show when something has
                started to shift.
              </p>
            </ContentSection>

            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                What can become clearer over time?
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "What tends to affect your mood",
                  "How you respond when you feel uncertain",
                  "Which thoughts or worries keep returning",
                  "What you seem to need in difficult moments",
                  "Which reactions appear across different situations",
                  "Where your responses or priorities are beginning to change",
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

            <ContentSection title="Understanding yourself is something that develops">
              <p>
                There may never be one final answer to who you are.
              </p>

              <p className="mt-4">
                What you can build is a clearer understanding of how you tend
                to feel, react, choose and change across different parts of
                your life.
              </p>

              <p className="mt-4">
                Reflection over time gives you more of your own experience to
                work with.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/understand-yourself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How can I understand myself better? →
                </Link>

                <Link
                  href="/self-reflection-app-understanding-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Self-reflection app for understanding your patterns →
                </Link>

                <Link
                  href="/how-to-choose-a-self-reflection-app"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to choose a self-reflection app →
                </Link>

                <Link
                  href="/notice-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to notice patterns in yourself →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Understand yourself. Over time.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin brings your Reflections together across different
              days. As they build, it can help surface possible Patterns,
              remember meaningful changes and gradually build a clearer picture
              of what has been showing up for you.
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