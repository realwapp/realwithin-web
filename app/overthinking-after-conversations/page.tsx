import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Overthink After Conversations? | RealWithin",
  description:
    "Understand why you may overthink after talking to someone, worry about how you came across, and keep checking what the conversation meant.",
};

export default function OverthinkingAfterConversationsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I overthink after conversations?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              A conversation can feel completely normal while it is happening.
              Then later, you start thinking about it differently.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Did you talk too much? Did something sound strange? Did the other
              person leave with the wrong impression?
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes the conversation has ended, but your mind is still
              trying to work out how it went.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What overthinking after a conversation can look like">
              <p>
                You may not be thinking about every part of the conversation.
                Often, your attention goes back to the moments that felt less
                certain.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Wondering if you talked too much.</li>
                <li>Thinking you should have explained yourself differently.</li>
                <li>Trying to work out what their tone meant.</li>
                <li>Worrying that you sounded awkward or rude.</li>
                <li>Checking messages or replies for signs something is wrong.</li>
                <li>Wanting to contact them again to clear something up.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Why does the doubt sometimes appear afterwards?">
              <p>
                During a conversation, you are usually focused on responding,
                listening and keeping the conversation moving.
              </p>

              <p className="mt-4">
                Afterwards, you have more time to think. Small details that did
                not seem important before may suddenly feel bigger.
              </p>

              <p className="mt-4">
                If you care about how the other person sees you, you may start
                checking the conversation for signs that you said or did
                something wrong.
              </p>
            </ContentSection>

            <ContentSection title="You may be trying to work out what they think of you">
              <p>
                Sometimes the worry is not really about the exact words you
                used.
              </p>

              <p className="mt-4">
                You may be wondering whether the other person still likes you,
                respects you, agrees with you or understands what you meant.
              </p>

              <p className="mt-4">
                When you cannot know exactly what someone else is thinking,
                your mind may keep looking for clues in the conversation.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What part of the conversation am I most worried about?
                </Question>

                <Question>
                  Do I know something went wrong, or am I worried that it might
                  have?
                </Question>

                <Question>
                  What am I afraid the other person now thinks about me?
                </Question>

                <Question>
                  Does this happen more often with certain people or types of
                  conversation?
                </Question>
              </div>
            </section>

            <ContentSection title="Ask whether you have new information">
              <p>
                Thinking about a conversation can sometimes help you understand
                it better.
              </p>

              <p className="mt-4">
                But there may come a point where you are going through the same
                details without finding anything new.
              </p>

              <p className="mt-4">
                It can help to ask whether something has actually happened
                since the conversation, or whether your worry has grown because
                you have had more time to think about it.
              </p>
            </ContentSection>

            <ContentSection title="Notice if the same worry follows different conversations">
              <p>
                One conversation may stay with you because it was important or
                uncomfortable.
              </p>

              <p className="mt-4">
                But if you often leave conversations wondering how you came
                across, whether someone is upset or whether you said the wrong
                thing, there may be a repeated response worth noticing.
              </p>

              <p className="mt-4">
                Looking across different moments can help you see when this
                happens most often and what seems to bring the worry up.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/replaying-conversations"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I replay conversations in my head? →
                </Link>

                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
                </Link>

                <Link
                  href="/reassurance"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I need reassurance so often? →
                </Link>

                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what tends to happen after you talk to someone.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on moments like these.
              As your Reflections build across different days, it can help you
              notice whether the same worries or reactions keep appearing
              after conversations.
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