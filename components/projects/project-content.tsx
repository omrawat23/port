export type projectData = {
  title: string;
  description: string;
  tags: string[];
  link: {
    github: string;
    youtube?: string;
    live?: string;
  };
};

export const projectsContent: projectData[] = [
  {
    title: "CodeAssist",
    description:
      "CodeAssist is an intelligent coding assistant designed to enhance developer productivity by leveraging AI-driven insights. It connects with the Gemini model to provide solutions, recommendations, and code snippets tailored to the developer's needs.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Gemini API",
      "Clerk",
    ],
    link: {
      github: "https://github.com/omrawat23/codeasssist/tree/main",
      youtube: "",
      live: "https://codeasssist.vercel.app/",
    },
  },
  {
    title: "MyBlog",
    description:
      "This anime-themed Berserk blog app harnesses the MERN stack (MongoDB, Express.js, React, Node.js) along with Firebase for secure backend storage. The design draws inspiration from the dark and intense Berserk aesthetic, featuring a sleek, responsive interface that allows users to create, edit, and delete posts seamlessly. ",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDb",
      "Firebase storage",
      "JWT",
    ],
    link: {
      github: "https://github.com/omrawat23/guts",
      youtube: "",
      live: "https://guts-mr2h.vercel.app/",
    },
  },
  {
    title: "E-commerce store",
    description:
      "A responsive e-commerce store using React and Node.js, featuring Stripe integration for secure payments. The store offers seamless navigation, a user-friendly interface, and efficient product management. The project aims to deliver a secure, engaging online shopping experience and a easy way to try on shoes from the comfort of your home by integrating DeepAr.",
    tags: [
      "Typescript",
      "Next.js",
      "TailwindCSS",
      "Shadcn UI",
      "Framer Motion",
    ],
    link: {
      github: "https://github.com/omrawat23/ai-shoes",
      youtube: "",
      live: "https://ai-shoes.vercel.app/",
    },
  },
  {
    title: "focusplay",
    description:
      "FocusPlay is a Chrome extension designed to enhance productivity by managing video playback when switching between Chrome and other applications like Visual Studio Code. The extension automatically pauses videos in Chrome when the user focuses on another application and resumes playback when returning to Chrome.",
    tags: [
      "Javascript",
      "HTML",
      "CSS",
    ],
    link: {
      github: "https://github.com/omrawat23/focusplay/tree/main",
      youtube: "",
      live: "",
    },
  },
  // {
  //   title: "Frello",
  //   description:
  //     "Crafted Task Manager Application that delivers a dynamic platform for streamlined task management. Combining the power of organisation team-up, it presents users with an elegant and intuitive interface, facilitating effortless task handling.",
  //   tags: [
  //     "Typescript",
  //     "Node.js",
  //     "Next.js",
  //     "Prisma",
  //     "MySQL",
  //     "ClerkAuth",
  //     "TailwindCSS",
  //     "Shadcn UI",
  //   ],
  //   link: {
  //     github: "https://github.com/tanayvaswani/frello",
  //     youtube: "",
  //     live: "",
  //   },
  // },
];

// {
//     title: "",
//     description: "",
//     tags: [""],
//   },
