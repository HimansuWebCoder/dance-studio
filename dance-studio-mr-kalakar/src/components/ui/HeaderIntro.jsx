function HeaderIntro({name, id}) {
	return (
         <div className="max-w-full text-center px-1">
         	<h1 id={id} className="scroll-mt-24 bg-clip-text text-transparent tracking-[0.2rem] bg-linear-to-r from-[#00809D]  to-[#34699A] font-anton text-3xl md:text-4xl ">{name}</h1>
         </div>

		)
}

export default HeaderIntro;
