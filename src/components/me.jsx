import React from 'react'
import "./me.css"
import Bg_1 from './bg-1';
const mousemove = (event) => {
    const x = (window.innerWidth - event.pageX * 1) / 50;
    const y = (window.innerHeight - event.pageY * 1) / 50;
    document.querySelector(".right").style.transform = `translateX(${x}px) translateY(${y}px)`

}
const Me = () => {
    return (
        <>
        <Bg_1/>
            <div onMouseMove={(e) => { mousemove(e) }} className="container">
                <div className="left">

                    <h2 className='heading'>Hey there,</h2>
                    <h1 className='name'>Xheikh Moeez</h1>
                    <p className='para'>I'm a professional web designer, My motive is to build a best web design with my all years of experience and efforts.</p>
                    <button className='contact-btn'>Contact Me
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </button>
                </div>
                <div className="right">

                    <img className='my-image' src="src/assets/Me-w-bg.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Me
