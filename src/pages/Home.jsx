
import {StarBackground} from "@/components/StarBackground.jsx";
import {Navbar} from "@/components/Navbar.jsx";
import {HeroSection} from "@/components/HeroSection.jsx";
import {AboutMeSection} from "@/components/AboutMeSection.jsx";
import {SkillsSection} from "@/components/SkillsSection.jsx";
import {ProjectsSection} from "@/components/ProjectsSection.jsx";
import {ContactSection} from "@/components/ContactSection.jsx";
import {ExperienceSection} from "@/components/ExperienceSection.jsx";
import {Footer} from "@/components/Footer.jsx";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* theme Toggle */}


            {/* Navbar */}
            <Navbar/>
            {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutMeSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ExperienceSection/>
                <ContactSection/>

            </main>
            <Footer/>
        </div>
    );
}