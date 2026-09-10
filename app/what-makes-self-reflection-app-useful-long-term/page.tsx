import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Makes a Self-Reflection App Useful Long Term? | RealWithin",
  description:
    "Learn what makes a self-reflection app useful over time, from simple regular reflection to noticing patterns, changes and meaningful connections.",
};

export default function UsefulSelfReflectionAppLongTermPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              What makes a self-reflection app useful long term?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              A reflection app may feel useful after one good entry.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              But long-term value comes from what happens when your reflections
              begin to build across different days, situations and stages of
              your life.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              The best long-term tools should help you notice more without
              making reflection feel like work.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="It should be easy enough to keep using">
              <p>
                Long-term reflection only works if you can realistically return
                to it.
              </p>

              <p className="mt-4">
                If every reflection requires a long journal entry, complicated
                prompts or a lot of time, it may become difficult to maintain.
              </p>

              <p className="mt-4">
                A useful app should make it easy to capture a meaningful moment
                even when you only have a few minutes.
              </p>
            </ContentSection>

            <ContentSection title="Your past reflections should remain useful">
              <p>
                Reflection becomes more valuable when earlier moments do not
                simply disappear into a long list.
              </p>

              <p className="mt-4">
                You should be able to return to what you shared before and
                understand how it connects with what is happening now.
              </p>

              <p className="mt-4">
                This can help you notice whether certain thoughts, feelings or
                reactions keep appearing.
              </p>
            </ContentSection>

            <ContentSection title="It should help you notice patterns carefully">
              <p>
                Repeated reactions can sometimes become clearer when you look
                across several different reflections.
              </p>

              <p className="mt-4">
                For example, you may notice that uncertainty often leads to
                second-guessing, or that difficult conversations regularly
                leave you looking for reassurance.
              </p>

              <p className="mt-4">
                A useful app should treat these as possible patterns supported
                by your own experiences, not as fixed facts about you.
              </p>
            </ContentSection>

            <ContentSection title="It should help you notice change too">
              <p>
                Long-term reflection is not only about what repeats.
              </p>

              <p className="mt-4">
                You may become calmer in situations that once felt difficult,
                make decisions more confidently or respond differently in
                relationships.
              </p>

              <p className="mt-4">
                These changes can be easy to miss unless you have earlier
                moments to compare with the present.
              </p>
            </ContentSection>

            <ContentSection title="New reflections should change the picture">
              <p>
                A useful long-term reflection app should not decide who you are
                after a few entries.
              </p>

              <p className="mt-4">
                New experiences can add context, strengthen an earlier idea or
                show that something has changed.
              </p>

              <p className="mt-4">
                Your understanding should stay open rather than becoming a
                permanent label.
              </p>
            </ContentSection>

            <ContentSection title="It should use your own experience as evidence">
              <p>
                If an app suggests something about you, it should be connected
                to moments you actually shared.
              </p>

              <p className="mt-4">
                This gives you a way to understand where the observation came
                from and decide whether it feels accurate.
              </p>

              <p className="mt-4">
                Reflection should support your own understanding rather than
                replace it.
              </p>
            </ContentSection>

            <ContentSection title="It should become more useful instead of more crowded">
              <p>
                After months of reflection, simply having hundreds of entries
                may not be enough.
              </p>

              <p className="mt-4">
                A useful long-term app should help organise what matters so
                important moments, repeated themes and meaningful changes do not
                get lost.
              </p>

              <p className="mt-4">
                The goal is not to collect as much information as possible. It
                is to make the information you already shared easier to
                understand.
              </p>
            </ContentSection>

            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                What to look for long term
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Reflection that is simple enough to keep using",
                  "Past moments that remain easy to revisit",
                  "Careful recognition of possible repeated patterns",
                  "A way to notice meaningful changes over time",
                  "Observations connected to things you actually shared",
                  "A picture of you that can evolve as new reflections are added",
                  "Privacy that you feel comfortable with",
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

            <ContentSection title="Long-term value comes from connection">
              <p>
                A reflection app does not need to give you a dramatic insight
                every day.
              </p>

              <p className="mt-4">
                Its value can grow quietly as more real moments become
                available to look back on.
              </p>

              <p className="mt-4">
                Over time, those moments can help you understand what keeps
                appearing, what is changing and how your experience has
                developed.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/how-to-choose-a-self-reflection-app"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to choose a self-reflection app →
                </Link>

                <Link
                  href="/app-to-understand-yourself-over-time"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  App to help you understand yourself over time →
                </Link>

                <Link
                  href="/self-reflection-app-understanding-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Self-reflection app for understanding your patterns →
                </Link>

                <Link
                  href="/reflect-without-long-journal-entry"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to reflect without writing a long journal entry →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Let your understanding build with you.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin brings together your Reflections across different
              days. As they build, it can help surface possible Patterns,
              remember meaningful changes and develop a clearer picture of what
              has been showing up for you over time.
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