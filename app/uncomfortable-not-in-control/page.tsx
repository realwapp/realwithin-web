import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Feel Uncomfortable When I’m Not in Control? | RealWithin",
  description:
    "Understand why being out of control can feel uncomfortable, what you may do to regain certainty, and how to notice when the same response keeps returning.",
};

export default function UncomfortableNotInControlPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I feel uncomfortable when I&apos;m not in control?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Some situations feel much harder when the outcome depends on
              someone else, information you do not have or events you cannot
              plan.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may want to organise everything early, check repeatedly or
              know exactly what will happen before you can relax.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice what you are trying to control and what
              feels difficult about leaving part of the situation open.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Control can sometimes feel like preparation">
              <p>
                Planning ahead can be useful.
              </p>

              <p className="mt-4">
                It can help you organise your time, avoid preventable problems
                and feel ready for what is coming.
              </p>

              <p className="mt-4">
                The difficulty may appear when planning no longer gives you
                useful information but you still feel unable to stop.
              </p>
            </ContentSection>

            <ContentSection title="Notice which situations are hardest to leave open">
              <p>
                You may not need control in every part of your life.
              </p>

              <p className="mt-4">
                It may become stronger in certain situations.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Waiting for someone to reply.</li>
                <li>Depending on another person to make a decision.</li>
                <li>Travelling without a clear plan.</li>
                <li>Starting something without knowing the outcome.</li>
                <li>Letting someone else organise an important task.</li>
                <li>Changing plans at short notice.</li>
              </ul>

              <p className="mt-4">
                Looking at the specific situations can make the wider reaction
                easier to understand.
              </p>
            </ContentSection>

            <ContentSection title="You may be trying to remove uncertainty">
              <p>
                Knowing what happens next can make a situation feel easier.
              </p>

              <p className="mt-4">
                When you cannot know, you may try to create certainty by
                checking, planning or thinking through every possible outcome.
              </p>

              <p className="mt-4">
                Sometimes that helps. Other times, the situation remains
                uncertain no matter how much preparation you do.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What part of this situation am I trying to control?
                </Question>

                <Question>
                  What do I imagine might happen if I leave it alone for now?
                </Question>

                <Question>
                  Is there anything useful I can actually do at this point?
                </Question>

                <Question>
                  Am I planning because it helps, or because stopping feels
                  uncomfortable?
                </Question>

                <Question>
                  Which kinds of situations make me want control most strongly?
                </Question>
              </div>
            </section>

            <ContentSection title="Separate what you can influence from what you cannot">
              <p>
                Some parts of a situation may be yours to decide.
              </p>

              <p className="mt-4">
                You can choose what you say, what you prepare, what boundary you
                set or what next step you take.
              </p>

              <p className="mt-4">
                Other parts may depend on another person, timing or events that
                are outside your control.
              </p>

              <p className="mt-4">
                Keeping those two groups separate can help you focus your energy
                more clearly.
              </p>
            </ContentSection>

            <ContentSection title="More checking does not always create more control">
              <p>
                Rechecking a message, schedule, plan or decision can sometimes
                catch a real problem.
              </p>

              <p className="mt-4">
                But after a certain point, you may be looking at the same
                information without changing the situation.
              </p>

              <p className="mt-4">
                It can help to ask what new information you expect the next
                check to give you.
              </p>
            </ContentSection>

            <ContentSection title="Other people may do things differently from you">
              <p>
                Giving someone else responsibility can feel uncomfortable when
                you would handle the task differently.
              </p>

              <p className="mt-4">
                Different does not automatically mean wrong.
              </p>

              <p className="mt-4">
                If the result matters, you can agree on what is important while
                leaving room for the other person to choose how they get there.
              </p>
            </ContentSection>

            <ContentSection title="A change of plan does not always need an immediate solution">
              <p>
                Unexpected changes can create a strong urge to rebuild the plan
                straight away.
              </p>

              <p className="mt-4">
                Sometimes that is useful.
              </p>

              <p className="mt-4">
                Other times, you may have enough information to wait and decide
                later.
              </p>

              <p className="mt-4">
                Allowing a short period of uncertainty can show you whether the
                situation actually needs action.
              </p>
            </ContentSection>

            <ContentSection title="Look for what happens when control is not possible">
              <p>
                One stressful situation does not necessarily tell you much
                about a wider pattern.
              </p>

              <p className="mt-4">
                But if being unable to control the outcome repeatedly leads to
                checking, overplanning, reassurance or frustration, it may be
                useful to compare those moments.
              </p>

              <p className="mt-4">
                Over time, you may begin to see what you are most afraid of
                leaving uncertain and whether your response starts to change.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/struggle-with-uncertainty"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle with uncertainty? →
                </Link>

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
                  href="/build-self-trust"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to build self-trust →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what becomes difficult when the outcome is not yours to control.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday uncertainty,
              choices and reactions. As your Reflections build across different
              days, it can help you notice possible Patterns in what makes you
              reach for more control.
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