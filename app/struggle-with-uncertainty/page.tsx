import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Struggle With Uncertainty? | RealWithin",
  description:
    "Understand why uncertainty can feel difficult, what you may do when you do not know the answer, and how to notice repeated reactions more clearly.",
};

export default function StruggleWithUncertaintyPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I struggle with uncertainty?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Not knowing what will happen next can sometimes feel harder than
              the situation itself.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may keep thinking, checking or asking questions because you
              want to reach a point where you finally feel sure.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice what uncertainty makes you want to do, and
              whether those responses actually give you the clarity you are
              looking for.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Some situations simply do not have an answer yet">
              <p>
                You may be waiting for a reply, making a decision or wondering
                how something will turn out.
              </p>

              <p className="mt-4">
                Sometimes there is more information you can find. Other times,
                the answer only becomes available with time.
              </p>

              <p className="mt-4">
                That gap between wanting to know and being able to know can
                feel uncomfortable.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you do when you do not know">
              <p>
                Uncertainty can lead to different responses.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Going over the same possibilities again.</li>
                <li>Asking several people what they think.</li>
                <li>Checking messages or information repeatedly.</li>
                <li>Trying to predict what someone else will do.</li>
                <li>Changing a decision because you no longer feel sure.</li>
                <li>Imagining what could go wrong.</li>
              </ul>

              <p className="mt-4">
                These things can sometimes give you useful information. It is
                worth noticing when they stop adding anything new.
              </p>
            </ContentSection>

            <ContentSection title="Certainty is not always available before you act">
              <p>
                Some decisions come with clear facts. Others involve choices
                where several outcomes are possible.
              </p>

              <p className="mt-4">
                You may know enough to make a reasonable choice without knowing
                exactly what will happen afterwards.
              </p>

              <p className="mt-4">
                Waiting for complete certainty can sometimes leave you
                reconsidering a decision long after you already have the
                information you need.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What answer am I trying to get right now?
                </Question>

                <Question>
                  Is there actually more information available to me?
                </Question>

                <Question>
                  Have I learned anything new from thinking about this again?
                </Question>

                <Question>
                  What do I imagine will happen if I stop checking for now?
                </Question>

                <Question>
                  Which kinds of uncertainty are hardest for me to leave
                  unresolved?
                </Question>
              </div>
            </section>

            <ContentSection title="More thinking can sometimes feel like more control">
              <p>
                When you cannot control the outcome, thinking about it can feel
                like doing something.
              </p>

              <p className="mt-4">
                You may examine every possibility because you hope one more
                thought will make the situation clearer.
              </p>

              <p className="mt-4">
                Sometimes it does. But if you keep returning to the same
                information, you may be trying to create certainty where there
                is not enough information yet.
              </p>
            </ContentSection>

            <ContentSection title="Notice when reassurance only helps for a short time">
              <p>
                Asking another person what they think can be useful.
              </p>

              <p className="mt-4">
                But if their answer settles you briefly and then another doubt
                appears, the problem may not be that you need another opinion.
              </p>

              <p className="mt-4">
                It may be that no answer can remove all uncertainty from the
                situation.
              </p>
            </ContentSection>

            <ContentSection title="You can respond to what you know now">
              <p>
                You do not always need to solve the whole future.
              </p>

              <p className="mt-4">
                Sometimes the next useful step is smaller: make the decision
                you can make today, ask the question you can ask or wait for
                information that is not available yet.
              </p>

              <p className="mt-4">
                You can change course later if something important changes.
              </p>
            </ContentSection>

            <ContentSection title="Look for what repeats when things are unclear">
              <p>
                Finding one uncertain situation difficult does not necessarily
                mean there is a wider pattern.
              </p>

              <p className="mt-4">
                But if not knowing often leads to checking, reassurance,
                overthinking or changing your decisions, it may be useful to
                compare several moments.
              </p>

              <p className="mt-4">
                Over time, you may begin to see which kinds of uncertainty
                affect you most and what you usually do when they appear.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/assume-the-worst"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I assume the worst? →
                </Link>

                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
                </Link>

                <Link
                  href="/question-every-decision"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I question every decision I make? →
                </Link>

                <Link
                  href="/reassurance"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I need reassurance so often? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what you do when the answer is not clear yet.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday uncertainty,
              choices and reactions. As your Reflections build across different
              days, it can help you notice whether similar responses keep
              returning and what tends to bring them up.
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