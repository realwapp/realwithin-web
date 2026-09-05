import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Feel Like My Needs Are Too Much? | RealWithin",
  description:
    "Understand why you may feel that your needs are too much, how that belief can affect what you say or ask for, and what patterns may be worth noticing.",
};

export default function NeedsAreTooMuchPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I feel like my needs are too much?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You may know what you need but hesitate to say it because it feels
              demanding, inconvenient or unfair to the other person.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You might ask for less than you really want, apologise for having
              a need at all or decide it is easier to stay quiet.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice whether the need itself is unreasonable, or
              whether you are judging it before anyone has responded.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Having a need does not automatically create a demand">
              <p>
                A need and a demand are not the same thing.
              </p>

              <p className="mt-4">
                You may need more time, clearer communication, rest, help,
                affection, space or more notice before plans change.
              </p>

              <p className="mt-4">
                Recognising that need does not mean another person must meet it
                exactly as you want.
              </p>

              <p className="mt-4">
                It simply gives you something real to talk about or respond to.
              </p>
            </ContentSection>

            <ContentSection title="Notice how quickly you judge the need">
              <p>
                Sometimes the judgement arrives almost immediately.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>“I&apos;m asking for too much.”</li>
                <li>“I should be able to deal with this myself.”</li>
                <li>“They already do enough for me.”</li>
                <li>“I don&apos;t want to be difficult.”</li>
                <li>“It&apos;s probably not important enough to mention.”</li>
                <li>“I should just be grateful.”</li>
              </ul>

              <p className="mt-4">
                Those thoughts may sometimes contain useful perspective, but
                they can also stop you from looking at the need properly.
              </p>
            </ContentSection>

            <ContentSection title="You may be trying to avoid making someone uncomfortable">
              <p>
                Saying what you need can create a moment where another person
                has to respond.
              </p>

              <p className="mt-4">
                They might agree, say no, ask questions or feel disappointed.
              </p>

              <p className="mt-4">
                If you are very focused on avoiding tension, it can feel easier
                to decide your need is too much before the conversation even
                begins.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What do I actually need in this situation?
                </Question>

                <Question>
                  What makes me think this need is too much?
                </Question>

                <Question>
                  Has anyone said it is unreasonable, or am I assuming they
                  will?
                </Question>

                <Question>
                  Would I think the same need was excessive if someone I cared
                  about asked for it?
                </Question>

                <Question>
                  What usually happens when I decide not to say what I need?
                </Question>
              </div>
            </section>

            <ContentSection title="You can ask without assuming the answer">
              <p>
                Asking for something does not guarantee that the other person
                can or will agree.
              </p>

              <p className="mt-4">
                But you can still communicate the need clearly and let them
                respond.
              </p>

              <p className="mt-4">
                “I need more notice before we make plans” leaves room for a
                conversation.
              </p>

              <p className="mt-4">
                Deciding in advance that the need is too much removes that
                conversation before it happens.
              </p>
            </ContentSection>

            <ContentSection title="Compromise works better when both needs are visible">
              <p>
                Sometimes another person cannot give you exactly what you want.
              </p>

              <p className="mt-4">
                That does not necessarily mean the need was wrong to express.
              </p>

              <p className="mt-4">
                A clearer conversation may reveal that both people have
                different needs that need to be considered.
              </p>

              <p className="mt-4">
                Compromise is easier when neither person has to pretend their
                own needs do not exist.
              </p>
            </ContentSection>

            <ContentSection title="Notice whether you reduce your need before saying it">
              <p>
                You may ask for less than you actually want because it feels
                safer.
              </p>

              <p className="mt-4">
                Perhaps you say “It&apos;s fine if you can&apos;t” before the
                other person has answered, or soften the request until it is no
                longer clear.
              </p>

              <p className="mt-4">
                Sometimes that flexibility is genuine. Other times, it may be a
                way of protecting yourself from hearing no.
              </p>
            </ContentSection>

            <ContentSection title="One person's limit does not define whether your need is valid">
              <p>
                Someone may not be able to meet a need you express.
              </p>

              <p className="mt-4">
                Their limit can be real too.
              </p>

              <p className="mt-4">
                But “I cannot give that right now” is different from “you should
                not need that.”
              </p>

              <p className="mt-4">
                Keeping those two ideas separate can make the situation easier
                to understand.
              </p>
            </ContentSection>

            <ContentSection title="Look for needs that keep being pushed aside">
              <p>
                One situation may simply require compromise.
              </p>

              <p className="mt-4">
                But if you repeatedly minimise the same need and then feel
                frustrated, distant or drained later, it may be useful to look
                across those moments.
              </p>

              <p className="mt-4">
                Repetition can show you whether something important is
                consistently receiving less attention than it needs.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/recognise-what-you-need"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to recognise what you need →
                </Link>

                <Link
                  href="/guilty-putting-myself-first"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I feel guilty when I put myself first? →
                </Link>

                <Link
                  href="/how-to-be-more-assertive"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to be more assertive →
                </Link>

                <Link
                  href="/struggle-to-ask-for-help"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to ask for help? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice when you make your own needs smaller before anyone asks you to.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday needs,
              choices and reactions. As your Reflections build across different
              days, it can help you notice possible Patterns and see whether the
              same needs keep being pushed aside.
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