import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Feel Responsible for Other People's Feelings? | RealWithin",
  description:
    "Understand why you may feel responsible for other people's emotions, and how to notice when their reactions begin to shape your choices.",
};

export default function ResponsibleForOthersFeelingsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I feel responsible for other people&apos;s feelings?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Someone is disappointed, upset or uncomfortable, and you quickly
              start wondering what you should do to make things better.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may change your plans, explain yourself again or put your own
              needs aside because their reaction feels difficult to leave
              unresolved.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Caring about someone&apos;s feelings is different from believing
              you must always change them.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Caring and responsibility are not the same thing">
              <p>
                It is natural to care when someone you value is upset.
              </p>

              <p className="mt-4">
                You may want to understand what happened, listen to them or
                think about whether you have done something that needs
                addressing.
              </p>

              <p className="mt-4">
                But another person can also feel disappointed, frustrated or
                sad even when you have not done anything wrong.
              </p>
            </ContentSection>

            <ContentSection title="Notice what happens when someone is unhappy with your choice">
              <p>
                This pattern can become clearer when another person wants
                something different from you.
              </p>

              <p className="mt-4">
                You may feel comfortable with your choice until you see their
                reaction.
              </p>

              <p className="mt-4">
                Then you may begin questioning yourself, offering more reasons
                or looking for a way to make their disappointment disappear.
              </p>
            </ContentSection>

            <ContentSection title="You may start trying to manage the situation">
              <p>
                Feeling responsible for someone else&apos;s emotions can affect
                what you do next.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Changing your answer after someone looks disappointed.</li>
                <li>Apologising even when you are not sure you did something wrong.</li>
                <li>Explaining yourself until the other person seems satisfied.</li>
                <li>Avoiding a topic because you do not want them to become upset.</li>
                <li>Putting their comfort before something you need.</li>
                <li>Feeling uneasy until you know they are okay again.</li>
              </ul>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  Did I actually do something I need to repair, or am I mainly
                  uncomfortable because they are upset?
                </Question>

                <Question>
                  What was my choice before I saw their reaction?
                </Question>

                <Question>
                  Do I feel that I need everyone to be okay before I can relax?
                </Question>

                <Question>
                  Am I changing something because I want to, or because their
                  disappointment feels difficult?
                </Question>

                <Question>
                  Does this happen more often with certain people?
                </Question>
              </div>
            </section>

            <ContentSection title="Someone can be disappointed without you needing to fix it">
              <p>
                Sometimes two people simply want different things.
              </p>

              <p className="mt-4">
                You may decide not to go somewhere, not to help with something
                or not to agree with a request. The other person may genuinely
                feel disappointed.
              </p>

              <p className="mt-4">
                Their feeling can be real without automatically meaning your
                decision needs to change.
              </p>
            </ContentSection>

            <ContentSection title="Check whether something really needs repairing">
              <p>
                There are also times when another person&apos;s reaction points
                to something important.
              </p>

              <p className="mt-4">
                Maybe you spoke unfairly, forgot something important or made a
                choice that affected them in a way you had not considered.
              </p>

              <p className="mt-4">
                Taking responsibility can be useful when there is something
                specific to address.
              </p>

              <p className="mt-4">
                The difference is that you are responding to what happened, not
                automatically assuming that every difficult feeling is yours
                to remove.
              </p>
            </ContentSection>

            <ContentSection title="Look for whether the same response keeps returning">
              <p>
                Wanting to comfort someone once does not mean you take
                responsibility for everyone&apos;s feelings.
              </p>

              <p className="mt-4">
                But if other people&apos;s disappointment often makes you
                change your choices, apologise, over-explain or ignore what you
                need, there may be a repeated response worth noticing.
              </p>

              <p className="mt-4">
                Looking across several moments can help you see where caring
                for someone ends and taking responsibility for their reaction
                begins.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/people-pleasing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I people-please? →
                </Link>

                <Link
                  href="/disappointing-people"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I worry about disappointing people? →
                </Link>

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
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what changes when someone else is upset.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday reactions,
              choices and relationships. As your Reflections build across
              different days, it can help you notice whether similar responses
              keep returning.
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