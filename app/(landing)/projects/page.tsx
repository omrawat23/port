"use client"

import { projectsContent } from "@/components/projects/project-content";
import ProjectCard from "@/components/projects/project-card";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="my-8 w-full md:max-w-screen-2xl md:mx-auto md:px-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.ul className="flex flex-col items-center justify-center w-full">
        {projectsContent.map((card, idx) => {
          return (
            <motion.li key={idx} variants={cardVariants}>
              <ProjectCard
                title={card.title}
                description={card.description}
                tags={card.tags}
                link={card.link}
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default ProjectsPage;