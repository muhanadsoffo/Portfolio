import {ArrowLeft, Github} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation"; // if you want arrows
import "swiper/css/pagination";
import 'swiper/css';
import {fadeIn} from "@/lib/animation.js";
import {motion} from "framer-motion";
const images=[
    "projects/bg.png",
    "projects/flog.png",
    "projects/f.jpeg",
]

const tools=[
    "Flutter",
    "Dart",
    "Firestore",
    "Firebase",
    "OpenRouter GPT-3.5 Turbo",
    "Cloudinary",
]
export const SanctuarAI = () => {
    return (
        <div className="container mx-auto max-w-5xl relative py-20">

                <div className="items-center flex border border-primary bg-primary rounded-lg w-max hover:scale-105 transition-all duration-300">
                    <ArrowLeft className="size-7"/>
                    <a href="/"
                       className=" px-5 py-3 rounded-full font-medium text-lg ">
                        Go Back</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                    <div  className="flex flex-col justify-evenly ">
                        <h1 className="text-start text-6xl  font-bold text-orange-400">SanctuarAI</h1>
                        <div className="space-y-6">

                            <div className="flex flex-wrap gap-2 mb-5 ">
                                {tools.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-2xl rounded-xl border bg-primary/80 text-secondary-foreground transition-all hover:scale-105 duration-300">
                                            {tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 border border-primary rounded-lg px-4 py-2 hover:bg-primary/10 transition-colors duration-300 w-max">
                            <Github className="text-primary w-5 h-5"/>
                            <a
                                href="https://github.com/muhanadsoffo/SanctuarAI"
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                GitHub Codes
                            </a>
                        </div>

                    </div>
                    <div className=" grid grid-cols-1 gap-6">
                            <div className="w-full max-w-3xl mx-auto h-60 md:h-80 lg:h-120">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}


                                    className="rounded-xl shadow-lg h-full"
                                >
                                    {images.map((src, i) => (
                                        <SwiperSlide key={i} className="flex items-center justify-center">
                                            <img src={src} alt={`Slide ${i}`} className="h-full w-full object-contain rounded-xl" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                        </div>

                    </div>

                </div>
                <div className="border  py-4 px-2 bg-primary/90 rounded-xl">
                    <h1 className="text-start text-3xl font-bold py-2 ">About SanctuarAI:</h1>
                    <h2 className="text-start text-muted-foreground text-2xl py-2">
                        SanctuarAI is an intelligent emotional well-being app that helps users track, analyze,
                        and reflect on their relationships and emotional interactions through the power of AI. </h2>
                </div>
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}}
                       className=" text-3xl md:text-4xl font-bold mb-4 text-center py-15"> Key <span
                className=" text-orange-400">Features</span>
            </motion.h2>



        </div>

    )
}