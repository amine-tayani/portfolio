export type Project = {
  id: number;
  Stack: string[];
  Title: string;
  Description: string;
  GithubLink: string;
  Preview: string;
};

export const data: Project[] = [
  {
    id: 1,
    Stack: ["Next", "TypeScript", "React.js", "TailwindCSS"],
    Title: "Appeo",
    Description:
      "Appeo is a Web application that allows Job Hunters Manage potential employers, as well as track the status of your applications.",
    GithubLink: "https://github.com/amine-tayani/appeo",
    Preview: "https://appeo.vercel.app",
  },
  {
    id: 2,
    Stack: ["Next", "React.js", "Express", "Graphql", "Prisma"],
    Title: "Glasnik",
    Description:
      "Glasnik is a highly interactive full stack web - mobile application that allows users to chat divided into communities each of which has its own members and channels",
    GithubLink: "https://github.com/amine-tayani/glasnik_frontend",
    Preview: "https://github.com/amine-tayani/glasnik_api",
  },
  {
    id: 3,
    Stack: ["Python", "Open-cv", "Raspberry-Pi"],
    Title: "gestion d'absence",
    Description:
      "Gestion d'absence is a system that manage class attendance using face recognition in real-time using Raspberry Pi model 3 B+",
    GithubLink: "https://github.com/amine-tayani/gestion-abs",
    Preview: "",
  },
  {
    id: 4,
    Stack: ["Html-Css", "Laravel", "Mysql"],
    Title: "ESTC-Learning",
    Description:
      " E-learning is a  school project built with Laravel framework and Mysql",
    GithubLink: "https://github.com/amine-tayani/LaravelE-learning",
    Preview: "",
  },
  {
    id: 5,
    Stack: ["Nextjs", "TailwindCSS"],
    Title: "Foundation template",
    Description:
      "The Foundation app is a rebuild version of https://zora.co, which I created as part of my freelancing work.",
    GithubLink: "https://github.com/amine-tayani/project",
    Preview: "https://nftoundation.vercel.app/",
  },
  {
    id: 6,
    Stack: ["React js", "Firebase"],
    Title: "Blaazit",
    Description:
      " Blaazit is a reddit like-app built with React JS (Context api and hooks ) and also firebase as backend",
    GithubLink: "https://github.com/amine-tayani/blaazit",
    Preview: "",
  },
  {
    id: 7,
    Stack: ["React Js", "Rapid-API"],
    Title: "Ko-19 Tracker",
    Description:
      "A website that informs you with the latest Coronavirus stats of morocco: total and new cases and current active cases and also interactive graphs",
    GithubLink: "https://github.com/amine-tayani/CovidMorocco.git",
    Preview: "",
  },
  {
    id: 8,
    Stack: ["Python", "Tensorflow", "Matplotlib"],
    Title: "Fire Detection System",
    Description:
      "This is my internship report at GLOBAL-VISION company namely the study and development of a smoke detection application from a video sequence or an image",
    GithubLink: "",
    Preview:
      "https://etuunivh2cma-my.sharepoint.com/:b:/g/personal/amine_tayani-etu_etu_univh2c_ma/EdMKjfmwiuBImN7EmvOOr3IBeItJNglsG-tlGf6bBKeOvw?e=Kfe1No",
  },
  {
    id: 9,
    Stack: ["HTML/CSS", "MYSQL", "PHP"],
    Title: "OCP-Gestion-med ",
    Description:
      "This is my inaugural internship project at OCP Group, where I assist the company in effectively managing medical consultations for employees",
    GithubLink: "https://github.com/amine-tayani/gm-ocp",
    Preview: "",
  },
];