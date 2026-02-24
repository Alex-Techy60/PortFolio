import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux
} from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiArchlinux,
  SiFedora
} from "react-icons/si";

function TechStack() {
  const stack = {
    Languages: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    Frontend: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "React", icon: <FaReact /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Linux", icon: <FaLinux /> },
    ],
  };

  const currentlyLearning = [
    { name: "Express", icon: <SiExpress /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Arch Linux", icon: <SiArchlinux /> },
    { name: "Fedora", icon: <SiFedora /> },
  ];

  return (
    <section id="tech" className="py-32 px-6 bg-[#0f0a1f]">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">Tech Stack</h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies I use to build scalable and modern applications.
          </p>
        </div>

        {/* Main Stack */}
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(stack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#161028] p-8 rounded-2xl border border-violet-900 shadow-lg hover:border-violet-500 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-violet-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1e1633] rounded-full border border-violet-800 text-gray-300 hover:bg-violet-600 hover:text-white transition duration-300 hover:scale-105"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-violet-400 text-center">
            Currently Learning
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {currentlyLearning.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 px-5 py-2 bg-[#1e1633] rounded-full border border-violet-700 text-gray-300 hover:border-violet-400 hover:bg-violet-700 hover:text-white transition duration-300"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
                <span className="text-xs bg-violet-600 px-2 py-0.5 rounded-full ml-2">
                  Learning
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default TechStack;