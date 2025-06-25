import { motion } from 'framer-motion';
import websiteImg1 from '../asserts/e-commerce.png';
import websiteImg2 from '../asserts/file.png';
import websiteImg3 from '../asserts/farm.png';
import websiteImg4 from '../asserts/auction.png';

export default function Projects() {
  const projectList = [
    {
      img: websiteImg1,
      title: 'E-commerce Website',
      desc: '',
      link: 'https://github.com/Gowtham035/E-commerce-site.git',
    },
    {
      img: websiteImg4,
      title: 'Auction-Based E-commerce',
      desc: '',
      link: 'https://github.com/Gowtham035/Auction-Based-E-commerce.git',
    },
    {
      img: websiteImg3,
      title: 'Farm Fresh Hub',
      desc: '',
      link: 'https://github.com/Gowtham035/Farm-Fresh-Hub.git',
    },
    {
      img: websiteImg2,
      title: 'File Sharing App',
      desc: '',
      link: 'https://github.com/Gowtham035/File-Sharing-App.git',
    },
  ];

  return (
    <section id="projects" className="bg-[#767ac1] text-black py-20 px-5 cursor-crosshair">
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold inline-block border-b-4 border-[#bf97e2]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <motion.a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d2640] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 group cursor-pointer"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 object-cover group-hover:brightness-75 transition duration-300"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold group-hover:text-[#bf97e2] transition">{project.title}</h2>
              <p className="text-sm mt-2 text-gray-300">{project.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
