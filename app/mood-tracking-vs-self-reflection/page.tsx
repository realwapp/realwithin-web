import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mood Tracking vs Self-Reflection | RealWithin",
  description:
    "Learn the difference between mood tracking and self-reflection, and how each can help you understand your feelings, reactions and patterns over time.",
};

export default function MoodTrackingVsSelfReflectionPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Mood tracking vs self-reflection
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Mood tracking and self-reflection can both help you pay more
              attention to how you feel.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              But they are useful for slightly different reasons.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Mood tracking usually helps you record what you felt. Reflection
              can help you explore what may have been happening around that
              feeling.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What is mood tracking?">
              <p>
                Mood tracking usually involves recording how you feel at
                different points in the day or across several days.
              </p>

              <p className="mt-4">
                You might choose a mood, select an emotion or give your day a
                simple rating.
              </p>

              <p className="mt-4">
                Over time, this can help you see whether your mood changes
                regularly or whether some days tend to feel better or harder
                than others.
              </p>
            </ContentSection>

            <ContentSection title="What is self-reflection?">
              <p>
                Self-reflection looks more closely at what may be happening
                around your feelings, thoughts and reactions.
              </p>

              <p className="mt-4">
                Instead of only recording that you felt anxious, frustrated or
                calm, you might reflect on what affected you, what was on your
                mind and how you responded.
              </p>

              <p className="mt-4">
                This can give you more context around the emotion rather than
                only a record of the emotion itself.
              </p>
            </ContentSection>

            <ContentSection title="Mood tracking can show what changed">
              <p>
                One of the strengths of mood tracking is simplicity.
              </p>

              <p className="mt-4">
                If you record your mood regularly, you may begin to see changes
                across days or weeks.
              </p>

              <p className="mt-4">
                For example, you might notice that your mood is often lower at
                the end of a busy week or that certain periods tend to feel
                calmer.
              </p>

              <p className="mt-4">
                That can be useful information even if you do not yet know why
                the change is happening.
              </p>
            </ContentSection>

            <ContentSection title="Reflection can help you explore why">
              <p>
                Self-reflection adds more detail around what you were feeling.
              </p>

              <p className="mt-4">
                You might notice that uncertainty often appears before your
                mood drops, or that certain conversations leave you thinking
                about the same things afterwards.
              </p>

              <p className="mt-4">
                Reflection cannot always give you a clear explanation, but it
                can help you notice possible connections between the feeling
                and what was happening around it.
              </p>
            </ContentSection>

            <ContentSection title="The difference becomes clearer over time">
              <p>
                A mood log may show that you felt stressed several times.
              </p>

              <p className="mt-4">
                Reflections from those same moments may show that the stress
                often appeared around similar decisions, conversations or
                uncertainties.
              </p>

              <p className="mt-4">
                That extra context can make repeated emotional patterns easier
                to recognise.
              </p>
            </ContentSection>

            <ContentSection title="You do not have to choose only one">
              <p>
                Mood tracking and reflection can work together.
              </p>

              <p className="mt-4">
                A quick mood check can help you notice that something has
                changed. Reflection can then help you explore what may be
                behind it.
              </p>

              <p className="mt-4">
                The better option depends on whether you mainly want to record
                your emotional state or understand more about the situations
                and reactions around it.
              </p>
            </ContentSection>

            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Mood tracking or self-reflection?
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Choose mood tracking if you mainly want a quick record of how you feel",
                  "Choose self-reflection if you want more context around your thoughts and reactions",
                  "Use mood tracking to notice changes in emotional state",
                  "Use reflection to explore what may be repeating around those changes",
                  "Use both if you want a simple emotional record and deeper context over time",
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

            <ContentSection title="If your goal is self-understanding, context matters">
              <p>
                Knowing that your mood changed can be useful.
              </p>

              <p className="mt-4">
                Understanding what tends to happen around that change can give
                you more to work with.
              </p>

              <p className="mt-4">
                Across different days, reflection can help you build a clearer
                picture of the feelings, situations and reactions that keep
                appearing together.
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
                  href="/self-reflection-app-understanding-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Self-reflection app for understanding your patterns →
                </Link>

                <Link
                  href="/ai-reflection-notice-patterns-over-time"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How AI reflection can help you notice patterns over time →
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
              Go beyond recording how you feel.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a simple way to reflect on how you feel and
              what is on your mind. As those Reflections build across different
              days, it can help surface possible Patterns and meaningful
              changes supported by what you have shared.
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