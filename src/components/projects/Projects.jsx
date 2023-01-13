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
      <div
        className="portfolio-project-iphone-css"
        role="button"
        onClick={() => goTo(urls['iphone-css'])}
        onKeyDown={() => goTo(urls['iphone-css'])}
        tabIndex={0}
      >
        <h2>Iphone css</h2>
        <img src={iphoneImg} alt="project" />
      </div>
      <div
        className="portfolio-project-iphone-css"
        onClick={() => goTo(urls['javascript-chat'])}
        role="button"
        tabIndex={0}
        onKeyDown={() => goTo(urls['javascript-chat'])}
      >
        <h2>Javascript Chat</h2>
        <img src={chatImg} alt="project" />
      </div>
      <div
        className="portfolio-project-iphone-css"
        onClick={() => goTo(urls['online-game'])}
        role="button"
        tabIndex={0}
        onKeyDown={() => goTo(urls['online-game'])}
      >
        <h2>The murderer of the town! game</h2>
        <img src={gameImg} alt="project" />
      </div>
      <div
        className="portfolio-project-iphone-css"
        onClick={() => goTo(urls.calculator)}
        role="button"
        tabIndex={0}
        onKeyDown={() => goTo(urls.calculator)}
      >
        <h2>Calculator</h2>
        <img src={calculatorImg} alt="project" />
      </div>
    </div>
  )
}

export default Projects
