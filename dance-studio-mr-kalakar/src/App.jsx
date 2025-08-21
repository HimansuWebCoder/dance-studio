import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Home from "./components/Home.jsx";
import HeaderIntro from "./components/ui/HeaderIntro.jsx";
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
    <div className="">
     {/*<Header />*/}
    <Navigation />
    <Home />
    <HeaderIntro name="ABOUT US"/>
    <About />
    <HeaderIntro name="Our Achievements"/>
    <Achievements />
    <HeaderIntro name="Our Studio"/>
    <Studio />
    <HeaderIntro name="Our Classes"/>
    <Classes />
    <HeaderIntro name="Studio Hours"/>
    <StudioHours />
    <HeaderIntro name="Instructors"/>
    <Instructors />
    <HeaderIntro name="Our Gallery and Memory"/>
    <Media />
    <HeaderIntro name="Feedbacks"/>
    <Feedback />
    <HeaderIntro name="Get In Touch"/>
    <Contact />
    <HeaderIntro name="Our Social Media"/>
    <InstagramSection />
    <Footer />
    </div>
  )
}

export default App
