import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

function Experience() {
  const experiences = [
    {
      title: "Competitive Programming",
      icon: <FaCode />,
      details: [
        "Participated in 50+ coding contests",
        "Solved 700+ problems across platforms",
        "Strong focus on DSA and algorithmic thinking",
      ],
    },
    {
      title: "Programming Platforms",
      icon: <FaLaptopCode />,
      details: [
        "LeetCode: 500+ problems | 1800+ contest rating",
        "CodeChef: 3★ (1700 rating)",
        "Codeforces: Pupil (1350 rating)",
      ],
    },
    {
      title: "Contests & Olympiads",
      icon: <FaTrophy />,
      details: [
        "ICPC Institute Rank 2",
        "ICPC Global Rank ~1300",
        "Bithunt (IIT) – Final Round Qualification",
      ],
    },
    {
      title: "Hackathons & Events",
      icon: <FaTrophy />,
      details: [
        "Tech Odyssey – Secured 6th Position",
        "Hack to Future – Final Round Qualification",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-[#161028]">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">
            Experience
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
          <p className="text-gray-400 mt-6">
            Competitive programming journey and technical achievements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0f0a1f] p-8 rounded-2xl border border-violet-900 hover:border-violet-500 transition shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6 text-violet-400 text-xl">
                {exp.icon}
                <h3 className="font-semibold">{exp.title}</h3>
              </div>

              <ul className="space-y-3 text-gray-400 text-sm">
                {exp.details.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <button className="mt-6 text-violet-400 hover:text-violet-300 text-sm">
                Know More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;