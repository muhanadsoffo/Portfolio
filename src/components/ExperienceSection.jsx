import {motion} from "framer-motion";
import {fadeIn} from "@/lib/animation.js";
export const ExperienceSection = () => {
    return(
        <section id="experience" className="py-24 px-4 relative">
            <div>
                <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}} className=" text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Experience</span>
            </motion.h2>
            </div>
        </section>
    )
}