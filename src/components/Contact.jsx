import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0f0a1f]">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
          <p className="text-gray-400 mt-6">
            Open to internship opportunities, collaborations, or just a tech discussion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT - FORM */}
          <form className="bg-[#161028] p-8 rounded-2xl border border-violet-900 shadow-lg space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-[#0f0a1f] border border-violet-900 rounded-lg focus:outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#0f0a1f] border border-violet-900 rounded-lg focus:outline-none focus:border-violet-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 bg-[#0f0a1f] border border-violet-900 rounded-lg focus:outline-none focus:border-violet-500"
            />

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>

          {/* RIGHT - CONTACT INFO */}
          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-violet-400 text-xl" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a
                  href="mailto:sugyanworkplace@gmail.com"
                  className="hover:text-violet-400"
                >
                  sugyanworkplace@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-violet-400 text-xl" />
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <a
                  href="https://github.com/Alex-Techy60"
                  target="_blank"
                  className="hover:text-violet-400"
                >
                  github.com/Alex-Techy60
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-violet-400 text-xl" />
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/sugyan-singh"
                  target="_blank"
                  className="hover:text-violet-400"
                >
                  linkedin.com/in/sugyan-singh
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;