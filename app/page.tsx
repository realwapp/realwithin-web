import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f3e9] text-[#3f433f]">
      {/* Header */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#303430]">
              <span className="absolute inset-y-0 right-0 w-1/2 bg-[#303430]" />
            </span>

            <span className="font-serif text-3xl text-[#292d29]">
              RealWithin
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm text-[#737872]">
            <Link href="/privacy" className="hover:text-[#303430]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#303430]">
              Terms
            </Link>
            <Link href="/support" className="hover:text-[#303430]">
              Support
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative">
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[#efe5d5]/70 blur-3xl" />
          <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#e7e9d9]/80 blur-3xl" />

          <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-7 text-sm font-medium uppercase tracking-[0.2em] text-[#899087]">
                Personal reflection · Understanding over time
              </p>

              <h1 className="font-serif text-6xl leading-[0.98] tracking-[-0.045em] text-[#292d29] sm:text-7xl lg:text-[88px]">
                Understand yourself.
                <span className="mt-2 block text-[#a88353]">
                  Over time.
                </span>
              </h1>

              <p className="mt-9 max-w-xl text-xl leading-8 text-[#646a64]">
                What if your everyday moments are telling you something?
                RealWithin connects your reflections over time to reveal
                patterns, changes and insights you might otherwise miss.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <span className="rounded-full bg-[#68786b] px-7 py-4 font-semibold text-white">
                  Reflect today
                </span>

                <span className="rounded-full border border-[#d5cfc3] bg-[#fffaf2] px-7 py-4 font-medium text-[#505650]">
                  Understand yourself over time
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute right-[-110px] top-20 hidden h-80 w-56 rotate-12 rounded-full bg-[#dfe4cc]/70 blur-2xl lg:block" />

              <div className="relative w-[310px] rotate-[3deg] rounded-[52px] bg-[#171917] p-[10px] shadow-[0_35px_80px_rgba(60,52,40,0.20)] sm:w-[350px]">
                <div className="overflow-hidden rounded-[44px] bg-[#f8f3e9]">
                  <Image
                    src="/pattern-screen.png"
                    alt="RealWithin Patterns screen"
                    width={828}
                    height={1792}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="relative border-y border-[#ded7ca] bg-[#fdfaf4]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-[#92978f]">
                How RealWithin grows with you
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#414641] sm:text-5xl">
                One reflection becomes more meaningful over time.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <JourneyCard
                number="01"
                title="Reflect"
                text="Share how you feel and what is on your mind today."
              />
              <JourneyCard
                number="02"
                title="Patterns"
                text="See the reactions and ways of responding that keep returning."
              />
              <JourneyCard
                number="03"
                title="Memory"
                text="Notice when something meaningful begins to change."
              />
              <JourneyCard
                number="04"
                title="You"
                text="See deeper perspectives on who you may be becoming."
              />
            </div>
          </div>
        </section>

        {/* WHAT BECOMES VISIBLE */}
        <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#92978f]">
                What becomes visible
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#414641] sm:text-5xl">
                There are things about yourself that are difficult to see while
                you&apos;re living them.
              </h2>
            </div>

            <div className="rounded-[38px] bg-[#fffdf8] p-9 shadow-[0_15px_50px_rgba(70,60,45,0.06)] sm:p-12">
              <div className="space-y-7 text-xl leading-8 text-[#686e68]">
                <p>The reactions that keep returning.</p>
                <p>The needs you keep putting aside.</p>
                <p>The assumptions you make without noticing.</p>
                <p>The ways you&apos;re changing before you even realise it.</p>
              </div>

              <div className="mt-10 border-t border-[#ebe5da] pt-8">
                <p className="text-2xl font-semibold text-[#485048]">
                  RealWithin helps make them visible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHT EXPERIENCE */}
        <section className="relative bg-[#e9eadf] py-28">
          <div className="absolute left-0 top-0 h-full w-1/3 rounded-r-full bg-[#f2eadf]/55 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[#878d86]">
              Based on your reflections
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#3f443f] sm:text-5xl">
              Small moments can reveal something much bigger over time.
            </h2>

            <div className="mx-auto mt-12 max-w-3xl rounded-[40px] bg-[#fffdf8] px-8 py-10 text-left shadow-[0_18px_50px_rgba(70,60,45,0.07)] sm:px-12">
              <p className="text-sm uppercase tracking-[0.18em] text-[#9a9e98]">
                RealWithin
              </p>

              <p className="mt-5 text-2xl leading-9 text-[#505550]">
                Start with one short reflection about your day. RealWithin
                gives you a thoughtful perspective in the moment, then begins
                connecting what you share across time.
              </p>
            </div>
          </div>
        </section>

        {/* SIMPLE */}
        <section className="mx-auto max-w-6xl px-6 py-28 text-center lg:px-10">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#414641] sm:text-5xl">
            No pressure to have the right words.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#70756f]">
            No long journal entries. No endless tracking. Just small moments of
            reflection that gradually build into something more valuable.
          </p>

          <p className="mt-10 font-serif text-4xl text-[#9f7d50] sm:text-5xl">
            A clearer understanding of yourself.
          </p>
        </section>

        {/* FINAL */}
        <section className="border-t border-[#ded8cc] bg-[#fbf7ef]">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
            <div className="space-y-1 text-3xl font-semibold leading-tight text-[#414641] sm:text-4xl">
              <p>Reflect today.</p>
              <p>See what repeats.</p>
              <p>Notice what changes.</p>
              <p>Understand yourself over time.</p>
            </div>

            <p className="mx-auto mt-9 max-w-xl text-sm leading-6 text-[#818680]">
              RealWithin is designed for personal reflection and
              self-understanding. It is not a medical, therapy or diagnostic
              service.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ded8cc] bg-[#f8f3e9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-[#747973] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 RealWithin</p>

          <div className="flex flex-wrap gap-6">
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
    </div>
  );
}

function JourneyCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[32px] border border-[#e4ded3] bg-[#fffdf8] p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8b938b] text-xs font-medium text-[#777e77]">
        {number}
      </div>

      <h3 className="mt-7 text-2xl font-semibold text-[#414641]">{title}</h3>

      <p className="mt-3 leading-7 text-[#767b75]">{text}</p>
    </div>
  );
}