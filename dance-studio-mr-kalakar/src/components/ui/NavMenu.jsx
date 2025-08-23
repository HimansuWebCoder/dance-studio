function NavMenu({name, hrefLink}) {
	return (

         	      <a 
         		  href={hrefLink} 
         		  className="font-poppins hover:text-blue-600 decoration-[#6A9C89] text-[#273F4F] text-balance font-semibold text-xl tracking-widest">
                   {name}         		  	
         		  </a>

		)
}

export default NavMenu;
