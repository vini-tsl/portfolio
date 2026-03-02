import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

import helpMuscleImg from "../assets/images/helpmuscle.png";
import beeMonitorImg from "../assets/images/beemonitor.png";
import wlLojasImg from "../assets/images/wlproducao.png";

const projects = [
  {
    id: 1,
    name: "HelpMuscle",
    description: "Site de ajuda para musculação com plano personalizado.",
    tech: "Flask, HTML, CSS, JavaScript",
    image: helpMuscleImg,
    site: "",
    code: "https://github.com/vini-tsl/TimbuMuscle",
  },
  {
    id: 2,
    name: "BeeMonitor",
    description: "Sistema de monitoramento e histórico de colmeias.",
    tech: "Flask, HTML, CSS, JavaScript",
    image: beeMonitorImg,
    site: "",
    code: "https://github.com/vini-tsl/Abelha",
  },
  {
    id: 3,
    name: "LC Limpezas",
    description: "Sistema para controle e registro de vendas.",
    tech: "Flask, HTML, CSS, JavaScript",
    image: wlLojasImg,
    site: "",
    code: "#",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔥 Bloqueia scroll ao abrir modal
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
  }, [selectedProject]);

  return (
    <>
      <h2>Meus Projetos</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            className="project-card"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={project.image} alt={project.name} />
            <div className="project-title">
              <h3>{project.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                layoutId={`card-${selectedProject.id}`}
                className="project-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>

                <div className="modal-layout">
                  <div className="modal-image">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                    />
                  </div>

                  <div className="modal-info">
                    <h2>{selectedProject.name}</h2>
                    <p>{selectedProject.description}</p>

                    <p className="tech">
                      <strong>Tecnologias:</strong> {selectedProject.tech}
                    </p>

                    <div className="modal-buttons">
                      <a href={selectedProject.site} className="btn">
                        Ver site
                      </a>
                      <a href={selectedProject.code} className="btn outline">
                        Código
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

export default Projects;