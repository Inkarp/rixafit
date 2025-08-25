import { FaCheckCircle } from "react-icons/fa";

export default function Plans() {
  return (
    <section className="w-full bg-black text-white py-20 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Side - Title */}
        <div>
          <h2 className="text-4xl font-extrabold leading-snug">
            CHOOSE OUR <br /> PLANS
          </h2>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            distinctio minima voluptatum.
          </p>
        </div>

        {/* Monthly Plan */}
        <div className="border border-yellow-500 p-8 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <div>
            <h3 className="text-xl font-bold mb-2">MONTHLY</h3>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" /> Instructor
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" /> Free Drink
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" /> Get Supplement
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" /> Free Support
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <p className="text-3xl font-bold">$35</p>
            <button className="mt-4 w-full bg-yellow-500 text-black font-semibold py-3 hover:bg-yellow-600 transition">
              Choose Now
            </button>
          </div>
        </div>

        {/* Annual Plan */}
        <div className="border border-yellow-500 p-8 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <div>
            <h3 className="text-xl font-bold mb-2">ANNUAL</h3>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" /> Instructor
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" /> Free Drink
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" /> Get Supplement
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" /> Free Support
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <p className="text-3xl font-bold">$350</p>
            <button className="mt-4 w-full bg-yellow-500 text-black font-semibold py-3 hover:bg-yellow-600 transition">
              Choose Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
