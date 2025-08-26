// CLASS GRID – React + Tailwind
// Matches the screenshot: 3 columns, image on top, centered uppercase title, muted paragraph.
// Usage: <ClassGrid items={[{img, title, desc}, ...]} />

export default function Classes({ items = demoItems }) {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {items.map((it, i) => (
            <article key={i} className="flex flex-col items-center text-center">
              {/* Image */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl md:text-2xl font-extrabold tracking-wide uppercase text-[#1b1b1b]">
                {it.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[36ch] text-[15px] leading-7 text-[#6b7280]">
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const demoItems = [
  {
    title: "Pilates",
    desc:
      "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.",
    img: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Body Building",
    desc:
      "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.",
    img: "https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Fitness",
    desc:
      "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Yoga",
    desc:
      "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "TRX",
    desc:
      "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.",
    img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Spinning",
    desc:
      "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop",
  },
];
