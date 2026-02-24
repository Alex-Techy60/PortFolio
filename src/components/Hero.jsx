import Dominoz_Suggu from "../assets/Dominoz_Suggu.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block">Hey!</span>
            <span className="block text-violet-500">
              I'm Sugyan Singh
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mb-6">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Competitive Programmer",
                "Problem Solver",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://github.com/Alex-Techy60"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sugyan-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Stats Boxes */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { value: "50+", label: "Contests" },
              { value: "10+", label: "Projects" },
              { value: "∞", label: "Sleepless Nights" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#161028] p-6 rounded-xl text-center shadow-lg border border-violet-900 hover:border-violet-500 hover:bg-[#24134e] transition"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-violet-400">
                  {item.value}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <img
            src={Dominoz_Suggu}
            alt="Sugyan Singh"
            className="w-64 sm:w-72 md:w-80 h-80 sm:h-96 object-cover rounded-2xl shadow-[0_0_40px_rgba(124,58,237,0.5)]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;