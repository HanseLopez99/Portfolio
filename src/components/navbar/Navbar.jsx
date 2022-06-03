/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  const navigate = useNavigate()

  const redirectTo = (text) => {
    navigate(`/${text}`)
  }

  return (
    <div className="navbar">
      <h1 className="navbar-title">Hansel López</h1>
      <div className="navbar-tabs-container">
        <div className="navbar-home-tab" onClick={() => redirectTo('')}>Home</div>
        <div className="navbar-projects-tab" onClick={() => redirectTo('projects')}>Projects</div>
      </div>
    </div>
  )
}

export default Navbar
