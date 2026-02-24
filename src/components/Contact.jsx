function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Contact</h2>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 bg-gray-900 rounded-md border border-gray-800 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-gray-900 rounded-md border border-gray-800 focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full p-3 bg-gray-900 rounded-md border border-gray-800 focus:outline-none focus:border-blue-500"
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;