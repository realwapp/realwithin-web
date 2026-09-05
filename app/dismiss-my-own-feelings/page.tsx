import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Dismiss My Own Feelings? | RealWithin",
  description:
    "Understand why you may dismiss, minimise or question your own feelings, and how to notice when your reaction deserves more attention.",
};

export default function DismissMyOwnFeelingsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I dismiss my own feelings?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Something affects you, but almost immediately you tell yourself
              it should not matter.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may think you are overreacting, being too sensitive or making
              too much of something before you have really looked at what you
              feel.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice the difference between understanding a
              feeling and dismissing it before you have understood it.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="A feeling does not need to be dramatic to be worth noticing">
              <p>
                Not every emotion means something major has happened.
              </p>

              <p className="mt-4">
                You may feel disappointed, irritated, uncomfortable or left out
                in a small everyday moment.
              </p>

              <p className="mt-4">
                The feeling can still give you useful information about what
                mattered to you in that situation.
              </p>
            </ContentSection>

            <ContentSection title="Notice the sentence that comes after the feeling">
              <p>
                The first reaction may happen quickly.
              </p>

              <p className="mt-4">
                Then another thought arrives and tells you what you should think
                about that reaction.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>“It&apos;s not a big deal.”</li>
                <li>“I&apos;m probably being too sensitive.”</li>
                <li>“Other people have bigger problems.”</li>
                <li>“I shouldn&apos;t feel like this.”</li>
                <li>“They probably didn&apos;t mean anything by it.”</li>
                <li>“I just need to get over it.”</li>
              </ul>

              <p className="mt-4">
                Some of those thoughts may contain useful perspective. But they
                can also arrive before you have asked why the moment affected
                you at all.
              </p>
            </ContentSection>

            <ContentSection title="Someone else's intention does not decide your reaction">
              <p>
                A person may not have meant to hurt, exclude or frustrate you.
              </p>

              <p className="mt-4">
                That can be important context.
              </p>

              <p className="mt-4">
                But their intention and your experience are still two different
                things.
              </p>

              <p className="mt-4">
                You can believe that someone meant no harm and still notice
                that the situation affected you.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What did I feel before I started explaining it away?
                </Question>

                <Question>
                  What part of the situation affected me most?
                </Question>

                <Question>
                  Am I deciding that my feeling is wrong before understanding
                  it?
                </Question>

                <Question>
                  Would I dismiss this feeling as quickly if a friend described
                  the same situation?
                </Question>

                <Question>
                  Does the same kind of situation affect me repeatedly?
                </Question>
              </div>
            </section>

            <ContentSection title="Understanding a feeling does not mean obeying it">
              <p>
                Taking your feelings seriously does not mean every feeling has
                to decide what you do next.
              </p>

              <p className="mt-4">
                You can feel angry and decide not to act immediately. You can
                feel rejected and still recognise that you do not know what
                another person intended.
              </p>

              <p className="mt-4">
                The feeling can be acknowledged without becoming the whole
                explanation for the situation.
              </p>
            </ContentSection>

            <ContentSection title="Comparison can make your own experience disappear">
              <p>
                You may tell yourself that someone else has it harder, so your
                own reaction should not matter.
              </p>

              <p className="mt-4">
                Another person&apos;s difficulty does not automatically tell you
                whether something affected you.
              </p>

              <p className="mt-4">
                You can keep perspective while still being accurate about your
                own experience.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether you only accept feelings that seem reasonable">
              <p>
                Some emotions may feel easier to accept than others.
              </p>

              <p className="mt-4">
                You may be comfortable saying you are tired but find it harder
                to admit that you feel jealous, hurt, disappointed or lonely.
              </p>

              <p className="mt-4">
                You do not have to like a feeling for it to be something you
                genuinely experienced.
              </p>
            </ContentSection>

            <ContentSection title="A feeling can point towards a need without proving one">
              <p>
                Sometimes a reaction can make you curious about what felt
                missing.
              </p>

              <p className="mt-4">
                Perhaps you wanted more consideration, clearer communication,
                rest, inclusion or space.
              </p>

              <p className="mt-4">
                These are possibilities rather than automatic meanings. The
                useful part is exploring what fits your actual situation.
              </p>
            </ContentSection>

            <ContentSection title="Look for what happens when you keep dismissing the same thing">
              <p>
                One feeling may pass quickly and never return.
              </p>

              <p className="mt-4">
                But if you repeatedly tell yourself something does not matter
                and then find yourself upset by the same situation again, it
                may be worth looking more closely.
              </p>

              <p className="mt-4">
                Several similar moments can give you stronger evidence than one
                reaction alone.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/understand-your-emotions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to understand your emotions better →
                </Link>

                <Link
                  href="/recognise-what-you-need"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to recognise what you need →
                </Link>

                <Link
                  href="/take-things-personally"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I take things personally? →
                </Link>

                <Link
                  href="/struggle-to-express-feelings"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to express my feelings? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice the feeling before you explain it away.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on how you feel and what
              is on your mind. As your Reflections build across different days,
              it can help you notice whether certain feelings or reactions keep
              returning and what tends to happen around them.
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