import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Worry About Disappointing People? | RealWithin",
  description:
    "Understand why disappointing other people can feel so difficult, how it may affect your choices, and what can help you notice the pattern more clearly.",
};

export default function DisappointingPeoplePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I worry about disappointing people?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may know what you want to say or do, but then start thinking
              about how someone else might feel about it.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              What if they are upset? What if they think you do not care? What
              if they see you differently?
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              When another person&apos;s disappointment feels hard to sit with,
              it can start to shape your choices.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Why can disappointing someone feel so difficult?">
              <p>
                Most people care about how their choices affect others. That
                can be a good thing.
              </p>

              <p className="mt-4">
                But sometimes the thought of someone being disappointed can
                feel so uncomfortable that you start putting their reaction
                before your own needs or limits.
              </p>

              <p className="mt-4">
                You may want to avoid conflict, keep the relationship calm or
                make sure the other person still feels good about you.
              </p>
            </ContentSection>

            <ContentSection title="What this worry can look like">
              <p>
                Worrying about disappointing people can appear in small choices
                as well as bigger ones.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Saying yes when you would rather say no.</li>
                <li>Changing your plans to make things easier for someone else.</li>
                <li>Giving long explanations for your decisions.</li>
                <li>Feeling responsible when someone is unhappy with your answer.</li>
                <li>Changing your mind after someone reacts badly.</li>
                <li>Thinking about whether people are upset with you afterwards.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Caring about someone is not the same as keeping them happy">
              <p>
                You can care about another person and still make a choice they
                do not like.
              </p>

              <p className="mt-4">
                Their disappointment may be real, but it does not always mean
                you have treated them badly or made the wrong decision.
              </p>

              <p className="mt-4">
                It can help to notice when you start taking responsibility for
                changing how someone else feels.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What am I worried will happen if this person is disappointed?
                </Question>

                <Question>
                  Would I make the same choice if I knew they would understand?
                </Question>

                <Question>
                  Am I changing what I want because of their reaction?
                </Question>

                <Question>
                  Do I often feel responsible for making sure other people are
                  happy with me?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice when their reaction changes your answer">
              <p>
                You may feel clear about a decision until someone looks upset,
                disagrees with you or asks you to reconsider.
              </p>

              <p className="mt-4">
                In that moment, it can become harder to remember why your
                original choice made sense.
              </p>

              <p className="mt-4">
                It may help to notice whether new information has actually
                changed your mind, or whether the other person&apos;s reaction
                has made you feel uncomfortable.
              </p>
            </ContentSection>

            <ContentSection title="Look for the pattern across different situations">
              <p>
                Worrying about disappointing someone once may simply mean the
                situation matters to you.
              </p>

              <p className="mt-4">
                But if you often put your needs aside, change your answer or
                feel guilty when someone is unhappy with you, you may start to
                notice the same response appearing again.
              </p>

              <p className="mt-4">
                Looking across different moments can help you see when this
                happens most often and which relationships or situations make
                it harder to stay with your own choice.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/guilty-saying-no"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel guilty saying no? →
                </Link>

                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
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
              Notice whose reaction starts shaping your choice.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday moments like
              these. As your Reflections build, it can help you notice whether
              worries about disappointing people keep appearing across
              different situations.
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