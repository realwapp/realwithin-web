import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Self-Awareness? | RealWithin",
  description:
    "Learn what self-awareness means, what it can look like in everyday life, and how noticing your thoughts, feelings, needs and reactions can help you understand yourself better.",
};

export default function WhatIsSelfAwarenessPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              What is self-awareness?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Self-awareness means noticing what is happening inside you and
              how you tend to respond to what happens around you.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can include your thoughts, feelings, needs, values, choices and
              reactions.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It is not about knowing everything about yourself. It is about
              becoming more able to notice what is happening before you move
              straight past it.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Self-awareness starts with noticing">
              <p>
                You may begin with something simple: a change in your mood, a
                thought you keep returning to or a reaction that surprised you.
              </p>

              <p className="mt-4">
                You do not need to understand the reason immediately.
              </p>

              <p className="mt-4">
                Noticing what happened gives you a clearer place to begin.
              </p>
            </ContentSection>

            <ContentSection title="It can help you see the difference between a feeling and a fact">
              <p>
                You may feel rejected after someone does not reply.
              </p>

              <p className="mt-4">
                The feeling is real. But the conclusion that they are rejecting
                you may still be uncertain.
              </p>

              <p className="mt-4">
                Self-awareness can help you notice both: what you feel and what
                you have started assuming about the situation.
              </p>
            </ContentSection>

            <ContentSection title="Self-awareness can show up in everyday moments">
              <p>
                It does not need to involve a major life decision.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Noticing that you are saying yes when you want to say no.</li>
                <li>Realising you become quieter around certain people.</li>
                <li>Seeing that you ask for reassurance when you feel unsure.</li>
                <li>Recognising that one type of conversation often stays on your mind.</li>
                <li>Noticing when you need more rest or space.</li>
                <li>Seeing that a choice feels more like you than it used to.</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few self-awareness questions
              </h2>

              <div className="mt-6 space-y-4">
                <Question>What am I feeling right now?</Question>

                <Question>
                  What has stayed on my mind today?
                </Question>

                <Question>
                  What affected me more than I expected?
                </Question>

                <Question>
                  What did I want or need in that moment?
                </Question>

                <Question>
                  Have I responded in a similar way recently?
                </Question>
              </div>
            </section>

            <ContentSection title="Self-awareness is not the same as judging yourself">
              <p>
                Noticing a reaction does not mean deciding that the reaction is
                bad or that something is wrong with you.
              </p>

              <p className="mt-4">
                You might notice that you became defensive, withdrew or looked
                for approval.
              </p>

              <p className="mt-4">
                The useful question is often what was happening in that moment
                and whether the same response appears elsewhere.
              </p>
            </ContentSection>

            <ContentSection title="One moment does not define you">
              <p>
                Self-awareness becomes less useful when one experience turns
                into a fixed label.
              </p>

              <p className="mt-4">
                Feeling insecure once does not mean you are always insecure.
                Avoiding one conversation does not mean you always avoid
                conflict.
              </p>

              <p className="mt-4">
                Looking across several situations can give you a more reliable
                picture than making a conclusion from one difficult day.
              </p>
            </ContentSection>

            <ContentSection title="It can help you notice what matters to you">
              <p>
                Your reactions can sometimes point towards things that feel
                important.
              </p>

              <p className="mt-4">
                You may notice that you care strongly about fairness, freedom,
                connection, stability or being included.
              </p>

              <p className="mt-4">
                These are possibilities rather than automatic meanings. Looking
                at repeated choices and experiences can help you see what
                genuinely matters to you.
              </p>
            </ContentSection>

            <ContentSection title="Self-awareness includes noticing change">
              <p>
                Understanding yourself is not only about finding repeated
                patterns.
              </p>

              <p className="mt-4">
                It can also mean seeing when an old response is becoming less
                common.
              </p>

              <p className="mt-4">
                Perhaps you speak up earlier, need less reassurance or recover
                more quickly after a difficult conversation.
              </p>

              <p className="mt-4">
                These changes can be easy to miss when they happen gradually.
              </p>
            </ContentSection>

            <ContentSection title="Reflection can make self-awareness easier">
              <p>
                It is difficult to notice patterns when every moment is viewed
                separately.
              </p>

              <p className="mt-4">
                Short reflections can give you something to look back on.
              </p>

              <p className="mt-4">
                Over time, you may see that certain feelings, needs, choices or
                reactions appear in more than one situation.
              </p>

              <p className="mt-4">
                You may also see where your response has started to shift.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/become-more-self-aware"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to become more self-aware →
                </Link>

                <Link
                  href="/what-is-self-reflection"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  What is self-reflection? →
                </Link>

                <Link
                  href="/understand-yourself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How can I understand myself better? →
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

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              See more than one moment at a time.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on how you feel and what
              is on your mind. As your Reflections build across different days,
              it can help you notice possible Patterns and meaningful changes
              that may be difficult to see in a single moment.
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