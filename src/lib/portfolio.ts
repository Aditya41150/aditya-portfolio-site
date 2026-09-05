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

export const projects: Project[] = [
  {
    slug: "farefinder",
    title: "FareFinder",
    tag: "Mobile + API",
    year: "2024",
    summary: "Compare cab and bike fares across services from one Flutter app, with Places search and an Express backend.",
    problem: "Checking Uber, Ola, and bike-taxi prices means opening three apps.",
    approach: "Flutter client plus an Express API organized as MVC, with debounced Google Places search.",
    result: "Shipped a working web companion plus the mobile app.",
    details: ["Flutter + Express fare comparison", "Places Autocomplete", "REST JSON APIs", "MVC backend"],
    tech: ["Flutter", "Dart", "Node.js", "Express", "Google Places", "REST"],
    github: "https://github.com/Aditya41150/Fare-Finder-Cabs-and-Bikes",
    live: "https://farefinderapp.netlify.app/",
    featured: true,
  },
  {
    slug: "forms-autofill",
    title: "Google Forms Autofill",
    tag: "Chrome extension",
    year: "2024",
    summary: "A published Chrome extension that fills Google Forms automatically.",
    problem: "Repetitive form filling is slow and error-prone.",
    approach: "Content scripts map saved answers onto live form fields.",
    result: "Published on the Chrome Web Store; most-starred repo on the profile.",
    details: ["Manifest extension", "Saved answer profiles", "Store listing"],
    tech: ["JavaScript", "Chrome Extensions", "DOM"],
    github: "https://github.com/Aditya41150/Google-Form-Auto-Fill-Extension",
    live: null,
    featured: true,
  },
  {
    slug: "proxy-c",
    title: "HTTP proxy in C",
    tag: "Systems",
    year: "2024",
    summary: "Multi-threaded HTTP proxy: sockets, mutex-guarded cache, LRU eviction.",
    problem: "Frameworks hide concurrent I/O and caching costs.",
    approach: "BSD sockets, pthreads, mutex cache, LRU eviction.",
    result: "Low-level networking sample for backend / infra interviews.",
    details: ["HTTP forwarding", "Thread-safe cache", "LRU", "pthreads"],
    tech: ["C", "Sockets", "TCP/IP", "pthreads", "LRU"],
    github: "https://github.com/Aditya41150/Proxy-web-server-in-c",
    live: null,
    featured: true,
  },
  {
    slug: "devflow",
    title: "DevFlow",
    tag: "Web app",
    year: "2025",
    summary: "Developer dashboard: tasks, Pomodoro, notes, weather, GitHub search.",
    problem: "Focus tools are scattered.",
    approach: "React 19 + TypeScript on Vite, localStorage persistence, REST integrations.",
    result: "Live responsive dashboard.",
    details: ["Tasks and Pomodoro", "OpenWeather and GitHub REST", "localStorage"],
    tech: ["React 19", "TypeScript", "Vite", "Tailwind", "REST"],
    github: "https://github.com/Aditya41150/DevFlow---Developer-Productivity-Dashboard",
    live: "https://devflow-developer-productivity-dashboard.vercel.app/",
    featured: true,
  },
];

export const experience = [
  {
    role: "Summer Trainee",
    company: "Metacrafters",
    dates: "Apr 2024 – Jul 2024",
    place: "Remote",
    certificate: "https://www.linkedin.com/in/aditya41150/",
    points: [
      "Cut smart-contract execution cost by about 15%.",
      "Shipped EVM work on Ethereum and Avalanche, including ERC-20 flows.",
      "Mentor-reviewed walkthroughs.",
    ],
  },
];

export const skillGroups = [
  { title: "Web", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { title: "Mobile", items: ["Flutter", "Dart", "Riverpod", "Firebase", "Firestore"] },
  { title: "Backend", items: ["Node.js", "Express", "REST", "Google Cloud"] },
  { title: "Data & systems", items: ["PostgreSQL", "MySQL", "MongoDB", "C", "Sockets"] },
  { title: "Chain", items: ["Solidity", "Ethereum", "Avalanche"] },
];

export const education = {
  degree: "B.Tech in Computer Science",
  school: "Chandigarh University",
  dates: "2022 – 2026",
  notes: [
    "Coursework in data structures, algorithms, web, and mobile.",
    "Active in coding clubs and technical societies.",
  ],
};

export const proof = [
  { title: "Merit scholarship", org: "Metacrafters", detail: "$175 award for the blockchain program.", year: "2024" },
  { title: "Open source", org: "GirlScript Summer of Code", detail: "Flutter contributions: 10+ bug fixes and features.", year: "2024" },
  { title: "Problem solving", org: "LeetCode", detail: "750+ problems across difficulties.", year: "Ongoing" },
];
