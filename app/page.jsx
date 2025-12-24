"use client";

import ProjectCard from "../components/ProjectCard";
import SkillIcon from "../components/SkillIcon"
import projects from "../data/projects_list";
import aboutSlides from "../data/aboutme";
import {useInView} from "../hooks/useInView";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";


// text for typing effect function

export function TypingWithCursor({
  text,
  startType,
  startDelay = 600,
  charDelay = 70,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startType) return; // stop if start is false
    setCount(0); // reset if text changes

    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, charDelay);
    }, startDelay);

    return () => {
      clearTimeout(start);
    };
  }, [startType, text, startDelay, charDelay]);

  return (
    <span className="block text-lg opacity-80 whitespace-nowrap">
      {text.slice(0, count)}

      {/* Cursor */}
      <motion.span
        className="inline-block ml-[1px]"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.9 }}
      >
        |
      </motion.span>
    </span>
  );
}

export default function Home() {

  // scroll detection
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [slideIndex, setSlideIndex] = useState(0);
  // only type when the section is in view
  const { ref, isInView } = useInView();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % aboutSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <main className="min-h-screen">

      {/* INTRO */}
      <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-[var(--bg)] to-[var(--accent-light)]/20">

        {/* Profile picture */}
        <div className="mb-6">
          <Image
            src="/assets/me_intro.png"
            alt="Maleyha"
            width={200}
            height={200}
            className="rounded-full border-4 border-[var(--accent-light)] shadow-lg object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-1">
          Hi, I’m <span className="text-accent">Maleyha Fatima</span>
          <div className="mt-2">
            <TypingWithCursor text="Software Engineering Student @ University of Guelph" startType={true} className="flex items-center" />
          </div>
        </h2>


        {/* Subtitle */}
        <div className=" mb-10">
          <p className=" max-w-xl mt-1 text-sm opacity-70">
            I enjoy building things that feel solid, intuitive, and thoughtfully engineered. Currently focused on expanding my knowledge and striving to make an impact.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/maleyha-fatima-4821bb279"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-light)] hover:text-[var(--accent)] transition text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:maleyhaf@gmail.com?subject=Portfolio%20Contact&body=Hi%20Maleyha%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
            className="text-[var(--accent-light)] hover:text-[var(--accent)] transition text-3xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/maleyhaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-light)] hover:text-[var(--accent)] transition text-3xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a href="#projects" className="btn-primary">View My Work</a>
        </div>

        <motion.div
          className="absolute bottom-8 opacity-60 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: hasScrolled ? 0 : 1,
            y: hasScrolled ? 20 : 0,
          }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-2xl "
          >
            ↓
          </motion.span>
        </motion.div>
      </section>

      {/* About Me */}
      <section className="px-8 py-20 bg-[var(--bg)]">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text */}
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold mb-4 text-accent">
              {aboutSlides[slideIndex].title}
            </h3>
            <p className="text-lg opacity-80 leading-relaxed">
              {aboutSlides[slideIndex].text}
            </p>
          </motion.div>

          {/* RIGHT: Image */}
          <div className="relative w-full h-[320px]">
            <motion.img
              key={aboutSlides[slideIndex].image}
              src={aboutSlides[slideIndex].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </div>

        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="px-8 py-20 bg-[var(--accent-light)]/20">
        <h3 className="section-title">Projects</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...projects]
            .sort((a, b) => new Date(b.date.end) - new Date(a.date.end))
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}

        </div>
      </section>


      {/* Skills */}
      
      <section id="skills" ref={ref} className="px-8 py-20">
        <h3 className="section-title text-center animate-fadeInUp mb-12">
          Skills
        </h3>

        {/* Terminal Container */}
        <div className="mx-auto max-w-6xl rounded-xl bg-[#0d1117] border border-white/10 shadow-xl font-mono pb-3">

          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-4 text-sm text-white/50">
              maleyha@portfolio:~/skills
            </span>
          </div>

          {/* Languages & Frameworks */}
          <h4 className="mt-4 mb-6 text-accent-light flex items-center gap-2 font-mono text-lg leading-none">
            <span className="pl-2 text-green-400 leading-none">$</span>
            <span className="leading-none">
              <TypingWithCursor text={"cat languages_and_frameworks.txt"} startType={isInView} />
            </span>
          </h4>
          <div className="flex flex-wrap justify-center gap-8 px-4">
            {[
              { icon: "devicon-python-plain colored", label: "Python" },
              { icon: "devicon-c-plain colored", label: "C" },
              { icon: "devicon-java-plain colored", label: "Java" },
              { icon: "devicon-javascript-plain colored", label: "JavaScript" },
              { icon: "devicon-html5-plain colored", label: "HTML5" },
              { icon: "devicon-css3-plain colored", label: "CSS3" },
              { icon: "devicon-sqlite-plain colored", label: "SQLite" },
              { icon: "devicon-dart-plain colored", label: "Dart" },
              { icon: "devicon-json-plain colored", label: "JSON" },
              { icon: "devicon-bash-plain colored", label: "Bash" },
              { icon: "devicon-react-original colored", label: "React" },
              { icon: "devicon-nextjs-original-wordmark plain", label: "Next.js" },
              { icon: "devicon-flutter-plain colored", label: "Flutter" },
              { icon: "devicon-flask-original plain", label: "Flask" },
            ].map((skill, i) => (
              <SkillIcon
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                delay={0.2 + i * 0.05}
              />
            ))}
          </div>
          {/* Tools & Libraries */}
          <h4 className="mb-6 text-accent-light flex items-center gap-2 font-mono text-lg leading-none">
            <span className="pl-2 text-green-400 leading-none">$</span>
            <span className="leading-none mt-0">
              <TypingWithCursor text={"cat tools_and_liabraries.txt"} startType={isInView}/>
            </span>
          </h4>

          <div className="flex flex-wrap justify-center gap-8 px-4">
            {[
              { icon: "devicon-git-plain colored", label: "Git" },
              { icon: "devicon-github-plain", label: "GitHub" },
              { icon: "devicon-docker-plain colored", label: "Docker" },
              { icon: "devicon-linux-plain", label: "Linux" },
              { icon: "devicon-vscode-plain colored", label: "VS Code" },
              { icon: "devicon-androidstudio-plain colored", label: "Android Studio" },
              { icon: "devicon-cmake-plain colored", label: "Makefile" },
              { icon: "devicon-gradle-plain colored", label: "Gradle" },
              { icon: "devicon-azuredevops-plain colored", label: "Azure DevOps" },
              { icon: "devicon-jira-plain colored", label: "Jira" },
            ].map((skill, i) => (
              <SkillIcon
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                delay={0.2 + i * 0.05}
              />
            ))}
          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="px-8 py-20 bg-[var(--accent-light)]/20 text-center">
        <h3 className="section-title">Contact</h3>
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/maleyha-fatima-4821bb279"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-light)] hover:text-[var(--accent)] transition text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:maleyhafatima@gmail.com?subject=Portfolio%20Contact&body=Hi%20Maleyha%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
            className="text-[var(--accent-light)] hover:text-[var(--accent)] transition text-3xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/maleyhaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-light)] hover:text-[var(--accent)] transition text-3xl"
          >
            <FaGithub />
          </a>
        </div>
        <p className="mb-6">
          Let’s connect! You can reach me through linkedin or email me at{" "}
          <a href="mailto:maleyhafatima@gmail.com" className="text-accent font-semibold">
            maleyhaf@gmail.com
          </a>
        </p>
      </section>

    </main>
  );
}
