import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGithub,
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      title: 'HTML',
      icon: <FaHtml5 className="text-orange-500 text-4xl" />,
      category: 'Frontend',
    },
    {
      title: 'CSS',
      icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
      category: 'Frontend',
    },
    {
      title: 'JavaScript',
      icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
      category: 'Frontend',
    },
    {
      title: 'React.js',
      icon: <FaReact className="text-cyan-400 text-4xl" />,
      category: 'Frontend',
    },
    {
      title: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
      category: 'Frontend',
    },
    {
      title: 'MySQL',
      icon: <SiMysql className="text-blue-300 text-4xl" />,
      category: 'Database & Tools',
    },
    {
      title: 'MongoDB',
      icon: <SiMongodb className="text-green-500 text-4xl" />,
      category: 'Database & Tools',
    },
    {
      title: 'Git & GitHub',
      icon: (
        <div className="flex gap-2">
          <FaGitAlt className="text-red-500 text-3xl" />
          <SiGithub className="text-white text-3xl" />
        </div>
      ),
      category: 'Database & Tools',
    },
  ];

  return (
    <section id="skills" className="bg-[#7f8ac7] px-5 py-20 text-black">
      <h1 className="text-4xl font-bold border-b-4 border-[#b8b3bd] inline-block mb-16 text-center w-full">
        Skills
      </h1>

      <div className="w-full md:w-[70%] mx-auto">
        {/* Frontend Skills */}
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frontend Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {skills
            .filter((s) => s.category === 'Frontend')
            .map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-gradient-to-br from-pink-700 to-pink-900 p-4 rounded-xl shadow-lg hover:scale-105 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill.icon}
                <p className="mt-2 text-lg">{skill.title}</p>
              </motion.div>
            ))}
        </motion.div>

        {/* Animated Line */}
        <motion.div
          className="h-[2px] w-full bg-gradient-to-r from-pink-500 via-white to-cyan-500 mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Database & Tools */}
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Database & Tools
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {skills
            .filter((s) => s.category === 'Database & Tools')
            .map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-gradient-to-br from-cyan-700 to-cyan-900 p-4 rounded-xl shadow-lg hover:scale-105 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill.icon}
                <p className="mt-2 text-lg">{skill.title}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
