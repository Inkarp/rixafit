// SEE OUR GALLERY GYM – React + Tailwind CSS
// Usage: <GalleryGym images={["/imgs/1.jpg", "/imgs/2.jpg", ...]} />
// Tailwind required. Replace image paths with your assets.
import Gym1 from "../../../assets/gallery/Gym1.jpg";
import Gym2 from "../../../assets/gallery/Gym2.jpg";
import Gym3 from "../../../assets/gallery/Gym3.jpg";
import Gym4 from "../../../assets/gallery/Gym4.jpg";    
import Gym5 from "../../../assets/gallery/Gym5.jpg";
import Gym6 from "../../../assets/gallery/Gym6.jpg";
const defaultImages = [
  Gym1,
  Gym2,
    Gym3,
    Gym4,
    Gym5,
    Gym6,
];
export default function Gallery({ images = defaultImages }) {
  return (
    <section className="relative w-full bg-[#0b0b0b] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="flex items-center gap-6 md:gap-10 mb-10 md:mb-14">
          <span className="hidden sm:block flex-1 h-[6px] rounded bg-[#f0cd1a]" />
          <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-wider text-white uppercase whitespace-nowrap">
            See Our<br className="sm:hidden" /> Gallery Gym
          </h2>
          <span className="hidden sm:block flex-1 h-[6px] rounded bg-[#f0cd1a]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {images.map((src, i) => (
            <figure
              key={i}
              className="relative bg-black/20 overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <img
                src={src}
                alt={`Gym gallery ${i + 1}`}
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


