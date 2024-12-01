
import { FaGithub } from "react-icons/fa6";
import { SiApachekafka } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiClickhouse } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";

import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si"; // Tailwind CSS and JavaScript Icons

const Skills = () => {
  const skills = [
    { name: 'Next.Js', icon: <RiNextjsFill className="text-gray-900 text-6xl" /> },
    { name: 'Docker', icon: <FaDocker className="text-gray-900 text-6xl" /> },
    { name: 'Redis', icon: <DiRedis className="text-gray-900 text-6xl" /> },
    { name: 'kafka', icon: <SiApachekafka className="text-gray-900 text-6xl" /> },
    { name: 'Git', icon: <FaGithub className="text-gray-900 text-6xl" /> },
    { name: 'AWS', icon: <FaAws className="text-gray-900 text-6xl" /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql className="text-gray-900 text-6xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-gray-900 text-6xl" /> },
    { name: 'Prisma', icon: <SiPrisma className="text-gray-900 text-6xl" /> },
    { name: 'Clickhouse', icon: <SiClickhouse className="text-gray-900 text-6xl" /> },
    { name: 'Firebase', icon: <RiFirebaseFill className="text-gray-900 text-6xl" /> },
    
    { name: 'Java', icon: <FaJava className="text-gray-900 text-6xl" /> },
    
    { name: 'React.js', icon: <FaReact className="text-gray-900 text-6xl" /> },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-gray-900 text-6xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-gray-900 text-6xl" /> },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="w-40 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <p className="text-gray-800 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
