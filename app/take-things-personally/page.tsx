import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Take Things Personally? | RealWithin",
  description:
    "Understand why comments, changes in tone or other people's reactions can sometimes feel personal, and how to notice what happens in those moments.",
};

export default function TakeThingsPersonallyPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I take things personally?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              A short reply, a change in someone&apos;s tone or a small comment
              can sometimes stay with you longer than you expected.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may start wondering whether you did something wrong, whether
              they are upset with you or whether the moment says something
              about how they see you.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to separate what actually happened from the meaning
              your mind started giving it.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with what actually happened">
              <p>
                When something feels personal, your mind may quickly move from
                an event to an explanation.
              </p>

              <p className="mt-4">
                Someone replies briefly, and you wonder if they are annoyed.
                Someone changes a plan, and you wonder if they no longer want
                to see you.
              </p>

              <p className="mt-4">
                Try first to describe only what you know happened. Then notice
                what you added to the story afterwards.
              </p>
            </ContentSection>

            <ContentSection title="Other people's behaviour can have many explanations">
              <p>
                A person&apos;s mood, tone or response may be connected to you.
                But it may also be connected to something else entirely.
              </p>

              <p className="mt-4">
                They could be tired, distracted, busy, worried or thinking
                about something you do not know about.
              </p>

              <p className="mt-4">
                You do not need to convince yourself that everything is fine.
                The useful part is remembering that your first explanation is
                not always the only possible one.
              </p>
            </ContentSection>

            <ContentSection title="Notice what meaning you give the moment">
              <p>
                Two people can experience the same comment very differently.
              </p>

              <p className="mt-4">
                What matters may not only be what was said, but what you believe
                it means about you.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Do you assume someone is disappointed in you?</li>
                <li>Do you worry that you have done something wrong?</li>
                <li>Do you think they no longer like or value you?</li>
                <li>Do you feel you need to fix the situation quickly?</li>
                <li>Do you replay the moment afterwards?</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What do I actually know happened?
                </Question>

                <Question>
                  What am I assuming the other person meant?
                </Question>

                <Question>
                  Is there another possible explanation for their behaviour?
                </Question>

                <Question>
                  What am I worried this moment says about me?
                </Question>

                <Question>
                  Have similar situations affected me in the same way before?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice what you feel you need to do next">
              <p>
                Feeling that something is personal can create an urge to act
                quickly.
              </p>

              <p className="mt-4">
                You may want to explain yourself, apologise, ask if everything
                is okay or look for reassurance that the relationship has not
                changed.
              </p>

              <p className="mt-4">
                Sometimes that response is useful. Other times, giving yourself
                a little time can help you see whether anything actually needs
                to be addressed.
              </p>
            </ContentSection>

            <ContentSection title="A strong reaction does not make the feeling meaningless">
              <p>
                Separating facts from assumptions does not mean dismissing how
                you feel.
              </p>

              <p className="mt-4">
                Something may have affected you for a reason, even if your
                first explanation turns out not to be correct.
              </p>

              <p className="mt-4">
                You might notice that being left out, criticised, ignored or
                misunderstood is especially difficult for you.
              </p>

              <p className="mt-4">
                That can still be useful information about what matters to you.
              </p>
            </ContentSection>

            <ContentSection title="Look for repeated situations">
              <p>
                Taking one comment personally does not necessarily mean there
                is a wider pattern.
              </p>

              <p className="mt-4">
                But if small changes in other people&apos;s behaviour often lead
                you to question yourself, seek reassurance or replay what
                happened, it may be worth looking across several moments.
              </p>

              <p className="mt-4">
                You may begin to see which situations affect you most and what
                thoughts tend to appear afterwards.
              </p>
            </ContentSection>

            {/* RELATED */}
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
                  href="/overthinking-after-conversations"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink after conversations? →
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

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice the meaning you give the moment.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday reactions and
              what was happening around them. As your Reflections build across
              different days, it can help you notice whether similar thoughts
              or reactions keep returning.
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