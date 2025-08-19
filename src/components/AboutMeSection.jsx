import {useState} from "react";
import {cn} from "@/lib/utils.js";
import { Code, Globe, Smartphone, Cpu } from "lucide-react";
import {motion} from "framer-motion";
import {fadeIn, fadeUp, slideInRight, staggerContainer, zoomIn} from "@/lib/animation.js";
const aboutMe = [
    { name: "Arabic", info: "Native", category: "Languages", icon: <Globe className="text-primary"/> },
    { name: "English", info: "Full Professional", category: "Languages", icon: <Globe className="text-primary"/> },
    { name: "Turkish", info: "Intermediate", category: "Languages", icon: <Globe className="text-primary"/> },
    { name: "Backend Developer", info: "with Frameworks like Laravel and Fiber", category: "Introduction", icon: <Code className="text-primary"/> },
    { name: "Android App Developer", info: "Mainly using Flutter", category: "Introduction", icon: <Smartphone className="text-primary"/> },
    { name: "Machine Learning Enthusiast", info: "Worked on some small fun projects", category: "Introduction", icon: <Cpu className="text-primary"/> },
];

const categories=[
    "Introduction",
    "Languages"
]

export const AboutMeSection = () => {
    const [activeCategory, setActiveCategory] = useState("Introduction")
    const filteredAbout = aboutMe.filter((about)=> about.category === activeCategory);
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}} className=" text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </motion.h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.2}} className=" space-y-6 ">
                        <h3 className="text-2xl font-semibold ">
                            Who Am I?


                        </h3>
                        <p className="text-muted-foreground text-start text-2xl px-2">
                            I am a Computer Engineer, graduated from Karabük University in 2024,
                            I am passionate about backend development and Android applications development with Flutter.
                            I possess good skills in Machine learning and AI and am eager to expand my knowledge in these fields,
                            alongside with some experience in game development. Committed to continuous learning and growing in these fields.
                        </p>
                        <div className=" flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button text-lg"> Get in touch with me</a>
                            <a href=""
                               className="px-6 py-2 rounded-full border bg-white/90 text-primary hover:scale-105 duration-300 font-medium text-lg "> Download
                                my CV
                            </a>
                        </div>
                    </motion.div>
                    <div className=" grid grid-cols-1  gap-6">
                        <div className="flex flex-wrap  mb-4 gap-4 justify-around">
                            {categories.map((category,key)=>(
                                <motion.button variants={zoomIn} initial="hidden" whileInView="show"  viewport={{once: true, amount: 0.2}} key={key} onClick={() =>setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize text-lg",
                                    activeCategory===category ? "bg-primary text-primary-foreground" :"border border-primary text-primary hover: bg-primary/10 transition-colors duration-300" )}>
                                    {category}
                                </motion.button>
                            ))}

                        </div>



                        <motion.div
                            key={activeCategory} // 👈 resets animation when category changes
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show" // 👈 animates on scroll
                            viewport={{ once: true, amount: 0.2 }} // 👈 runs again if re-mounted
                            className="space-y-6"
                        >
                            {filteredAbout.map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={slideInRight}
                                    className="gradient-border p-6 card-hover"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">{item.icon}</div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">{item.name}</h4>
                                            <p className="text-muted-foreground">{item.info}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>




                    </div>
                </div>
            </div>
        </section>
    )

}