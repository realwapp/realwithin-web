import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self-Reflection Questions to Understand Yourself Better | RealWithin",
  description:
    "Use simple self-reflection questions to notice your feelings, reactions, choices, needs and repeated patterns more clearly.",
};

export default function SelfReflectionQuestionsPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Self-reflection questions to understand yourself better
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Good reflection questions do not need to be complicated.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              They can help you slow down, notice what is happening and put
              words around something that may have been sitting in the
              background.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              You do not need to answer every question. Start with the one that
              feels most relevant today.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="Questions about how you feel">
              <p>
                Sometimes the easiest place to begin is with what you are
                feeling right now.
              </p>

              <QuestionList
                questions={[
                  "How do I feel today?",
                  "What has affected my mood most today?",
                  "Is there a feeling I have been trying to ignore?",
                  "What has made me feel lighter recently?",
                  "What has been taking more energy than I expected?",
                ]}
              />
            </ContentSection>

            <ContentSection title="Questions about what is on your mind">
              <p>
                Your attention can tell you something about what feels
                important, unfinished or uncertain.
              </p>

              <QuestionList
                questions={[
                  "What do I keep thinking about?",
                  "Is there a conversation I keep going back to?",
                  "What question am I trying to find an answer to?",
                  "Am I thinking about something because it needs action, or because I feel unsure?",
                  "What would I like to stop carrying into tomorrow?",
                ]}
              />
            </ContentSection>

            <ContentSection title="Questions about your reactions">
              <p>
                Looking at your reaction can sometimes help you understand the
                moment more clearly.
              </p>

              <QuestionList
                questions={[
                  "What affected me more strongly than I expected?",
                  "What happened just before I started feeling this way?",
                  "What did I want to do straight away?",
                  "Did I ask for reassurance, pull away, explain myself or change my mind?",
                  "Have I reacted like this in another situation recently?",
                ]}
              />
            </ContentSection>

            <ContentSection title="Questions about your choices">
              <p>
                Reflection can also help you notice what seems to guide your
                decisions.
              </p>

              <QuestionList
                questions={[
                  "What did I choose today, and why?",
                  "Did I make the choice I wanted, or the choice that felt easier?",
                  "Did someone else's reaction change how I felt about my decision?",
                  "Was I trying to avoid conflict, uncertainty or disappointment?",
                  "Would I make the same choice again with what I know now?",
                ]}
              />
            </ContentSection>

            <ContentSection title="Questions about your needs">
              <p>
                Needs are not always obvious in the moment. Sometimes they
                become clearer when you look at what felt difficult or what you
                wished had been different.
              </p>

              <QuestionList
                questions={[
                  "What did I need today that I did not ask for?",
                  "Where did I need more space, rest or support?",
                  "Did I put someone else's needs before my own?",
                  "What would have made today feel a little easier?",
                  "What do I keep hoping someone else will understand without me saying it?",
                ]}
              />
            </ContentSection>

            <ContentSection title="Questions about repeated patterns">
              <p>
                One moment does not always tell you much. Several similar
                moments may be more useful.
              </p>

              <QuestionList
                questions={[
                  "What has happened more than once recently?",
                  "Do similar situations bring up the same feeling in me?",
                  "Do I respond in a similar way when I feel unsure?",
                  "Are there certain people or situations where I become more doubtful?",
                  "What do I keep doing even when I wish I reacted differently?",
                ]}
              />
            </ContentSection>

            <ContentSection title="Questions about change">
              <p>
                Reflection is not only about what keeps repeating. It can also
                help you notice when something begins to feel different.
              </p>

              <QuestionList
                questions={[
                  "What feels easier now than it did a few weeks ago?",
                  "Is there something I react to differently now?",
                  "Have any of my priorities started to change?",
                  "Do I need less reassurance in situations that used to feel difficult?",
                  "What have I recently handled in a way that surprised me?",
                ]}
              />
            </ContentSection>

            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                You do not need to turn every answer into a lesson
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-[#626862]">
                Some days, reflection may give you a clear insight. Other days,
                you may simply notice how you feel or what is taking up your
                attention.
              </p>

              <p className="mt-4 text-[17px] leading-8 text-[#626862]">
                Both can be useful.
              </p>

              <p className="mt-4 text-[17px] leading-8 text-[#626862]">
                The value can grow when you look back across different days and
                notice whether the same thoughts, feelings or reactions keep
                appearing.
              </p>
            </section>

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
                  href="/become-more-self-aware"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  How to become more self-aware →
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
              Start with one small reflection.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a simple place to check in with how you feel
              and what is on your mind. As your Reflections build across
              different days, it can help you notice possible Patterns and
              meaningful changes over time.
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

function QuestionList({ questions }: { questions: string[] }) {
  return (
    <div className="mt-6 space-y-3">
      {questions.map((question) => (
        <div
          key={question}
          className="rounded-[18px] bg-[#f3f1e8] px-5 py-4 text-[16px] leading-7 text-[#555b55]"
        >
          {question}
        </div>
      ))}
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