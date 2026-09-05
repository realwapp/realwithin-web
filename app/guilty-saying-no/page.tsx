import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Feel Guilty Saying No? | RealWithin",
  description:
    "Understand why saying no can leave you feeling guilty, especially when you care about other people, and what may help you notice the pattern more clearly.",
};

export default function GuiltySayingNoPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I feel guilty saying no?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may know that you do not have the time, energy or desire to
              say yes, but still feel bad when you say no.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You might worry that the other person is disappointed, think you
              should explain yourself more or start wondering if you were
              unfair.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Feeling guilty does not always mean you made the wrong choice.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Why can saying no feel so uncomfortable?">
              <p>
                Saying no can feel difficult when you care about how your
                choice affects someone else.
              </p>

              <p className="mt-4">
                You may want to be helpful. You may dislike conflict. You may
                also worry that saying no will make someone think differently
                about you.
              </p>

              <p className="mt-4">
                In those moments, the discomfort can make saying yes feel
                easier, even when yes is not what you really want.
              </p>
            </ContentSection>

            <ContentSection title="What guilt after saying no can look like">
              <p>
                The guilt may begin after the conversation rather than during
                it.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Thinking you should have agreed after all.</li>
                <li>Giving a long explanation for why you cannot do it.</li>
                <li>Worrying that the other person is upset with you.</li>
                <li>Offering something else because saying no feels too harsh.</li>
                <li>Changing your answer when someone seems disappointed.</li>
                <li>Thinking about the conversation long after it has ended.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Your feelings and your decision are not the same thing">
              <p>
                You can feel uncomfortable about a decision and still believe
                it was reasonable.
              </p>

              <p className="mt-4">
                For example, you may feel guilty because someone wanted your
                help. That feeling can be real without meaning that you had to
                say yes.
              </p>

              <p className="mt-4">
                It can help to separate two questions: “How do I feel about
                saying no?” and “Was saying no reasonable for me?”
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  Did I actually do something unfair, or do I simply feel
                  uncomfortable saying no?
                </Question>

                <Question>
                  What am I worried the other person will think or feel?
                </Question>

                <Question>
                  Would I expect someone else to say yes in the same situation?
                </Question>

                <Question>
                  Do I often change my answer when someone seems disappointed?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice what happens when someone is disappointed">
              <p>
                Sometimes the hardest part of saying no is seeing that another
                person is unhappy with your answer.
              </p>

              <p className="mt-4">
                Their disappointment may make you want to explain more, change
                your mind or make the situation better for them.
              </p>

              <p className="mt-4">
                It can be useful to notice whether their reaction changes how
                you feel about a choice that made sense to you before.
              </p>
            </ContentSection>

            <ContentSection title="Look for whether it keeps happening">
              <p>
                Feeling guilty once after saying no may simply be part of a
                difficult situation.
              </p>

              <p className="mt-4">
                But if you often agree to things you do not want, worry about
                disappointing people or feel responsible for how others react,
                you may start to see a repeated pattern.
              </p>

              <p className="mt-4">
                Noticing when this happens can help you understand which
                situations make saying no especially difficult for you.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/repeating-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I keep repeating the same patterns? →
                </Link>

                <Link
                  href="/second-guessing"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I second-guess myself? →
                </Link>

                <Link
                  href="/replaying-conversations"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I replay conversations in my head? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what makes saying no difficult for you.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday moments like
              these. As your Reflections build across different days, it can
              help you notice whether the same worries, reactions or choices
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