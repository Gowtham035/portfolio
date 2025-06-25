import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#625a77] py-24 text-white px-6">
      <div className="max-w-xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold border-b-4 border-white inline-block mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          If you have any queries, feel free to contact me!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="flex flex-col gap-5 text-black bg-white/90 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          ></textarea>

          <motion.button
            type="submit"
            className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-3 rounded-md font-semibold hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="mt-10 text-white text-sm space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p><span className="font-bold">Email:</span> gowthamkandasamy24@gmail.com</p>
          <p><span className="font-bold">Phone:</span> 7904966970</p>
        </motion.div>
      </div>
    </section>
  );
}
