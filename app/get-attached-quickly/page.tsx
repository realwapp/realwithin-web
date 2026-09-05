import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Get Attached So Quickly? | RealWithin",
  description:
    "Understand why you may become emotionally invested in someone quickly, what tends to make the feeling stronger, and how to notice the pattern more clearly.",
};

export default function GetAttachedQuicklyPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I get attached so quickly?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes a new connection starts to matter very quickly.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may think about the person often, look forward to their
              messages or begin imagining where the connection could go.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              There is nothing unusual about becoming excited about someone.
              It can be useful to notice what makes the connection feel
              important so early.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="A new connection can bring a lot of possibility">
              <p>
                When you like someone, you are not only responding to what has
                already happened.
              </p>

              <p className="mt-4">
                You may also begin thinking about what could happen next.
              </p>

              <p className="mt-4">
                That possibility can make a connection feel bigger before you
                have had much time to know the person.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you are becoming attached to">
              <p>
                Sometimes you are responding to the person themselves.
                Sometimes part of the feeling is also about what the connection
                represents.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Feeling wanted or chosen.</li>
                <li>Having someone to look forward to hearing from.</li>
                <li>The excitement of something new.</li>
                <li>The possibility of a future relationship.</li>
                <li>Feeling understood or noticed.</li>
                <li>Relief from feeling lonely or uncertain.</li>
              </ul>

              <p className="mt-4">
                More than one of these things can be true at the same time.
              </p>
            </ContentSection>

            <ContentSection title="Pay attention to how much you actually know">
              <p>
                Early in a connection, there are often many things you do not
                know yet.
              </p>

              <p className="mt-4">
                Your mind may naturally fill some of those gaps with hopes,
                guesses or expectations.
              </p>

              <p className="mt-4">
                It can help to separate what the person has actually shown you
                from what you imagine the relationship may become.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What do I actually know about this person so far?
                </Question>

                <Question>
                  What am I hoping this connection will become?
                </Question>

                <Question>
                  How much of my attention is on what is happening now, and how
                  much is on what could happen later?
                </Question>

                <Question>
                  What changes in me when I receive attention from this person?
                </Question>

                <Question>
                  Have I felt this strongly this quickly in other connections?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice what happens when their attention changes">
              <p>
                Your feelings may become clearer when the other person replies
                less, seems distracted or does something you were not expecting.
              </p>

              <p className="mt-4">
                You may start checking messages, wondering what changed or
                looking for reassurance that the connection is still okay.
              </p>

              <p className="mt-4">
                That response does not automatically tell you what the other
                person is thinking. It can, however, show you what uncertainty
                brings up for you.
              </p>
            </ContentSection>

            <ContentSection title="Strong feelings and knowing someone well are different things">
              <p>
                You can feel very strongly about someone before you know them
                deeply.
              </p>

              <p className="mt-4">
                The feeling is still real. But time gives you more information
                about how the person communicates, what they want and whether
                the connection works for both of you.
              </p>

              <p className="mt-4">
                Letting the relationship show you what it is can be different
                from deciding too early what it will become.
              </p>
            </ContentSection>

            <ContentSection title="Keep noticing your own life too">
              <p>
                A new connection can take up a lot of attention.
              </p>

              <p className="mt-4">
                You may notice yourself checking your phone more, changing
                plans or thinking about the person throughout the day.
              </p>

              <p className="mt-4">
                It can help to notice whether the connection is becoming one
                part of your life or beginning to take over much of your
                attention.
              </p>
            </ContentSection>

            <ContentSection title="Look for what repeats across different connections">
              <p>
                Becoming attached quickly once does not necessarily mean there
                is a wider pattern.
              </p>

              <p className="mt-4">
                But if new connections often become emotionally important very
                early, it may be useful to look across several experiences.
              </p>

              <p className="mt-4">
                You may begin to notice what tends to make the feeling stronger,
                what happens when uncertainty appears and what you tend to do
                next.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/reassurance"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I need reassurance so often? →
                </Link>

                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
                </Link>

                <Link
                  href="/take-things-personally"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I take things personally? →
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
              Notice what new connections bring up for you.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday feelings,
              relationships and reactions. As your Reflections build across
              different days, it can help you notice whether similar responses
              keep returning and what tends to happen around them.
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