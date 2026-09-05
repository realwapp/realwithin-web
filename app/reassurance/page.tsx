import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Do I Need Reassurance So Often? | RealWithin",
  description:
    "Understand why reassurance can feel helpful for a short time, why uncertainty may return, and what you can notice about the pattern.",
};

export default function ReassurancePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main>
        {/* HERO */}
        <section className="border-b border-[#ded8cc]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#292d29] sm:text-5xl">
              Why do I need reassurance so often?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#606660]">
              Someone tells you that everything is okay, and for a while you
              feel better.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Then the doubt comes back. You may want to ask again, check
              something or look for another sign that things are still okay.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#606660]">
              Sometimes reassurance helps with the feeling for a moment without
              fully settling the uncertainty underneath it.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="space-y-12">
            <ContentSection title="What looking for reassurance can look like">
              <p>
                Reassurance can come from other people, but it can also come
                from checking things yourself.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>Asking someone if they are upset with you.</li>
                <li>Checking whether a decision was the right one.</li>
                <li>Reading messages again to make sure nothing seems wrong.</li>
                <li>Asking different people for the same advice.</li>
                <li>Looking for signs that a relationship is still okay.</li>
                <li>Wanting someone to confirm that you did nothing wrong.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Why can reassurance feel so helpful?">
              <p>
                When you feel unsure, getting an answer can bring relief.
              </p>

              <p className="mt-4">
                Someone may tell you that they are not upset. A friend may say
                your decision makes sense. You may find a message that seems to
                confirm what you hoped.
              </p>

              <p className="mt-4">
                That can make the uncertainty quieter for a while. But if the
                doubt returns soon afterwards, you may find yourself looking
                for reassurance again.
              </p>
            </ContentSection>

            <ContentSection title="The difficult part may be the uncertainty">
              <p>
                Sometimes the question is not only whether something is okay.
                It may also be how comfortable you feel when you cannot know
                for certain.
              </p>

              <p className="mt-4">
                You may want a clear answer about what someone thinks, whether
                you made the right choice or what will happen next.
              </p>

              <p className="mt-4">
                But some situations do not give complete certainty. When that
                feels difficult, it can be tempting to keep checking for one
                more answer.
              </p>
            </ContentSection>

            {/* REFLECTION QUESTIONS */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                A few things to notice
              </h2>

              <div className="mt-6 space-y-4">
                <Question>
                  What am I hoping this reassurance will help me feel?
                </Question>

                <Question>
                  How long do I usually feel better after I get an answer?
                </Question>

                <Question>
                  Has anything actually changed, or has the uncertainty simply
                  returned?
                </Question>

                <Question>
                  Do I look for reassurance more often in certain relationships
                  or situations?
                </Question>
              </div>
            </section>

            <ContentSection title="Notice what happens after you get the answer">
              <p>
                Reassurance itself is not necessarily a problem. Asking for
                support or another point of view can be useful.
              </p>

              <p className="mt-4">
                What may be more useful to notice is what happens next.
              </p>

              <p className="mt-4">
                If you feel settled and move on, the reassurance may have given
                you what you needed. If the same question quickly returns, the
                uncertainty may still be there.
              </p>
            </ContentSection>

            <ContentSection title="Look for when the same pattern returns">
              <p>
                Wanting reassurance in one difficult moment does not mean you
                always depend on it.
              </p>

              <p className="mt-4">
                But if you often ask for confirmation, check for signs or find
                it hard to trust your own judgement, it may be worth noticing
                where that happens most.
              </p>

              <p className="mt-4">
                Looking across different moments can help you see what tends to
                bring the uncertainty up and what you usually do when it
                appears.
              </p>
            </ContentSection>

            {/* RELATED READING */}
            <section className="rounded-[28px] border border-[#e0dbd0] bg-[#fffdf8] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#414641]">
                Related
              </h2>

              <div className="mt-5 flex flex-col gap-3">
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

                <Link
                  href="/overthinking"
                  className="text-[17px] font-semibold text-[#68786b] transition hover:text-[#536157]"
                >
                  Why do I overthink everything? →
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
              Notice when you start looking for another answer.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#656b65]">
              RealWithin gives you a place to reflect on moments of doubt,
              reassurance and uncertainty. As your Reflections build over time,
              it can help you notice whether the same response keeps returning
              in different situations.
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