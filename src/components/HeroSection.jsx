import {ArrowDown} from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className=" relative min-h-screen flex flex-col items-center justify-center px-4">


            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Muhenned</span>{" "}
                        <span className=" text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Sıffu</span>
                    </h1>
                    <p className="text-2xl md:text-4xl font-bold tracking-tight opacity-0 animate-fade-in-delay-2">
                        <span className="text-primary ">Fullstack </span>
                        Developer
                    </p>
                    <p className=" text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">

                        Hey there! Welcome to my little corner of the internet,
                         I’m a Fullstack Developer who loves bringing ideas to life.
                        NextJs, Flutter , Express, whatever it is I can handle it! I enjoy learning new tech, experimenting with AI, and building things that actually help people.

                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a href="#projects" className="cosmic-button text-lg">
                            View My Projects
                        </a> <a href="https://github.com/muhanadsoffo" target="_blank" className="m-2 px-6 py-2 rounded-full border bg-white/90 text-primary font-medium text-lg transition-all hover:scale-105 duration-300">
                            GitHub Account
                        </a>
                    </div>

                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll down</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}