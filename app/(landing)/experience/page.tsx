"use client"

import { experienceContent } from "@/components/experience/experience-content";
import ExperienceSection from "@/components/experience/experience-section";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen w-full px-4 "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-3xl">
        {experienceContent.map((cont, idx) => (
          <motion.div 
            key={idx} 
            variants={sectionVariants}
            className="mb-12 last:mb-0"
          >
            <ExperienceSection
              title={cont.title}
              company={cont.company}
              location={cont.location}
              duration={cont.duration}
              description={cont.description}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperiencePage;

