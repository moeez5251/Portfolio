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
            .sendForm('service_4cldqmj', 'template_c8sru5i', form.current, {
                publicKey: 'OsnOld423T6zK_QBV',
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
                        <img data-aos="zoom-in" data-aos-duration="500" loading='lazy'  src={`${import.meta.env.BASE_URL}assets/contact.webp`} alt="Contact Photo" />
                        <p data-aos="zoom-in" data-aos-duration="500" >I'm also available for freelance work. Get in touch right now.</p>
                        <p data-aos="zoom-in" data-aos-duration="500 "><span>Phone: </span>03207349527</p>
                        <p data-aos="zoom-in" data-aos-duration="500" ><span>Email: </span>moeez4241@gmail.com</p>
                    </div>
                </div>
                <div className="right-contact">
                    <p data-aos="zoom-in" data-aos-duration="500">Drop A Message ! Let's <span>Work </span>Together</p>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-errors'>
                            {errors.person ? (
                                <span className="red">Please Enter Your Name</span>
                            ) : errors.email ? (
                                <span className="red">Pleas Enter Your email</span>
                            ) : errors.subject ? (<span className="red">Please Enter Your Subject</span>) : ""}
                            {green && <span className='green'>Message sent !. Contact You soon 😊</span>}
                        </div>
                        <input data-aos="zoom-in" data-aos-duration="500"  className='inputs-form' name='person' type="text" placeholder='Name:' {...register("person", { required: true })} />
                        <input data-aos="zoom-in" data-aos-duration="500"  className='inputs-form' name='email' type="email" placeholder='Email: ' {...register("email", { required: true })} />
                        <input data-aos="zoom-in" data-aos-duration="500"  className='inputs-form' name='subject' type="text" placeholder='Subject' {...register("subject", { required: true })} />
                        <textarea data-aos="zoom-in" data-aos-duration="500"  className='inputs-form' placeholder='Message :' rows={5} cols={5} name="text"  {...register("text", { required: true })} ></textarea>
                        <button data-aos="zoom-in" data-aos-duration="500"  className='btn-contact' type='submit'>
                            Send <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='white'>
                            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480v-83.6c0-4 1.5-7.8 4.2-10.8l167.6-182.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8l-88.3-44.2C7.1 311.3.3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
