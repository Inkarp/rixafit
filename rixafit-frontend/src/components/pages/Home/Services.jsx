import { FaUserTie, FaUsers, FaChalkboardTeacher, FaGlobe, FaWallet, FaHeartbeat } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaUserTie size={40} className="text-yellow-400" />,
      title: "PERSONAL TRAINING",
      desc: "Wealth management is the ability of an advisor or advisory team to deliver a full range of financial services and products to an affluent client in a consultative way.",
    },
    {
      icon: <FaUsers size={40} className="text-yellow-400" />,
      title: "SPECIAL CLASSES",
      desc: "While stocks typically are higher risk investments due to market volatility, they offer potentially high returns. Let us help you manage your portfolio and offer financial advice.",
    },
    {
      icon: <FaGlobe size={40} className="text-yellow-400" />,
      title: "PERSONAL TRAINING",
      desc: "We offer a variety of solutions from leading financial service providers, so you have many options when deciding what type of annuity is right for you.",
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-yellow-400" />,
      title: "GROUP CLASSES",
      desc: "Finding a balance with your money is a crucial part of personal finance. Saving for retirement does not have to be mutually exclusive from saving for college.",
    },
    {
      icon: <FaHeartbeat size={40} className="text-yellow-400" />,
      title: "GROUP OWNERS",
      desc: "You need a financial plan — one that addresses financial needs for every stage of your business life cycle and takes into account your personal financial goals and dreams.",
    },
    {
      icon: <FaWallet size={40} className="text-yellow-400" />,
      title: "CASH & CREDIT",
      desc: "You may select from our comprehensive suite of managed account programs, which are designed for various levels of investment experience and sophistication.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-16 px-6 md:px-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/src/assets/gym-bg.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-4">Our Service</h2>
        <p className="text-gray-300 mb-12">
          Managing capital for institutions and private investors all over the world. 
          Let investment professionals help you.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-6"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
