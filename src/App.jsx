import "./App.css";
import { About } from "./containers/About";
import { AllInOne } from "./containers/AllInOne";
import { Footer } from "./containers/Footer";
import { Hero } from "./containers/Hero";
import { NavBar } from "./containers/NavBar";
import { Pricing } from "./containers/Pricing";
import { Support } from "./containers/Support";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
