import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Capabilities from "./components/Capabilities";
import TechnicalStats from "./components/TechnicalStats";
import Quality from "./components/Quality";
import CompanyAlbum from "./components/CompanyAlbum";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Capabilities />
      <TechnicalStats />
      <CompanyAlbum/>
      <Quality />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
