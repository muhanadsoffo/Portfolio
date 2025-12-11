import {Linkedin, Mail, MapPin, Phone, Instagram, Facebook, Send} from "lucide-react";
import {cn} from "@/lib/utils.js";
import {motion} from "framer-motion";
import {fadeIn, slideInLeft, slideInRight} from "@/lib/animation.js";

import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
export const ContactSection = () => {
    const [status, setStatus] = useState()
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ndrgone', 'template_ibsnjhe', form.current, {
                publicKey: '7_ea9OK74Y6aJNpRE',
            })
            .then(
                () => {
                    setStatus("success");

                    // refresh page after short delay
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
            .catch((error) => {
                console.error("Error sending email:", error);
                setStatus("error");

                // optional: refresh anyway
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            });
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}} className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In
                    <span className="text-primary"> Touch</span>
                </motion.h2>
                <motion.p variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.4}} className=" text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Have an idea in mind? Contact me and let's talk about it! Always open for new opportunities
                </motion.p>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className=" space-y-8">
                        <motion.h3 variants={fadeIn} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.3}} className=" text-2xl font-semibold mb-6">
                            Contact Information
                        </motion.h3>
                        <motion.div className=" space-y-6 justify-center" variants={slideInLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                            <div className=" flex items-start space-x-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <Mail className=" h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div className="text-start">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:muhannadsoffo2002@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        muhannadsoffo2002@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className=" flex items-start space-x-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <Phone className=" h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div className="text-start">
                                    <h4 className="font-medium">Phone number</h4>
                                    <a href="tel:+90 538 773 5880" className="text-muted-foreground hover:text-primary transition-colors">
                                        +90 538 773 5880
                                    </a>
                                </div>
                            </div>
                            <div className=" flex items-start space-x-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <MapPin className=" h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div className="text-start">
                                    <h4 className="font-medium">Location</h4>
                                    <a  className="text-muted-foreground hover:text-primary transition-colors">
                                        Istanbul, Turkey
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        <div className=" pt-8">
                            <h4 className=" font-medium mb-4">My Social Media</h4>
                            <div className=" flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/muhenned-siffu-914948281/" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://www.instagram.com/muhanad.soffo/" target="_blank">
                                    <Instagram/>
                                </a>
                                <a href="https://www.facebook.com/share/1BXfaZFhYb/" target="_blank">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>
                    <motion.div variants={slideInRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className=" bg-gray-900 border-gray-700 shadow-lg border p-8 rounded-large rounded-xl">
                        <h3 className=" text-2xl font-semibold mb-6">Send a message</h3>
                        <form className="space-y-6" onSubmit={sendEmail} ref={form} >
                            <div >
                                <label htmlFor="name" className=" block text-sm font-medium mb-2 text-start">Your Name</label>
                                <input type="text" id="name" name="name" required className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Enter your name..."/>
                            </div>
                            <div >
                                <label htmlFor="name" className=" block text-sm font-medium mb-2 text-start">Your Email</label>
                                <input type="email" id="email" name="email" required className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Enter your email..."/>
                            </div>
                            <div >
                                <label htmlFor="name" className=" block text-sm font-medium mb-2 text-start">Your Message</label>
                                <textarea  id="message" name="message" required className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hey I have a great idea for you..."/>
                            </div>
                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                )}>Send Message<Send size="18"
                            />
                            </button>
                        </form>

                        {status === "success" && (
                            <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md animate-bounce">
                                ✅ Email sent successfully!
                            </div>
                        )}
                        {status === "error" && (
                            <div className="fixed bottom-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md animate-bounce">
                                ❌ Failed to send email. Try again.
                            </div>
                        )}
                    </motion.div>

                </div>
            </div>

        </section>

    )

}