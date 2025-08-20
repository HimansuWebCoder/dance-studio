function Achievements() {
	return (
         <div className="max-w-full h-fit m-4 relative flex md:flex-row flex-col gap-2 p-2">

         	 <div className="grid md:grid-cols-1 grid-cols-2 gap-2 rounded-lg shadow-xl flex justify-center items-center">
         	 	<div className="rounded-lg p-2">
         	 		<img src="/images/dance1.jpg" alt="" className="rounded-lg w-full h-full object-contain" />
         	 	</div>
         	 	<div className="rounded-lg p-2">
         	 		<img src="/images/dance2.jpg" alt="" className="rounded-lg w-full h-full object-contain" />
         	 	</div>
         	 </div>

         	 	{/*<div className="absolute w-[10rem] p-1 rounded-lg md:w-[40rem] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">*/}
         	 	<div className="rounded-lg shadow-xl p-2 flex justify-center items-center">
         	 		<img src="/images/about-side-image.jpg" alt="" className="rounded-lg w-full h-full object-contain" />
         	 	</div>

         	 <div className="grid md:grid-cols-1 grid-cols-2 gap-2 rounded-lg shadow-xl flex justify-center items-center">
         	 	<div className="rounded-lg p-2">
         	 		<img src="/images/dance3.jpg" alt="" className="rounded-lg w-full h-full object-contain" />
         	 	</div>
         	 	<div className="rounded-lg p-2">
         	 		<img src="/images/dance4.jpg" alt="" className="rounded-lg w-full h-full object-contain" />
         	 	</div>
         	 </div>


         </div>
		)
}

export default Achievements;