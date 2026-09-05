import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self-Reflection Library | RealWithin",
  description:
    "Explore guides about self-awareness, overthinking, emotional patterns, boundaries, relationships, decisions and understanding yourself better.",
};

const sections = [
  {
    title: "Self-awareness & reflection",
    description:
      "Understand your thoughts, feelings and patterns more clearly.",
    pages: [
      {
        href: "/understand-yourself",
        title: "How Can I Understand Myself Better?",
      },
      {
        href: "/become-more-self-aware",
        title: "How to Become More Self-Aware",
      },
      {
        href: "/what-is-self-awareness",
        title: "What Is Self-Awareness?",
      },
      {
        href: "/what-is-self-reflection",
        title: "What Is Self-Reflection?",
      },
      {
        href: "/self-reflection-questions",
        title: "Self-Reflection Questions to Understand Yourself Better",
      },
      {
        href: "/journaling-for-self-awareness",
        title: "Journaling for Self-Awareness",
      },
      {
        href: "/journaling-app-self-reflection",
        title: "Journaling App for Self-Reflection",
      },
      {
        href: "/journal-when-you-dont-know-what-to-write",
        title: "How to Journal When You Don’t Know What to Write",
      },
      {
        href: "/reflect-without-overthinking",
        title: "How to Reflect Without Overthinking",
      },
      {
        href: "/start-self-reflection-habit",
        title: "How to Start a Self-Reflection Habit",
      },
      {
        href: "/notice-patterns",
        title: "How to Notice Patterns in Yourself",
      },
      {
        href: "/emotional-patterns",
        title: "How to Recognise Emotional Patterns",
      },
      {
        href: "/repeating-patterns",
        title: "Why Do I Keep Repeating the Same Patterns?",
      },
      {
        href: "/understand-your-emotions",
        title: "How to Understand Your Emotions Better",
      },
    ],
  },
  {
    title: "Overthinking, uncertainty & decisions",
    description:
      "Explore what happens when doubt, uncertainty or difficult choices keep taking your attention.",
    pages: [
      {
        href: "/overthinking",
        title: "Why Do I Overthink Everything?",
      },
      {
        href: "/replaying-conversations",
        title: "Why Do I Replay Conversations in My Head?",
      },
      {
        href: "/overthinking-after-conversations",
        title: "Why Do I Overthink After Conversations?",
      },
      {
        href: "/second-guessing",
        title: "Why Do I Second-Guess Myself?",
      },
      {
        href: "/question-every-decision",
        title: "Why Do I Question Every Decision I Make?",
      },
      {
        href: "/trust-your-decisions",
        title: "How to Trust Your Own Decisions",
      },
      {
        href: "/build-self-trust",
        title: "How to Build Self-Trust",
      },
      {
        href: "/assume-the-worst",
        title: "Why Do I Assume the Worst?",
      },
      {
        href: "/struggle-with-uncertainty",
        title: "Why Do I Struggle With Uncertainty?",
      },
      {
        href: "/uncomfortable-not-in-control",
        title: "Why Do I Feel Uncomfortable When I’m Not in Control?",
      },
      {
        href: "/struggle-to-know-what-i-want",
        title: "Why Do I Struggle to Know What I Want?",
      },
      {
        href: "/identify-personal-values",
        title: "How to Identify Your Personal Values",
      },
      {
        href: "/decisions-based-on-values",
        title: "How to Make Decisions Based on Your Values",
      },
      {
        href: "/feel-stuck-in-life",
        title: "Why Do I Feel Stuck in Life?",
      },
    ],
  },
  {
    title: "Boundaries, needs & communication",
    description:
      "Notice what makes it difficult to speak clearly, ask for what you need or protect your limits.",
    pages: [
      {
        href: "/guilty-saying-no",
        title: "Why Do I Feel Guilty Saying No?",
      },
      {
        href: "/struggle-to-set-boundaries",
        title: "Why Do I Struggle to Set Boundaries?",
      },
      {
        href: "/know-your-boundaries",
        title: "How to Know What Your Boundaries Are",
      },
      {
        href: "/recognise-what-you-need",
        title: "How to Recognise What You Need",
      },
      {
        href: "/needs-are-too-much",
        title: "Why Do I Feel Like My Needs Are Too Much?",
      },
      {
        href: "/how-to-be-more-assertive",
        title: "How to Be More Assertive",
      },
      {
        href: "/struggle-to-express-feelings",
        title: "Why Do I Struggle to Express My Feelings?",
      },
      {
        href: "/avoid-difficult-conversations",
        title: "Why Do I Avoid Difficult Conversations?",
      },
      {
        href: "/shut-down-during-conflict",
        title: "Why Do I Shut Down During Conflict?",
      },
      {
        href: "/over-explaining",
        title: "Why Do I Over-Explain Myself?",
      },
      {
        href: "/apologise-too-much",
        title: "Why Do I Apologise So Much?",
      },
      {
        href: "/struggle-to-ask-for-help",
        title: "Why Do I Struggle to Ask for Help?",
      },
    ],
  },
  {
    title: "Approval, confidence & self-worth",
    description:
      "Explore approval, reassurance, self-criticism and the ways other people's reactions can affect you.",
    pages: [
      {
        href: "/disappointing-people",
        title: "Why Do I Worry About Disappointing People?",
      },
      {
        href: "/reassurance",
        title: "Why Do I Need Reassurance So Often?",
      },
      {
        href: "/people-pleasing",
        title: "Why Do I People-Please?",
      },
      {
        href: "/responsible-for-others-feelings",
        title: "Why Do I Feel Responsible for Other People’s Feelings?",
      },
      {
        href: "/compare-myself-to-others",
        title: "Why Do I Compare Myself to Others?",
      },
      {
        href: "/hard-on-myself",
        title: "Why Am I So Hard on Myself?",
      },
      {
        href: "/perfectionism",
        title: "Why Am I a Perfectionist?",
      },
      {
        href: "/not-good-enough",
        title: "Why Do I Feel Like I’m Not Good Enough?",
      },
      {
        href: "/care-what-people-think",
        title: "Why Do I Care So Much What People Think?",
      },
      {
        href: "/guilty-putting-myself-first",
        title: "Why Do I Feel Guilty When I Put Myself First?",
      },
      {
        href: "/need-validation-from-others",
        title: "Why Do I Need Validation From Others?",
      },
      {
        href: "/dismiss-my-own-feelings",
        title: "Why Do I Dismiss My Own Feelings?",
      },
      {
        href: "/self-sabotage",
        title: "Why Do I Self-Sabotage?",
      },
    ],
  },
  {
    title: "Relationships & closeness",
    description:
      "Reflect on the reactions that can appear around closeness, rejection and relationships.",
    pages: [
      {
        href: "/take-things-personally",
        title: "Why Do I Take Things Personally?",
      },
      {
        href: "/get-attached-quickly",
        title: "Why Do I Get Attached So Quickly?",
      },
      {
        href: "/pull-away-when-close",
        title: "Why Do I Pull Away When Someone Gets Close?",
      },
      {
        href: "/fear-of-rejection",
        title: "Why Do I Fear Rejection?",
      },
      {
        href: "/avoid-vulnerability",
        title: "Why Do I Avoid Vulnerability?",
      },
      {
        href: "/lose-yourself-in-relationships",
        title: "Why Do I Lose Myself in Relationships?",
      },
      {
        href: "/why-do-i-get-jealous",
        title: "Why Do I Get Jealous?",
      },
    ],
  },
];

