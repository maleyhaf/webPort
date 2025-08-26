"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         {/* Project card */}
         <div className="bg-dark/70 text-accent-light p-6 rounded-lg border border-[var(--accent-light)] transition transform flex flex-col justify-between h-full">
            <div>
               <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

               {/* Project image */}
               {project.image && (
                  <Image
                     src={project.image}
                     alt={project.title}
                     width={400}      // adjust width as needed
                     height={200}     // adjust height as needed
                     className="rounded-md mb-4 object-cover aspect-video"
                  />
               )}

               <p className="text-sm mb-4">{project.shortDescription}</p>
            </div>

            {/* Learn More button */}
            <button
               className="mt-auto px-4 py-2 btn-primary transition transform"
               onClick={() => setIsOpen(true)}
            >
               Learn More
            </button>
         </div>

         {/* Modal */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
               >
                  <motion.div
                     className="bg-[var(--bg)]/30 backdrop-blur-lg rounded-xl border border-[var(--accent-light)] max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative scrollbar-hide"
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.8, opacity: 0 }}
                     transition={{ duration: 0.25 }}
                  >
                     {/* Close button */}
                     <button
                        className="absolute top-4 right-4 text-accent text-2xl font-bold hover:text-accent-light"
                        onClick={() => setIsOpen(false)}
                     >
                        &times;
                     </button>

                     {/* Project content */}
                     <h2 className="text-3xl font-bold mb-4 text-cream">{project.title}</h2>
                     {project.image && (
                        <Image
                           src={project.image}
                           alt={project.title}
                           width={1200}
                           height={600}
                           className="rounded-lg mb-6 aspect-video object-cover shadow-lg"
                        />
                     )}
                     <p className="mb-6 text-cream">{project.longDescription}</p>

                     {/* Skills */}
                     <h3 className="text-xl text-center font-semibold mb-4 text-cream">Skills Developed</h3>
                     <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {project.skills.map((skill) => (
                           <div key={skill.name} className="relative group">
                              <span
                                 className="px-4 py-2 pc-skill-tag relative hover:scale-105 transition transform cursor-help"
                              >
                                 {skill.name}
                              </span>
                              {/* Custom tooltip */}
                              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 
                                    bg-[var(--bg)] text-sm border border-[var(--accent-light)] 
                                    rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 
                                    transition pointer-events-none z-50">
                                 {skill.description}
                              </div>
                           </div>
                        ))}
                     </div>


                     {/* External link */}
                     {project.link && (
                        <div className="text-center mt-6">
                           <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-6 py-3 btn-primary"
                           >
                              {project.linkTitle || "Visit Project"}
                           </a>
                        </div>
                     )}
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
