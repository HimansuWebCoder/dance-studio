function About() {
	return (
         <div className="grid grid-cols-1 max-w-full md:grid-cols-5 p-2 md:m-4 md:p-4">
         	<div className="col-span-2 rounded-lg p-4 shadow-xl">
         		<img src="/images/about-side-image.jpg" alt="" className="w-full h-full object-contain" />
         	</div>
         	<div className="col-span-3 rounded-lg p-4 shadow-xl flex flex-col gap-4 p-4 ">
         	    <h1 className="text-2xl font-bold text-[#243642] font-roboto">MR Kalakar Dance Studio</h1>
         		<p className="text-xl font-base text-[#333446] font-poppins">At MR Kalakar Dance Studio, we believe that dance is more than just movement – it’s an expression of freedom, joy, and creativity. Our studio was founded with a vision to create a space where people of all ages can explore their passion for dance, build confidence, and connect with others through rhythm and movement.</p>
         		<p className="text-xl font-base text-[#333446] font-poppins">At MR Kalakar, every beat tells a story and every step takes you closer to discovering the artist within you. Whether you’re here to learn, perform, or simply enjoy the magic of dance, we welcome you to be a part of our vibrant community. ✨ Dance. Express. Inspire.</p>
         	</div>
         </div>
		)
}

export default About;