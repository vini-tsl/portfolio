import AboutMe from "./components/AboutMe";
import Hability from "./components/Hability";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import FluidCursor from "./components/FluidCursor";
import "./styles/base.css"
import "./styles/layout.css"
import "./styles/hero.css"
import "./styles/components.css"

import "./styles/hability.css"
import "./styles/about.css"
import "./styles/contacts.css"
import "./styles/projects.css"

import "./styles/responsive.css"
import perfil from "./assets/perfil.png";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";



function App() {
  
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    /* ===== REVEAL ON SCROLL ===== */
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-show");
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => {
      section.classList.add("section-hidden");
      revealObserver.observe(section);
    });

    
  }, []);

  const [text] = useTypewriter({
    words: ["Sou Vinicius", "Sou Desenvolvedor Backend", "E Desenvolvedor Frontend"],
    loop: true,
    delaySpeed: 1600,
    typeSpeed: 70,
    deleteSpeed: 45,
  });

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero hero-with-photo">
            <div className="hero-text">
              <h1>
                Bem vindo, <span className="typewriter">{text}</span>
                <Cursor cursorStyle="|" />
              </h1>
              <p>Você pode encontrar meus projetos e competências aqui.</p>

              <div className="buttons">
                <a href="#hability" className="btn">
                  Ver Competências
                </a>
                <a href="#projects" className="btn outline">
                  Ver Projetos
                </a>
                <a href="#contacts" className="btn outline">
                  Ver Contato
                </a>
              </div>
            </div>
            <div className="scroll-indicator">
              <span>SCROLL</span>
            </div>
            <div className="hero-photo">
              <img src={perfil} alt="Foto de perfil" className="perfil" />
            </div>
          </div>
        </div>
      </section>
      

      <section id="about">
        <div className="container">
          <AboutMe />
        </div>
      </section>
      <section id="hability">
        <div className="container">
          <Hability />
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <Projects />
        </div>
      </section>

      <section id="contacts">
        <div className="container">
          <Contacts />
        </div>
      </section>
      <FluidCursor />
    </>
  );
}

export default App;
