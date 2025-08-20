import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Home from "./components/Home.jsx";
import HeaderIntro from "./components/ui/HeaderIntro.jsx";
import About from "./components/About.jsx";
import Achievements from "./components/Achievements.jsx";

function App() {
  return (
    <div>
     <Header />
    <Navigation />
    <Home />
    <HeaderIntro name="ABOUT US"/>
    <About />
    <HeaderIntro name="Our Achievements"/>
    <Achievements />
    </div>
  )
}

export default App
