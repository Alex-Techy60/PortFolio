function TechStack() {
  const stack = {
    Languages: ["Java", "Python", "JavaScript"],
    Frontend: ["HTML", "CSS", "React"],
    Backend: ["Node.js", "Express"],
    Tools: ["Git", "GitHub", "Linux"]
  };

  return (
    <section id="tech" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Tech Stack</h2>

        {Object.entries(stack).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-medium mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-gray-800 rounded-md text-sm hover:bg-blue-500 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;