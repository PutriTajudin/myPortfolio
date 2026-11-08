import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Putri Tajudin's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Selected technical skills and tools from my experience.",
    metadata: {
      title: "Skills",
      description:
        "Putri Tajudin's key skills that define her professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Data analysis and technology projects.",
    metadata: {
      title: "Projects",
      description:
        "Putri Tajudin's data analysis and technology projects.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Putri Tajudin's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Putri Tajudin's resume.",
    metadata: {
      title: "Resume",
      description: "Putri Tajudin's resume.",
    },
  },
  certificates: {
    title: "Coursework & Certificates",
    description:
      "A selection of course certificates completed alongside my university coursework.",
    metadata: {
      title: "Coursework & Certificates",
      description:
        "Selected Cisco Networking Academy and DataCamp course certificates earned by Putri Tajudin.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Articles and notes on data analysis and technology.",
    metadata: {
      title: "Blogs",
      description:
        "Articles and notes by Putri Tajudin on data analysis and technology.",
    },
  },
  experience: {
    title: "Experience",
    description:
      "Selected university and community roles in event operations, human resources, and digital content.",
    metadata: {
      title: "Experience",
      description:
        "Putri Tajudin's selected university and community experience in event operations, human resources, and digital content.",
    },
  },
};
