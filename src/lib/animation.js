
export const fadeIn= {
    hidden: {opacity: 0,scale:0.7},
    show: {opacity: 1,scale:1,transition: {duration: 0.7}, },
}

export const fadeUp={
    hidden: {opacity: 0, y:40},
    show: {opacity:1 ,y:0,transition: {duration: 0.7,delay: 0.3 ,ease: "easeOut"}},
}

export const zoomIn={
    hidden:{opacity:0, scale:0.8},
    show:{opacity:1, scale:1,transition:{duration: 0.5} },
}

export const slideInRight={
    hidden:{opacity:0,x:60},
    show:{opacity:1,x:0, transition:{duration:0.5,ease: "easeOut"}}
}

export const slideInLeft={
    hidden:{opacity:0,x:-60},
    show:{opacity:1,x:0, transition:{duration:0.6,ease: "easeInOut"}}
}
export const staggerContainer={
    hidden:{},
    show:{transition: {staggerChildren:0.3}}
}