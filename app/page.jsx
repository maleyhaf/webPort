import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects_list";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Home() {

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
        <h2 className="text-5xl font-extrabold mb-4">
          Hi, I’m <span className="text-accent">Maleyha Fatima</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-xl text-lg mb-6 opacity-80">
          I’m a Software Engineering student passionate about building interactive and user-friendly applications.
        </p>

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
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20 bg-[var(--accent-light)]/20">
        <h3 className="section-title">Projects</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...projects]
            .sort(
              (a, b) => new Date(b.date.end) - new Date(a.date.end)
            )
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
      </section>

         
      {/* Skills */}
      <section id="skills" className="px-8 py-20 text-center">
        <h3 className="section-title animate-fadeInUp mb-12">Skills</h3>

        {/* Languages & Frameworks */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-accent-light animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            Languages & Frameworks
          </h4>
          <div className="flex flex-wrap justify-center gap-6 ">
            {[
              { name: "Python", desc: "High-level language for general-purpose programming" },
              { name: "C", desc: "Low-level systems programming language" },
              { name: "Java", desc: "Object-oriented programming language" },
              { name: "SQL", desc: "Language for relational databases" },
              { name: "Assembly", desc: "Low-level assembly programming language" },
              { name: "JavaScript", desc: "Programming language for web development" },
              { name: "HTML5/CSS", desc: "Markup and styling for web pages" },
              { name: "React", desc: "JavaScript library for building UIs" },
              { name: "Next.js", desc: "React framework for server-side rendering" },
            ].map((skill, index) => (
              <span
                key={skill.name}
                className="skill-tag animate-fadeInUp"
                title={skill.desc}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Libraries */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-accent-light animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            Tools & Libraries
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Git", desc: "Version control system" },
              { name: "VS Code", desc: "Code editor" },
              { name: "Atom", desc: "Code editor" },
              { name: "Docker", desc: "Containerization platform" },
              { name: "Gradle", desc: "Java build automation tool" },
              { name: "JUnit", desc: "Java testing framework" },
              { name: "jQuery", desc: "JavaScript library for DOM manipulation" },
              { name: "Pandas", desc: "Python library for data manipulation" },
              { name: "NumPy", desc: "Python library for numerical computing" },
              { name: "Swig", desc: "Simplified wrapper for C/C++ integration" },
            ].map((skill, index) => (
              <span
                key={skill.name}
                className="skill-tag animate-fadeInUp"
                title={skill.desc}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Concepts & Systems */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-accent-light animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            Concepts & Systems
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Data Structures", desc: "Organizing and manipulating data efficiently" },
              { name: "Object-Oriented Design", desc: "Design methodology based on objects and classes" },
              { name: "Unit Testing", desc: "Testing individual units of code" },
              { name: "Event-Driven Programming", desc: "Programming paradigm responding to events" },
              { name: "Operating Systems (Linux/Unix)", desc: "Operating systems knowledge" },
            ].map((skill, index) => (
              <span
                key={skill.name}
                className="skill-tag animate-fadeInUp"
                title={skill.desc}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                {skill.name}
              </span>
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
