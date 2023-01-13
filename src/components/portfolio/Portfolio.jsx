/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import './portfolio.scss'
import profileImg from '../../assets/images/profile.jpg'

const Portfolio = () => (
  <div className="home">
    <div className="home-title">Hansel André López Montenegro</div>
    <div className="profile-container">
      <div className="profile-image">
        <img src={profileImg} alt="profile" className="profile-img" />
      </div>
      <div className="profile-description">
        <div className="profile-description-title">
          I am currently a computer engineering student at the Universidad del Valle de Guatemala (UVG). I have taken some preparation courses for CISCO certifications at KINAL. I have experience designing graphical interfaces for smarttv with react, developing Restful web services in NodeJs, creating chatbots on whatsapp and facebook to meet the needs of different companies, I have worked on some projects using the PERN stack (PostgresSQL, Express, ReactJs and NodeJS) and I have knowledge of agile software development methodologies. Something interesting that I have done is that I have created some 3D and 2D Videogames in the university with Unity and Android applications developed using kotlin
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
