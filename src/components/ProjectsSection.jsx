import {ExternalLink, Github, Info, InfoIcon, LucideProjector} from "lucide-react";
import {motion} from "framer-motion";
import {fadeIn} from "@/lib/animation.js";

const projects = [
    {
        id: 1,
        title: "SparkFlow",
        description: "some description",
        image: "/projects/flog.png",
        tags: ["Flutter", "Dart"],
        detail:"project-1",
        url: "https://github.com/muhanadsoffo/SparkFlow-app",
    },
    {
        id: 2,
        title: "SancturarAI",
        description: "some description",
        image: "/projects/bg.png",
        tags: ["Flutter", "Dart"],
        detail:"sanctuarai",
        url: "https://github.com/muhanadsoffo/SanctuarAI",
    },
    {
        id: 3,
        title: "SparkFlow",
        description: "some description",
        image: "/projects/sparkflow.png",
        tags: ["Flutter", "Dart"],
        detail:"project-3",
        url: "https://sparkflow.io",
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}}
                           className=" text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span
                    className=" text-primary">Projects</span>
                </motion.h2>
                <motion.p variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.4}}
                          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Check out my projects
                    that I
                    made throughout my journey! And this is not the end
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-clos-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key}
                             className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
                            <div className="h-85 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/50 text-secondary-foreground">
                                            {tag}</span>
                                    ))}
                                </div>

                                {/* Title + Description */}
                                <h3 className="text-3xl font-semibold mb-1 ">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                {/* GitHub link at bottom center */}
                                <div className="mt-auto  justify-center flex space-x-4">
                                    <div className="items-center flex border space-x-3 border-primary rounded-lg px-4 py-2 hover:bg-primary/10 transition-colors duration-300 ">
                                        <ExternalLink/>
                                        <a href={project.detail}  className=" text-foreground/80 hover:text-primary transition-colors duration-300">details page</a>

                                    </div>
                                    <div
                                        className="flex items-center space-x-3 border border-primary rounded-lg px-4 py-2 hover:bg-primary/10 transition-colors duration-300">
                                        <Github className="text-primary w-5 h-5"/>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            HitHub Codes
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </section>
    )
}