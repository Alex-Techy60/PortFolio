function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A clean React-based application demonstrating responsive UI and API integration.",
    },
    {
      title: "Project Two",
      description: "A structured Java application focusing on problem-solving and logic implementation.",
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-4 text-sm">
              <button className="text-blue-400 hover:underline">Live</button>
              <button className="text-blue-400 hover:underline">GitHub</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;