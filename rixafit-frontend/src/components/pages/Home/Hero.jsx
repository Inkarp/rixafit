import HeroImage from "/src/assets/HeroImage.jpg"; // Replace with your hero image

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black flex">
      {/* Left Section (Image + Overlay Text) */}
      <div className="relative w-1/2 h-full">
        <img
          src={HeroImage}
          alt="Fitness Hero"
          className="w-full h-full object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-end items-end px-12 text-white bg-black/40">
          <h1 className="text-5xl  font-bold leading-tight">
            KEEP YOUR BODY <br />
            FIT & <span className="text-red-600">STRONG</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            with <span className="font-semibold">RIXA FIT</span>
          </p>
          {/* <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold text-white w-fit transition">
            MORE ABOUT HEALTH →
          </button> */}
        </div>
      </div>

      {/* Right Section (Video) */}
      <div className="w-1/2 h-full mt-10 flex items-center justify-center bg-black">
        <iframe
          className="w-4/5 h-3/4 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // replace with your video
          title="Fitness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
