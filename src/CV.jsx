import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGithubAlt, FaMobileAlt, FaTools, FaLanguage } from "react-icons/fa";
import { SiFlutter, SiDart, SiPostman } from "react-icons/si";

const accent = "text-teal-500 border-teal-400";
const card = "bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 mb-6 border-l-8";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Flutter", icon: <SiFlutter className="text-cyan-500" /> },
  { name: "Dart", icon: <SiDart className="text-blue-400" /> },
  { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
  { name: "GitHub", icon: <FaGithubAlt className="text-gray-700" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

const experiences = [
  {
    title: "Flutter Developer",
    company: "GuideMe (2nd year project)",
    description:
      "Developed a mobile app as part of a team project in my 2nd year at ESI SBA.",
  },
  {
    title: "React JS Developer",
    company: "NCS Hackathon (ECO-DZ project)",
    description:
      "Built the admin dashboard for our project app ECO-DZ during a 4-day hackathon.",
  },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Basic" },
];

export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-2 py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className={`${card} border-teal-400 text-center mb-8`}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-wide text-blue-900">Hayat Mellal</h1>
          <h2 className="text-lg md:text-2xl font-semibold text-teal-600 mb-1">Software Engineering Student / Frontend Developer</h2>
          <div className="flex flex-wrap justify-center gap-4 text-blue-700 mt-2">
            <span className="flex items-center gap-1"><FaMapMarkerAlt /> Tissemsilt, Algeria</span>
          </div>
        </div>

        {/* Contact */}
        <div className={`${card} border-purple-400 flex flex-wrap justify-center gap-6 text-blue-900 text-base`}> 
          <a href="mailto:hayatttt1111@gmail.com" className="flex items-center gap-2 hover:text-teal-600 transition"><FaEnvelope className="text-teal-500" /> hayatttt1111@gmail.com</a>
          <a href="tel:+213696825204" className="flex items-center gap-2 hover:text-teal-600 transition"><FaPhone className="text-teal-500" /> +213696825204</a>
          <a href="https://www.linkedin.com/in/mellal-hayat-05bb11361/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition"><FaLinkedin className="text-teal-500" /> LinkedIn</a>
          <a href="https://hytmel.github.io/hayatdev-portfolio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition"><FaGithub className="text-teal-500" /> Portfolio</a>
        </div>

        {/* About */}
        <div className={`${card} border-blue-400`}>
          <h3 className={`text-2xl font-bold mb-2 ${accent}`}>About Me</h3>
          <p className="leading-relaxed text-blue-900">
            I am a 3rd year software engineering student at ESI SBA (École Supérieure en Informatique de Sidi Bel Abbès), passionate about frontend development and mobile apps. Experienced in React JS and Flutter, with a strong foundation in Java, JavaScript, HTML, CSS, Dart, and tools like GitHub and Postman. Multilingual: Arabic, English, and some French.
          </p>
        </div>

        {/* Skills */}
        <div className={`${card} border-orange-400`}>
          <h3 className="text-2xl font-bold mb-4 text-orange-500 flex items-center gap-2"><FaTools /> Skills</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition-transform duration-200 text-orange-700 border border-orange-200"
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Experience / Projects */}
        <div className={`${card} border-cyan-400`}>
          <h3 className="text-2xl font-bold mb-4 text-cyan-600 flex items-center gap-2"><FaMobileAlt /> Experience & Projects</h3>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-cyan-50 rounded-lg p-4 shadow text-cyan-900 border-l-4 border-cyan-300">
                <h4 className="text-lg font-bold">{exp.title}</h4>
                <p className="font-semibold">{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={`${card} border-purple-400`}>
          <h3 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2"><FaLanguage /> Education</h3>
          <div className="bg-purple-50 rounded-lg p-4 shadow text-purple-900 border-l-4 border-purple-300">
            <p className="font-bold">3rd Year Student</p>
            <p>ESI SBA (École Supérieure en Informatique de Sidi Bel Abbès)</p>
          </div>
        </div>

        {/* Languages */}
        <div className={`${card} border-green-400`}>
          <h3 className="text-2xl font-bold mb-4 text-green-600 flex items-center gap-2"><FaLanguage /> Languages</h3>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="bg-green-50 px-4 py-2 rounded-full text-sm font-medium shadow text-green-700 border border-green-200"
              >
                {lang.name} <span className="text-green-500 ml-1">({lang.level})</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 