export default function SelfReflectionLibraryPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a88353]">
              Self-Reflection Library
            </p>

            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Explore what keeps coming up for you
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Simple guides for understanding everyday thoughts, feelings,
              choices, relationships and repeated reactions.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Start with whatever feels most relevant today.
            </p>
          </div>
        </section>

        {/* LIBRARY */}
        <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.title}>
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#414641] sm:text-3xl">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-[16px] leading-7 text-[#686e68]">
                    {section.description}
                  </p>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {section.pages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="group flex items-center justify-between gap-4 rounded-[20px] border border-[#e0dbd0] bg-[#fffdf8] px-5 py-4 transition hover:border-[#cfc8ba] hover:bg-white"
                    >
                      <span className="text-[16px] font-semibold leading-6 text-[#4a504a] transition group-hover:text-[#303530]">
                        {page.title}
                      </span>

                      <span
                        aria-hidden="true"
                        className="shrink-0 text-[#8b938b] transition group-hover:translate-x-0.5 group-hover:text-[#68786b]"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* REALWITHIN */}
        <section className="border-y border-[#d9dbcf] bg-[#e9eadf]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f443f]">
              Reading can help you think. Your own moments can show you more.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on how you feel and what
              is on your mind. Across different days, it can help you notice
              possible Patterns and meaningful changes in your own experiences.
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
            href="/self-reflection-library"
            className="hidden transition hover:text-[#303430] sm:inline"
          >
            Explore
          </Link>

          <Link
            href="/#journey"
            className="hidden transition hover:text-[#303430] md:inline"
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
          <Link
            href="/self-reflection-library"
            className="hover:text-[#343934]"
          >
            Explore
          </Link>

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