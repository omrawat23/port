"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Mail, Code, Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const poppinsFont = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState("developer");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:mt-[-200px] mt-[-44px]">
      {/* Image for Large Screens */}
      <motion.div
        className="relative inline-block lg:mb-36"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 absolute blur-xl opacity-50 -z-10 lg:hidden mt-10"></div>
        <Image
          width={100}
          height={100}
          src="/om.jpg"
          alt="Om Rawat"
          className="w-32 h-32 rounded-full object-cover border-4 border-zinc-700 lg:hidden mt-10"
        />
      </motion.div>

      <div className="max-w-4xl w-full px-6 py-12 lg:flex lg:items-center lg:justify-center lg:gap-12">
        {/* Left Section for Large Screens */}
        <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center lg:text-left">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={cn(
                "text-4xl md:text-6xl font-bold mb-4",
                headingFont.className
              )}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Om Rawat
            </motion.h1>
            <motion.p
              className={cn(
                "text-xl dark:text-zinc-400 mb-6",
                poppinsFont.className
              )}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Full-stack Developer | CS Undergrad
            </motion.p>
            <motion.div
              className="flex justify-center lg:justify-start gap-4 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <SocialIcon href="https://github.com/omrawat23" icon={GithubIcon} />
              <SocialIcon href="mailto:omraw29@gmail.com" icon={Mail} />
              <SocialIcon href="https://linkedin.com/in/omrawat23" icon={LinkedinIcon} />
            </motion.div>
            <motion.p
              className={cn(
                "text-base dark:text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0",
                poppinsFont.className
              )}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Passionate about creating exceptional web experiences. Always learning, always building.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Section for Large Screens */}
        <motion.div
          className="rounded-lg p-6 md:p-8 bg-zinc-800/50 backdrop-blur-sm lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex justify-around mb-8">
            <InteractiveIcon icon={Code} label="Developer" isActive={activeSection === "developer"} onClick={() => setActiveSection("developer")} />
            <InteractiveIcon icon={Briefcase} label="Projects" isActive={activeSection === "projects"} onClick={() => setActiveSection("projects")} />
            <InteractiveIcon icon={GraduationCap} label="Education" isActive={activeSection === "education"} onClick={() => setActiveSection("education")} />
          </div>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn("dark:text-zinc-300", poppinsFont.className)}
          >
            {activeSection === "developer" && (
              <p>Specializing in full-stack web development with a focus on React, Node.js, and modern JavaScript frameworks. I&apos;m always eager to learn the coolest skills and latest technologies out there.</p>
            )}
            {activeSection === "projects" && (
              <p>Working on projects that seamlessly integrate AI with a focus on clean, minimalistic UI/UX. Each project is an opportunity to innovate, exploring new possibilities while maintaining simplicity and elegance in design.</p>
            )}
            {activeSection === "education" && (
              <p>Currently pursuing my B.Tech in Computer Science Engineering at The NorthCap University, Gurgaon. I&apos;m open to collaborating and sharing ideas, so don&apos;t hesitate to drop me a message and let&apos;s build something great together!</p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <motion.div
      className="p-2 bg-zinc-800 rounded-full"
      whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className="h-5 w-5 text-zinc-300" />
    </motion.div>
  </Link>
);

const InteractiveIcon = ({ icon: Icon, label, isActive, onClick }: { icon: any; label: string; isActive: boolean; onClick: () => void }) => (
  <motion.div
    className={`flex flex-col items-center cursor-pointer ${isActive ? "text-blue-800" : "dark:text-zinc-400"}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <Icon className="h-8 w-8 mb-2" />
    <span className={cn("text-sm", poppinsFont.className)}>{label}</span>
  </motion.div>
);

export default HeroSection;
