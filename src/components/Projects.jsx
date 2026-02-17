import { motion } from "framer-motion";

const projects = [
  {
    name: "HelpMuscle",
    description: "Site de ajuda para musculação",
    tech: "Flask, HTML, CSS, JavaScript",
    site: "https://seusite.com",
    code: "https://github.com/seurepositorio",
  },
  {
    name: "BeeMonitor",
    description: "Sistema de registro de histórico de colmeias",
    tech: "Flask, HTML, CSS, JavaScript",
    site: "https://seusite.com",
    code: "https://github.com/seurepositorio",
  },
  {
    name: "WL Lojas",
    description: "Sistema para registro de vendas de produtos",
    tech: "Python, Flask",
    site: "https://seusite.com",
    code: "https://github.com/seurepositorio",
  },
];

// Variantes de animação (profissional)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <div id="projects">
      <h2>Meus Projetos</h2>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tecnologias:</strong> {project.tech}
            </p>

            <div className="buttons">
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Ver site
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline"
              >
                Código
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
