import { motion } from 'framer-motion';
import { Project } from '../components/Project';
import project1 from '../assets/project1.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const projects = [
  {
    title: "Interactive Chatroom",
    description: "A full-stack chat web app enabling user authentication, chat room creation, real-time messaging, and file sharing.",
    tech: [
      { name: "JavaScript", color: "yellow" },
      { name: "React", color: "cyan" },
      { name: "Node.js", color: "green" },
      { name: "Express.js", color: "neutral" },
      { name: "PostgreSQL", color: "blue" },
      { name: "AWS", color: "orange" },
    ],
    link: "https://github.com/kaifenglu1/1724_web",
    previewImage: project1,
  },
  {
    title: "High Availability Shopping System",
    description: "Microservices-based e-commerce system or product catalog, authentication, shopping cart, payments, and order management.",
    tech: [
      { name: "Java", color: "cyan" },
      { name: "SpringBoot", color: "green" },
      { name: "MySQL", color: "blue" },
      { name: "Redis", color: "red" },
      { name: "RabbitMQ", color: "orange" }
    ],
    link: "https://github.com/jasonxiexy/Scalable-Shopping-System/tree/main",
    previewImage: ""
  },
  {
    title: "Alien Farm Invasion",
    description: "A 2D action-adventure platformer game featuring immersive backgrounds, soundtrack, and dynamic gameplay.",
    tech: [
      { name: "C#", color: "indigo" },
      { name: "ASP.NET", color: "blue" },
      { name: "Unity Engine", color: "neutral" },
    ],
    link: "https://github.com/jasonxiexy/Alien_Farm_Invasion_Remix",
    previewImage: project3,
  },
  {
    title: "AI Recommendation Chatbot",
    description: "RAG-Enhanced Movie Recommendation System to deliver contextualized, structured recommendations.",
    tech: [
      { name: "Python", color: "yellow" },
      { name: "FAISS", color: "blue" },
      { name: "LangChain", color: "purple" },
      { name: "LLM", color: "teal" },
    ],
    link: "https://github.com/ZenanJ/ECE1508",
    previewImage: project4,
  }
];

export const sections = [
  {
    title: "Experience",
    content: (
      <div className="space-y-4 mb-8">
        {[
          {
            company: "University of Toronto (Interactive Media Lab)",
            date: "2024 - Now",
            title: "Software Developer Intern",
            description: ["working on health-tech logistics platform"],
            dotColor: "bg-blue-500"
          },
          {
            company: "ZTE Corporation",
            date: "2023 - 2023",
            title: "Software Engineer Intern",
            description: ["worked on infrastructure monitoring system"],
            dotColor: "bg-indigo-500"
          },
          {
            company: "Western University",
            date: "2022 - 2023",
            title: "Software Developer Intern",
            description: ["worked on performance dashboard platform"],
            dotColor: "bg-purple-500"
          }
        ].map((item) => (
          <div key={item.company + item.date} className="relative">
            <div
              className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
            />
            <motion.div
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <p className="font-medium">{item.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Education",
    content: (
      <div className="space-y-4 mb-8">
        {[
          {
            company: "University of Toronto",
            date: "2024 - 2025",
            title: "Master of Engineering in Computer Engineering",
            dotColor: "bg-blue-500"
          },
          {
            company: "Western University",
            date: "2019 - 2023",
            title: "Bachelor of Science in Computer Science",
            dotColor: "bg-purple-500"
          }
        ].map((item) => (
          <div key={item.company + item.date} className="relative">
            <div
              className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
            />
            <motion.div
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <p className="font-medium">{item.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
            </motion.div>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Projects",
    content: (
      <div className="space-y-4">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    )
  },
  {
    title: "Interests",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {[
          {
            title: "🏓 Sports",
            description: "ping pong and basketball keep me moving (and losing)",
            stats: "",
            color: "orange"
          },
          {
            title: "🍳 Cooking",
            description: "experimenting in the kitchen, sometimes even edible",
            stats: "",
            color: "red"
          },
          {
            title: "🌱 Planting",
            description: "currently growing mint, Thai chili, and watermelon",
            stats: "",
            color: "green"
          },
          {
            title: "📈 Stocks",
            description: "learning the art of losing money slower this time",
            stats: "",
            color: "blue"
          },
        ].map((hobby) => (
          <motion.div
            key={hobby.title}
            className="group py-1 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <h3 className={`font-medium`}>
                {hobby.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {hobby.description}
              </p>
              <p className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}>
                {hobby.stats}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }
]