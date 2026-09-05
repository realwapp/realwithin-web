"use client";

import Link from "next/link";
import { useState } from "react";

type Feeling =
  | "Okay"
  | "Tired"
  | "Anxious"
  | "Heavy"
  | "Lonely"
  | "Overwhelmed"
  | "Hopeful"
  | "Numb";

const feelings: Feeling[] = [
  "Okay",
  "Tired",
  "Anxious",
  "Heavy",
  "Lonely",
  "Overwhelmed",
  "Hopeful",
  "Numb",
];

const reflections: Record<Feeling, string[]> = {
  Okay: [
    "Feeling okay can be easy to overlook because nothing feels urgent. It may be a good moment to notice what feels steady or easier today.",

    "Not every day needs a big feeling. Feeling okay can be a chance to notice what is working without needing to change anything.",

    "When things feel okay, you may have more space to notice the small parts of your day that usually pass without much attention.",

    "Feeling okay may not seem important, but it can still tell you something. Notice what feels calmer, lighter or more settled today.",
  ],

    Tired: [
    "Feeling tired can make small things feel harder than usual. You may not need to solve everything today. Give your energy to what feels most important right now, and be gentle with yourself along the way.",

    "When your energy is low, everything can start to feel equally important. It may help to decide what can wait.",

    "Tiredness can make it harder to know what you need. Before pushing yourself further, notice whether rest would help more than effort.",

    "You may be used to carrying on even when you are tired. Today might be a good time to ask yourself what can wait, and give yourself permission to leave it for later.",
  ],

  Anxious: [
    "When you feel anxious, your mind can jump ahead and look for what might go wrong. It may help to notice what is happening now, not every possible next step.",

    "Anxiety can make uncertainty feel like a problem that must be solved immediately. You may not need every answer before taking the next step.",

    "When your mind is searching for danger or mistakes, even small choices can feel bigger. Find one small thing that is in your control right now.",

    "Feeling anxious can make you want to think through every possibility. Sometimes more thinking adds pressure instead of giving you clarity.",
  ],

    Heavy: [
    "When things feel heavy, even simple choices can take more effort. You may need less pressure from yourself today, not more.",

    "A heavy feeling can make the whole day seem harder. You may not need to carry all of it at once. Notice what feels heaviest right now.",

    "When something feels heavy, you do not always need to understand it immediately. Giving the feeling some space can be enough for now.",

    "When you feel heavy, it can be hard to know what would help. Notice whether you need more space, more support, or less pressure today.",
  ],

  Lonely: [
    "Feeling lonely can make you want connection while reaching out still feels difficult. Notice what kind of connection would feel safe and helpful right now.",

    "Loneliness is not always about being alone. Sometimes it appears when you do not feel understood, seen or close to the people around you.",

    "When you feel lonely, it can be easy to focus on who is not there. It may help to notice what kind of connection you are actually missing.",

    "Feeling lonely can make reaching out feel more important and more difficult at the same time. A small message or moment with someone you feel safe with may be enough for now.",
  ],

  Overwhelmed: [
    "When too many things feel important at once, it can be hard to know where to begin. One small next step may be enough for now.",

    "Feeling overwhelmed can make every task feel urgent. It may help to separate what needs attention now from what can wait.",

    "When your mind is holding too many things at once, adding more effort may not help. You may need to make the picture smaller.",

    "Overwhelm can make you feel as if everything has to be handled at the same time. Notice the one thing that would make today feel a little easier.",
  ],

  Hopeful: [
    "Hope can be a sign that something feels possible again. Notice what feels different today and what you want to keep moving towards.",

    "Feeling hopeful can give you a clearer view of what matters to you. Notice what possibility is giving you that feeling.",

    "Hope does not mean everything is solved. It can simply mean that you can see a way forward that was harder to see before.",

    "When you feel hopeful, it may be useful to notice what has changed. Something may be starting to feel more possible.",
  ],

  Numb: [
    "Feeling numb can make it hard to know what you need. You do not have to force an answer. Noticing the feeling is enough for now.",

    "When you feel numb, you may not have clear words for what is happening. You do not need to make yourself feel something different straight away.",

    "Numbness can make everything feel distant or flat. For now, noticing one small thing you can feel or care about may be enough.",

    "If you feel numb, trying harder to understand everything may not help. Give yourself some space and notice what slowly becomes clearer.",
  ],
};

