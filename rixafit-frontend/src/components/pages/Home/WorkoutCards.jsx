// WORKOUT CLASSES – React + Tailwind
// Drop into your page: <WorkoutClasses />
// Tailwind required. You can swap icons/text via the items array.

export default function WorkoutClasses() {
  const items = [
    {
      title: "Exercise Cycle",
      desc: "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
      icon: KettlebellIcon,
      href: "#",
      highlight: false,
    },
    {
      title: "Expert Trainers",
      desc: "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
      icon: FlexIcon,
      href: "#",
      highlight: true, // red card in the middle
    },
    {
      title: "Workout Schedule",
      desc: "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
      icon: ClockBarbellIcon,
      href: "#",
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top emblem + subtitle */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <BoltMark className="h-8 w-8 text-[#e21f26] mb-3" />
          <p className="text-[11px] tracking-[0.22em] font-black text-[#0a0a0a]/70 uppercase">Build Your Body Strong</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-wide text-[#0a0a0a] uppercase">Workout Classes</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10">
          {items.map((it, idx) => (
            <Card key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, icon: Icon, href = "#", highlight = false }) {
  return (
    <article
      className={
        "relative overflow-hidden transition-all duration-300 " +
        (highlight
          ? "bg-[#e21f26] text-white shadow-lg"
          : "bg-white text-[#0a0a0a] border border-black/10 hover:shadow-md")
      }
    >
      <div className="p-10">
        {/* Icon */}
        <Icon className={highlight ? "text-white" : "text-[#e21f26]"} />

        {/* Title */}
        <h3
          className={
            "mt-6 text-2xl md:text-3xl font-extrabold tracking-wide uppercase " +
            (highlight ? "text-white" : "text-[#0a0a0a]")
          }
        >
          {title}
        </h3>

        {/* Description */}
        <p className={"mt-4 text-[17px] leading-7 " + (highlight ? "text-white/90" : "text-[#555]")}>{desc}</p>

        {/* CTA */}
        <a
          href={href}
          className="mt-8 inline-flex h-12 w-12 items-center justify-center bg-black text-white text-2xl font-bold hover:scale-105 transition-transform"
          aria-label={`Open ${title}`}
        >
          <span className="-mt-1">»</span>
        </a>
      </div>

      {/* subtle frame for non-highlight cards */}
      {!highlight && <div className="pointer-events-none absolute inset-0 border border-black/10" />}
    </article>
  );
}

/* --- Simple outline icons to match the reference --- */
function KettlebellIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={`h-16 w-16 ${className}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 18a10 10 0 0 1 20 0" />
      <rect x="10" y="18" width="44" height="40" rx="20" />
      <path d="M20 40h24" />
    </svg>
  );
}

function FlexIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={`h-16 w-16 ${className}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 38c8-2 10-10 10-16m12 0c0 8 2 14 10 16" />
      <path d="M26 22c2-4 6-6 10-6s8 2 10 6" />
      <path d="M8 44c6 0 10-2 12-6m24 0c2 4 6 6 12 6" />
      <circle cx="32" cy="28" r="4" />
    </svg>
  );
}

function ClockBarbellIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={`h-16 w-16 ${className}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="28" cy="28" r="14" />
      <path d="M28 18v10l6 4" />
      <path d="M2 26v4m8-6v8M46 26v4m8-6v8" />
      <path d="M10 28h8m20 0h8" />
    </svg>
  );
}

function BoltMark({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
    </svg>
  );
}
