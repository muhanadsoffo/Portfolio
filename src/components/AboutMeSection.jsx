import {useState} from "react";
import {cn} from "@/lib/utils.js";
import { Code, Globe, Smartphone, Cpu } from "lucide-react";
import {motion} from "framer-motion";
import {fadeIn, fadeUp, slideInLeft, slideInRight, staggerContainer, zoomIn} from "@/lib/animation.js";
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
                    <motion.div variants={slideInLeft} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.2}} className=" space-y-6 ">
                        <h3 className="text-3xl  items-start pr-10">
                            Who Am I?
                        </h3>
                        <p className="text-muted-foreground text-start text-2xl pt-5">
                            I am Computer Engineer, graduated from Karabük University (2024), I specialize in backend development and Android application development using Flutter.
                            My technical toolkit includes strong Machine Learning and AI capabilities,
                            Additionally, I have some experience in game development,
                            I'm committed to lifelong learning and pushing the boundaries of technology.
                        </p>
                        <div className=" flex flex-col sm:flex-row gap-4 pt-4 justify-start">
                            <a href="#contact" className="cosmic-button text-lg"> Get in touch with me</a>
                            <a href="/Muhenned Sıffu.pdf"
                               download="Muhenned Sıffu.pdf"
                               className="px-6 py-2 rounded-full border bg-white/90 text-primary transform transition hover:scale-105 duration-300 font-medium text-lg "> Download
                                my CV
                            </a>
                        </div>

                    </motion.div>
                    <div className=" grid grid-cols-1  gap-7">
                        <div className="flex flex-wrap  mb-4 gap-4 justify-around">
                            {categories.map((category,key)=>(
                                <motion.button variants={zoomIn} initial="hidden" whileInView="show"  viewport={{once: true, amount: 0.2}} key={key} onClick={() =>setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize text-lg",
                                    activeCategory===category ? "bg-primary text-primary-foreground" :"border border-primary text-primary hover: bg-primary/10 transition-colors duration-300" )}>
                                    {category}
                                </motion.button>
                            ))}

                        </div>



                        <motion.div
                            key={activeCategory}
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="space-y-6"
                        >
                            {filteredAbout.map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={slideInRight}
                                    className="gradient-border p-6 card-hover"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-4 rounded-full bg-primary/10">{item.icon}</div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-xl">{item.name}</h4>
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