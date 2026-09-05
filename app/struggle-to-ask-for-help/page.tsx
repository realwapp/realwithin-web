import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Struggle to Ask for Help? | RealWithin",
  description:
    "Understand why asking for help can feel difficult, what may stop you from reaching out, and how to notice when the same response keeps returning.",
};

export default function StruggleToAskForHelpPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I struggle to ask for help?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may be happy to help other people but find it much harder to
              ask for support yourself.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You might tell yourself you should manage alone, worry about
              bothering someone or wait until things become much harder before
              saying anything.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice what asking for help seems to mean to you,
              and what makes doing everything alone feel easier.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="You may be used to handling things yourself">
              <p>
                Doing things independently can feel familiar and reliable.
              </p>

              <p className="mt-4">
                You know what needs to be done, you do not need to explain the
                situation and you do not have to depend on someone else being
                available.
              </p>

              <p className="mt-4">
                The difficulty may come when independence starts making it hard
                to ask for support even when it would genuinely help.
              </p>
            </ContentSection>

            <ContentSection title="Notice what worries you about asking">
              <p>
                Different worries can sit underneath the same hesitation.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>You may worry about being a burden.</li>
                <li>You may think you should be able to manage alone.</li>
                <li>You may not want to owe someone anything.</li>
                <li>You may worry they will say no.</li>
                <li>You may find it difficult to explain what you need.</li>
                <li>You may prefer to stay in control of how something is done.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Asking for help can make you feel more visible">
              <p>
                Asking someone for support often means showing them that
                something is difficult, uncertain or more than you can manage
                comfortably right now.
              </p>

              <p className="mt-4">
                That can feel different from being the person who usually has
                things under control.
              </p>

              <p className="mt-4">
                You may notice that the request itself is simple, but being seen
                as needing something feels harder.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What do I think asking for help says about me?
                </Question>

                <Question>
                  Would I judge someone else for asking me for the same support?
                </Question>

                <Question>
                  Am I worried about their answer, or about having to ask at
                  all?
                </Question>

                <Question>
                  How long do I usually wait before telling someone I need help?
                </Question>

                <Question>
                  Are there people I find easier to ask than others?
                </Question>
              </div>
            </section>

            <ContentSection title="You may be trying not to inconvenience anyone">
              <p>
                Sometimes you may decide that your need is not important enough
                to interrupt someone else.
              </p>

              <p className="mt-4">
                You may imagine they are too busy, already dealing with enough
                or likely to feel pressured by your request.
              </p>

              <p className="mt-4">
                Those things may sometimes be true. But deciding for someone
                before asking means they never get the chance to tell you what
                they can or cannot offer.
              </p>
            </ContentSection>

            <ContentSection title="A request is different from an expectation">
              <p>
                Asking for help does not mean another person has to say yes.
              </p>

              <p className="mt-4">
                A clear request gives them information about what you need and
                gives them space to decide whether they can help.
              </p>

              <p className="mt-4">
                Remembering that can sometimes make asking feel less like you
                are placing a responsibility on them.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether you wait until you are overwhelmed">
              <p>
                If asking feels difficult, you may keep managing alone until
                the situation becomes much harder.
              </p>

              <p className="mt-4">
                By the time you finally reach out, you may already be tired,
                frustrated or under more pressure.
              </p>

              <p className="mt-4">
                It can be useful to notice whether there was an earlier moment
                when a smaller request might have been enough.
              </p>
            </ContentSection>

            <ContentSection title="Look for what happens across different situations">
              <p>
                Choosing to manage something yourself once does not necessarily
                mean you struggle to ask for help.
              </p>

              <p className="mt-4">
                But if you repeatedly avoid asking, take on more than you want
                or wait until things become difficult, there may be a pattern
                worth noticing.
              </p>

              <p className="mt-4">
                Looking across several moments can help you see what tends to
                stop you from reaching out and whether that response begins to
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
                  href="/people-pleasing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I people-please? →
                </Link>

                <Link
                  href="/guilty-putting-myself-first"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel guilty when I put myself first? →
                </Link>

                <Link
                  href="/hard-on-myself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why am I so hard on myself? →
                </Link>

                <Link
                  href="/know-your-boundaries"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to know what your boundaries are →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what makes asking for support difficult.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday needs,
              choices and reactions. As your Reflections build across
              different days, it can help you notice whether the same
              hesitation keeps returning and what tends to happen around it.
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