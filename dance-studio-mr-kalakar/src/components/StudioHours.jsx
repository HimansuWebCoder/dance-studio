import { useState } from "react";

export default function StudioHours() {
  const [activeCard, setActiveCard] = useState("weekday");

  return (
    <section className="w-full py-12 px-4 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100">
      {/*<div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Studio Hours
        </h2>
        <p className="text-gray-600 mt-2">
          Find the best time to join our sessions!
        </p>
      </div>*/}

      {/* Main Display */}
      <div className="flex justify-center items-center mb-8">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full md:w-2/3 lg:w-1/2 text-center">
          {activeCard === "weekday" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Weekday Hours
              </h3>
              <p className="text-gray-600">Mon – Fri: 7:00 AM – 9:00 PM</p>
            </div>
          )}

          {activeCard === "weekend" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Weekend Hours
              </h3>
              <p className="text-gray-600">Sat – Sun: 8:00 AM – 6:00 PM</p>
            </div>
          )}

          {activeCard === "holiday" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Holiday Schedule
              </h3>
              <p className="text-gray-600">
                Open on select holidays 🎉 <br />
                (Check updates on our social media)
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Small Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <button
          onClick={() => setActiveCard("weekday")}
          className={`p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 ${
            activeCard === "weekday"
              ? "bg-gradient-to-r from-[#077A7D] to-[#273F4F] text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <h4 className="text-lg font-semibold mb-2">Weekdays</h4>
          <p className="text-sm">Mon – Fri</p>
        </button>

        <button
          onClick={() => setActiveCard("weekend")}
          className={`p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 ${
            activeCard === "weekend"
              ? "bg-gradient-to-r from-[#077A7D] to-[#273F4F] text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <h4 className="text-lg font-semibold mb-2">Weekends</h4>
          <p className="text-sm">Sat – Sun</p>
        </button>

        <button
          onClick={() => setActiveCard("holiday")}
          className={`p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 ${
            activeCard === "holiday"
              ? "bg-gradient-to-r from-[#077A7D] to-[#273F4F] text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <h4 className="text-lg font-semibold mb-2">Holidays</h4>
          <p className="text-sm">Special Days</p>
        </button>
      </div>
    </section>
  );
}
