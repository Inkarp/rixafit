import { FaDumbbell, FaBicycle, FaUtensils } from "react-icons/fa";
import FitnessImg from "/src/assets/Model.png"; // replace with your image

export default function WeAreDifferent() {
  const features = [
    {
      icon: <FaDumbbell size={28} className="text-yellow-600" />,
      title: "Economies of Scale",
      desc: "When you buy shares you have to pay dealing costs and admin fees, which can eat away at the value of your investment.",
    },
    {
      icon: <FaBicycle size={28} className="text-yellow-600" />,
      title: "A Way to Spread Your Risk",
      desc: "Buying shares in only one investment company effectively gives you a diversified portfolio.",
    },
    {
      icon: <FaUtensils size={28} className="text-yellow-600" />,
      title: "Manager’s Expertise",
      desc: "Each investment company uses professional management expertise.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-[#0f172a] mb-8">
            We Are Different
          </h2>

          <div className="space-y-6">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a]">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={FitnessImg}
            alt="Fitness Model"
            className="max-h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
