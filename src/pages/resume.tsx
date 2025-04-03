import React from "react";
import { motion } from "framer-motion";
import { SiDiscord, SiGithub } from "react-icons/si";
import { FiMail, FiPhone } from "react-icons/fi";

const Resume = () => {
    return (
            <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="text-4xl font-bold mb-2">Cyanne Justin Vega</h1>
            <p className="text-lg mb-4">Tagudin, Ilocos Sur 2714</p>
            <div className="flex items-center gap-4 mb-6">
                <a href="mailto:cyannejustinvega@pm.me" className="flex items-center gap-2 hover:text-blue-500">
                    <FiMail className="w-5 h-5" /> cyananejustinvega@pm.me
                </a>
                <a href="tel:+639568104939" className="flex items-center gap-2 hover:text-blue-500">
                    <FiPhone className="w-5 h-5" /> +639568104939
                </a>
                <a href="https://github.com/bitress" className="flex items-center gap-2 hover:text-blue-500">
                    <SiGithub className="w-5 h-5" /> github.com/bitress
                </a>
            </div>
            
            <h2 className="text-2xl font-semibold mt-6 mb-2">Work Experience</h2>
            <div className="mb-4">
                <h3 className="font-bold">MIS Office - Ilocos Sur Polytechnic State College</h3>
                <p className="text-gray-600">On-The-Job Training (Feb 2025 – May 2025)</p>
                <ul className="list-disc pl-5">
                    <li>Worked on Laravel development and implementation.</li>
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="font-bold">Research Office - Ilocos Sur Polytechnic State College</h3>
                <p className="text-gray-600">On-The-Job Training (March 2023 – July 2023)</p>
                <ul className="list-disc pl-5">
                    <li>Set up and customized Open Journal Systems (OJS) for research journals.</li>
                    <li>Designed professional certificates for attendees.</li>
                    <li>Served as the primary Zoom administrator for webinars.</li>
                </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Projects</h2>
            <div className="mb-4">
                <h3 className="font-bold">E-BASURA: IoT-Based Waste Segregation System</h3>
                <p className="text-gray-600">Capstone Project (Aug 2024 – Dec 2024)</p>
                <ul className="list-disc pl-5">
                    <li>Designed an IoT waste segregation system with machine learning and real-time monitoring.</li>
                    <li>Integrated TensorFlow Lite for waste classification.</li>
                    <li>Developed a backend with PHP and MySQL.</li>
                </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
            <p className="font-bold">Ilocos Sur Polytechnic State College</p>
            <p className="text-gray-600">BS in Information Technology (2021 - 2025)</p>
            
        </motion.div>
    );
};

export default Resume;
