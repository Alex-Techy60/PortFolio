import C102_Suggu from "../assets/C102_Suggu.JPG";

function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#161028]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <img
              src={C102_Suggu}
              alt="Sugyan Singh"
              className="w-72 h-72 object-cover rounded-2xl shadow-[0_0_40px_rgba(124,58,237,0.25)] border border-violet-900 transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-violet-600 mb-6"></div>

          <h3 className="text-2xl font-bold mb-4 text-violet-400">Sugyan Singh</h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            I’m a second-year B.Tech Computer Science student at IIIT Dharwad,
            focused on building scalable web applications and solving complex
            problems through competitive programming.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            With a strong foundation in data structures and algorithms, I enjoy
            turning ideas into structured, user-focused solutions. Currently,
            I’m sharpening my skills in full-stack development while exploring
            Linux-based development environments and modern development
            workflows.
          </p>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 gap-4 mt-8 text-sm text-gray-300">
            <div>🎓 IIIT Dharwad</div>
            <div>💻 Full-Stack Focused</div>
            <div>🏆 Competitive Programmer</div>
            <div>📍 India</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
