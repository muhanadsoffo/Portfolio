import {ArrowLeft, Github} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation"; // if you want arrows
import "swiper/css/pagination";
import 'swiper/css';
import {fadeIn, slideInLeft, slideInRight} from "@/lib/animation.js";
import {motion} from "framer-motion";
import {useState} from "react";
const images=[
    "projects/s1.png",
    "projects/s2.png",
    "projects/s3.png",
    "projects/s4.png",

]

const tools=[
    "Flutter",
    "Dart",
    "Hive",
    "Local Notifications",

]
const keyFeatures=[
    {name: "Schedule and receive daily inspirational quote notifications0.", icon:"📆"},
    {name: "Track your projects with status and to-do lists.", icon:"🗂️"},
    {name: "Data is stored locally using Hive and SharedPreferences.", icon:"💾️"},
    {name: "Beautiful UI with animated text, gradients, and charts.", icon:"🎨️" },
    {name: "Visual pie chart breakdown of your task progress.", icon:"📊"},
    {name: "Lightweight and fully offline-capable.", icon:"🕹️"},
]
export const SparkFlow = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentImg, setCurrentImg] = useState(null);
    return (
        <div className="container mx-auto max-w-5xl relative py-20">

            <div className="items-center flex border border-primary bg-primary rounded-lg w-max hover:scale-105 transition-all duration-300">
                <ArrowLeft className="size-7"/>
                <a href="/"
                   className=" px-2 pr-4 py-3 rounded-full font-medium text-xl ">
                    Go Back</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                <motion.div variants={slideInLeft} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}}  className="flex flex-col justify-evenly space-y-6">
                    <h1 className="text-start text-6xl  font-bold text-orange-500">SparkFlow</h1>
                    <p className="text-start text-muted-foreground text-2xl py-2 ">
                        SparkFlow combines daily motivational quotes and a beautiful project management system to help you stay on track and motivated  every single day. </p>
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
                    <div className="flex items-center space-x-3 border border-primary bg-primary rounded-lg px-4 py-2  transition-colors duration-300 w-max">
                        <Github className="text-white w-6 h-6"/>
                        <a
                            href="https://github.com/muhanadsoffo/SparkFlow-app"
                            target="_blank"
                            className="text-white  transition-colors duration-300 text-xl"
                        >
                            GitHub Codes
                        </a>
                    </div>

                </motion.div>
                <motion.div variants={slideInRight} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}}  className=" grid grid-cols-1 gap-6">
                    <div className="w-full max-w-3xl bg-card rounded-2xl overflow-hidden shadow-lg border border-primary/30  mx-auto h-60 md:h-80 lg:h-120">
                        <Swiper
                            modules={[Navigation, Pagination]}

                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}


                            className="rounded-xl shadow-lg h-full"
                        >
                            {images.map((src, i) => (
                                <SwiperSlide key={i} className="flex items-center justify-center">
                                    <img
                                        src={src}
                                        alt={`Slide ${i}`}
                                        className="h-full w-full object-contain rounded-xl bg-black/20 cursor-pointer"
                                        onClick={() => {
                                            setCurrentImg(src);
                                            setIsOpen(true);
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Modal (outside Swiper) */}
                        {isOpen && (
                            <div
                                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                                onClick={() => setIsOpen(false)}
                            >
                                <img
                                    src={currentImg}
                                    alt="Enlarged"
                                    className="max-w-[100%] max-h-[100%] object-contain rounded-lg"
                                />
                            </div>
                        )}

                    </div>

                </motion.div>

            </div>

            <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}}
                       className=" text-3xl md:text-4xl font-bold mb-4 text-center py-15"> Key <span
                className=" text-orange-500">Features</span>
            </motion.h2>
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.4}} className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {keyFeatures.map((feature)=>(
                    <div className="bg-card p-6 rounded-xl shadow-xs card-hover">
                        <div className=" flex items-center gap-4">
                            <div className=" p-3 rounded-full bg-primary/10 ">
                                <h1 className=" text-2xl ">
                                    {feature.icon}
                                </h1>
                            </div>
                            <div className="text-left">
                                <h1 className="font-semibold ">
                                    {feature.name}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
            <div className="items-center pt-15">
                <h2>This project hasn't been deployed anywhere</h2>
            </div>
        </div>

    )
}