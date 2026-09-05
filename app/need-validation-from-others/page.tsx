import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Need Validation From Others? | RealWithin",
  description:
    "Understand why other people's approval can feel important, what tends to make you look for validation, and how to notice when it begins shaping how you see yourself.",
};

export default function NeedValidationFromOthersPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I need validation from others?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes you already know what you think, but still want someone
              else to confirm that you are right, doing well or making a good
              choice.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Their approval may make you feel calmer or more confident for a
              while.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice when outside feedback gives you useful
              information and when you begin needing it before you can trust
              your own view.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Wanting validation is not unusual">
              <p>
                Other people&apos;s responses can help us understand how
                something comes across and whether our choices affect them.
              </p>

              <p className="mt-4">
                Praise, encouragement and support can also feel good.
              </p>

              <p className="mt-4">
                The difficulty may come when your confidence depends heavily on
                getting that response.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you want someone else to confirm">
              <p>
                Validation can mean different things in different moments.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>That you made the right decision.</li>
                <li>That you handled something well.</li>
                <li>That another person is not upset with you.</li>
                <li>That your feelings make sense.</li>
                <li>That you are doing enough.</li>
                <li>That someone still values or wants you.</li>
              </ul>

              <p className="mt-4">
                Being specific about what you want confirmed can make the need
                easier to understand.
              </p>
            </ContentSection>

            <ContentSection title="Validation can bring quick relief">
              <p>
                Uncertainty can be uncomfortable.
              </p>

              <p className="mt-4">
                If someone tells you that your choice makes sense or that
                everything is okay, the doubt may become quieter.
              </p>

              <p className="mt-4">
                That relief is real. But if the same doubt returns soon after,
                you may find yourself looking for another person to confirm it
                again.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What am I hoping this person will tell me?
                </Question>

                <Question>
                  What did I think before I asked for their opinion?
                </Question>

                <Question>
                  If they disagree with me, does my own view immediately change?
                </Question>

                <Question>
                  How long does reassurance or praise usually make me feel
                  better?
                </Question>

                <Question>
                  Are there certain situations where I look for validation more
                  often?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice whether you ask several people the same question">
              <p>
                Sometimes one opinion is not enough when you are trying to feel
                completely certain.
              </p>

              <p className="mt-4">
                You may ask one person, feel better briefly and then wonder
                whether someone else would give you a different answer.
              </p>

              <p className="mt-4">
                If you already have the information you need, asking again may
                be more about trying to remove uncertainty than learning
                something new.
              </p>
            </ContentSection>

            <ContentSection title="Your own view can come before someone else's">
              <p>
                You do not need to stop asking people for advice or feedback.
              </p>

              <p className="mt-4">
                It may help to notice your own answer first.
              </p>

              <p className="mt-4">
                Ask yourself what you think, what matters to you and what seems
                reasonable before hearing someone else&apos;s view.
              </p>

              <p className="mt-4">
                Their opinion can then add information rather than replacing
                your starting point.
              </p>
            </ContentSection>

            <ContentSection title="Approval and agreement are not the same as being right">
              <p>
                Someone can approve of a choice that does not work well for
                you. Someone else can disagree with a choice that still makes
                sense for your situation.
              </p>

              <p className="mt-4">
                Other people bring their own priorities, experiences and
                expectations to the advice they give.
              </p>

              <p className="mt-4">
                Their response can matter without becoming the only measure of
                whether your choice is reasonable.
              </p>
            </ContentSection>

            <ContentSection title="Look for what keeps returning">
              <p>
                Wanting encouragement in one difficult moment does not
                necessarily mean you depend on outside validation.
              </p>

              <p className="mt-4">
                But if you often need someone else to confirm your decisions,
                feelings or value before you can feel settled, there may be a
                repeated response worth noticing.
              </p>

              <p className="mt-4">
                Looking across several moments can help you see what brings the
                need up and whether your own judgement is becoming easier to
                trust.
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
                  href="/care-what-people-think"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I care so much what people think? →
                </Link>

                <Link
                  href="/trust-your-decisions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to trust your own decisions →
                </Link>

                <Link
                  href="/not-good-enough"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel like I&apos;m not good enough? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice when you start looking outside yourself for the answer.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday doubts,
              choices and reactions. As your Reflections build across different
              days, it can help you notice whether the same need for outside
              confirmation keeps returning.
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