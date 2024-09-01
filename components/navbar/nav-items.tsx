import { GithubIcon, LinkedinIcon, Mail, Twitter } from "lucide-react";

export const navItems = [
  {
    name: "Home",
    hash: "/",
    target: "",
  },
  {
    name: "Projects",
    hash: "/projects",
    target: "",
  },
  {
    name: "Experience",
    hash: "/experience",
    target: "",
  },
  {
    name: "Contact",
    hash: "/contact",
    target: "",
  },
  // {
  //   name: <GithubIcon className="h-5 w-5" />,
  //   hash: "https://github.com/omrawat23",
  //   target: "_blank",
  // },
  // {
  //   name: <Mail className="h-5 w-5" />,
  //   hash: "mailto:omraw29@gmail.com",
  //   target: "_blank",
  // },
  // {
  //   name: <LinkedinIcon className="h-5 w-5" />,
  //   hash: "https://linkedin.com/in/omrawat23",
  //   target: "_blank",
  // },
] as const;
