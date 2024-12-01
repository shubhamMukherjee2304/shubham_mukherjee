const ContactForm = () => (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-white ">Get in Touch</h2>
        <form action="https://formsubmit.co/shubhammukherjee1000@gmail.com" method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md text-white bg-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md text-white bg-gray-700"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-md text-white bg-gray-700"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="w-full py-2 bg-gray-100 text-gray-900 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
  
  export default ContactForm;