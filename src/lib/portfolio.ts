export const profile = {
  name: "Aditya",
  handle: "Aditya.dev",
  title: "Full-stack & app developer",
  location: "Chandigarh, India",
  school: "Chandigarh University, Mohali",
  grad: "B.E. CSE · 2026",
  email: "aditya.official2390@gmail.com",
  phone: "+91-8058695424",
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
    slug: "devflow",
    title: "DevFlow",
    tag: "Web app",
    year: "2025",
    summary:
      "A responsive productivity dashboard: tasks, Pomodoro, GitHub analytics, weather, and notes.",
    problem:
      "Focus tools are scattered. Daily engineering work should live on one local-first board.",
    approach:
      "Six reusable React components, Axios calls to GitHub and OpenWeatherMap, and LocalStorage so nothing needs a backend.",
    result:
      "A live dashboard that keeps tasks, notes, and focus sessions without an account.",
    details: [
      "Task management, Pomodoro timer, notes, weather, and GitHub analytics",
      "Six reusable React components",
      "GitHub and OpenWeatherMap REST APIs via Axios",
      "LocalStorage persistence for tasks, notes, and focus sessions",
    ],
    tech: ["React.js", "Tailwind CSS", "Axios"],
    github:
      "https://github.com/Aditya41150/DevFlow---Developer-Productivity-Dashboard",
    live: "https://devflow-developer-productivity-dashboard.vercel.app/",
    featured: true,
  },
  {
    slug: "farefinder",
    title: "FareFinder",
    tag: "Mobile + API",
    year: "2024",
    summary:
      "A full-stack ride fare comparison app across providers, built with Flutter and REST.",
    problem:
      "Comparing cab and bike fares means opening several apps and retyping the same trip.",
    approach:
      "A Flutter client talks to a modular Express API: six endpoints for fares, booking, distance, and location search, plus debounced Google Places and OSRM routing.",
    result:
      "One place to estimate a trip, search a place, and see a route without juggling providers.",
    details: [
      "Flutter app and REST APIs for multi-provider fare comparison",
      "Six Express endpoints: fare estimation, booking, distance, and location search",
      "Google Places Autocomplete with debounced search",
      "OSRM-based route estimation",
    ],
    tech: ["Flutter", "Node.js", "Express.js"],
    github: "https://github.com/Aditya41150/Fare-Finder-Cabs-and-Bikes",
    live: "https://farefinderapp.netlify.app/",
    featured: true,
  },
  {
    slug: "cosmic",
    title: "Cosmic",
    tag: "Flutter",
    year: "2024",
    summary:
      "A solar-system explorer with Firebase auth, profiles, favorites, and a daily planet highlight.",
    problem:
      "A visual Flutter app still has to handle real accounts and saved state, not just screens.",
    approach:
      "Firebase Authentication, user profiles and favorites, and a glassmorphism UI driven by Flutter Animate.",
    result:
      "A responsive mobile piece that is signed-in, personal, and animated.",
    details: [
      "Firebase Authentication with user profiles and favorites",
      "Daily planet highlights",
      "Glassmorphism UI and Flutter Animate transitions",
      "Responsive mobile layout",
    ],
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/Aditya41150/Cosmic-App",
    live: null,
    featured: true,
  },
];

export const experience = [
  {
    role: "Summer Trainee",
    company: "Metacrafters",
    dates: "Apr 2024 – Jul 2024",
    place: "Remote",
    certificate:
      "https://www.linkedin.com/in/aditya41150/overlay/Position/2406589181/treasury/?profileId=ACoAAD4nd8gBO7SZkR1T1jw-jk2QTiS1VayNjY8",
    points: [
      "Optimized Solidity smart contracts for security and gas, cutting estimated execution cost by about 15% and improving deployment reliability.",
      "Built and tested contracts on Ethereum (EVM) and Avalanche, including ERC-20 tokens and contract management workflows.",
      "Presented mentor-reviewed projects, folded in technical feedback, and shipped secure, production-oriented implementations.",
    ],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["C++", "JavaScript", "Python", "Dart", "Solidity"] },
  { title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST", "Firebase Auth", "MongoDB", "MySQL"] },
  { title: "Mobile", items: ["Flutter"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Postman", "Axios"] },
  { title: "Core CS", items: ["DSA", "OOP", "Operating Systems", "DBMS", "Networks"] },
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  school: "Chandigarh University, Mohali",
  dates: "Aug 2022 – Aug 2026",
  notes: [
    "Core coursework in data structures, OOP, operating systems, DBMS, and computer networks.",
  ],
};

export const proof = [
  {
    title: "Problem solving",
    org: "LeetCode, GFG, HackerRank, CodeChef",
    detail: "737+ data structures and algorithms problems.",
    year: "Ongoing",
  },
  {
    title: "Merit scholarship",
    org: "Metacrafters",
    detail: "$175 award for Solidity and Web3 performance.",
    year: "2024",
  },
  {
    title: "2nd rank",
    org: "Chandigarh University",
    detail: "Triathlon DSA coding competition.",
    year: "2024",
  },
];
