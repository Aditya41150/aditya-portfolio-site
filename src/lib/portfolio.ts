export const profile = {
  name: "Aditya",
  handle: "Aditya.dev",
  title: "Full-stack & app developer",
  location: "India",
  school: "Chandigarh University",
  grad: "B.Tech CSE · 2026",
  email: "singhadi437@gmail.com",
  availability: "Open to internships and full-time roles",
  resume: "/resume.pdf",
  links: {
    github: "https://github.com/Aditya41150",
    linkedin: "https://www.linkedin.com/in/aditya41150/",
    leetcode: "https://leetcode.com/u/Aditya_070/",
    medium: "https://medium.com/@aditya41150",
    chai: "https://buymeachai.ezee.li/Aditya41150",
  },
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  details: string[];
  tech: string[];
  github: string;
  live?: string | null;
  featured: boolean;
};
