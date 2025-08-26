// WEEKLY PROGRAMS MOSAIC – React + Tailwind
// A collage grid where each tile scales on hover and shows day + details.
// Usage: <WeeklyProgramsMosaic items={[...]} />
// Tailwind required.
import Gym1 from "../../../assets/gallery/Gym1.jpg";
import Gym2 from "../../../assets/gallery/Gym2.jpg";
import Gym3 from "../../../assets/gallery/Gym3.jpg";
import Gym4 from "../../../assets/gallery/Gym4.jpg";    
import Gym5 from "../../../assets/gallery/Gym5.jpg";
import Gym6 from "../../../assets/gallery/Gym6.jpg";

export default function WeeklyPrograms({ items = demoItems }) {
  // Define a repeating layout pattern for large screens
  const layout = [
    // big left banner
    "lg:col-span-3 lg:row-span-2",
    // tall right-top
    "lg:col-span-3 lg:row-span-2",
    // medium bottom-left
    "lg:col-span-2 lg:row-span-2",
    // medium center
    "lg:col-span-2 lg:row-span-2",
    // big right banner
    "lg:col-span-2 lg:row-span-2",
    // extra tile (optional)
    "lg:col-span-3 lg:row-span-2",
  ];

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[160px]"
        >
          {items.map((it, i) => (
            <Tile key={i} item={it} extra={layout[i % layout.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ item, extra = "" }) {
  const { image, day = "TUESDAY", time = "8PM - 11PM", title = "HANDSTAND NEGATIVES", desc = "Read more", href = "#" } = item;
  return (
    <article className={`group relative overflow-hidden ${extra}`}>
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Dark gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <p className="text-[11px] tracking-[0.18em] font-black text-[#f04646]">{day}<span className="mx-2 text-white/70">•</span>{time}</p>
        <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-wide uppercase">{title}</h3>
        <a
          href={href}
          className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          {desc}
        </a>
      </div>

      {/* Corner badge (visible even without hover) */}
      <div className="absolute left-3 top-3 rounded bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90">
        {day}
      </div>

      {/* Focus ring for a11y when tiled used as link */}
      <a href={href} className="absolute inset-0 focus:outline-none focus:ring-4 focus:ring-white/40" aria-label={title}></a>
    </article>
  );
}

// --- Demo data (replace with your own) ---
const demoItems = [
  {
    image:
      "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=1600&auto=format&fit=crop",
    day: "MONDAY",
    time: "6AM - 8AM",
    title: "Mobility & Core",
  },
  {
    image:
      Gym1,
    day: "TUESDAY",
    time: "7PM - 9PM",
    title: "Dumbbell Strength",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
    day: "WEDNESDAY",
    time: "6PM - 8PM",
    title: "Olympic Lifts",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop",
    day: "THURSDAY",
    time: "5PM - 7PM",
    title: "Leg Day Focus",
  },
  {
    image:
     Gym3,
    day: "FRIDAY",
    time: "6PM - 9PM",
    title: "Battle Ropes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop",
    day: "SATURDAY",
    time: "8AM - 10AM",
    title: "Cardio Blast",
  },
];
