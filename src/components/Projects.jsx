import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import api from "../assets/api.png";
import dsa from "../assets/dsa.png";
import evento from "../assets/evento.png";
import lostfound from "../assets/lost&found.png";

function Projects() {
  const projects = [
    {
      title: "Evento (Coming Soon)",
      description:
        "A full-stack event management platform connecting users with service providers for seamless event planning.",
      image: evento,
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Lost & Found System",
      description:
        "A web-based application allowing users to report and track lost items within a campus environment.",
      image: lostfound,
      tech: ["React", "Express"],
      github: "#",
      live: "#",
    },
    {
      title: "API Dashboard",
      description:
        "A responsive dashboard consuming third-party APIs and visualizing real-time data efficiently.",
      image: api,
      tech: ["React", "REST API"],
      github: "#",
      live: "#",
    },
    {
      title: "DSA Toolkit",
      description:
        "A structured Java project implementing core data structures and algorithms for learning and revision.",
      image: dsa,
      tech: ["Java"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-[#0f0a1f]">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">Projects</h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of projects showcasing my development and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#161028] rounded-2xl overflow-hidden border border-violet-900 shadow-lg hover:border-violet-500 transition duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-3 py-1 text-xs bg-[#1e1633] border border-violet-800 rounded-full text-gray-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Alex-Techy60?tab=repositories"
            target="_blank"
            className="inline-block px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition"
          >
            Find More on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;