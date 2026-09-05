import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I People-Please? | RealWithin",
  description:
    "Understand why you may put other people first, avoid disappointing them or change your own choices to keep things calm.",
};

export default function PeoplePleasingPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I people-please?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may care a lot about being helpful, easy to be around or
              someone other people can rely on.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              But sometimes this can make it harder to notice what you want,
              especially when your answer might disappoint someone.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              People-pleasing can be worth noticing when keeping someone else
              comfortable often means putting your own needs aside.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What people-pleasing can look like">
              <p>
                People-pleasing does not always look like agreeing with
                everything someone says.
              </p>

              <p className="mt-4">
                It can appear in small everyday choices.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Saying yes before thinking about whether you want to.</li>
                <li>Changing plans so things are easier for someone else.</li>
                <li>Avoiding a difficult conversation to keep things calm.</li>
                <li>Feeling guilty when someone is disappointed with you.</li>
                <li>Explaining your choices more than you need to.</li>
                <li>Thinking about what other people need before asking what you need.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Why can pleasing other people feel important?">
              <p>
                Caring about other people is normal. Being thoughtful and
                helpful can be an important part of your relationships.
              </p>

              <p className="mt-4">
                The difficulty may come when another person&apos;s reaction
                starts to matter so much that it becomes hard to stay with your
                own choice.
              </p>

              <p className="mt-4">
                You may want to avoid conflict, stop someone feeling
                disappointed or make sure they still see you in a positive
                way.
              </p>
            </ContentSection>

            <ContentSection title="Sometimes saying yes feels easier in the moment">
              <p>
                Saying yes can quickly remove an uncomfortable moment.
              </p>

              <p className="mt-4">
                The other person is happy, there is no disagreement and you do
                not need to explain yourself.
              </p>

              <p className="mt-4">
                But later, you may feel tired, frustrated or wish you had given
                yourself more time before answering.
              </p>

              <p className="mt-4">
                If that happens often, the useful part may be noticing what
                makes it difficult to pause before saying yes.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What would I choose if I was not worried about disappointing
                  anyone?
                </Question>

                <Question>
                  Did I say yes because I wanted to, or because saying no felt
                  uncomfortable?
                </Question>

                <Question>
                  What do I imagine will happen if someone is unhappy with my
                  answer?
                </Question>

                <Question>
                  Do I put my own needs aside more often with certain people?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice what happens when your needs are different">
              <p>
                People-pleasing can be easier to spot when what you want is
                different from what someone else wants.
              </p>

              <p className="mt-4">
                You may notice that your first thought is about how they will
                react rather than whether the choice works for you.
              </p>

              <p className="mt-4">
                That does not mean you should ignore other people. It may simply
                help to notice whether your own needs are part of the decision
                too.
              </p>
            </ContentSection>

            <ContentSection title="Being kind does not always mean agreeing">
              <p>
                You can care about someone and still have a different opinion,
                need or limit.
              </p>

              <p className="mt-4">
                Sometimes being honest about what works for you may feel less
                comfortable than agreeing straight away.
              </p>

              <p className="mt-4">
                The discomfort does not automatically mean you have done
                something wrong.
              </p>
            </ContentSection>

            <ContentSection title="Look for whether the same pattern keeps returning">
              <p>
                Helping someone or changing your plans once does not mean you
                are people-pleasing.
              </p>

              <p className="mt-4">
                But if you often say yes when you want to say no, worry about
                disappointing people or feel responsible for keeping everyone
                happy, it may be useful to look across several situations.
              </p>

              <p className="mt-4">
                You may begin to see when this response appears most often and
                what makes it harder to include your own needs in the decision.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/disappointing-people"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I worry about disappointing people? →
                </Link>

                <Link
                  href="/guilty-saying-no"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel guilty saying no? →
                </Link>

                <Link
                  href="/over-explaining"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I over-explain myself? →
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
              Notice when your own answer starts getting lost.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday moments like
              these. As your Reflections build across different days, it can
              help you notice whether the same worries, choices or reactions
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