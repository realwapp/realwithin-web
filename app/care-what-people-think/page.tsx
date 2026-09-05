import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Care So Much What People Think? | RealWithin",
  description:
    "Understand why other people's opinions can affect you so much, what situations bring this worry up, and how to notice when it starts shaping your choices.",
};

export default function CareWhatPeopleThinkPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I care so much what people think?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Other people&apos;s opinions can matter, especially when you care
              about the relationship or what you are doing.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              But sometimes wondering what someone might think can begin to
              affect your choices before they have even said anything.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice when another person&apos;s possible reaction
              starts becoming more important than your own view.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Caring what people think is not always a problem">
              <p>
                Other people can give you useful feedback. Their opinions may
                help you notice something you missed or understand how your
                actions affect them.
              </p>

              <p className="mt-4">
                The difficulty may come when you start changing yourself mainly
                to avoid being judged, disliked or misunderstood.
              </p>

              <p className="mt-4">
                The question is not whether other people&apos;s views should
                matter at all. It is how much they are shaping your choices.
              </p>
            </ContentSection>

            <ContentSection title="Notice when the worry becomes stronger">
              <p>
                You may care more about other people&apos;s opinions in some
                situations than others.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>When you are making an important decision.</li>
                <li>When someone disagrees with you.</li>
                <li>When you are trying something new.</li>
                <li>When you need to say no.</li>
                <li>When you feel different from the people around you.</li>
                <li>When someone seems disappointed or distant.</li>
              </ul>

              <p className="mt-4">
                Looking at when the worry appears can be more useful than
                simply telling yourself to stop caring.
              </p>
            </ContentSection>

            <ContentSection title="Sometimes you are reacting to what you imagine they think">
              <p>
                People do not always tell you what they think.
              </p>

              <p className="mt-4">
                You may notice a look, a short reply or a change in tone and
                begin filling in the rest yourself.
              </p>

              <p className="mt-4">
                Your interpretation may be right, but it may also be only one
                possible explanation.
              </p>

              <p className="mt-4">
                Separating what you know from what you are assuming can help
                you see the situation more clearly.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What do I think this person might think about me?
                </Question>

                <Question>
                  Have they actually said that, or am I imagining their view?
                </Question>

                <Question>
                  What would I choose if I was not worried about being judged?
                </Question>

                <Question>
                  Whose opinion matters most to me in this situation, and why?
                </Question>

                <Question>
                  Do I change my choices more around certain people?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice when approval changes your confidence">
              <p>
                You may feel sure about something until another person reacts
                differently from how you hoped.
              </p>

              <p className="mt-4">
                Their disagreement may make you question your decision, explain
                yourself more or look for reassurance from someone else.
              </p>

              <p className="mt-4">
                Sometimes their response gives you useful new information.
                Other times, it simply makes your own choice feel less
                comfortable.
              </p>
            </ContentSection>

            <ContentSection title="Different opinions do not always need to be resolved">
              <p>
                Two people can understand the same situation differently.
              </p>

              <p className="mt-4">
                Someone may not agree with your decision, your priorities or
                the way you want to live.
              </p>

              <p className="mt-4">
                Their view can matter to you without becoming the final answer
                about what is right for you.
              </p>
            </ContentSection>

            <ContentSection title="Ask what you think before asking what they think">
              <p>
                If you often look outside yourself first, your own view can
                become harder to hear.
              </p>

              <p className="mt-4">
                Before asking someone else what they would do, try noticing
                your first answer.
              </p>

              <p className="mt-4">
                You can still ask for advice afterwards. The difference is that
                you have something of your own to compare that advice with.
              </p>
            </ContentSection>

            <ContentSection title="Look for the pattern across different situations">
              <p>
                Caring about someone&apos;s opinion in one important moment
                does not necessarily mean there is a wider pattern.
              </p>

              <p className="mt-4">
                But if worry about judgement often changes what you say, choose
                or share, it may be useful to look across several moments.
              </p>

              <p className="mt-4">
                You may begin to see whose opinions affect you most, what you
                are worried they will think and when your own view becomes
                harder to trust.
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
                  href="/take-things-personally"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I take things personally? →
                </Link>

                <Link
                  href="/disappointing-people"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I worry about disappointing people? →
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

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice when someone else&apos;s opinion starts changing yours.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday choices,
              doubts and reactions. As your Reflections build across different
              days, it can help you notice whether the same worries keep
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