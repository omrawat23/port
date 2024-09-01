"use client";

import { useState } from 'react';
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Mail, Code, Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from 'next/image';

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const poppinsFont = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState('developer');

  return (
    <div className="min-h-screen flex items-center justify-center mt-[-60px]">
      <div className="max-w-4xl w-full px-6 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8 relative inline-block"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 absolute blur-xl opacity-50 -z-10 "></div>
            <Image
            width={100}
            height={100} 
              src="/om.jpg" 
              alt="Om Rawat" 
              className="w-32 h-32 rounded-full object-cover border-4 border-zinc-700 "
            />
          </motion.div>
          
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
              "text-xl dark:text-zinc-400  mb-6",
              poppinsFont.className
            )}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full-stack Developer | CS Undergrad
          </motion.p>
          <motion.div
            className="flex justify-center gap-4 mb-8"
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
              "text-base dark:text-zinc-400  mb-8 max-w-2xl mx-auto",
              poppinsFont.className
            )}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Passionate about creating exceptional web experiences. Always learning, always building.
          </motion.p>
        </motion.div>

        <motion.div 
         className="rounded-lg p-6 md:p-8 bg-[#FAF3F3] dark:bg-zinc-800/50 backdrop-blur-sm"

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex justify-around mb-8">
            <InteractiveIcon icon={Code} label="Developer" isActive={activeSection === 'developer'} onClick={() => setActiveSection('developer')} />
            <InteractiveIcon icon={Briefcase} label="Projects" isActive={activeSection === 'projects'} onClick={() => setActiveSection('projects')} />
            <InteractiveIcon icon={GraduationCap} label="Education" isActive={activeSection === 'education'} onClick={() => setActiveSection('education')} />
          </div>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn("dark:text-zinc-300 text-gray-700", poppinsFont.className)}
          >
            {activeSection === 'developer' && (
              <p>Specializing in full-stack web development with a focus on React, Node.js, and modern JavaScript frameworks. Constantly exploring new technologies to create efficient and scalable solutions.</p>
            )}
            {activeSection === 'projects' && (
              <p>Working on various projects including a real-time collaboration tool, an AI-powered content generator, and contributing to open-source libraries. Each project is an opportunity to learn and innovate.</p>
            )}
            {activeSection === 'education' && (
              <p>Currently pursuing a B.Tech in Computer Science Engineering at The NorthCap University, Gurgaon. Engaged in coursework covering algorithms, data structures, machine learning, and software engineering principles.</p>
            )}
          </motion.div>
        </motion.div>

        <motion.button
          className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 mx-auto block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Get in Touch
        </motion.button>
      </div>
    </div>
  );
};

const SocialIcon = ({ href, icon: Icon }:any) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <motion.div
      className="p-2 dark:bg-zinc-800 bg-gray-800 rounded-full"
      whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className="h-5 w-5 text-zinc-300" />
    </motion.div>
  </Link>
);

const InteractiveIcon = ({ icon: Icon, label, isActive, onClick }:any) => (
  <motion.div
    className={`flex flex-col items-center cursor-pointer ${isActive ? 'text-blue-400' : 'text-zinc-400'}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <Icon className="h-8 w-8 mb-2" />
    <span className={cn("text-sm", poppinsFont.className)}>{label}</span>
  </motion.div>
);

export default HeroSection;