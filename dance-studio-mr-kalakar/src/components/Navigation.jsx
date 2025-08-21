// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdClose } from "react-icons/io";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { useState } from "react";
// import NavMenu from "./ui/NavMenu.jsx";

// const links = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Our Studio", href: "#studio" },
//     { name: "Achievements", href: "#achievements" },
//     { name: "Contact Us", href: "#contact" },
//   ];

//   const dropDownLinks = [
//     { name: "Classes", href: "#classes" },
//     { name: "Studio Hours", href: "#studiohours" },
//     { name: "Media", href: "#media" },
//     { name: "Feedbacks", href: "#feedbacks" },
//   ];

// function Navigation() {

// 	const [ isOpenNavMenu, setIsOpenNavMenu ] = useState(false);
// 	const [ openDropDownMenus, setOpenDropDownMenus ] = useState(false);

// 	function openNavHandler() {
// 		setIsOpenNavMenu(!isOpenNavMenu);
// 	}

// 	function openDropDownHandler() {
// 		setOpenDropDownMenus(!openDropDownMenus);
// 	}

// 	return (
//          <div className="max-w-full relative h-fit flex justify-between m-4 p-4 shadow-sm items-center">
//          {/* Logo*/}
//          	<div className="w-14 h-14 aspect-[1/1]">
//          		<img src="./images/logo.webp" alt="Logo" className="w-full h-full object-contain" />
//          	</div>

//          {/* Nav menus Desktop*/}
//          	<nav className="h-fit hidden md:flex justify-center items-center gap-4 p-4">
//          		  <NavMenu name="Home" hrefLink="#home" />
//          		  <NavMenu name="About Us" hrefLink="#about" />
//          		  <NavMenu name="Our Studio" hrefLink="#studio" />
//          		  <MdKeyboardArrowDown onClick={openDropDownHandler} size="30" className="hover:bg-blue-200" />
//          		  <NavMenu name="Achievements" hrefLink="#achievements" />
//          		  <NavMenu name="Contact Us" hrefLink="#contact" />
//          	</nav>
            
//             <button onClick={openNavHandler} className="md:hidden w-fit h-fit flex justify-center items-center">
//             	 {
//             	 	isOpenNavMenu ? 
//             	 	<IoMdClose size="30" className="" /> 
//             	 	: 
//             	 	<GiHamburgerMenu size="30" className="" /> 
//             	 }
//             </button>
          
//           {/*Mobile nav menu*/}

//             {
//             	isOpenNavMenu && (
//             		<>
//                       {/* Nav menus Desktop*/}
// 		         	<nav className="h-fit shadow-xl bg-gradient-to-r from-[#ECFAE5] to-[#D3F1DF] absolute top-18 rounded-lg right-5 z-10 md:hidden flex flex-col gap-4 p-2">
// 		         		  <NavMenu name="Home" hrefLink="#home" />
// 		         		  <NavMenu name="About Us" hrefLink="#about" />
// 		         		  <NavMenu name="Our Studio" hrefLink="#studio" />
// 		         		  <MdKeyboardArrowDown onClick={openDropDownHandler} size="40" className="hover:bg-blue-20" />
// 		         		  <NavMenu name="Achievements" hrefLink="#achievements" />
// 		         		  <NavMenu name="Contact Us" hrefLink="#contact" />
// 		         	</nav>
//          	        </>
//             		)
//             }
            
//              {/* Dropdown Menu*/}
//              {
//             	openDropDownMenus && (
//             		<>
//          	<div className="h-fit shadow-xl bg-gradient-to-r from-[#F8F5E9] to-[#EAFAEA] absolute z-10 top-62 right-8 md:top-18 md:right-110 rounded-lg flex flex-col gap-4 p-4">
//          		{
//          			dropDownLinks.map(link => (
//                        <a
//                         key={link.name}
//                         href={link.href}
//                         className="font-poppins text-[#273F4F] hover:underline decoration-[#6A9C89] text-balance font-bold text-xl tracking-widest"
//                        >
//                        	{link.name}
//                        </a>
//          				))
//          		}
//          	</div>
//          	</>
//             		)
//             }
           

//          </div>
// 		)
// }

// export default Navigation;
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
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const [openDropDownMenus, setOpenDropDownMenus] = useState(false);

  function openNavHandler() {
    setIsOpenNavMenu((prev) => !prev);
    setOpenDropDownMenus(false); // close dropdown when toggling menu
  }

  function openDropDownHandler() {
    setOpenDropDownMenus((prev) => !prev);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./images/logo.webp"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="font-poppins font-bold text-2xl text-pink-600">
            Dance Studio
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-poppins text-lg font-semibold text-gray-800">
          {links.map((link) =>
            link.name === "Our Studio" ? (
              <div key={link.name} className="relative">
                <button
                  onClick={openDropDownHandler}
                  className="flex items-center gap-1 hover:text-pink-600 transition"
                >
                  {link.name}
                  <MdKeyboardArrowDown
                    size="20"
                    className={`transition-transform ${
                      openDropDownMenus ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropDownMenus && (
                  <div className="absolute top-10 left-0 bg-white/90 backdrop-blur-lg shadow-xl rounded-lg p-4 w-48 flex flex-col gap-3 animate-fadeIn">
                    {dropDownLinks.map((drop) => (
                      <a
                        key={drop.name}
                        href={drop.href}
                        className="hover:text-pink-600 transition"
                      >
                        {drop.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavMenu key={link.name} name={link.name} hrefLink={link.href} />
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={openNavHandler}
          className="md:hidden w-10 h-10 flex justify-center items-center"
        >
          {isOpenNavMenu ? (
            <IoMdClose size="28" className="text-gray-700" />
          ) : (
            <GiHamburgerMenu size="28" className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpenNavMenu && (
  <div
    className="fixed h-screen inset-0 bg-black/40 z-40 flex justify-end"
    onClick={() => setIsOpenNavMenu(false)} // closes when clicking outside
  >
    <nav
      className="w-50 max-w-full h-100 bg-white shadow-xl p-6 mt-4 rounded-lg flex flex-col gap-4 overflow-y-auto animate-slideIn"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside menu
    >
      {links.map((link) =>
        link.name === "Our Studio" ? (
          <div key={link.name}>
            <button
              onClick={openDropDownHandler}
              className="flex justify-between w-full font-bold text-lg hover:text-pink-600 transition"
            >
              {link.name}
              <MdKeyboardArrowDown
                size={24}
                className={`transition-transform ${
                  openDropDownMenus ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropDownMenus && (
              <div className="mt-2 ml-2 flex flex-col gap-2">
                {dropDownLinks.map((drop) => (
                  <a
                    key={drop.name}
                    href={drop.href}
                    className="text-gray-700 hover:text-pink-600 transition"
                  >
                    {drop.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ) : (
          <a
            key={link.name}
            href={link.href}
            className="font-bold text-lg hover:text-pink-600 transition"
          >
            {link.name}
          </a>
        )
      )}
    </nav>
  </div>
)}

    </header>
  );
}

export default Navigation;
