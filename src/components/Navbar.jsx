function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#0f0a1f]/80 backdrop-blur border-b border-violet-900 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-semibold text-lg">Sugyan Singh</h1>
        <div className="space-x-6 text-sm">
          <a href="#hero" className="hover:text-violet-400">Home</a>
          <a href="#about" className="hover:text-violet-400">About</a>
          <a href="#tech" className="hover:text-violet-400">Tech</a>
          <a href="#projects" className="hover:text-violet-400">Projects</a>
          <a href="#experience" className="hover:text-violet-400">Experience</a>
          <a href="#contact" className="hover:text-violet-400">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;