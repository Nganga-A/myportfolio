import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
