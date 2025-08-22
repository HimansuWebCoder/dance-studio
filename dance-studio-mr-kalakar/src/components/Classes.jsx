function Classes() {
	return (
         <div className="max-w-6xl mx-auto px-4 py-10">
  {/*<h2 className="text-2xl text-[#2C4E80] font-montserrat font-bold text-center mb-10">Discover Your Dance Styles</h2>*/}

  <div className="grid grid-cols-2 sm:grid-cols-2 font-poppins md:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Card */}
    <div 
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl focus-within:shadow-2xl transition duration-300 cursor-pointer" 
      tabIndex="0"
    >
      <div className="overflow-hidden">
        <img 
          src="/images/style.jpeg" 
          alt="Hip Hop" 
          className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110 group-focus:scale-110 active:scale-110" 
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg text-[#2C4E80] text-[#2C4E80] font-semibold  transition group-hover:text-[#4793AF] group-focus:text-[#4793AF]">Hip Hop</h3>
      </div>
    </div>

    {/* Card */}
    <div 
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl focus-within:shadow-2xl transition duration-300 cursor-pointer" 
      tabIndex="0"
    >
      <div className="overflow-hidden">
        <img 
          src="/images/style.jpeg" 
          alt="Salsa" 
          className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110 group-focus:scale-110 active:scale-110" 
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg text-[#2C4E80] font-semibold transition group-hover:text-[#4793AF] group-focus:text-[#4793AF]">Salsa</h3>
      </div>
    </div>

    {/* Card */}
    <div 
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl focus-within:shadow-2xl transition duration-300 cursor-pointer" 
      tabIndex="0"
    >
      <div className="overflow-hidden">
        <img 
          src="/images/style.jpeg" 
          alt="Ballet" 
          className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110 group-focus:scale-110 active:scale-110" 
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg text-[#2C4E80] font-semibold transition group-hover:text-[#4793AF] group-focus:text-[#4793AF]">Ballet</h3>
      </div>
    </div>

    {/* Card */}
    <div 
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl focus-within:shadow-2xl transition duration-300 cursor-pointer" 
      tabIndex="0"
    >
      <div className="overflow-hidden">
        <img 
          src="/images/style.jpeg" 
          alt="Heels" 
          className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110 group-focus:scale-110 active:scale-110" 
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg text-[#2C4E80] font-semibold transition group-hover:text-[#4793AF] group-focus:text-[#4793AF]">Heels</h3>
      </div>
    </div>
  </div>
</div>

		)
}

export default Classes;