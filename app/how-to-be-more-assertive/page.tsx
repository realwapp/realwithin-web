import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Be More Assertive | RealWithin",
  description:
    "Learn how to be more assertive by expressing what you think, want and need clearly while still respecting other people.",
};

export default function HowToBeMoreAssertivePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to be more assertive
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Being assertive means expressing what you think, want or need
              clearly without ignoring the other person.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can feel difficult when you are used to keeping things calm,
              avoiding disappointment or changing your answer when someone
              disagrees.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Becoming more assertive can begin with noticing the moments when
              you already know what you want to say but find it hard to say it.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Assertive does not mean aggressive">
              <p>
                Being assertive is not about forcing someone to agree with you.
              </p>

              <p className="mt-4">
                You can speak clearly about your own view while still listening
                to theirs.
              </p>

              <p className="mt-4">
                The aim is not to win the conversation. It is to make sure your
                own needs and opinions are included in it.
              </p>
            </ContentSection>

            <ContentSection title="Start by noticing your first answer">
              <p>
                Sometimes you already know what you want before you begin
                thinking about how another person may react.
              </p>

              <p className="mt-4">
                You may want to say no, ask for more time, disagree with
                something or explain what would work better for you.
              </p>

              <p className="mt-4">
                Try noticing that first answer before deciding whether you need
                to change it.
              </p>
            </ContentSection>

            <ContentSection title="Keep the message simple">
              <p>
                Assertiveness does not require a long explanation.
              </p>

              <p className="mt-4">
                A clear sentence can often be easier for both people to
                understand.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>“I can&apos;t do that today.”</li>
                <li>“I need some time to think about it.”</li>
                <li>“I see it differently.”</li>
                <li>“That does not work for me.”</li>
                <li>“I would prefer something else.”</li>
                <li>“I need you to ask me before making that plan.”</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What did I want to say before I worried about their reaction?
                </Question>

                <Question>
                  Am I explaining because more information is needed, or
                  because I want them to approve?
                </Question>

                <Question>
                  What am I worried will happen if I speak more clearly?
                </Question>

                <Question>
                  Do I become less direct with certain people?
                </Question>

                <Question>
                  What would a simple and respectful answer sound like?
                </Question>
              </div>
            </section>

            <ContentSection title="Give yourself time before answering">
              <p>
                Assertiveness can be harder when you feel pressured to answer
                immediately.
              </p>

              <p className="mt-4">
                You may agree first and only realise later that the choice did
                not work for you.
              </p>

              <p className="mt-4">
                Asking for time can give you space to notice what you actually
                think before responding.
              </p>
            </ContentSection>

            <ContentSection title="Discomfort does not always mean you were too direct">
              <p>
                Saying what you need can feel uncomfortable, especially if you
                are not used to doing it.
              </p>

              <p className="mt-4">
                The other person may also feel disappointed or disagree with
                you.
              </p>

              <p className="mt-4">
                That does not automatically mean you communicated badly. Two
                people can have different needs without either person being
                wrong.
              </p>
            </ContentSection>

            <ContentSection title="Notice when you soften your message until it disappears">
              <p>
                Trying to be kind can sometimes make your real point difficult
                to hear.
              </p>

              <p className="mt-4">
                You may add so many apologies, explanations or alternatives
                that the other person is no longer sure what you actually want.
              </p>

              <p className="mt-4">
                You can be warm and still be clear.
              </p>
            </ContentSection>

            <ContentSection title="You do not need to control the other person's reaction">
              <p>
                You can choose how you communicate, but you cannot fully choose
                how another person responds.
              </p>

              <p className="mt-4">
                They may need time, disagree or feel disappointed.
              </p>

              <p className="mt-4">
                It can help to judge your communication by whether you were
                clear and respectful, rather than whether the other person was
                immediately happy with your answer.
              </p>
            </ContentSection>

            <ContentSection title="Look for the situations where speaking up is hardest">
              <p>
                You may be assertive in some parts of your life and find it
                much harder in others.
              </p>

              <p className="mt-4">
                Perhaps it becomes difficult with family, at work, in close
                relationships or whenever someone seems disappointed.
              </p>

              <p className="mt-4">
                Looking across several moments can help you see what tends to
                make your own voice quieter and whether that response begins to
                change.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/struggle-to-set-boundaries"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to set boundaries? →
                </Link>

                <Link
                  href="/over-explaining"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I over-explain myself? →
                </Link>

                <Link
                  href="/avoid-difficult-conversations"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I avoid difficult conversations? →
                </Link>

                <Link
                  href="/people-pleasing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I people-please? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice the moments when your first answer becomes harder to say.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday conversations,
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