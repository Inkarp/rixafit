import React from "react";
import FitnessImg from "/src/assets/Model.png"; 

const defaultLeft = [
  {
    title: "Get fitted",
    desc:
      "Arcu a tellus pellentesque ultrices. Ut euismod luctus elit id eleifend. Donec semper massa a imperdiet mattis.",
  },
  {
    title: "Try Pilates",
    desc:
      "Ut euismod luctus elit id eleifend. Donec semper massa a imperdiet mattis. In vel mattis neque, nec ultricies lectus.",
  },
  {
    title: "Healthy Diet",
    desc:
      "Arcu a tellus pellentesque ultrices. Ut euismod luctus elit id eleifend. Donec semper massa a imperdiet mattis.",
  },
];

const defaultRight = [
  {
    title: "Meditation",
    desc:
      "Arcu a tellus pellentesque ultrices. Ut euismod luctus elit id eleifend. Donec semper massa a imperdiet mattis.",
  },
  {
    title: "Diet Plan",
    desc:
      "Ut euismod luctus elit id eleifend. Donec semper massa a imperdiet mattis. In vel mattis neque, nec ultricies lectus.",
  },
  {
    title: "Grow Muscles",
    desc:
      "Arcu a tellus pellentesque ultrices. Ut euismod luctus elit id eleifend. Donec semper massa a imperdiet mattis.",
  },
];
export default function Benefits({
  centerImg = FitnessImg,
  leftItems = defaultLeft,
  rightItems = defaultRight,
}) {
  return (
    <section className="w-full  py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          {/* Left column */}
          <div className="space-y-10">
            {leftItems.map((it, i) => (
              <BenefitRow key={i} idx={i + 1} title={it.title} desc={it.desc} align="left" />
            ))}
          </div>

          {/* Center hero with soft radial glow */}
          <div className="relative order-first lg:order-none">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.08),transparent_60%)]" />
            <div className="relative mx-auto w-72 sm:w-80 md:w-96 lg:w-80 xl:w-96">
              <img
                src={centerImg}
                alt="Athlete performing jump"
                className="w-full h-auto drop-shadow-2xl select-none"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {rightItems.map((it, i) => (
              <BenefitRow key={i} idx={i + leftItems.length + 1} title={it.title} desc={it.desc} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitRow({ idx, title, desc, align = "left" }) {
  const NumberBadge = (
    <span className="grid w-40 aspect-square place-items-center rounded-full bg-[#2042ff] text-white text-lg font-extrabold shadow-md">
  {String(idx).padStart(2, "0")}
</span>

  );

  return (
    <div
      className={
        "flex items-start gap-5 text-[#2d3648]" +
        (align === "right" ? " flex-row-reverse text-right" : "")
      }
    >
      {NumberBadge}
      <div className="max-w-md">
        <h3 className="text-2xl font-extrabold text-[#0b0c1d]">{title}</h3>
        <p className="mt-2 text-[15px] leading-7 text-[#627086]">{desc}</p>
      </div>
    </div>
  );
}


