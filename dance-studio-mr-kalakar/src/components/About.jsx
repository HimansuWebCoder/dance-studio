function About() {
	return (
         // <div className="grid grid-cols-1 max-w-full md:grid-cols-5 p-2 md:m-4 md:p-4">
         // 	<div className="col-span-2 rounded-lg p-4">
         // 		<img src="/images/dance.webp" alt="" className="w-full h-full object-contain" />
         // 	</div>
         // 	<div className="col-span-3 rounded-lg p-4 flex flex-col gap-4 p-4 ">
         // 	    <h1 className="text-2xl font-bold text-[#243642] font-roboto">MR Kalakar Dance Studio</h1>
         // 		<p className="text-xl font-base text-[#333446] font-poppins">At MR Kalakar Dance Studio, we believe that dance is more than just movement – it’s an expression of freedom, joy, and creativity. Our studio was founded with a vision to create a space where people of all ages can explore their passion for dance, build confidence, and connect with others through rhythm and movement.</p>
         // 		<p className="text-xl font-base text-[#333446] font-poppins">At MR Kalakar, every beat tells a story and every step takes you closer to discovering the artist within you. Whether you’re here to learn, perform, or simply enjoy the magic of dance, we welcome you to be a part of our vibrant community. ✨ Dance. Express. Inspire.</p>
         // 	</div>
         // </div>
		<div className="grid grid-cols-1 space-c md:grid-cols-5  max-w-7xl mx-auto p-4 md:p-8 bg-gradient-to-r from-[#f0f4f8] via-[#ffffff] to-[#f0f4f8] rounded-xl">
  {/* Image Section */}
  <div className="col-span-2 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-500">
    <img 
      src="/images/dance.webp" 
      alt="MR Kalakar Dance Studio" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="col-span-3 flex flex-col justify-center gap-6 p-4 md:p-8">
    <h1 className="text-3xl md:text-4xl font-extrabold text-[#243642] font-montserrat tracking-wide">
      MR Kalakar Dance Studio
    </h1>
    <p className="text-lg md:text-xl text-[#333446] font-poppins leading-relaxed">
      At <span className="font-semibold text-[#FF4C60]">MR Kalakar Dance Studio</span>, dance is not just movement – it’s a celebration of <span className="text-[#ffb400]">freedom</span>, <span className="text-[#00bfa6]">joy</span>, and <span className="text-[#7f5af0]">creativity</span>. 
      We welcome dancers of all ages to explore their passion, build confidence, and connect through rhythm and expression. 💃🕺
    </p>
    <p className="text-lg md:text-xl text-[#333446] font-poppins leading-relaxed">
      Every beat tells a story, every step uncovers the artist within. Whether you're here to <span className="font-semibold">learn</span>, <span className="font-semibold">perform</span>, or simply enjoy the magic of dance, join our vibrant community. ✨ <span className="text-[#FF4C60]">Dance. Express. Inspire.</span>
    </p>
    <button className="self-start bg-gradient-to-r from-[#5EABD6] to-[#2C4E80] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
      Join Us Today
    </button>
  </div>
</div>

		)
}

export default About;