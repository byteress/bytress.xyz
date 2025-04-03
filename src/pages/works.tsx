import { motion } from "framer-motion";
import WorkItem from "../components/WorkItem";

const projects = [
  {
    id: 1,
    name: "E-Basura",
    description: "An IoT-based waste segregation system using AI and cloud monitoring.",
    languages: ["Python", "Flask", "TensorFlow Lite", "PHP", "Bootstrap 5"],
    image: "https://raw.githubusercontent.com/ebasura/ebasura/refs/heads/main/assets/images/logo/E-Basura_transparent.png",
    github: "https://github.com/ebasura",
    preview: "https://ebasura.online",
  },
  {
    id: 2,
    name: "VaxKid",
    description: "An efficient system for electronically converting paper-based children's records to Rural Health Unit.",
    languages: ["PHP", "HTML", "CSS", "JQuery"],
    image: "https://raw.githubusercontent.com/bitress/vaxkid/refs/heads/main/assets/img/logo/VaxKid-logos_transparent.png",
    github: "https://github.com/bitress/vaxkid",
    preview: "#",
  },
  {
    id: 3,
    name: "Rental WiFi Portal",
    description: "The Rental WiFi Portal is a payment gateway portal for TP-Link EAP-245 that integrates PayMongo API. This portal allows users to make payments for renting WiFi devices or services using the PayMongo payment gateway.",
    languages: ["PHP", "HTML", "CSS", "JQuery"],
    image: "",
    github: "https://www.github.com/bitress/rental-wifi-payment-gateway",
    preview: "#",
  },
  {
    id: 4,
    name: "ISPSC Tagudin Website",
    description: "The ISPSC Tagudin Website provides campus updates, academic info, and announcements with a responsive design.",
    languages: ["PHP", "HTML", "CSS", "JQuery"],
    image: "https://i.ibb.co/nMMrVnFJ/image.png",
    github: "",
    preview: "https://ispsctagudin.info",
  },
  {
    id: 5,
    name: "Confessionally",
    description: "Confessionally is a anonymous social network. A user register with their choice of nickname, and a link will be automatically generated, and this link can be shared to friends and have them to send a secret message to you.",
    languages: ["PHP", "HTML", "CSS", "JQuery"],
    image: "https://www.codester.com/static/uploads/items/000/038/38113/icon.png",
    github: "https://github.com/bitress/confessionally",
    preview: "#",
  },
  {
    id: 6,
    name: "phpLoginRegisterSystem",
    description: "This script allows you to have an authentication on your system. It has a user registration/login system written in pure PHP.",
    languages: ["PHP", "HTML", "CSS", "JQuery"],
    image: "https://www.codester.com/static/uploads/items/000/038/38000/icon.png",
    github: "",
    preview: "https://www.codester.com/items/38000/phploginregistersystem",
  },
  {
    id: 7,
    name: "Bitress SMS Gateway",
    description: "turn your android phone as a sms gateway using cellular load.",
    languages: ["Kotlin"],
    image: "https://raw.githubusercontent.com/bitress/bitress-sms-gateway/main/.github/banner.png",
    github: "https://github.com/bitress/bitress-sms-gateway",
    preview: "",
  },
  {
    id: 7,
    name: "Aquaphonics",
    description: "An AI-powered system that integrates YOLO for detecting lettuce plants and XGBoost for classifying their health. This project helps hydroponic farmers monitor plant conditions in real-time, optimizing growth and preventing diseases.",
    languages: ["Python", "TensorFlow", "OpenCV", "XGBoost", "YOLO"],
    image: "",
    github: "",
    preview: "",
  },
  {
    id: 8,
    name: "AgriServe",
    description: "A web-based farmer information management system.",
    languages: ["PHP", "MySQL"],
    image: "https://raw.githubusercontent.com/bitress/agriserve/refs/heads/main/img/agrilogo.png",
    github: "https://github.com/bitress/agriserve",
    preview: "",
  },
];

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="py-24 w-full max-w-6xl mx-auto px-6 mb-32"
    >
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-black dark:text-white font-bold text-4xl mb-2"
        >
          My Works
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400">
  Explore a collection of projects showcasing my expertise in design, development, and innovation.
</p>
      </div>

      <div className="grid md:grid-cols-4 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <WorkItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};


export default Works;