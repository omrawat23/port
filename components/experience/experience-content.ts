export type ExperienceContentType = {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
};

export const experienceContent = [
  {
    title: "Full Stack Developer Intern",
    company: "Flib",
    duration: "Gurgaon",
    location: "May 2023 - August 2024",
    description: [
      "Engineered the flib web app , focusing on frontend architecture and performance optimization.",
      "Enhanced SEO and significantly improved load times by optimizing images through lazy loading, leading to a more responsive user experience.",
      "Utilized a modern tech stack, including Next.js 14, TypeScript, Hygraph (CMS), Tailwind CSS for styling, and Framer Motion for seamless animations.",
    ],
  },
  {
    title: "CSR Intern",
    company: "CountryEdu Private Limited",
    duration: "Gurgaon",
    location: "June 2023 - July 2023",
    description: [
      "Successfully identified and fixed website problems, including broken links, typographical errors, and formatting issues.",
      "Worked as a productive team member to make company's website while also writing engaging content for various services offered by the company. ",
    ],
  },
];
