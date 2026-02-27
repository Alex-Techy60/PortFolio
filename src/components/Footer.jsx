import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0a0618] border-t border-violet-900 px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Sugyan Singh
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building scalable web applications and solving problems through code
            and curiosity.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h4 className="text-white font-medium mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#about" className="hover:text-violet-400">
                About
              </a>
            </li>
            <li>
              <a href="#tech" className="hover:text-violet-400">
                Tech Stack
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-violet-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-violet-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-violet-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className="text-white font-medium mb-4">Connect</h4>

          <div className="flex gap-5 text-xl text-gray-400">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              className="hover:text-violet-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              className="hover:text-violet-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:sugyanworkplace@gmail.com"
              className="hover:text-violet-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-12 text-gray-500 text-sm border-t border-violet-900 pt-6">
        © {new Date().getFullYear()} Sugyan Singh — Built with React & Tailwind
        CSS
      </div>
    </footer>
  );
}

export default Footer;
