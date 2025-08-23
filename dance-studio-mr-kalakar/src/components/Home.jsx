function Home({id}) {
	return (
    <div id={id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8  bg-gradient-to-br from-pink-50 via-white to-violet-50 overflow-hidden">
  
  {/* Background Accent (subtle pattern / gradient overlay) */}
  {/*<div className="absolute inset-0 bg-[url('/images/bg3.jpg')] bg-cover bg-center opacity-20"></div>*/}
  <div className="absolute inset-0 bg-[url('/images/dancebg.jpg')] bg-cover bg-center opacity-40"></div>
  
  {/* Left Content */}
  <div className="relative z-10 flex flex-col text-balance gap-6 justify-center items-start">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-poppins bg-gradient-to-r from-[#0079FF] via-[#5EABD6] to-pink-500 bg-clip-text text-transparent">
      Express Yourself Through Dance —
      <br className="hidden md:block" />
      Step Into the Rhythm of Life
    </h1>

    <h2 className="text-lg md:text-2xl font-medium text-[#154D71] leading-relaxed font-poppins">
      Join our community of passionate dancers and experience the joy of movement
    </h2>

    {/* CTA Button */}
    <div>
      <button className="relative flex items-center justify-center gap-2 px-6 md:px-10 py-3 md:py-4 text-lg md:text-xl font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-pink-600 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
        Join Us Now
        {/* Decorative Stars */}
        <img src="/images/star3.png" alt="" className="absolute -top-2 -right-3 w-6 h-6 md:w-10 md:h-10 animate-bounce" />
        <img src="/images/star3.png" alt="" className="absolute -bottom-2 -left-3 w-6 h-6 md:w-10 md:h-10 animate-spin-slow" />
      </button>
    </div>
  </div>

  {/* Right Image */}
  <div className="relative flex justify-center items-center z-10">
    <div className="bg-[url('/images/bg-home-img2.png')] bg-contain bg-no-repeat bg-center rounded-2xl p-4 flex justify-center items-center">
      <img
        src="/images/home-bg-image-dance-girl4.webp"
        alt="home dance girl"
        className="w-72 md:w-[28rem] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
      />
    </div>
    {/* Floating Decorative Element */}
    <img src="/images/header-dance2.png" alt="" className="absolute -top-3 right-0 w-20 md:w-28 animate-float" />
  </div>
</div>
		)
}

export default Home;