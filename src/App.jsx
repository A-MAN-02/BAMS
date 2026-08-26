import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Capabilities from "./components/Capabilities";
import TechnicalStats from "./components/TechnicalStats";
import Quality from "./components/Quality";
import CompanyAlbum from "./components/CompanyAlbum";
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
      <Footer />
    </>
  );
}

export default App;
