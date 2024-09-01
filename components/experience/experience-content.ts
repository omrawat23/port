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
      "Built flib’s website, focusing on user experience and responsiveness.",
      "Worked closely with the design team to translate their concepts into a functional site.",
      "Integrated Firebase to streamline the orders gateway for real-time data and management.",
      "Coordinated project timelines and stakeholder communications to ensure timely delivery.",
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
