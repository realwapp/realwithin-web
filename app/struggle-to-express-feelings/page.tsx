import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Struggle to Express My Feelings? | RealWithin",
  description:
    "Understand why expressing your feelings can sometimes be difficult, what may make you hold back, and how to notice the situations where this happens most.",
};

export default function StruggleToExpressFeelingsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I struggle to express my feelings?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may know that something has affected you but still find it
              difficult to explain what you feel.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes the words are hard to find. Other times, you may know
              exactly what you want to say but worry about how another person
              will respond.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice what happens between feeling something and
              deciding whether to share it.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Sometimes the feeling is clearer than the words">
              <p>
                You might know that you feel uncomfortable, upset or distant
                without being able to explain exactly why.
              </p>

              <p className="mt-4">
                Feelings do not always arrive with a clear explanation.
              </p>

              <p className="mt-4">
                It can be enough to begin with what you do know instead of
                waiting until you can explain everything perfectly.
              </p>
            </ContentSection>

            <ContentSection title="You may be thinking about the other person's reaction">
              <p>
                Expressing a feeling can make you more visible to someone else.
              </p>

              <p className="mt-4">
                You may worry they will misunderstand you, become defensive,
                feel guilty or think you are making too much of something.
              </p>

              <p className="mt-4">
                That worry can make staying quiet feel easier, even when part
                of you wants to be understood.
              </p>
            </ContentSection>

            <ContentSection title="Notice how you tend to hold back">
              <p>
                Difficulty expressing feelings can appear in different ways.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Saying “I&apos;m fine” when something is bothering you.</li>
                <li>Changing the subject when a conversation becomes personal.</li>
                <li>Waiting for someone else to notice how you feel.</li>
                <li>Explaining the situation without saying how it affected you.</li>
                <li>Thinking about what you wanted to say after the conversation ends.</li>
                <li>Only speaking once the feeling has become much stronger.</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What am I feeling, even if I cannot explain why yet?
                </Question>

                <Question>
                  What do I wish the other person understood about this moment?
                </Question>

                <Question>
                  What am I worried will happen if I say how I feel?
                </Question>

                <Question>
                  Do I find some feelings easier to express than others?
                </Question>

                <Question>
                  Are there certain people with whom I hold back more?
                </Question>
              </div>
            </section>

            <ContentSection title="You do not need to explain your feeling perfectly">
              <p>
                Sometimes people wait to speak until they can give a complete
                reason for how they feel.
              </p>

              <p className="mt-4">
                But you may not have that answer yet.
              </p>

              <p className="mt-4">
                Saying “I&apos;m not completely sure why, but this affected me”
                can be more accurate than forcing yourself to give an
                explanation you do not really have.
              </p>
            </ContentSection>

            <ContentSection title="Try separating the feeling from the accusation">
              <p>
                It can be easier to express yourself when you describe your
                experience rather than deciding what the other person intended.
              </p>

              <p className="mt-4">
                For example, “I felt left out when the plan changed” describes
                your experience.
              </p>

              <p className="mt-4">
                “You changed the plan because you do not care about me” adds an
                explanation about the other person that you may not know is
                true.
              </p>

              <p className="mt-4">
                Staying close to what you actually felt can make the
                conversation clearer.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether you wait until the feeling becomes bigger">
              <p>
                A feeling can be easier to ignore when it first appears.
              </p>

              <p className="mt-4">
                You may tell yourself it does not matter or decide that bringing
                it up would create unnecessary tension.
              </p>

              <p className="mt-4">
                If the same situation continues, the feeling may become harder
                to ignore later.
              </p>

              <p className="mt-4">
                Looking back can help you notice whether there was an earlier
                moment when the feeling could have been expressed more simply.
              </p>
            </ContentSection>

            <ContentSection title="Not every feeling needs to be shared">
              <p>
                Expressing your feelings does not mean telling everyone
                everything you feel.
              </p>

              <p className="mt-4">
                You may decide that some feelings are private, temporary or not
                useful to bring into a particular conversation.
              </p>

              <p className="mt-4">
                The important difference may be whether you are choosing not to
                share or feeling unable to say something you genuinely want to
                communicate.
              </p>
            </ContentSection>

            <ContentSection title="Look for what repeats">
              <p>
                Finding one emotional conversation difficult does not
                necessarily mean there is a wider pattern.
              </p>

              <p className="mt-4">
                But if you repeatedly stay quiet, minimise what you feel or wait
                for other people to notice, it may be useful to compare several
                moments.
              </p>

              <p className="mt-4">
                Over time, you may begin to see which situations make
                expression harder and what you tend to do instead.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/avoid-difficult-conversations"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I avoid difficult conversations? →
                </Link>

                <Link
                  href="/how-to-be-more-assertive"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to be more assertive →
                </Link>

                <Link
                  href="/over-explaining"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I over-explain myself? →
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

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice the feelings that are hardest to put into words.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on how you feel and what
              is on your mind. As your Reflections build across different days,
              it can help you notice recurring reactions and meaningful changes
              in how you respond.
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