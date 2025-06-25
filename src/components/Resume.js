import { motion } from 'framer-motion';
import ResumeImg from '../asserts/Resume.png';

export default function Resume() {
  return (
    <section id="resume" className="flex flex-col md:flex-row items-center justify-center bg-[#7f8ac7] px-5 py-20 text-white">
      
      {/* Resume Image Section */}
      <motion.div
        className="mb-10 md:mb-0 md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img className="w-[300px] rounded-lg shadow-lg" src={ResumeImg} alt="Resume Preview" />
      </motion.div>

      {/* Resume Text Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold border-b-4 border-[#bf97e2] mb-6 inline-block">Resume</h1>
          <p className="text-lg mb-4">
            Click below to view or download my resume.
          </p>
          <a
            href="https://drive.google.com/file/d/1_bwSXLKuKCwv26hv3vrkf9nMl3Ckd-o1/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
