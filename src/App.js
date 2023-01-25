import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from './components/Projects'


function App() {
  return (
    <div className="">
      <header className="">
        <Navbar />
      </header>
      <Home />
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
