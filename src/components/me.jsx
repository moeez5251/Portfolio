import React, { useRef } from 'react'
import "./me.css"
import Bg_1 from './bg-1';
import { motion, useInView } from "motion/react"
const mousemove = (event) => {
    const x = (window.innerWidth - event.pageX * 1) / 50;
    const y = (window.innerHeight - event.pageY * 1) / 50;
    document.querySelector(".right").style.transform = `translateX(${x}px) translateY(${y}px)`

}
function Div({ children, id, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div style={{
            transform: isInView ? "translateY(0px)" : "translateY(54px)",
            transition:
                "transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67), opacity 0.5s ease, filter 0.5s ease",
        }} id={id} className={className} ref={ref}>

            {children}
        </div>
    );
}

const Me = () => {
    return (
        <>
            <Bg_1 />
            <div id='home' onMouseMove={(e) => { mousemove(e) }} className="container">
                <div className="left">

                    <motion.h2 initial={{

                        x: -100
                    }}
                        whileInView={{
                            x: 0,
                            transition: {
                                duration: 1.5,
                                delay: 2
                            }
                        }}
                        viewport={{ once: true }} className='heading'>Hey there,</motion.h2>
                    <motion.h1
                        initial={{

                            y: -40
                        }}
                        whileInView={{
                            y: 0,
                            transition: {
                                duration: 1.5,
                                delay: 2
                            }
                        }}
                        viewport={{ once: true }}
                        className='my-name-me'>Xheikh Moeez</motion.h1>
                    <motion.p
                        initial={{

                            y: 30
                        }}
                        whileInView={{
                            y: 0,
                            transition: {
                                duration: 1.5,
                                delay: 2
                            }
                        }}
                        viewport={{ once: true }}
                        className='para'>I'm a professional web designer, My motive is to build a best web design with my all years of experience and efforts.</motion.p>
                    <motion.button
                        initial={{

                            x: 30
                        }}
                        whileInView={{
                            x: 0,
                            transition: {
                                duration: 1.5,
                                delay: 2
                            }
                        }}
                        viewport={{ once: true }}
                        onClick={() => document.querySelectorAll(".other ul li a")[4].click()} className='contact-btn'>Contact Me
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="lucide lucide-chevron-right-icon lucide-chevron-right"
                            viewBox="0 0 24 24"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </motion.button>
                </div>
                <motion.div
                    initial={{

                        x: 100
                    }}
                    whileInView={{
                        x: 0,
                        transition: {
                            duration: 1.5,
                            delay: 2
                        }
                    }}
                    viewport={{ once: true }}

                    className="right">

                    <img className='my-image' src="assets/Me-wbg.webp" alt="" />
                </motion.div>
            </div>
        </>
    )
}

export default Me
