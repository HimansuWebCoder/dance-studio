// function Footer() {
// 	return (
//          <div></div>
// 		)
// }

// export default Footer;

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-12 pb-6 relative overflow-hidden">
      {/* Decorative Blur Shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <img 
            src="/images/logo.webp" 
            alt="Mr Kalakar Logo" 
            className="w-32 mb-4 drop-shadow-lg"
          />
          <p className="text-gray-300 font-poppins tracking-wider text-sm leading-relaxed">
            Bringing rhythm, art, and passion together.  
            Experience the joy of dance with Mr Kalakars Dance Studio.
          </p>
        </div>

        {/* Quick Links */}
        <div className="font-poppins grid w-fit">
          <h3 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h3>
        <div className="font-poppins grid gap-4 grid-cols-1 md:grid-cols-2 w-fit">
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#achievements" className="hover:text-white transition">Achievements</a></li>
            <li><a href="#studio" className="hover:text-white transition">Our Studio</a></li>
            <li><a href="#studiohours" className="hover:text-white transition">Studio Hours</a></li>
            
          </ul>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#classes" className="hover:text-white transition">Our Classes</a></li>
            <li><a href="#media" className="hover:text-white transition">Media Gallery</a></li>
            <li><a href="#Testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#instructors" className="hover:text-white transition">Instructors</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>
        </div>

        {/* Contact Info */}
        <div className="w-fit">
          <h3 className="text-lg font-semibold font-poppins mb-4 text-pink-400">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2 font-poppins">
              <MdPhone className="text-pink-400 text-xl" /> +91-9827074303 / +91-9078230458
            </li>
            <li className="flex items-center gap-2 font-poppins tracking-wider">
              <MdEmail className="text-pink-400 text-xl" /> studiomrdance4@gmail.com
            </li>
            <li className="flex items-center gap-2 font-poppins">
              <MdLocationOn size="50" className="text-pink-400 text-xl " />Sundarpada Hitech, Mm mart 3rd floor, Jatni Road, Bhubaneswar, Odisha, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-pink-400">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Mr Kalakars Dance Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
