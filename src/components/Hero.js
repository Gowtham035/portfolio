import HeroImg from '../asserts/hero 1.jpg'; // ✅ Make sure there's no space in filename
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

export default function Hero() {
  const config = {
    subtitle: 'I am a Front-end Developer',
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary items-center justify-center">
      
      {/* Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-5xl font-hero-font mb-4">
          Hi,<br />I <span className="text-white">am</span> Gowtham Kandasamy
        </h1>
        <p className="text-2xl text-gray-300 mb-6">{config.subtitle}</p>

        <div className="flex justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/gowtham-kandasamy-165783257/" className="pr-5 hover:text-white transition duration-300">
            <AiOutlineLinkedin size={40} />
          </a>
          <a href="https://github.com/Gowtham035" className="pr-5 hover:text-white transition duration-300">
            <AiOutlineGithub size={40} />
          </a>
          <a href="#" className="pr-5 hover:text-white transition duration-300">
            <RiTwitterXLine size={40} />
          </a>
        </div>
      </div>

      {/* Circular Animated Image */}
      <div className="md:w-1/3 w-48 h-48 md:h-72 md:w-72 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-500 animation-bounce-1s">
        <img src={HeroImg} alt="Gowtham Kandasamy" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}

