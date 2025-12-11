import {motion} from "framer-motion";
import {fadeIn} from "@/lib/animation.js";

const experiences = [
    {
        id: 1,
        title: "Backend Developer ",
        company: "Demir Çelik",
        period: "2024.Jul.1 - 2024.Aug.26",
        location: "Karabük, Turkey",
        type: "Internship",
        description: " Contributed to developing the company website using Go and Fiber framework where I participated in the frontend and backend architecture, routing, and internal system integration tasks" +
            ", I also Collaborated with senior engineers to implement efficient server-side logic," +
            " and being exposed to the working environment where deadlines and meetings are essential things that I learned there.",
        technologies: ["Golang", "Fiber", "SQL"]
    },


];
export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.3}}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    My <span className="text-primary">Experience</span>
                </motion.h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gray-300"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: true, amount: 0.3}}
                            className={`relative flex items-start mb-12 ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}>
                            {/* Timeline dot */}
                            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-white shadow-lg z-10"></div>
                            {/* Content */}
                            <div className={`ml-16 md:ml-0 md:w-1/2 ${
                                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                            }`}>
                                <div
                                    className="bg-gray-900 border-gray-700 rounded-lg shadow-lg border  p-6 hover:shadow-xl transition-all hover:scale-105 duration-300 ">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-1 text-start">{exp.title}</h3>
                                            <h4 className="text-lg font-semibold text-blue-500 mb-2 text-start">{exp.company}</h4>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            exp.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                                                exp.type === 'Internship' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-gray-100 text-gray-800'
                                        }`}>{exp.type}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mb-4 text-sm ">
                                        <span className="flex items-center gap-1">
                                            📅 {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            📍 {exp.location}
                                        </span>
                                    </div>
                                    <p className=" mb-4 text-start">{exp.description}</p>

                                    <div className="mb-0">
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-primary  rounded-full text-sm font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for the other side on desktop */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
                <h1 className="text-center">More on the way. </h1>
            </div>
        </section>
    )
}