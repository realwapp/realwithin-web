import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journaling App for Self-Reflection | RealWithin",
  description:
    "What should a journaling app for self-reflection help you do? Learn what to look for if you want to understand your thoughts, feelings and patterns over time.",
};

export default function JournalingAppSelfReflectionPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              What should a journaling app for self-reflection help you do?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              A journaling app can give you somewhere to record your thoughts.
              But if your goal is to understand yourself better, saving what
              you wrote may only be the beginning.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              A useful self-reflection app should make it easier to notice what
              matters in the moment and what starts to repeat or change over
              time.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Start with something simple enough to keep doing">
              <p>
                Reflection does not need to mean writing several pages every
                day.
              </p>

              <p className="mt-4">
                For many people, a short check-in is easier to keep up. You
                might record how you feel, what happened and a few words about
                what is on your mind.
              </p>

              <p className="mt-4">
                The important part is having enough real moments to look back
                on later.
              </p>
            </ContentSection>

            <ContentSection title="Help you think about the moment, not only store it">
              <p>
                Writing something down can already help you slow down and look
                at it more clearly.
              </p>

              <p className="mt-4">
                A self-reflection app can go a step further by helping you
                consider another point of view or notice a part of the moment
                you may have missed.
              </p>

              <p className="mt-4">
                That does not mean every entry needs a big lesson. Sometimes a
                simple observation is enough.
              </p>
            </ContentSection>

            <ContentSection title="Make it easier to look across different days">
              <p>
                One journal entry tells you about one moment. Several entries
                can show you more.
              </p>

              <p className="mt-4">
                You may notice that the same type of situation keeps leaving
                you unsure, that you often question yourself after decisions,
                or that certain worries appear in different relationships.
              </p>

              <p className="mt-4">
                A useful app should make it easier to look back without asking
                you to remember and compare everything yourself.
              </p>
            </ContentSection>

            {/* WHAT TO LOOK FOR */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                What to look for in a self-reflection app
              </h2>

              <div className="mt-6 space-y-4">
                <Point>
                  <strong>Easy daily reflection.</strong> It should not feel
                  like a large task every time you open it.
                </Point>

                <Point>
                  <strong>Useful responses.</strong> If the app responds to
                  what you write, the response should stay close to what you
                  actually shared.
                </Point>

                <Point>
                  <strong>Patterns over time.</strong> It should help you see
                  repeated thoughts, feelings or reactions across different
                  moments.
                </Point>

                <Point>
                  <strong>Changes over time.</strong> Reflection is also about
                  noticing when something begins to feel different.
                </Point>

                <Point>
                  <strong>Privacy and clear boundaries.</strong> You should
                  understand what is saved, how your information is used and
                  what the app is designed to do.
                </Point>
              </div>
            </section>

            <ContentSection title="Patterns can be more useful than individual entries">
              <p>
                It is easy to read one old journal entry and think only about
                what happened that day.
              </p>

              <p className="mt-4">
                Looking across several entries can help you notice whether
                something keeps coming back.
              </p>

              <p className="mt-4">
                For example, several very different situations may still leave
                you worrying about disappointing someone or looking for
                reassurance afterwards.
              </p>

              <p className="mt-4">
                Seeing that connection can give you a clearer picture than
                focusing on each situation separately.
              </p>
            </ContentSection>

            <ContentSection title="A good reflection app should also notice change">
              <p>
                You are not the same every day, and the aim is not to place you
                into a fixed type.
              </p>

              <p className="mt-4">
                Something that once stayed on your mind for days may start to
                pass more quickly. A situation that used to make you doubt
                yourself may begin to feel easier.
              </p>

              <p className="mt-4">
                These smaller changes can be easy to miss unless you have past
                moments to compare with.
              </p>
            </ContentSection>

            <ContentSection title="How RealWithin approaches self-reflection">
              <p>
                RealWithin starts with a short check-in about how you feel and
                what is on your mind.
              </p>

              <p className="mt-4">
                After each check-in, you receive a Reflection based on what you
                shared.
              </p>

              <p className="mt-4">
                As you continue, RealWithin can use your Reflections across
                different days to help surface possible Patterns and meaningful
                changes.
              </p>

              <p className="mt-4">
                The idea is not to ask you to write more. It is to make the
                small moments you already share easier to understand over time.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
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
              Try a short Reflection.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              The RealWithin preview lets you choose how you feel and see an
              example of the kind of Reflection the app gives you.
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

function Point({ children }: { children: React.ReactNode }) {
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