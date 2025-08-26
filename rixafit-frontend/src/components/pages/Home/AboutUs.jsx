// About & Mission Section – React + Tailwind CSS
// Drop into your page: <AboutMissionSection />
// Tailwind required. Adjust colors/text as needed.

export default function AboutUs() {
  const bars = [
    { label: "Group Classes", value: 70 },
    { label: "Special Owners", value: 50 },
    { label: "Special Classes", value: 87 },
    { label: "Personal Training", value: 95 },
  ];

  return (
    <section className="w-full bg-[#f2f4f7] py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Us */}
          <div>
            <h2 className="text-[44px] leading-tight font-extrabold tracking-tight text-[#0b0c1d] font-serif mb-6">
              About Us
            </h2>

            <div className="space-y-6 text-[#5b6470] text-lg leading-8">
              <p>
                Our Investment Company, located in Rockville, Maryland, is a full service real estate company that provides acquisition, development and finance expertise for both commercial and multi-family projects.
              </p>
              <p>
                Our experience in structuring complicated financial transactions while accommodating diverse partnership interests, has allowed it to achieve over $1 Billion in acquisitions and financing.
              </p>
            </div>

            {/* Progress Bars */}
            <div className="mt-10 space-y-6">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="flex items-center justify-between text-sm font-extrabold tracking-wide text-[#0b0c1d] uppercase">
                    <span>{b.label}</span>
                    <span>{b.value}%</span>
                  </div>
                  <div className="mt-2 h-2.5 rounded-full bg-gray-200">
                    <div
                      className="h-2.5 rounded-full bg-[#c3a326]"
                      style={{ width: `${b.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-[44px] leading-tight font-extrabold tracking-tight text-[#0b0c1d] font-serif mb-6">
              Our Mission
            </h2>

            {/* Framed video */}
            <div className="bg-white shadow-xl ring-1 ring-black/5 p-4 md:p-6 mb-8">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="RIXA Mission Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="text-[#5b6470] text-lg leading-8">
              Our goal is to maximize investor return and minimize any potential loss by applying these principles in a disciplined and pragmatic process. We rely on facts, not speculation to purchase high return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
