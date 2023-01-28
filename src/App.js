import { useState, createContext } from "react";
import { Navbar, SideNav } from "./components/Navigation";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from './components/Projects'

export const AppContext = createContext(null);


function App() {

  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <div className="scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <AppContext.Provider value={{ openSideNav, setOpenSideNav }}>
        <Navbar />
        <SideNav />
        <Home />
        <About />
        <Contact />
        <Projects />
      </AppContext.Provider>
    </div>
  );
}

export default App;
