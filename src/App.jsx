import {About, Contact, Experience, Footer, Hero, Navbar, Projects, TechStack, ScrollToTop} from "./components";

function App() {
  return (
    <div className="bg-[#0f0a1f] text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;