export default function TryRealWithinPage() {
  const [feeling, setFeeling] = useState<Feeling | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [reflection, setReflection] = useState<string | null>(null);

  const [seenByFeeling, setSeenByFeeling] = useState<
    Partial<Record<Feeling, number[]>>
  >({});

  function checkIn() {
    if (!feeling) return;

    const bank = reflections[feeling];
    const seen = seenByFeeling[feeling] ?? [];

    let availableIndexes = bank
      .map((_, index) => index)
      .filter((index) => !seen.includes(index));

    let nextSeen = seen;

    // All four have been used.
    // Begin a new cycle but avoid immediately repeating the last one.
    if (availableIndexes.length === 0) {
      const lastIndex = seen[seen.length - 1];

      availableIndexes = bank
        .map((_, index) => index)
        .filter((index) => index !== lastIndex);

      nextSeen = [];
    }

    const randomIndex =
      availableIndexes[
        Math.floor(Math.random() * availableIndexes.length)
      ];

    setReflection(bank[randomIndex]);

    setSeenByFeeling((current) => ({
      ...current,
      [feeling]: [...nextSeen, randomIndex],
    }));

    setSubmitted(true);
  }

  function reset() {
    setFeeling(null);
    setReflection(null);
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      {/* WEBSITE HEADER */}
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

          <span className="text-sm text-[#858a84]">
            Try RealWithin
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-4 py-8 sm:px-6 sm:py-10">
        <p className="mb-4 text-center text-xs uppercase tracking-[0.18em] text-[#92978f]">
          Try a RealWithin preview
        </p>

        {/* APP-STYLE PREVIEW */}
        <section className="relative min-h-[540px] overflow-hidden rounded-[32px] border border-[#e2ddd3] bg-[#f4eee3] px-6 py-8 shadow-[0_16px_45px_rgba(70,60,45,0.05)] sm:px-8 sm:py-10">
          {/* BACKGROUND SHAPES */}
          <div className="pointer-events-none absolute -left-32 top-20 h-72 w-[520px] rotate-[-8deg] rounded-[45%] bg-[#eeeade]/70" />

          <div className="pointer-events-none absolute -bottom-24 -right-28 h-72 w-[500px] rotate-[-10deg] rounded-[45%] bg-[#e7e8dc]/65" />

          <div className="relative z-10">
            {!submitted ? (
              <>
                {/* CHECK-IN */}
                <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.035em] text-[#414641] sm:text-[40px]">
                  How are you today?
                </h1>

                <div className="mt-6 flex flex-wrap gap-3">
                  {feelings.map((item) => {
                    const selected = feeling === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setFeeling(item)}
                        className={`rounded-full border px-5 py-3 text-[17px] transition sm:text-lg ${
                          selected
                            ? "border-[#7c897d] bg-[#dfe3d9] font-medium text-[#454c46]"
                            : "border-[#e3dcd1] bg-[#fffaf3] text-[#747a74] hover:border-[#bfc6bb]"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  disabled={!feeling}
                  onClick={checkIn}
                  className={`mt-8 rounded-full px-8 py-3.5 text-lg font-semibold transition ${
                    feeling
                      ? "bg-[#718075] text-white hover:bg-[#647267]"
                      : "cursor-not-allowed bg-[#b9bdb4] text-white"
                  }`}
                >
                  Check in
                </button>
              </>
            ) : (
              reflection && (
                <>
                  {/* REFLECTION RESULT */}
                  <p className="text-lg text-[#7a817a]">
                    Your Reflection
                  </p>

                  <div className="mt-5 rounded-[28px] bg-[#fffaf3]/90 px-6 py-7 sm:px-7 sm:py-8">
                    <div className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-1 text-2xl text-[#252925]"
                      >
                        ✦
                      </span>

                      <p className="text-[21px] leading-8 text-[#454a45] sm:text-[23px] sm:leading-9">
                        {reflection}
                      </p>
                    </div>
                  </div>

                  {/* FULL APP EXPLANATION */}
                  <div className="mt-7">
                    <h2 className="text-xl font-semibold text-[#4b514b]">
                      RealWithin goes further.
                    </h2>

                    <p className="mt-3 text-[16px] leading-7 text-[#6d746d]">
                      In the app, you can also add a few words about what is on
                      your mind. Your Reflection can then respond to what you
                      share.
                    </p>

                    <p className="mt-3 text-[16px] leading-7 text-[#6d746d]">
                      As your Reflections build, RealWithin can notice Patterns
                      and changes across different days.
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-7 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={reset}
                      className="rounded-full border border-[#ded8ce] bg-[#fffaf3] px-6 py-3.5 font-semibold text-[#4d534d] transition hover:bg-[#f7f2e9]"
                    >
                      Try another feeling
                    </button>

                    <Link
                      href="/"
                      className="rounded-full bg-[#718075] px-6 py-3.5 text-center font-semibold text-white transition hover:bg-[#647267]"
                    >
                      Discover RealWithin
                    </Link>
                  </div>
                </>
              )
            )}
          </div>
        </section>

        <p className="mx-auto mt-4 max-w-md text-center text-xs leading-5 text-[#8a8e89]">
          Website preview only. Nothing you select here is saved.
        </p>
      </main>
    </div>
  );
}