"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function formatDateRange(date) {
   if (!date) return "";

   const format = (d) => {
      if (!d) return ""; // handle missing start or end
      const [year, month] = d.split("-"); // split YYYY-MM
      const jsDate = new Date(year, Number(month) - 1); // month is 0-indexed in JS
      return jsDate.toLocaleDateString("en-US", { month: "short", year: "numeric" });
   };

   if (date.end === "Present") {
      return date.start ? `${format(date.start)} – Present` : "Present";
   }

   if (!date.start) return format(date.end); // only show end date

   return `${format(date.start)} – ${format(date.end)}`;
}


export default function ProjectCard({ project }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         {/* Project card */}
         <div className="bg-dark/70 text-accent-light p-6 rounded-lg border border-[var(--accent-light)] transition transform flex flex-col justify-between h-full hover:scale-105">
            <div>
               <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
               <p className="text-xs text-cream/70 mb-3">{formatDateRange(project.date)}</p>

               {/* Project image */}
               {project.image && (
                  <Image
                     src={project.image}
                     alt={project.title}
                     width={400}
                     height={200}
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
                     onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
                  >
                     {/* Close button */}
                     <button
                        className="absolute top-4 right-4 text-accent text-2xl font-bold hover:text-accent-light"
                        onClick={() => setIsOpen(false)}
                     >
                        &times;
                     </button>

                     {/* Project content */}
                     <h2 className="text-3xl font-bold mb-2 text-cream">{project.title}</h2>
                     <p className="text-sm text-[var(--cream)] mb-4">{formatDateRange(project.date)}</p>

                     {project.image && (
                        <Image
                           src={project.image}
                           alt={project.title}
                           width={1200}
                           height={600}
                           className="rounded-lg mb-6 aspect-video object-cover shadow-lg"
                        />
                     )}

                     {/* Overview */}
                     <p className="mb-8 text-cream text-base leading-relaxed">{project.overview}</p>

                     {/* Technical Details + Skills */}
                     <div className="grid md:grid-cols-[2fr_1fr] gap-10 mb-6">

                        {/* Technical bullet points */}
                        <div>
                           <h3 className="text-lg font-semibold mb-3 text-cream text-center md:text-left border-b border-[var(--accent-light)] pb-1">
                              Technical Highlights
                           </h3>
                           <ul className="text-cream list-disc list-outside ml-5 space-y-2">
                              {project.details.map((item, index) => (
                                 <li key={index}>{item}</li>
                              ))}
                           </ul>
                        </div>


                        {/* Skills */}
                        <div className="flex flex-col items-end">
                           <h3 className="pl-8 text-lg font-semibold mb-3 text-cream text-right border-b border-[var(--accent-light)] pb-0 w-full">
                              Skills & Tools
                           </h3>

                           <ul className="space-y-2 text-right">
                              {project.skills.map((skill) => (
                                 <li key={skill.name} className="relative">
                                    <div className="relative inline-block group">
                                       <span className="pc-skill-tag inline-block">
                                          {skill.name}


                                       </span>

                                       {/* Tooltip */}
                                       <span
                                          className="absolute right-0 top-full mt-2 w-56
                                             bg-[var(--cream)] text-black/90 text-xs border border-[var(--accent-light)]
                                             rounded-lg shadow-lg p-2 opacity-0
                                             group-hover:opacity-100 transition-opacity duration-200
                                             pointer-events-none z-50 text-center"
                                       >
                                          {skill.description}
                                       </span>

                                    </div>

                                 </li>
                              ))}
                           </ul>
                        </div>

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
