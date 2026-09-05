import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Avoid Difficult Conversations? | RealWithin",
  description:
    "Understand why difficult conversations can feel easier to avoid, what you may be trying to protect, and how to notice when avoidance keeps returning.",
};

export default function AvoidDifficultConversationsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I avoid difficult conversations?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              You know there is something you want to say, but you keep waiting
              for a better moment.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may worry about conflict, hurting someone&apos;s feelings or
              making the situation worse.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Avoiding the conversation can bring relief for a while. It can
              also leave the same issue waiting for you later.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Avoiding the conversation may feel easier right now">
              <p>
                Difficult conversations often involve uncertainty. You cannot
                fully control what the other person will say or how they will
                react.
              </p>

              <p className="mt-4">
                Waiting can remove that uncertainty for the moment. You do not
                need to deal with disagreement, explain yourself or hear an
                answer you may not like.
              </p>

              <p className="mt-4">
                That short-term relief can make avoiding the conversation feel
                like the easier choice.
              </p>
            </ContentSection>

            <ContentSection title="Notice what you are worried might happen">
              <p>
                It can help to be specific about what makes the conversation
                difficult.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>You may worry the other person will become upset.</li>
                <li>You may not want to disappoint them.</li>
                <li>You may be afraid you will explain yourself badly.</li>
                <li>You may worry the relationship will feel different afterwards.</li>
                <li>You may not know exactly what you want to say yet.</li>
                <li>You may hope the problem will disappear without a conversation.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Waiting can sometimes be useful">
              <p>
                Not every difficult conversation needs to happen immediately.
              </p>

              <p className="mt-4">
                You may need time to calm down, understand what you think or
                decide what you actually want.
              </p>

              <p className="mt-4">
                The difference may be whether you are giving yourself useful
                time or repeatedly delaying something you still know you need
                to address.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What am I most worried will happen if I bring this up?
                </Question>

                <Question>
                  Is waiting helping me become clearer, or am I hoping the issue
                  will disappear?
                </Question>

                <Question>
                  What is the main thing I actually want the other person to
                  understand?
                </Question>

                <Question>
                  Do I find difficult conversations harder with certain people?
                </Question>

                <Question>
                  How do I usually feel after I avoid saying what I wanted to
                  say?
                </Question>
              </div>
            </section>

            <ContentSection title="You do not need the perfect words">
              <p>
                Sometimes a conversation stays delayed because you are trying
                to find exactly the right way to say everything.
              </p>

              <p className="mt-4">
                Being thoughtful can help, but you may not be able to remove
                every chance of misunderstanding or discomfort.
              </p>

              <p className="mt-4">
                A simple and clear explanation may be enough to begin.
              </p>
            </ContentSection>

            <ContentSection title="Disagreement does not always mean the conversation went badly">
              <p>
                A difficult conversation may not end with both people agreeing.
              </p>

              <p className="mt-4">
                The other person may still feel disappointed or see the
                situation differently.
              </p>

              <p className="mt-4">
                Sometimes the useful part is simply that something important
                has been said clearly instead of remaining unspoken.
              </p>
            </ContentSection>

            <ContentSection title="Notice what happens when you stay silent">
              <p>
                Avoiding a conversation can change how you feel about the
                situation too.
              </p>

              <p className="mt-4">
                You may keep replaying it, feel frustrated when the same thing
                happens again or start expecting the other person to notice
                something you have not told them.
              </p>

              <p className="mt-4">
                Looking at what happens after you stay silent can help you
                understand whether avoidance is really making things easier.
              </p>
            </ContentSection>

            <ContentSection title="Look for whether the same pattern keeps returning">
              <p>
                Choosing not to have one difficult conversation does not mean
                you avoid conflict in general.
              </p>

              <p className="mt-4">
                But if you often leave important things unsaid because you are
                worried about another person&apos;s reaction, that repeated
                response may be worth noticing.
              </p>

              <p className="mt-4">
                Across several situations, you may begin to see what makes it
                hardest for you to say what you need.
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
                  href="/overthinking-after-conversations"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink after conversations? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice what you keep leaving unsaid.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday conversations,
              feelings and choices. As your Reflections build across different
              days, it can help you notice whether similar worries or reactions
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