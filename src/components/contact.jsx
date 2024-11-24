import React, { useState, useRef } from 'react'
import "./contact.css"
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const [green, setgreen] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = () => {
        emailjs
            .sendForm('service_xpngmsh', 'template_c8sru5i', form.current, {
                publicKey: 'dUbqxcoqbRr2erSi5',
            })
        setgreen(true);
        setTimeout(() => {
            setgreen(false);
        }, 3500);
        document.querySelectorAll(".inputs-form").forEach(e => { e.value = "" })
    }
    return (
        <>
            <div className='contact-head'>

                <div className="left-contact">
                    <div className="box">
                        <img src="assets/contact.webp" alt="" />
                        <p>I'm also available for freelance work. Get in touch right now.</p>
                        <p><span>Phone: </span>03207349527</p>
                        <p><span>Email: </span>moeez4241@gmail.com</p>
                    </div>
                </div>
                <div className="right-contact">
                    <p>Drop A Message ! Let's <span>Work </span>Together</p>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-errors'>
                            {errors.person ? (
                                <span className="red">Please Enter Your Name</span>
                            ) : errors.email ? (
                                <span className="red">Pleas Enter Your email</span>
                            ) : errors.subject ? (<span className="red">Please Enter Your Subject</span>) : ""}
                            {green && <span className='green'>Message sent !. Contact You soon 😊</span>}
                        </div>
                        <input className='inputs-form' name='person' type="text" placeholder='Name:' {...register("person", { required: true })} />
                        <input className='inputs-form' name='email' type="email" placeholder='Email: ' {...register("email", { required: true })} />
                        <input className='inputs-form' name='subject' type="text" placeholder='Subject' {...register("subject", { required: true })} />
                        <textarea className='inputs-form' placeholder='Message :' rows={5} cols={5} name="text"  {...register("text", { required: true })} ></textarea>
                        <button type='submit'>Send Here</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
