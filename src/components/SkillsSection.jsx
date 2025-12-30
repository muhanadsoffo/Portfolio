import {useState} from "react";
import {cn} from "@/lib/utils.js";
import {motion} from "framer-motion";
import {fadeIn, fadeUp, staggerContainer, zoomIn} from "@/lib/animation.js";
const skills = [
    // Programming Languages
    { name: "C / C#", level: 80, category: "programming" },
    { name: "PHP", level: 40, category: "programming" },
    { name: "Go", level: 35, category: "programming" },
    { name: "Dart", level: 45, category: "programming" },
    { name: "SQL", level: 50, category: "programming" },
    { name: "Python", level: 50, category: "programming" },
    { name: "JavaScript", level: 30, category: "programming" },
    { name: "TypeScript", level: 30, category: "programming" },

    // Frameworks & Tools
    { name: "Flutter", level: 70, category: "frameworks & Tools" },
    { name: "Laravel", level: 55, category: "frameworks & Tools" },
    { name: "Unity Engine", level: 45, category: "frameworks & Tools" },
    { name: "React", level: 35, category: "frameworks & Tools" },
    { name: "NextJs", level: 50, category: "frameworks & Tools" },
    { name: "Express Js", level: 45, category: "frameworks & Tools" },
    { name: "Tailwindcss", level: 50, category: "frameworks & Tools" },
    { name: "Firebase", level: 50, category: "frameworks & Tools" },
    { name: "Firestore", level: 50, category: "frameworks & Tools" },
    { name: "PyTorch", level: 25, category: "frameworks & Tools" },
    { name: "Prisma", level: 35, category: "frameworks & Tools" },

    // AI / Data
    { name: "Machine Learning", level: 75, category: "AI & data" },
    { name: "Data Mining", level: 53, category: "AI & data" },
    { name: "Image Processing", level: 45, category: "AI & data" },
    { name: "Neural Networks", level: 45, category: "AI & data" },

    // Professional
    { name: "Project Management", level: 70, category: "professional" },
    { name: "Time Management", level: 80, category: "professional" },
    { name: "Teamwork", level: 75, category: "professional" },
];

const categories = [
    "all",
    "programming",
    "frameworks & Tools",
    "AI & data",
    "professional"
];
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill)=>activeCategory==="all"|| skill.category === activeCategory)
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}} className=" text-3xl md:text-4xl font-bold  mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12 text-lg">
                    {categories.map((category, key) => (
                        <motion.button variants={zoomIn} initial="hidden" whileInView="show"  viewport={{once: true, amount: 0.2}} key={key} onClick={() => setActiveCategory(category)}
                                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",)}>
                            {category}
                        </motion.button>
                    ))}
                </div>
                <motion.div key={activeCategory} variants={staggerContainer} initial="hidden" whileInView="show"  viewport={{ once: true, amount: 0.2 }} className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill) => (
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" key={skill.name} viewport={{once: true, amount: 0.2}} className=" bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondairy/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                     style={{width: skill.level + "%"}}/>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )

}