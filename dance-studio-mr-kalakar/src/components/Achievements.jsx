function Achievements() {
  return (
    <div className="max-w-7xl mx-auto m-0 ">
      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {/* Big Card Left */}
        {/*<div className="rounded-none h-[200px] md:h-[200px] md:h-[280px]  flex justify-center bg-gradient-to-r from-blue-600 via-purple-400 via-green-400 via-red-400 to-blue-600 p-1 rounded-xl items-center bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 shadow-lg hover:shadow-2xl transition">*/}
        {/*<div className="rounded-none h-[200px] md:h-[200px] md:h-[280px]  flex justify-center bg-gradient-to-r from-blue-600 via-pink-400 via-red-400 via-blue-400 to-blue-400 p-1 rounded-xl items-center shadow-lg hover:shadow-2xl transition">*/}
        <div className="rounded-none h-[200px] md:h-[200px] md:h-[280px]  flex justify-center bg-gradient-to-r from-blue-600 via-purple-400 via-green-400 via-red-400 to-blue-600 p-1 rounded-xl items-center shadow-lg hover:shadow-2xl transition">
          <div className="w-full h-full flex rounded-xl justify-center items-center overflow-hidden">
            <img
              src="/images/achievement.jpeg"
              alt="Dance Studio"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Two Small Grid */}
        {/*<div className="grid grid-rows-2 grid-cols-1 gap-2 ">*/}
          <div className="h-[200px] md:h-[280px] rounded-xl bg-gradient-to-r from-blue-600 via-purple-400 via-green-400 via-red-400 to-blue-600 p-1 rounded-xl overflow-hidden">
            <img src="/images/achievement.jpeg" alt="" className="w-full h-full rounded-xl object-cover transform hover:scale-110 transition duration-500" />
          </div>
          <div className="h-[200px] md:h-[280px] rounded-xl bg-gradient-to-r from-blue-600 via-purple-400 via-green-400 via-red-400 to-blue-600 p-1 rounded-xl overflow-hidden">
            <img src="/images/achievement.jpeg" alt="" className="w-full h-full rounded-xl object-cover transform hover:scale-110 transition duration-500" />
          </div>
        {/*</div>*/}

        {/* Big Card Middle */}
        <div className="rounded-none h-[200px] md:h-[280px] rounded-xl flex justify-center items-center bg-gradient-to-tr from-red-100 via-pink-50 to-red-50 shadow-lg hover:shadow-2xl transition">
          <div className="w-full h-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-400 via-green-400 via-red-400 to-blue-600 p-1 rounded-xl flex justify-center items-center overflow-hidden">
            <img
              src="/images/achievement.jpeg"
              alt=""
              className="w-full h-full object-cover transform rounded-xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Another Two Small Grid */}
        {/*<div className="grid grid-rows-2 gap-2 ">*/}
          <div className="h-[200px] md:h-[280px] rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 via-purple-400 via-green-400 via-red-400 to-blue-600 p-1">
            <img src="/images/achievement.jpeg" alt="" className="w-full h-full rounded-xl object-cover transform hover:scale-110 transition duration-500" />
          </div>
          <div className="h-[200px] md:h-[280px] rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 via-purple-400 via-green-400 via-red-400 to-blue-600 p-1">
            <img src="/images/achievement.jpeg" alt="" className="w-full h-full rounded-xl object-cover transform hover:scale-110 transition duration-500" />
          </div>
        {/*</div>*/}

        {/* Big Card Right */}
        <div className="rounded-none h-[200px] md:h-[280px] flex justify-center items-center bg-gradient-to-bl from-indigo-100 via-purple-50 to-blue-50 shadow-lg hover:shadow-2xl transition">
          <div className="w-full h-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-400 via-green-400 via-red-400 to-blue-600 p-1 flex justify-center items-center overflow-hidden">
            <img
              src="/images/achievement.jpeg"
              alt=""
              className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        <div className="rounded-none h-[200px] md:h-[280px] flex justify-center items-center bg-gradient-to-bl from-indigo-100 via-purple-50 to-blue-50 shadow-lg hover:shadow-2xl transition">
          <div className="w-full h-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-400 via-green-400 via-red-400 to-blue-600 p-1 flex justify-center items-center overflow-hidden">
            <img
              src="/images/achievement.jpeg"
              alt=""
              className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
