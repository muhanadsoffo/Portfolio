import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const StarBackground = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([])
    const location = useLocation();
    useEffect(() => {
        generateStars()
        generateMeteors()
        const handleResize=()=>{
            generateStars()
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);


    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 9000);

        const newStars = []
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }
        setStars(newStars);
    }

    const generateMeteors = () => {
        const numberOfMeteors =5

        const newMeteors = []
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }
        setMeteors(newMeteors);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size *50+ "px",
                        height: meteor.size *2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
            {location.pathname === "/" ? (
                <img
                    src="/astronaut.png"
                    alt="Floating astronaut"
                    className="absolute w-20 sm:w-28 md:w-36 lg:w-40 astronaut-floating left-5 md:left-20 top-1/3 -translate-y-1/2"
                />
            ) : (
                <img
                    src="/img.png"
                    alt="Static image"
                    className="planet absolute w-20 sm:w-50 md:w-60 lg:w-80 -bottom-5 left-20"
                />
            )}


        </div>
    )
}