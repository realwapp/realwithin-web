import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Feel Guilty When I Put Myself First? | RealWithin",
  description:
    "Understand why putting your own needs first can sometimes bring guilt, and how to notice when that feeling starts changing your choices.",
};

export default function GuiltyPuttingMyselfFirstPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I feel guilty when I put myself first?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You choose something you need, but instead of feeling relieved,
              you start wondering whether you have been selfish.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may think about who could be disappointed, what you could have
              done for someone else or whether you should change your choice.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice whether the guilt is pointing to something
              you need to reconsider, or simply making it uncomfortable to
              include yourself in the decision.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Putting yourself first can mean many things">
              <p>
                It does not always mean making a big decision or ignoring
                someone else.
              </p>

              <p className="mt-4">
                It can be something small: protecting your evening, asking for
                space, choosing your own plan or deciding that you do not have
                enough energy to help today.
              </p>

              <p className="mt-4">
                The guilt may appear simply because your needs are taking up
                more space than they usually do.
              </p>
            </ContentSection>

            <ContentSection title="Notice what the guilt says you should have done">
              <p>
                Guilt often comes with a message about what you believe you
                should have done instead.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>You should have helped.</li>
                <li>You should have agreed.</li>
                <li>You should have stayed longer.</li>
                <li>You should have made things easier for someone else.</li>
                <li>You should not have needed so much time or space.</li>
                <li>You should have chosen what made everyone else happy.</li>
              </ul>

              <p className="mt-4">
                Looking at that hidden expectation can help you understand why
                the choice feels uncomfortable.
              </p>
            </ContentSection>

            <ContentSection title="Guilt does not always mean you made the wrong choice">
              <p>
                Sometimes guilt is useful. It can make you think again about
                something you did and whether another person was treated
                unfairly.
              </p>

              <p className="mt-4">
                But guilt can also appear when you have simply done something
                that feels unfamiliar.
              </p>

              <p className="mt-4">
                If you are used to putting other people first, including your
                own needs may feel uncomfortable even when the choice was
                reasonable.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What did I need when I made this choice?
                </Question>

                <Question>
                  Did I treat someone unfairly, or am I uncomfortable because I
                  did not put them first?
                </Question>

                <Question>
                  What do I believe I should have done instead?
                </Question>

                <Question>
                  Would I think someone else was selfish for making the same
                  choice?
                </Question>

                <Question>
                  Do I feel more guilty about putting myself first with certain
                  people?
                </Question>
              </div>
            </section>

            <ContentSection title="You can care about other people and still include yourself">
              <p>
                A choice does not always have to be between caring about
                yourself and caring about someone else.
              </p>

              <p className="mt-4">
                You can understand that someone is disappointed and still need
                rest. You can want to help and still not have the time. You can
                care about a relationship and still make a choice for yourself.
              </p>

              <p className="mt-4">
                Your needs can be part of the decision without being the only
                thing that matters.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether guilt makes you undo your decision">
              <p>
                Sometimes the first choice feels clear until the guilt arrives.
              </p>

              <p className="mt-4">
                You may then change your plans, offer more than you wanted to or
                start explaining why your choice was necessary.
              </p>

              <p className="mt-4">
                It can help to notice whether anything important actually
                changed, or whether the feeling itself made you move away from
                your first answer.
              </p>
            </ContentSection>

            <ContentSection title="Ask whether your own needs regularly come last">
              <p>
                Compromise is part of everyday relationships, and sometimes
                another person&apos;s needs will reasonably come first.
              </p>

              <p className="mt-4">
                The wider picture may be more useful than one decision.
              </p>

              <p className="mt-4">
                If your needs repeatedly disappear whenever they conflict with
                someone else&apos;s, there may be a pattern worth noticing.
              </p>
            </ContentSection>

            <ContentSection title="Look at what happens across different situations">
              <p>
                Feeling guilty about one choice does not necessarily mean you
                struggle to put yourself first.
              </p>

              <p className="mt-4">
                But if choosing your own time, needs or priorities often brings
                guilt, over-explaining or a quick change of mind, the repeated
                response may tell you something useful.
              </p>

              <p className="mt-4">
                Looking across several moments can help you see when the guilt
                appears and what it tends to make you do next.
              </p>
            </ContentSection>

            {/* RELATED */}
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
                  href="/people-pleasing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I people-please? →
                </Link>

                <Link
                  href="/responsible-for-others-feelings"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel responsible for other people&apos;s feelings? →
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
              Notice what happens when your needs become part of the decision.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday choices,
              feelings and reactions. As your Reflections build across
              different days, it can help you notice whether the same guilt or
              responses keep returning.
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