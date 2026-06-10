import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { EducationCertifications } from "./components/sections/EducationCertifications";
import { Experience } from "./components/sections/Experience";
import { Expertise } from "./components/sections/Expertise";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Stats } from "./components/sections/Stats";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-8 px-4 pb-8 pt-2 sm:px-6 lg:px-8">
        <Hero />
        <Stats />
        <Expertise />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
