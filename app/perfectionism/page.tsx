import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Am I a Perfectionist? | RealWithin",
  description:
    "Understand why you may expect things to be perfect, what can make mistakes feel difficult, and how to notice when high standards start creating pressure.",
};

export default function PerfectionismPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why am I a perfectionist?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Wanting to do something well is not unusual.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              But sometimes doing something well starts to feel like it is not
              enough. You may feel that it needs to be exactly right before you
              can relax, finish or feel satisfied with it.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice when your standards support you and when
              they begin creating more pressure than progress.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Perfectionism can appear in different ways">
              <p>
                It does not always mean spending hours making everything look
                perfect.
              </p>

              <p className="mt-4">
                It can also show up in the way you think about mistakes,
                progress or how other people may judge what you do.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Putting something off until you feel fully ready.</li>
                <li>Finding it difficult to finish because something could still be better.</li>
                <li>Focusing on the small part that went wrong.</li>
                <li>Feeling uncomfortable when you make a visible mistake.</li>
                <li>Thinking good work should have been better.</li>
                <li>Setting a new goal as soon as you reach the previous one.</li>
              </ul>
            </ContentSection>

            <ContentSection title="High standards are not always the problem">
              <p>
                High standards can help you care about quality and put effort
                into things that matter to you.
              </p>

              <p className="mt-4">
                The difficulty may come when there is very little room for
                mistakes, learning or something simply being good enough.
              </p>

              <p className="mt-4">
                You may begin measuring success by whether anything could have
                been better rather than whether what you did was useful,
                thoughtful or complete.
              </p>
            </ContentSection>

            <ContentSection title="Notice what a mistake seems to mean">
              <p>
                Sometimes the difficult part is not the mistake itself.
              </p>

              <p className="mt-4">
                You may worry that it makes you look careless, unprepared or
                less capable.
              </p>

              <p className="mt-4">
                When a small mistake starts feeling like evidence about who you
                are, the pressure around getting things right can become much
                stronger.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What am I worried will happen if this is not perfect?
                </Question>

                <Question>
                  Would I expect the same standard from someone else?
                </Question>

                <Question>
                  Is improving this still useful, or am I finding it difficult
                  to stop?
                </Question>

                <Question>
                  What would good enough look like here?
                </Question>

                <Question>
                  Which situations make mistakes feel hardest for me?
                </Question>
              </div>
            </section>

            <ContentSection title="Perfectionism can sometimes make starting harder">
              <p>
                When the final result feels as though it needs to be excellent,
                the first step can feel more difficult than it needs to.
              </p>

              <p className="mt-4">
                You may wait until you have more time, more confidence or a
                clearer plan.
              </p>

              <p className="mt-4">
                Starting with something unfinished or imperfect can feel
                uncomfortable, even though most things need time to improve.
              </p>
            </ContentSection>

            <ContentSection title="It can also make finishing difficult">
              <p>
                You may complete the important part of something but still keep
                adjusting small details.
              </p>

              <p className="mt-4">
                There may always be another sentence to improve, another option
                to consider or another detail you could change.
              </p>

              <p className="mt-4">
                It can help to decide what finished means before you reach that
                point, rather than waiting until nothing could possibly be
                improved.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether success actually feels like success">
              <p>
                Sometimes perfectionism becomes clearer after something goes
                well.
              </p>

              <p className="mt-4">
                You may reach a goal and immediately notice what could have
                been better or what you need to achieve next.
              </p>

              <p className="mt-4">
                If progress is quickly turned into another expectation, you may
                rarely get the feeling that what you have done is enough.
              </p>
            </ContentSection>

            <ContentSection title="Look for the same pressure across different areas">
              <p>
                Wanting one important thing to go perfectly does not necessarily
                mean perfectionism affects everything you do.
              </p>

              <p className="mt-4">
                But if the same pressure appears around work, decisions,
                relationships or personal goals, there may be a repeated
                response worth noticing.
              </p>

              <p className="mt-4">
                Looking across several moments can help you see what tends to
                trigger that pressure and whether your expectations change over
                time.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/hard-on-myself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why am I so hard on myself? →
                </Link>

                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>

                <Link
                  href="/compare-myself-to-others"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I compare myself to others? →
                </Link>

                <Link
                  href="/self-sabotage"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I self-sabotage? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice when your standards start becoming pressure.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday thoughts,
              expectations and reactions. As your Reflections build across
              different days, it can help you notice whether the same pressures
              keep returning and what may be starting to change.
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