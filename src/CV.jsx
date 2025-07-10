import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithubAlt,
  FaMobileAlt,
  FaTools,
  FaLanguage,
} from "react-icons/fa";
import { SiFlutter, SiDart, SiPostman } from "react-icons/si";

const accent = "text-teal-500 border-teal-400";
const card =
  "bg-white bg-opacity-90 rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 border-l-4 sm:border-l-8";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-3 sm:px-4 md:px-6 py-6 sm:py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className={`${card} border-teal-400 text-center mb-6 sm:mb-8`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 tracking-wide text-blue-900 leading-tight">
            Hayat Mellal
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-600 mb-2 sm:mb-1 leading-relaxed">
            Software Engineering Student / Frontend Developer
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-blue-700 mt-2 text-sm sm:text-base">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-xs sm:text-sm" />
              <span className="break-words">Tissemsilt, Algeria</span>
            </span>
          </div>
        </div>

        {/* Contact */}
        <div
          className={`${card} border-purple-400 text-blue-900 text-sm sm:text-base`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <a
              href="mailto:hayatttt1111@gmail.com"
              className="flex items-center gap-2 hover:text-teal-600 transition break-all"
            >
              <FaEnvelope className="text-teal-500 flex-shrink-0" />
              <span className="break-all">hayatttt1111@gmail.com</span>
            </a>
            <a
              href="tel:+213696825204"
              className="flex items-center gap-2 hover:text-teal-600 transition"
            >
              <FaPhone className="text-teal-500 flex-shrink-0" />
              <span>+213696825204</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mellal-hayat-05bb11361/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-600 transition"
            >
              <FaLinkedin className="text-teal-500 flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://hytmel.github.io/hayatdev-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-600 transition"
            >
              <FaGithub className="text-teal-500 flex-shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>

        {/* About */}
        <div className={`${card} border-blue-400`}>
          <h3
            className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${accent}`}
          >
            About Me
          </h3>
          <p className="leading-relaxed text-blue-900 text-sm sm:text-base">
            I am a 3rd year software engineering student at ESI SBA (École
            Supérieure en Informatique de Sidi Bel Abbès), passionate about
            frontend development and mobile apps. Experienced in React JS and
            Flutter, with a strong foundation in Java, JavaScript, HTML, CSS,
            Dart, and tools like GitHub and Postman. Multilingual: Arabic,
            English, and some French.
          </p>
        </div>

        {/* Skills */}
        <div className={`${card} border-orange-400`}>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange-500 flex items-center gap-2">
            <FaTools className="text-lg sm:text-xl" />
            <span>Skills</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-1 sm:gap-2 bg-orange-50 px-2 sm:px-3 py-2 rounded-full text-xs sm:text-sm font-medium shadow hover:scale-105 transition-transform duration-200 text-orange-700 border border-orange-200 justify-center"
              >
                <span className="flex-shrink-0">{skill.icon}</span>
                <span className="truncate">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Experience / Projects */}
        <div className={`${card} border-cyan-400`}>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-600 flex items-center gap-2">
            <FaMobileAlt className="text-lg sm:text-xl" />
            <span>Experience & Projects</span>
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-cyan-50 rounded-lg p-3 sm:p-4 shadow text-cyan-900 border-l-4 border-cyan-300"
              >
                <h4 className="text-base sm:text-lg font-bold mb-1">
                  {exp.title}
                </h4>
                <p className="font-semibold text-sm sm:text-base mb-1">
                  {exp.company}
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={`${card} border-purple-400`}>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-600 flex items-center gap-2">
            <FaLanguage className="text-lg sm:text-xl" />
            <span>Education</span>
          </h3>
          <div className="bg-purple-50 rounded-lg p-3 sm:p-4 shadow text-purple-900 border-l-4 border-purple-300">
            <p className="font-bold text-sm sm:text-base">3rd Year Student</p>
            <p className="text-sm sm:text-base">
              ESI SBA (École Supérieure en Informatique de Sidi Bel Abbès)
            </p>
          </div>
        </div>

        {/* Languages */}
        <div className={`${card} border-green-400`}>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-600 flex items-center gap-2">
            <FaLanguage className="text-lg sm:text-xl" />
            <span>Languages</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="bg-green-50 px-3 sm:px-4 py-2 rounded-full text-sm font-medium shadow text-green-700 border border-green-200 text-center"
              >
                {lang.name}{" "}
                <span className="text-green-500 ml-1">({lang.level})</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
