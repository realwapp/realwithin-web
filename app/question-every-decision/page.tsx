import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Question Every Decision I Make? | RealWithin",
  description:
    "Understand why you may question your decisions again and again, what can bring the doubt back, and how to notice the pattern more clearly.",
};

export default function QuestionEveryDecisionPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I question every decision I make?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You make a choice, but instead of moving on, your mind starts
              checking it again.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Was it really the right decision? Did you miss something? Would
              the other option have been better?
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes the doubt is not a sign that the choice was wrong. It
              may be a sign that feeling uncertain is difficult for you.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Why can doubt return after a decision?">
              <p>
                Making a decision does not always create a feeling of certainty.
              </p>

              <p className="mt-4">
                You may still be aware of what you are giving up, what could go
                wrong or what another choice might have offered.
              </p>

              <p className="mt-4">
                That can make it tempting to keep checking the decision even
                when you already had reasonable reasons for making it.
              </p>
            </ContentSection>

            <ContentSection title="You may be trying to avoid making the wrong choice">
              <p>
                It makes sense to want to avoid mistakes, especially when a
                decision feels important.
              </p>

              <p className="mt-4">
                But some choices do not come with a clear answer. You may need
                to decide without knowing exactly what will happen next.
              </p>

              <p className="mt-4">
                If you feel that there must be one perfect choice, every small
                doubt can start to feel like a reason to reconsider.
              </p>
            </ContentSection>

            <ContentSection title="More thinking does not always bring more clarity">
              <p>
                Thinking carefully before a decision can be useful.
              </p>

              <p className="mt-4">
                But after a certain point, you may notice that you are going
                over the same information without finding anything new.
              </p>

              <p className="mt-4">
                You may compare the options again, ask another person or search
                for one more reason to feel sure.
              </p>

              <p className="mt-4">
                If the same questions keep returning, the problem may no longer
                be missing information.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What made this choice feel reasonable when I first made it?
                </Question>

                <Question>
                  Have I learned anything new, or am I thinking about the same
                  information again?
                </Question>

                <Question>
                  Am I trying to make a better decision, or trying to feel
                  completely certain?
                </Question>

                <Question>
                  Do I question my choices more after someone else gives their
                  opinion?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice how other people's reactions affect your confidence">
              <p>
                You may feel comfortable with a decision until someone
                disagrees, looks disappointed or asks why you chose it.
              </p>

              <p className="mt-4">
                Their reaction may make you wonder whether you missed
                something.
              </p>

              <p className="mt-4">
                Sometimes their view gives you useful new information. Other
                times, it simply makes the choice feel less comfortable.
              </p>

              <p className="mt-4">
                Noticing the difference can help you decide whether there is
                really something new to consider.
              </p>
            </ContentSection>

            <ContentSection title="Try to judge the decision by what you knew at the time">
              <p>
                It is easy to look back and believe you should have known what
                would happen.
              </p>

              <p className="mt-4">
                But decisions are made before you know the outcome.
              </p>

              <p className="mt-4">
                A choice can have a disappointing result and still have been a
                reasonable choice with the information you had.
              </p>

              <p className="mt-4">
                Looking at how you made the decision can sometimes be more
                useful than judging it only by what happened afterwards.
              </p>
            </ContentSection>

            <ContentSection title="Look for the same response across different choices">
              <p>
                Questioning one difficult decision does not necessarily mean
                you have a wider pattern.
              </p>

              <p className="mt-4">
                But if you often decide, doubt, check, ask for reassurance and
                then reconsider, that repeated response may be worth noticing.
              </p>

              <p className="mt-4">
                Looking across several decisions can help you see what tends to
                bring the doubt back and when it becomes hardest to trust your
                own judgement.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>

                <Link
                  href="/trust-your-decisions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to trust your own decisions →
                </Link>

                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
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

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what brings the doubt back.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday decisions and
              the thoughts that follow them. As your Reflections build across
              different days, it can help you notice whether the same kind of
              doubt keeps returning.
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