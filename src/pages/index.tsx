import { motion } from "framer-motion";
import {
    SiVisualstudiocode,
    SiRust,
    SiGit,
    SiDocker,
    SiNextdotjs as SiNextJs,
    SiNodedotjs as SiNodeJs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiYarn,
    SiSwift,
    SiJavascript,
    SiPython,
    SiPrisma,
    SiPhp,
    SiMariadb,
    SiGnubash,
    SiFlask,
    SiLaravel,
    SiJquery,
    SiLivewire,
    SiBootstrap,
    SiLinux,
    SiHtml5,
    SiRaspberrypi,
} from "react-icons/si";
import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";

interface AppProps {
    stats: Record<string, number>;
    topRepos: Record<any, any>;
}

const Index = ({ stats, topRepos }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Cyanne Justin Vega 👋</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
            I am a 22-year-old Information Technology student specializing in web development. I consider myself to have an intermediate level of knowledge and expertise in this field. I envision myself becoming an excellent web developer.            </p>

            <h2 className="font-medium text-3xl mb-4">What I Do 💭</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
            I'm passionate about technology, particularly in web development, IoT, machine learning, and software development. From designing and building smart systems to integrating AI-driven solutions, I enjoy exploring how hardware and software interact to solve real-world problems.
            Beyond my projects, I'm constantly learning—whether it is backend systems, or embedded programming—to better understand how and why technology works the way it does.
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I use a variety of tools to streamline my development process and increase the quality of both my code,
                and my projects. Below is a list of technologies and languages I've had experience with in the past, or
                use currently.
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiPhp} name="PHP" />
                <TechItem icon={SiJavascript} name="JavaScript" />
                <TechItem icon={SiVisualstudiocode} name="VSCode" />
                <TechItem icon={SiReact} name="React.js" />
                <TechItem icon={SiGit} name="Git" />
                <TechItem icon={SiPython} name="Python" />
                <TechItem icon={SiMariadb} name="MariaDB" />
                <TechItem icon={SiGnubash} name="Bash" />
                <TechItem icon={SiFlask} name="Flask" />
                <TechItem icon={SiLaravel} name="Laravel" />
                <TechItem icon={SiJquery} name="JQuery" />
                <TechItem icon={SiLivewire} name="Livewire" />
                <TechItem icon={SiBootstrap} name="Boostrap" />
                <TechItem icon={SiLinux} name="Linux" />
                <TechItem icon={SiHtml5} name="HTML5" />
                <TechItem icon={SiRaspberrypi} name="Raspberry Pi" />
            </div>

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                In my free time, I enjoy creating open source projects on{" "}
                <a
                    href="https://github.com/bitress"
                    rel="noreferrer"
                    className="font-semibold text-violet-500 hover:underline"
                >
                    GitHub
                </a>
                , so I can learn from others and share what I know. In total, all of my open sourced projects have earnt
                me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on GitHub, and{" "}
                <span className="font-bold text-black dark:text-slate-200">{stats.forks}</span> forks. Below are some of
                my most popular repositories.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
                {topRepos.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};

export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/bitress`).then(res => res.json());

    const topRepos = [
        {
            name: "ebasura-backend",
            description: "Backend API for the E-Basura waste segregation system",
            stargazers_count: 0,
            forks_count: 0,
            language: "Python",
        },
        {
            name: "vaxkid",
            description: "An efficient system for electronically converting paper-based children's records to Rural Health Unit.",
            stargazers_count: 0,
            forks_count: 0,
            language: "PHP",
        },
        {
            name: "rental-wifi-payment-gateway",
            description: "The Rental WiFi Portal is a payment gateway portal for TP-Link EAP-245 that integrates PayMongo API. ",
            stargazers_count: 0,
            forks_count: 0,
            language: "PHP",
        },
        {
            name: "ispsc-website",
            description: "Created School Website for ISPSC",
            stargazers_count: 18,
            forks_count: 3,
            language: "HTML",
        },
    ];
    
    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Index;
