import { useState } from "react";

export default function StudioHours() {
  const [activeCard, setActiveCard] = useState("weekday");

  return (
    <section className="w-full py-12 px-4 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Display */}
      <div className="flex justify-center items-center mb-8">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full md:w-2/3 lg:w-1/2 text-center">
          {activeCard === "weekday" && (
            <div>
              <h3 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
                Weekday Hours
              </h3>
              <p className="text-gray-600 font-poppins">Mon – Sat: 8:00 AM – 11:30 AM</p>
              <p className="text-gray-600 font-poppins">&</p>
              <p className="text-gray-600 font-poppins">4:00 PM – 9:30 PM</p>
            </div>
          )}

          {activeCard === "weekend" && (
            <div>
              <h3 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
                Weekend Hours
              </h3>
              <p className="text-gray-600 font-poppins">Sun: 8:00 AM – 12:00 PM</p>
              <p className="text-gray-600 font-poppins">&</p>
              <p className="text-gray-600 font-poppins">3:00 PM – 10 PM</p>
            </div>
          )}

          
        </div>
      </div>

      {/* Small Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <button
          onClick={() => setActiveCard("weekday")}
          className={`p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 ${
            activeCard === "weekday"
              ? "bg-gradient-to-r from-[#4793AF] to-[#5272F2] text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <h4 className="text-lg font-semibold mb-2">Weekdays</h4>
          <p className="text-sm">Mon – Sat</p>
        </button>

        <button
          onClick={() => setActiveCard("weekend")}
          className={`p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 ${
            activeCard === "weekend"
              ? "bg-gradient-to-r from-[#4793AF] to-[#5272F2] text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <h4 className="text-lg font-semibold mb-2">Weekends</h4>
          <p className="text-sm">Sun</p>
        </button>
      </div>
    </section>
  );
}
