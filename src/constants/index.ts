import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `Welcome to my portfolio. I'm a Senior Computer Engineering student
              and an aspiring web developer. I am passionate about what I do. Eager to learn new knowledge to improve my skills.`;

export const ABOUT_TEXT = `I'm a soon-to-be Computer Engineer with a passion for learning and creating. My fascination with technology started at a young age, leading me to pursue my dream course, where I’ve enjoyed solving problems and exploring new ideas.`;
export const ABOUT_TEXT2 = `Beyond academics, I’m a well-rounded individual who loves gaming, working out, boxing, and playing sports like basketball and volleyball. Recently, I’ve developed a strong interest in web development, and my eagerness to learn has helped me quickly pick up new skills.`;
export const ABOUT_TEXT3 = `I’m excited to grow further and create meaningful projects that make an impact!`;

export const PROJECTS = [
  {
    title: "Laboratory Equipment Borrowing System",
    repo: "https://github.com/joshuaformento/lab-equipment-borrowing-system",
    image: project1,
    description:
      "Developed a borrowing system using Java in NetBeans and MySQL in XAMPP to simplify the borrowing process, improve accountability, and enhance resource management, resulting in streamlined equipment tracking and reduced loss and damage instances.",
    technologies: ["Java", "MySQL", "XAMPP", "NetBeans"],
  },
  {
    title: "TinDog",
    repo: "https://github.com/joshuaformento/tindog",
    image: project2,
    description:
      "A fun matchmaking app for dog lovers, enabling users to connect their pets with nearby playdates through swipe-based interactions. Designed with CSS gradients for vibrant, eye-catching visuals and built using Bootstrap for responsive and consistent user experience.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title:
      "IntelliRoom: Automated Seat Allocation, Smart Attendance, and Computer Access",
    repo: "https://github.com/joshuaformento/intelliroom",
    image: project3,
    description:
      "Developed the RFID code and integrated Google Sheets API using NodeMCU to automate student attendance tracking, seat allocation, and computer access, resulting in real-time data logging and improved efficiency in managing computer laboratory resources.",
    technologies: ["Arduino", "NodeMCU", "Google Sheets"],
  },
  {
    title: "Jotter",
    repo: "https://vercel.com/joshuaformentos-projects/jotter-app",
    image: project4,
    description:
      "Jotter is a note-taking app designed to help users manage tasks and reminders. It allows users to add detailed information, including a title and description, for better organization.",
    technologies: ["HTML", "CSS", "React", "Vite", "TypeScript"],
  },
  {
    title: "Personal Portfolio Website",
    repo: "https://vercel.com/joshuaformentos-projects/react-portfolio",
    image: project5,
    description:
      "A personal portfolio website showcasing my information, projects, skills, and contact information.",
    technologies: ["TailwindCSS", "React", "Vite", "TypeScript"],
  },
];

export const CONTACT = {
  address: "San Pablo City, Laguna | Batangas City, Batangas",
  phoneNo: "09493255812",
  email: "jformento108@gmail.com",
};
