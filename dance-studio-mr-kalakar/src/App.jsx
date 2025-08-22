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
import Feedback from "./components/Feedback.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import InstagramSection from "./components/Instagram.jsx";
import Instructors from "./components/Instructors.jsx";

function App() {
  return (
    <div className="bg-[url(/images/bg2.jpg) bg-cover bg-no-repeat h-screen]">
     <Header />
    <Navigation />
    <Home />
    <HeaderIntro name="ABOUT US"/>
    <About />
    <HeaderIntro name="OUR ACHIEVEMENTS"/>
    <Achievements />
    <HeaderIntro name="OUR STUDIO"/>
    <Studio />
    <HeaderIntro name="OUR CLASSES"/>
    <SubHeaderIntro name="Discover Your Dance Styles"/>
    <Classes />
    <HeaderIntro name="STUDIO HOURS"/>
    <StudioHours />
    <HeaderIntro name="OUR INSTRUCTORS"/>
    <Instructors />
    <HeaderIntro name="OUR GALLERY/VIDEOS"/>
    <Media />
    <HeaderIntro name="TESTIMONIALS"/>
    <Feedback />
    <HeaderIntro name="GET IN TOUCH"/>
    <Contact />
    {/*<HeaderIntro name=""/>*/}
    <InstagramSection />
    <Footer />
    </div>
  )
}

export default App
