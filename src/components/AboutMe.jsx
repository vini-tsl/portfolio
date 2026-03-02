import { useEffect, useRef, useState } from "react";
import {
  FaPython, 
  FaSchool, 
  FaServer, 
  FaReact, 
  FaUniversity,
  FaBrain,
  FaLayerGroup,
  FaSyncAlt,
  FaCode,
  FaRocket,
} from "react-icons/fa";

/* ================= COUNTER ================= */

function Counter({ value, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [value, start]);

  return (
    <div className="counter-card">
      <span className="counter-value">{count}+</span>
      <span className="counter-label">{label}</span>
    </div>
  );
}

/* ================= MANIFESTO ================= */

function Manifesto() {
  return (
    <div className="manifesto">
      <p>
        Meu foco é criar sistemas claros, funcionais e bem estruturados,
        priorizando <span className="kw">lógica</span>,
        <span className="kw"> performance</span> e
        <span className="kw"> manutenção</span>.
      </p>
    </div>
  );
}

/* ================= COMO EU TRABALHO ================= */

function WorkStyle() {
  return (
    <div className="workstyle-grid">
      <div className="work-card">
        <FaBrain size={28} />
        <h4>Lógica antes de framework</h4>
        <p>Entender o problema vem antes da ferramenta.</p>
      </div>

      <div className="work-card">
        <FaLayerGroup size={28} />
        <h4>Código limpo</h4>
        <p>Organização e legibilidade como prioridade.</p>
      </div>

      <div className="work-card">
        <FaSyncAlt size={28} />
        <h4>Prática diária</h4>
        <p>Aprendizado contínuo com projetos reais.</p>
      </div>
    </div>
  );
}



const data = [
  {
    id: 1,
    year: "2022",
    icon: <FaPython />,
    title: "Estudos em Python",
  },
  {
    id: 2,
    year: "2023",
    icon: <FaSchool />,
    title: "T.I no IFPB",
  },
  {
    id: 3,
    year: "2024",
    icon: <FaServer />,
    title: "Projetos Web com Flask",
  },
  {
    id: 4,
    year: "2025",
    icon: <FaReact />,
    title: "Estudo de React + APIs",
  },
  { 
    id: 5,
    year: "2026",
    icon: <FaUniversity />,
    title: "ADS na UNIPÊ",
  },
];

export function TimelineInteractive() {
  const [active, setActive] = useState(null);

  return (
    <div className="timeline-interactive">
      {data.map((item, i) => (
        <div
          key={item.id}
          role="button"
          tabIndex={0}
          className={`
            tl-milestone 
          `}
        >
          <div className="tl-icon">{item.icon}</div>
          <div className="tl-dot" />

          <span className="tl-year">{item.year}</span>
          <strong>{item.title}</strong>
          
        </div>
      ))}
    </div>
  );
}






/* ================= ABOUT ME ================= */

function AboutMe() {
  const sectionRef = useRef(null);
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounters(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="about-me" className="about-premium" ref={sectionRef}>
      <h2>Sobre Mim</h2>

      {/* TEXTO */}
      <p>
        Sou Vinicius Teixeira, desenvolvedor backend apaixonado por tecnologia
        e por transformar ideias em sistemas funcionais.
      </p>

      <p>
        Atualmente foco em <span className="kw">Python</span>,
        <span className="kw"> Flask</span> e construção de
        <span className="kw"> APIs</span>, enquanto evoluo no frontend com
        <span className="kw"> React</span>.
      </p>


      {/* COMO EU TRABALHO */}
      <WorkStyle />


      <TimelineInteractive />  

      {/* CONTADORES */}
      <div className="counters-grid">
        <Counter value={3} label="Anos estudando" start={startCounters} />
        <Counter value={12} label="Projetos criados" start={startCounters} />
        <Counter value={100} label="Foco em evolução" start={startCounters} />
      </div>
    </div>
  );
}

export default AboutMe;
