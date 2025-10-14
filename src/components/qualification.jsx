import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <>
      <div className="experience-sub">

        <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
          <div className="exp-left">
            <span className="material-symbols-outlined quali-span">
              school
            </span>
            <p className="exp-left-name">Superior University</p>
            <p className="exp-timeline">2023 - 2027</p>
          </div>
          <div className="exp-right">
            <h2 className="exp-right-name">BS Computer Science</h2>
            <p>
              Pursuing a Bachelor's degree in Computer Science with a strong focus on software development,
              web technologies, and data structures.
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
          <div className="exp-left">
            <span className="material-symbols-outlined quali-span">
              code
            </span>
            <p className="exp-left-name">Udemy</p>
            <p className="exp-timeline">2024</p>
          </div>
          <div className="exp-right">
            <h2 className="exp-right-name">MERN Stack Development</h2>
            <p>
              Completed an in-depth MERN Stack certification covering MongoDB, Express.js, React, and Node.js.
              Built multiple full-stack projects.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
          <div className="exp-left">
            <span className="material-symbols-outlined quali-span">
              cloud
            </span>
            <p className="exp-left-name">Coursera</p>
            <p className="exp-timeline">2024</p>
          </div>
          <div className="exp-right">
            <h2 className="exp-right-name">Cloud & Database Fundamentals</h2>
            <p>
              Learned how to manage and deploy cloud-based web applications using services like MongoDB Atlas and
              Vercel. Gained hands-on experience with database optimization, API hosting, and CI/CD workflows.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Qualification
