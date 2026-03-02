import { useMemo, useState, useEffect } from "react";
import { FaCode, FaServer, FaPaintBrush, FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";

import reactLogo from "../assets/react.png";
import pythonLogo from "../assets/python.png";
import htmlLogo from "../assets/html.png";
import jsLogo from "../assets/javascript.png";
import cLogo from "../assets/c.png";
import flaskLogo from "../assets/flask.png";
import cssLogo from "../assets/css.png";
import cSharperLogo from "../assets/csharp.png";

/* ================= SKILLS DATA ================= */

const skills = [
  {
    name: "Python",
    level: "Intermediário",
    percent: 80,
    category: "Linguagem",
    description:
      "Integração de sistemas, automação de tarefas, scripts e lógica de backend.",
    image: pythonLogo,
    timeline: [
    { year: "15/03/2023", text: "Lógica e scripts iniciais" },
    { year: "30/05/2023", text: "Estrutura de Repetição" },
    { year: "25/07/2023", text: "Laços de Repetição" },
  ]
  },
  {
    name: "Flask",
    level: "Intermediário",
    percent: 75,
    category: "Backend",
    description: "Criação de APIs REST, rotas, autenticação e aplicações web.",
    image: flaskLogo,
    timeline: [
    { year: "16/04/2024", text: "Lógica e funções Flask" },
    { year: "24/06/2024", text: "Criação de Routes e APIs" },
    { year: "30/08/2024", text: "Bibliotecas e Backend com Banco de Dados" },
  ]
  },
  {
    name: "HTML",
    level: "Intermediário",
    percent: 85,
    category: "Frontend",
    description: "Estrutura semântica, acessibilidade e base de layouts web.",
    image: htmlLogo,
    timeline: [
    { year: "30/10/2022", text: "Introdução aos elementos html" },
    { year: "02/03/2024", text: "CSS básico e HTML aprofundado" },
    { year: "12/05/2025", text: "JS básico" },
  ]
  },
  {
    name: "CSS",
    level: "Intermediário",
    percent: 80,
    category: "Frontend",
    description: "Layouts responsivos, animações, efeitos visuais e dark UI.",
    image: cssLogo,
    timeline: [
    { year: "02/03/2024", text: "Aprendendo a estilizar" },
    { year: "25/03/2024", text: "Aprendendo a organizar os arquivos css" },
    { year: "01/04/2024", text: "Aprendendo animações" },
  ]

  },
  {
    name: "JavaScript",
    level: "Intermediário",
    percent: 78,
    category: "Linguagem",
    description:
      "Manipulação de DOM, consumo de APIs, lógica de interface e integrações.",
    image: jsLogo,
    timeline: [
    { year: "01/01/2024", text: "Lógica e scripts iniciais" },
    { year: "30/04/2024", text: "Modulos" },
    { year: "20/07/2024", text: "APIs e integrações" },
  ]
  },
  {
    name: "React",
    level: "Intermediário",
    percent: 72,
    category: "Frontend",
    description:
      "Componentização, hooks, Vite e construção de interfaces modernas.",
    image: reactLogo,
    timeline: [
    { year: "05/12/2025", text: "Entendendo o React" },
    { year: "20/01/2026", text: "Criando minha primeira aplicação em React" },
    { year: "30/02/2026", text: "Aprendendo Modulos React" },
  ]
  },
  {
    name: "C++",
    level: "Iniciante",
    percent: 45,
    category: "Linguagem",
    description: "Base de programação, estruturas e aplicações desktop.",
    image: cLogo,
    timeline: [
    { year: "16/05/2023", text: "Lógica e scripts iniciais" },
    { year: "17/08/2023", text: "Aplicando em arduino" },
    { year: "31/09/2023", text: "Começando projeto fisico em C++ trena digital" },
  ]
  },
  {
    name: "C#",
    level: "Iniciante",
    percent: 50,
    category: "Linguagem",
    description: "Aplicações desktop, lógica OO e fundamentos de games.",
    image: cSharperLogo,
    timeline: [
    { year: "05/05/2022", text: "Lógica e scripts iniciais" },
    { year: "09/06/2025", text: "Estudando Documentação e entendendo o conceito de game" },
    { year: "22/08/2025", text: "Criando um jogo" },
  ]
  },
];

const categories = [
  { name: "Todos", icon: FaCode },
  { name: "Frontend", icon: FaPaintBrush },
  { name: "Backend", icon: FaServer },
  { name: "Linguagem", icon: FaCode },
];

/* ================= COMPONENT ================= */

function Hability() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeTab, setActiveTab] = useState("overview");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "Todos") return skills;
    return skills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
      if (selectedSkill) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = "";
      };
    }, [selectedSkill]);

  return (
    <section id="habilidades" className="hab-section">
      <h2 className="hab-title">Minhas Habilidades</h2>

      {/* ===== FILTRO ===== */}
      <div className="hab-filters">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const active = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              className={`hab-filter-btn ${active ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <Icon /> {cat.name}
            </button>
          );
        })}
      </div>
        
      {/* ===== GRID ===== */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            onClick={() => setSelectedSkill(skill)}
          >
            <img src={skill.image} alt={skill.name} />
            <span>{skill.name}</span>
            <small className="skill-cat">{skill.category}</small>
          </div>
        ))}
      </div>

      {/* ===== MODAL ===== */}
      {selectedSkill &&
        createPortal(
          <div
            className="hab-modal-overlay"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="hab-modal-pro"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="hab-modal-close"
                onClick={() => setSelectedSkill(null)}
              >
                <FaTimes />
              </button>

              {/* HEADER */}
              <div className="modal-pro-header">
                <img src={selectedSkill.image} alt={selectedSkill.name} />
                <div>
                  <h3>{selectedSkill.name}</h3>
                  <div className="badge-row">
                    <span className="badge-cat">
                      {selectedSkill.category}
                    </span>
                    <span className="badge-level">
                      {selectedSkill.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* TABS */}
              <div className="modal-tabs">
                <button
                  className={activeTab === "overview" ? "active" : ""}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>

                <button
                  className={activeTab === "timeline" ? "active" : ""}
                  onClick={() => setActiveTab("timeline")}
                >
                  Evolução
                </button>
              </div>

              {/* CONTENT */}
              <div className="tab-content">
                {activeTab === "overview" && (
                  <>
                    <div className="tech-grid">
                      <div>
                        <span>Categoria</span>
                        <strong>{selectedSkill.category}</strong>
                      </div>

                      <div>
                        <span>Nível</span>
                        <strong>{selectedSkill.level}</strong>
                      </div>

                      <div>
                        <span>Proficiência</span>
                        <strong>{selectedSkill.percent}%</strong>
                      </div>
                    </div>

                    <div className="pro-bar">
                      <div
                        className="pro-bar-fill"
                        style={{ width: selectedSkill.percent + "%" }}
                      >
                        {selectedSkill.percent}%
                      </div>
                    </div>

                    <div className="modal-section">
                      <h4>Aplicações práticas</h4>
                      <p>{selectedSkill.description}</p>
                    </div>
                  </>
                )}

                {activeTab === "timeline" && (
                  <div className="skill-timeline">
                    {selectedSkill.timeline?.map((step, i) => (
                      <div key={i} className="skill-tl-item">
                        <div className="skill-tl-dot" />
                        <div>
                          <strong>{step.year}</strong>
                          <p>{step.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="modal-main-btn"
                onClick={() => setSelectedSkill(null)}
              >
                Voltar
              </button>
            </div>
          </div>,
          document.body
        )}

    </section>
  );
}

export default Hability;
