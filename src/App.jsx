import "./App.css";
import { About } from "./containers/About";
import { AllInOne } from "./containers/AllInOne";
import { Hero } from "./containers/Hero";
import { NavBar } from "./containers/NavBar";
import { Support } from "./containers/Support";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
    </>
  );
}

export default App;
