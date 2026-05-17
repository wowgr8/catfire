import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Mission from "./components/Mission.jsx";
import Meals from "./components/Meals.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Plans from "./components/Plans.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-ink)]">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Meals />
        <HowItWorks />
        <Plans />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
