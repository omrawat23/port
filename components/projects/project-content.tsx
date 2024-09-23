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
    title: "Feedbackify",
    description:
      "Feedbackify allows users to integrate a feedback widget into their applications. It provides a seamless experience for collecting and managing user feedback, ensuring secure data handling and offering an intuitive dashboard for insights.",
    tags: [
      "Next.js",
      "Typescript",
      "Drizzle ORM",
      "Supabase",
      "ClerkAuth",
      "TailwindCSS",
      "Shadcn UI",
    ],
    link: {
      github: "https://github.com/omrawat23/feedbacify-landing.git",
      youtube: "",
      live: "https://feedbacify-landing.vercel.app/",
    },
  },
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
      "This blog app harnesses the MERN stack (MongoDB, Express.js, React, Node.js) along with Firebase for secure backend storage. The design features a sleek, responsive interface that allows users to create, edit, and delete posts seamlessly. ",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "bCrypt",
      "JWT",
      "Tailwind CSS",
    ],
    link: {
      github: "https://github.com/omrawat23/guts",
      youtube: "",
      live: "https://gutss.vercel.app/",
    },
  },
  {
    title: "E-commerce store",
    description:
      "A responsive e-commerce store using React and Node.js, featuring Stripe integration for secure payments. The store offers seamless navigation, a user-friendly interface, and efficient product management. The project aims to deliver a secure, engaging online shopping experience and a easy way to try on shoes from the comfort of your home by integrating DeepAr.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDb",
      "Redux toolkit",
      "JWT",
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

];

// {
//     title: "",
//     description: "",
//     tags: [""],
//   },
