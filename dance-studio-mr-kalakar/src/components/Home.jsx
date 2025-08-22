function Home() {
	return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 m-4 rounded-2xl bg-gradient-to-br from-pink-50 via-white to-violet-50 overflow-hidden">
  
  {/* Background Accent (subtle pattern / gradient overlay) */}
  <div className="absolute inset-0 bg-[url('/images/bg.webp')] bg-cover bg-center opacity-10"></div>
  
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
    <img src="/images/header-dance2.png" alt="" className="absolute -top-8 right-0 w-20 md:w-28 animate-float" />
  </div>
</div>


//          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow-sm m-4 relative place-content-center place-items-center">
             
//              {/*<div className="absolute inset-0 bg-[url('/images/bg.webp')] bg-cover bg-center"></div>*/}

//          	<div className="flex flex-col shadow-xs rounded-lg p-2 justify-center bg-white/40 backdrop-blur-lg bg-cover bg-center  h-full items-start gap-8">
//          		<h1 className="text-4xl text-balance md:text-6xl bg-linear-to-r from-pink-500 leading-10 md:leading-18 to-violet-500 bg-clip-text text-transparent font-bold font-poppins">Express Yourself Through Dance — Step Into the Rhythm of Life</h1>
//          		<h2 className="text-xl md:text-2xl font-medium text-[#154D71] leading-7 md:leading-8 font-poppins ">Join our community of passionate dancers and experience the joy of movement</h2>
//          		<div className="w-full">
//          			<button className="flex block w-40 md:w-[14rem] relative h-12 md:h-14 gap-2 justify-center items-center font-roboto font-bold text-[#222831] bg-[#E4004B] p-2 text-white text-xl rounded-full">
//          			Join Us Now
//            			  <img src="/images/star3.png" alt="" className="md:w-10 md:h-10 w-6 h-6 top-3 right-0 absolute md:top-2 md:right-2 aspect-[1/1] object-contain" />
//            			  <img src="/images/star3.png" alt="" className="md:w-10 md:h-10 w-6 h-6 top-3 left-0 absolute md:top-2 md:left-2 aspect-[1/1] object-contain" />
//          			</button>
//          		</div>
//          	</div>

//          	<div className="bg-[url('/images/bg-home-img2.png')]  rounded-lg h-fit bg-no-repeat bg-contain bg-center bg-contain">
//          		 <div className="max-w-full h-fit flex justify-center items-center">
//          		 	<img src="/images/home-bg-image-dance-girl4.webp" alt="home-bg-image-dance-girl" className="w-200 h-full aspect-[1/1] object-contain" />
//          		 </div>
//          	</div>
            
//                {/* <div className="absolute w-14 h-14 aspect-[1/1] top-100 right-100">
//          		 	<img src="/images/header-dance2.png" alt="" className="w-full h-full object-contain" />
//          		 </div>
// */}
//          </div>
		)
}

export default Home;