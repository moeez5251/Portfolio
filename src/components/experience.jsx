import React from 'react'
import "./experience.css"
const Experience = () => {
    return (
        <>
            <div className="experience-sub">
                <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
                    <div className="exp-left">
                        <img src="assets/git.webp" alt="GitHub Logo" />
                        <p className="exp-left-name">Full Stack Developer (MERN)</p>
                        <p className="exp-timeline">2020 - Present</p>
                    </div>
                    <div className="exp-right">
                        <h2 className="exp-right-name">GitHub Projects</h2>
                        <p>
                            As a professional MERN Stack Developer, I build scalable and high-performance web applications using
                            MongoDB, Express.js, React, and Node.js.
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
                    <div className="exp-left">
                        <img src="assets/NEXT.jpeg" alt="Next.js Logo" />
                        <p className="exp-left-name">Freelance Developer</p>
                        <p className="exp-timeline">2019 - 2020</p>
                    </div>
                    <div className="exp-right">
                        <h2 className="exp-right-name">React / Next.js Developer</h2>
                        <p>
                            Developed responsive web applications for clients using React and Next.js. Focused on improving
                            performance, SEO, and user experience while integrating APIs and managing state with Redux and Context API.
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
                    <div className="exp-left">
                        <img src="assets/Node.png" alt="Node.js Logo" />
                        <p className="exp-left-name">Startup Projects</p>
                        <p className="exp-timeline">2018 - 2019</p>
                    </div>
                    <div className="exp-right">
                        <h2 className="exp-right-name">Backend Developer (Node.js & Express)</h2>
                        <p>
                            Designed and implemented RESTful APIs using Node.js and Express for early-stage startups. Worked with
                            MongoDB databases, handled authentication, and deployed backend services on cloud platforms.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Experience
