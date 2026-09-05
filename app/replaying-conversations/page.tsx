import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Replay Conversations in My Head? | RealWithin",
  description:
    "Understand why you may replay conversations after they end, what you may be looking for, and how noticing the pattern can help you understand yourself better.",
};

export default function ReplayingConversationsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I replay conversations in my head?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may leave a conversation and then start going through it
              again.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              What did they mean? Did you say too much? Did something sound
              wrong?
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes your mind is trying to make sense of something that
              still feels unclear.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What replaying a conversation can look like">
              <p>
                Replaying a conversation does not always feel like
                overthinking at first. It may feel like you are simply trying
                to understand what happened.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Thinking about the words you used.</li>
                <li>Wondering if the other person was upset.</li>
                <li>Thinking about what you should have said instead.</li>
                <li>Looking for hidden meaning in their tone or expression.</li>
                <li>Wanting to send another message to explain yourself.</li>
                <li>Checking the conversation again for signs you missed.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Why does your mind keep going back to it?">
              <p>
                A conversation can stay on your mind when something about it
                feels unfinished or uncertain.
              </p>

              <p className="mt-4">
                Maybe you are not sure how the other person felt. Maybe you
                wish you had said something differently. Or maybe their
                reaction mattered to you more than you expected.
              </p>

              <p className="mt-4">
                Going over the conversation again may feel like a way to find
                an answer. Sometimes it helps you notice something useful.
                Other times, you may reach a point where you are thinking about
                the same details without learning anything new.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What part of the conversation am I returning to most?
                </Question>

                <Question>
                  Am I trying to understand what happened, or trying to feel
                  completely sure about it?
                </Question>

                <Question>
                  Is there something I wish I had said or done differently?
                </Question>

                <Question>
                  Do I often replay conversations when I am unsure how someone
                  feels about me?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice when thinking stops helping">
              <p>
                Thinking about a conversation once or twice can help you
                understand it better.
              </p>

              <p className="mt-4">
                But if you keep reaching the same questions without finding
                anything new, more thinking may not give you the certainty you
                are looking for.
              </p>

              <p className="mt-4">
                At that point, it can help to notice what you are worried the
                conversation might mean rather than going through every word
                again.
              </p>
            </ContentSection>

            <ContentSection title="The same reaction may appear in different conversations">
              <p>
                One conversation may simply stay on your mind because it was
                important to you.
              </p>

              <p className="mt-4">
                But if you often replay conversations, worry that you said the
                wrong thing or look for reassurance afterwards, you may start
                to notice a repeated response.
              </p>

              <p className="mt-4">
                Looking across several moments can help you see when this
                happens, what tends to bring it up and what you seem to need in
                those moments.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
                </Link>

                <Link
                  href="/repeating-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I keep repeating the same patterns? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what happens after the conversation ends.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday moments like
              these. As your Reflections build across different days, it can
              help you notice whether the same thoughts or reactions keep
              coming back.
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