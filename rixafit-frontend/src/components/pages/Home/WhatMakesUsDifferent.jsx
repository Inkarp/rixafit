// WHAT MAKES US DIFFERENT – React + Tailwind
// Usage: <WhatMakesUsDifferent />  (Tailwind required)
// Swap the right-side image URL and copy text as needed.

import { useState } from "react";

export default function WhatMakesUsDifferent() {
  const items = [
    {
      title: "Fitness Platform",
      desc:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil cum soluta nobis est elige impedit.",
    },
    { title: "Motivation and Accountability", desc: "Short copy for this benefit goes here." },
    { title: "Clean and Hygienic", desc: "Short copy for this benefit goes here." },
    { title: "Training Ability", desc: "Short copy for this benefit goes here." },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* LEFT: heading + accordion style list */}
          <div>
            <p className="text-xs font-extrabold tracking-[0.22em] text-gray-700 uppercase">Features and Benefits</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-black tracking-tight text-[#0a0a0a] uppercase">
              What Makes Us Different
            </h2>

            {/* Active panel */}
            <div className="mt-8 border border-black/15">
              {/* Red tab */}
              <div className="-mt-6 ml-3 inline-flex rounded-t-md bg-[#e21f26] px-5 py-3 shadow text-white">
                <span className="font-extrabold mr-3">{String(active + 1).padStart(2, "0")}.</span>
                <span className="uppercase font-extrabold tracking-wide">{items[active].title}</span>
              </div>

              {/* Description */}
              <div className="px-6 pt-6 pb-7 text-[17px] leading-7 text-[#4d5560]">
                {items[active].desc}
              </div>
            </div>

            {/* Inactive rows */}
            <ul className="mt-6 divide-y divide-black/10">
              {items.map((it, i) => (
                <li key={i}>
                  <button
                    onClick={() => setActive(i)}
                    className={`w-full flex items-center gap-4 py-4 px-3 text-left transition-colors ${
                      i === active
                        ? "text-[#0a0a0a]"
                        : "text-[#0a0a0a] hover:bg-black/[.03]"
                    }`}
                    aria-current={i === active}
                  >
                    <span className={`w-14 shrink-0 text-sm font-extrabold tracking-wider ${i === active ? "text-[#e21f26]" : "text-black/70"}`}>
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span className={`flex-1 font-extrabold uppercase tracking-wide ${i === active ? "" : "text-black"}`}>
                      {it.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: image with play overlay */}
          <div className="relative">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550344071-2a8c1f1a27c1?q=80&w=1728&auto=format&fit=crop"
                alt="People exercising at gym"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Play button with soft ripple */}
            <button
              aria-label="Play video"
              className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute inset-0 -z-10 h-32 w-32 rounded-full bg-[#e21f26]/25 blur-md" />
              <span className="grid place-items-center h-20 w-20 rounded-full bg-black text-white shadow-xl ring-1 ring-black/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
