import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `Welcome to my portfolio. I'm a fresh graduate Computer Engineer
              and an aspiring web developer. I am passionate about what I do. Eager to learn new knowledge to improve my skills.`;

export const ABOUT_TEXT = `I'm a Computer Engineer with a passion for learning and creating. My fascination with technology started at a young age, leading me to pursue my dream course, where I’ve enjoyed solving problems and exploring new ideas.`;
export const ABOUT_TEXT2 = `Beyond academics, I’m a well-rounded individual who loves gaming, working out, boxing, and playing sports like basketball and volleyball. Recently, I’ve developed a strong interest in web development, and my eagerness to learn has helped me quickly pick up new skills.`;
export const ABOUT_TEXT3 = `I’m excited to grow further and create meaningful projects that make an impact!`;

export const PROJECTS = [
  {
    title:
      "SULAT-SURI: Automated Essay Evaluation through the Integration of Large Language Model with User-Defined Criteria-Based Grading.",
    repo: "https://sulat-suri-app.vercel.app/",
    image: project1,
    description:
      "SULAT-SURI is our undergraduate thesis project, a web-based application that automates the grading of student essays using a Large Language Model (LLM) integrated with customizable, user-defined rubrics. Designed to reduce grading workload and improve consistency, it allows educators to upload digital essays, define grading criteria, and receive immediate feedback with both numerical scores and qualitative insights.\n\n\n**Repos:**\n\n- •[Frontend](https://github.com/joshuaformento/sulat-suri-frontend)\n- •[Backend](https://github.com/joshuaformento/sulat-suri-backend)\n- •[AI](https://github.com/joshuaformento/sulat-suri-ai)",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "FastAPI",
      "OpenAI API",
      "PostgreSQL",
      "Prisma ORM",
      "Langchain",
      "RESTful API",
    ],
  },
  {
    title: "Laboratory Equipment Borrowing System",
    repo: "https://github.com/joshuaformento/lab-equipment-borrowing-system",
    image: project2,
    description:
      "Developed a borrowing system using Java in NetBeans and MySQL in XAMPP to simplify the borrowing process, improve accountability, and enhance resource management, resulting in streamlined equipment tracking and reduced loss and damage instances.",
    technologies: ["Java", "MySQL", "XAMPP", "NetBeans"],
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
  name: "Joshua Ashley Formento",
  address: "San Pablo City, Laguna",
  phoneNo: "09493255812",
  email: "joshuaformento.work@gmail.com",
};
