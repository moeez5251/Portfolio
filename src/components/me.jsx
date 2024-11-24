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
    const isInView = useInView(ref, { once: true });

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
                <Div className="left">

                    <h2 className='heading'>Hey there,</h2>
                    <h1 className='my-name'>Xheikh Moeez</h1>
                    <p className='para'>I'm a professional web designer, My motive is to build a best web design with my all years of experience and efforts.</p>
                    <button onClick={()=>window.scrollTo(0, 5000)} className='contact-btn'>Contact Me
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </button>
                </Div>
                <div className="right">

                    <img className='my-image' src="assets/Me-w-bg.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Me
