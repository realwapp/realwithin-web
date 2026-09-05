import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Shut Down During Conflict? | RealWithin",
  description:
    "Understand why you may go quiet, withdraw or struggle to respond during conflict, and how to notice what happens before you shut down.",
};

export default function ShutDownDuringConflictPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I shut down during conflict?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              A conversation becomes tense and suddenly it feels difficult to
              think, speak or explain what you mean.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You may go quiet, give very short answers, agree just to end the
              conversation or only realise what you wanted to say afterwards.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              It can help to notice what happens in the moments just before you
              start pulling back.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Shutting down can look quiet from the outside">
              <p>
                You may not leave the conversation completely.
              </p>

              <p className="mt-4">
                Instead, you might stop explaining yourself, say “it&apos;s
                fine,” agree with something you do not really agree with or
                become unable to find the words you had before.
              </p>

              <p className="mt-4">
                Later, when the pressure has passed, your thoughts may become
                much clearer.
              </p>
            </ContentSection>

            <ContentSection title="Notice what changes when the conversation becomes tense">
              <p>
                You may be able to speak clearly at first and then find it
                harder once the other person becomes upset, louder,
                disappointed or more direct.
              </p>

              <p className="mt-4">
                The important moment may be the shift between feeling able to
                speak and feeling that you need the conversation to stop.
              </p>

              <p className="mt-4">
                Looking closely at that shift can help you understand what tends
                to make communication harder.
              </p>
            </ContentSection>

            <ContentSection title="You may be trying to reduce the tension quickly">
              <p>
                When a conversation feels uncomfortable, ending the tension can
                become more important than expressing your full view.
              </p>

              <p className="mt-4">
                You may apologise quickly, agree, stop asking questions or say
                that something does not matter anymore.
              </p>

              <p className="mt-4">
                In the moment, this may make the conversation quieter. But your
                original feeling or concern may still be there afterwards.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  At what point did it become harder for me to speak?
                </Question>

                <Question>
                  What did the other person say or do just before I pulled back?
                </Question>

                <Question>
                  What was I trying to avoid happening next?
                </Question>

                <Question>
                  What did I want to say but could not say in the moment?
                </Question>

                <Question>
                  Does this happen more with certain people or types of
                  disagreement?
                </Question>
              </div>
            </section>

            <ContentSection title="Needing time does not mean you have nothing to say">
              <p>
                Some conversations are easier to handle when you have time to
                think.
              </p>

              <p className="mt-4">
                You may know that something matters but not be ready to explain
                it clearly while emotions are high.
              </p>

              <p className="mt-4">
                Asking for a pause can be different from disappearing from the
                issue completely.
              </p>

              <p className="mt-4">
                You might say, “I want to talk about this, but I need some time
                to think first.”
              </p>
            </ContentSection>

            <ContentSection title="Notice whether you return to the conversation later">
              <p>
                Taking time can be useful if you come back to what still needs
                to be said.
              </p>

              <p className="mt-4">
                If the conversation is never revisited, the immediate tension
                may disappear while the original problem remains.
              </p>

              <p className="mt-4">
                Looking at what happens afterwards can help you see whether a
                pause gives you space or quietly becomes avoidance.
              </p>
            </ContentSection>

            <ContentSection title="You may think more clearly after the pressure is gone">
              <p>
                It is common to think of the perfect sentence after a difficult
                conversation has ended.
              </p>

              <p className="mt-4">
                Rather than criticising yourself for not saying it earlier, you
                can use that later clarity as information.
              </p>

              <p className="mt-4">
                What became easier to understand once you had space? Is there
                part of it that still needs to be communicated?
              </p>
            </ContentSection>

            <ContentSection title="Not every disagreement needs an immediate answer">
              <p>
                You do not always need to respond perfectly in the moment.
              </p>

              <p className="mt-4">
                Sometimes asking a question, saying you need time or returning
                later can be more accurate than forcing an answer while you are
                struggling to think clearly.
              </p>

              <p className="mt-4">
                The aim is not to remove all discomfort. It is to stay connected
                enough to your own view that the conversation does not erase it.
              </p>
            </ContentSection>

            <ContentSection title="Look for what repeats across different conflicts">
              <p>
                Going quiet in one difficult conversation does not necessarily
                mean there is a wider pattern.
              </p>

              <p className="mt-4">
                But if tension repeatedly makes you stop speaking, agree when
                you do not agree or only understand your feelings afterwards,
                it may be useful to compare those moments.
              </p>

              <p className="mt-4">
                Over time, you may begin to see what kind of conflict makes you
                pull back and whether your response begins to change.
              </p>
            </ContentSection>

            {/* RELATED */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/avoid-difficult-conversations"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I avoid difficult conversations? →
                </Link>

                <Link
                  href="/struggle-to-express-feelings"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I struggle to express my feelings? →
                </Link>

                <Link
                  href="/how-to-be-more-assertive"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to be more assertive →
                </Link>

                <Link
                  href="/over-explaining"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I over-explain myself? →
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Notice the point where your own voice starts to disappear.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on everyday
              conversations, feelings and reactions. As your Reflections build
              across different days, it can help you notice possible Patterns
              in how you respond when tension appears.
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