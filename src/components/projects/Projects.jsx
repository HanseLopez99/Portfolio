/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import './projects.scss'
import iphoneImg from '../../assets/images/iphone.png'
import chatImg from '../../assets/images/chat.png'
import gameImg from '../../assets/images/game.png'
import calculatorImg from '../../assets/images/calculator.png'

const Projects = () => {
  const urls = {
    'iphone-css': 'http://34.204.253.72:4003/',
    'javascript-chat': 'http://34.204.253.72:4005/',
    'online-game': 'http://34.204.253.72:4006/',
    calculator: 'http://34.204.253.72:4008/',
  }

  const goTo = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="portfolio-projects">
      <div className="portfolio-project-iphone-css">
        <h2>Iphone css</h2>
        <img
          src={iphoneImg}
          alt="project"
          onClick={() => goTo(urls['iphone-css'])}
        />
      </div>
      <div className="portfolio-project-iphone-css">
        <h2>Javascript Chat</h2>
        <img
          src={chatImg}
          alt="project"
          onClick={() => goTo(urls['javascript-chat'])}
        />
      </div>
      <div className="portfolio-project-iphone-css">
        <h2>The murderer of the town! game</h2>
        <img
          src={gameImg}
          alt="project"
          onClick={() => goTo(urls['online-game'])}
        />
      </div>
      <div className="portfolio-project-iphone-css">
        <h2>Calculator</h2>
        <img
          src={calculatorImg}
          alt="project"
          onClick={() => goTo(urls.calculator)}
        />
      </div>
    </div>
  )
}

export default Projects
