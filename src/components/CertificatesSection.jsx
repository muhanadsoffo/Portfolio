import {motion} from "framer-motion";
import {fadeIn} from "@/lib/animation.js";
const certificates = [
    {
        id: 1,
        title: "Project Contribution Certificate",
        issuer: "Demir Çelik institution",
        date: "August 2024",
        image: "certificate from demir celik.png",
        pdf:"certificate from demir celik.pdf"
    },
    {
        id: 2,
        title: "Supervised Machine Learning",
        issuer: "Coursera - Stanford University",
        date: "September 2024",
        image: "Coursera Machine Learning certificate.png",
        pdf:"Coursera Machine Learning certificate.pdf"
    },
]

export const CertificatesSection = () => {

    return (
        <section id="certificates" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}}
                           className=" text-3xl md:text-4xl font-bold mb-16 text-center "> My <span
                    className=" text-primary">Certificates</span>

                </motion.h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={fadeIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: true, amount: 0.3}}>
                    {certificates.map((cert,key ) => (
                        <div
                            key={key}
                            className="group relative bg-card rounded-lg shadow-lg overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Certificate Image */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <a href={cert.pdf}
                                       download={cert.pdf}
                                       className="px-6 py-2 rounded-full border bg-white/90 text-primary transform transition hover:scale-105 duration-300 font-medium text-lg "> Download

                                    </a>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-6 bg-card">
                                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                                    {cert.title}
                                </h3>
                                <p className="text-primary font-semibold mb-1">
                                    {cert.issuer}
                                </p>
                                <p className="text-sm text-gray-500 flex items-center gap-1">
                                    📅 {cert.date}
                                </p>
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    )
}