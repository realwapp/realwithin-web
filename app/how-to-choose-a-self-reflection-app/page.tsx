import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose a Self-Reflection App | RealWithin",
  description:
    "Learn what to look for in a self-reflection app, from simple daily reflection to recognising patterns and understanding yourself over time.",
};

export default function ChooseSelfReflectionAppPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              How to choose a self-reflection app
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              A useful self-reflection app should do more than give you
              somewhere to write.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It should make reflection easy enough to return to regularly and
              help you notice things about yourself that may be difficult to
              see from one day alone.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              What matters most depends on what you want to understand.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with what you want from reflection">
              <p>
                Before choosing an app, it can help to think about why you want
                to reflect in the first place.
              </p>

              <p className="mt-4">
                You may want a simple space to put your thoughts somewhere. You
                may want to understand your feelings more clearly. Or you may
                be trying to notice repeated reactions, choices or emotional
                patterns.
              </p>

              <p className="mt-4">
                Those are different needs, so the most useful app for you is
                the one that supports what you are actually trying to
                understand.
              </p>
            </ContentSection>

            <ContentSection title="Look for something you can realistically keep using">
              <p>
                Reflection is usually more useful when it happens across
                different days rather than only once.
              </p>

              <p className="mt-4">
                That does not mean you need to write long journal entries every
                day.
              </p>

              <p className="mt-4">
                If an app feels like work, you may stop using it before you
                have enough reflections to notice anything meaningful.
              </p>

              <p className="mt-4">
                Look for a format that feels simple enough to use even when you
                are busy, tired or unsure what to write.
              </p>
            </ContentSection>

            <ContentSection title="Decide whether you want to record or understand">
              <p>
                Some tools are mainly designed to record what happened.
              </p>

              <p className="mt-4">
                That can be useful if you want a diary, a mood history or a
                place to save memories.
              </p>

              <p className="mt-4">
                But if your goal is self-understanding, you may want a tool
                that helps you look beyond individual entries.
              </p>

              <p className="mt-4">
                For example, you might want to notice whether certain feelings
                appear in similar situations, whether you respond to
                uncertainty in the same way, or whether something has started
                to change over time.
              </p>
            </ContentSection>

            <ContentSection title="Look for patterns across time">
              <p>
                A single difficult day does not necessarily tell you much about
                yourself.
              </p>

              <p className="mt-4">
                The same reaction appearing across several different
                situations may tell you more.
              </p>

              <p className="mt-4">
                If understanding patterns is important to you, look for an app
                that can help you return to earlier reflections and connect
                related moments rather than treating every entry as separate.
              </p>

              <p className="mt-4">
                This can make it easier to notice what repeats, what affects
                you strongly and what may slowly be becoming different.
              </p>
            </ContentSection>

            <ContentSection title="Think about whether the app grows with you">
              <p>
                What feels important today may not be what feels important
                three months from now.
              </p>

              <p className="mt-4">
                A useful long-term reflection tool should leave room for that
                change.
              </p>

              <p className="mt-4">
                Instead of giving you a fixed description of who you are, it
                should help you notice how your reactions, priorities and
                patterns develop as new reflections are added.
              </p>
            </ContentSection>

            <ContentSection title="Be careful with apps that sound too certain">
              <p>
                Reflection tools can help you notice possibilities, but they
                do not know everything about you.
              </p>

              <p className="mt-4">
                Be cautious if an app makes strong conclusions from very little
                information or presents every observation as a fact.
              </p>

              <p className="mt-4">
                Good reflection should leave space for uncertainty. You should
                be able to decide whether an observation feels accurate and
                useful to you.
              </p>
            </ContentSection>

            <ContentSection title="Check how your information is handled">
              <p>
                Reflection can involve personal thoughts and feelings, so
                privacy deserves attention.
              </p>

              <p className="mt-4">
                Before using an app regularly, read its privacy information
                and check what happens to the reflections you save.
              </p>

              <p className="mt-4">
                You should also be able to understand how to manage your
                account and what options you have if you later want to stop
                using the service.
              </p>
            </ContentSection>

            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A simple checklist
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Is it easy enough that I would actually return to it?",
                  "Can I reflect without having to write a long journal entry?",
                  "Does it help me understand more than one isolated day?",
                  "Can it help me notice repeated patterns?",
                  "Can I see how things change over time?",
                  "Does it avoid making overly certain claims about me?",
                  "Am I comfortable with how my reflections are handled?",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] bg-[#f3f1e8] px-5 py-4 text-[16px] leading-7 text-[#555b55]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <ContentSection title="The best app is the one that helps you keep noticing">
              <p>
                You do not need an app with the largest number of features.
              </p>

              <p className="mt-4">
                You need one that makes it easier to reflect honestly, return
                regularly and notice things you may have missed in the moment.
              </p>

              <p className="mt-4">
                Over time, several small reflections can give you a clearer
                view than one long entry written when everything feels
                overwhelming.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/self-reflection-questions"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Self-reflection questions to understand yourself better →
                </Link>

                <Link
                  href="/understand-yourself"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How can I understand myself better? →
                </Link>

                <Link
                  href="/notice-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to notice patterns in yourself →
                </Link>

                <Link
                  href="/emotional-patterns"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to recognise emotional patterns →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN CONNECTION */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Understand yourself over time.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin is built around short Reflections rather than long
              journal entries. As your Reflections build, it can help you
              notice possible Patterns, remember meaningful changes and build
              a clearer picture of yourself over time.
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