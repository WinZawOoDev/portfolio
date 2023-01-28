import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from './components/Projects'


function App() {

  return (
    <div className="scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <Navigation />
      <Home />
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
