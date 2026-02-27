import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Tech", id: "tech" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Spy
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0a1f]/90 backdrop-blur border-b border-violet-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="font-semibold text-lg">
          <span className="text-violet-400">Sugyan</span> Singh
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition ${
                active === link.id
                  ? "text-violet-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}

              {/* Active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-violet-500 transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-lg text-gray-400">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            className="hover:text-violet-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            className="hover:text-violet-400"
          >
            <FaLinkedin />
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;