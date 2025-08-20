import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import NavMenu from "./ui/NavMenu.jsx";

const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Studio", href: "#studio" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact Us", href: "#contact" },
  ];

  const dropDownLinks = [
    { name: "Classes", href: "#classes" },
    { name: "Studio Hours", href: "#studiohours" },
    { name: "Media", href: "#media" },
    { name: "Feedbacks", href: "#feedbacks" },
  ];

function Navigation() {

	const [ isOpenNavMenu, setIsOpenNavMenu ] = useState(false);
	const [ openDropDownMenus, setOpenDropDownMenus ] = useState(false);

	function openNavHandler() {
		setIsOpenNavMenu(!isOpenNavMenu);
	}

	function openDropDownHandler() {
		setOpenDropDownMenus(!openDropDownMenus);
	}

	return (
         <div className="max-w-full relative h-fit flex justify-between m-4 p-4 shadow-sm items-center">
         {/* Logo*/}
         	<div className="w-14 h-14 aspect-[1/1]">
         		<img src="./images/logo.webp" alt="Logo" className="w-full h-full object-contain" />
         	</div>

         {/* Nav menus Desktop*/}
         	<nav className="h-fit hidden md:flex justify-center items-center gap-4 p-4">
         		  <NavMenu name="Home" hrefLink="#home" />
         		  <NavMenu name="About Us" hrefLink="#about" />
         		  <NavMenu name="Our Studio" hrefLink="#studio" />
         		  <MdKeyboardArrowDown onClick={openDropDownHandler} size="30" className="hover:bg-blue-200" />
         		  <NavMenu name="Achievements" hrefLink="#achievements" />
         		  <NavMenu name="Contact Us" hrefLink="#contact" />
         	</nav>
            
            <button onClick={openNavHandler} className="md:hidden w-fit h-fit flex justify-center items-center">
            	 {
            	 	isOpenNavMenu ? 
            	 	<IoMdClose size="30" className="" /> 
            	 	: 
            	 	<GiHamburgerMenu size="30" className="" /> 
            	 }
            </button>
          
          {/*Mobile nav menu*/}

            {
            	isOpenNavMenu && (
            		<>
                      {/* Nav menus Desktop*/}
		         	<nav className="h-fit shadow-xl bg-gradient-to-r from-[#ECFAE5] to-[#D3F1DF] absolute top-18 rounded-lg right-5 z-10 md:hidden flex flex-col gap-4 p-2">
		         		  <NavMenu name="Home" hrefLink="#home" />
		         		  <NavMenu name="About Us" hrefLink="#about" />
		         		  <NavMenu name="Our Studio" hrefLink="#studio" />
		         		  <MdKeyboardArrowDown onClick={openDropDownHandler} size="40" className="hover:bg-blue-20" />
		         		  <NavMenu name="Achievements" hrefLink="#achievements" />
		         		  <NavMenu name="Contact Us" hrefLink="#contact" />
		         	</nav>
         	        </>
            		)
            }
            
             {/* Dropdown Menu*/}
             {
            	openDropDownMenus && (
            		<>
         	<div className="h-fit shadow-xl bg-gradient-to-r from-[#F8F5E9] to-[#EAFAEA] absolute z-10 top-62 right-8 md:top-18 md:right-110 rounded-lg flex flex-col gap-4 p-4">
         		{
         			dropDownLinks.map(link => (
                       <a
                        key={link.name}
                        href={link.href}
                        className="font-poppins text-[#273F4F] hover:underline decoration-[#6A9C89] text-balance font-bold text-xl tracking-widest"
                       >
                       	{link.name}
                       </a>
         				))
         		}
         	</div>
         	</>
            		)
            }
           

         </div>
		)
}

export default Navigation;