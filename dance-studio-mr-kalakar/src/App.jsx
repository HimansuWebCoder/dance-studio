import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Home from "./components/Home.jsx";
import HeaderIntro from "./components/ui/HeaderIntro.jsx";
import SubHeaderIntro from "./components/ui/SubHeaderIntro.jsx";
import About from "./components/About.jsx";
import Achievements from "./components/Achievements.jsx";
import Studio from "./components/Studio.jsx";
import Classes from "./components/Classes.jsx";
import StudioHours from "./components/StudioHours.jsx";
import Media from "./components/Media.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import InstagramSection from "./components/Instagram.jsx";
import Instructors from "./components/Instructors.jsx";

function App() {
  return (
   <div className="bg-[url(/images/bg2.jpg)] bg-cover bg-no-repeat h-screen scroll-smooth md:scroll-auto">
  <Header />
  <Navigation />
  <Home id="home" />

  <div className="py-8 md:py-10 flex justify-center items-center gap-1 flex-col">
    <HeaderIntro id="about" name="ABOUT US" />
    <SubHeaderIntro name="Dance Grow Belong" />
  </div>
  <About />
  
  <div className="py-8 md:py-10 flex justify-center items-center gap-1 flex-col">
    <HeaderIntro id="studio" name="OUR STUDIO" />
    <SubHeaderIntro name="A space made for movement" />
  </div>
  <Studio />

  <div className="py-8 md:py-10 flex justify-center items-center gap-1 flex-col">
    <HeaderIntro id="achievements" name="OUR ACHIEVEMENTS" />
    <SubHeaderIntro name="Celebrating milestones together" />
  </div>
  <Achievements />


  <div className="py-8 px-1 md:py-10 flex justify-center items-center gap-1 flex-col">
    <HeaderIntro id="classes" name="OUR CLASSES & PROGRAMS" />
    <SubHeaderIntro name="Discover Your Classes & Dance Styles" />
  </div>
  <Classes />

  <div className="py-8 md:py-10 flex justify-center items-center gap-1 flex-col">
    <HeaderIntro id="studiohours" name="STUDIO HOURS" />
    <SubHeaderIntro name="Time to dance, anytime" />
  </div>
  <StudioHours />

  <div className="py-8 md:py-10 flex justify-center items-center gap-1 flex-col">
    <HeaderIntro id="instructors" name="MEET YOUR INSTRUCTORS" />
    <SubHeaderIntro name="Your mentors in motion" />
  </div>
  <Instructors />

  <div className="py-8 md:py-10 flex justify-center items-center gap-1 flex-col">
    <HeaderIntro id="media" name="OUR GALLERY & VIDEOS" />
    <SubHeaderIntro name="Every step, a story " />
  </div>
  <Media />

  <div className="py-8 md:py-10 flex justify-center items-center gap-1 flex-col">
    <HeaderIntro id="testimonials" name="TESTIMONIALS" />
    <SubHeaderIntro name="Hear from our dancers and parents" />
  </div>
  <Testimonial />

  <div className="py-8 md:py-10 flex justify-center items-center gap-1 flex-col">
    <HeaderIntro id="contact" name="GET IN TOUCH" />
    <SubHeaderIntro name="Connect With Us" />
  </div>
  <Contact />

  {/* <HeaderIntro name=""/> */}
  {/* <InstagramSection /> */}

  <Footer />
</div>

  )
}

export default App
