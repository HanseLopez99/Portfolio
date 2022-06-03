import React, { useEffect, useState } from 'react'
import './navbar.scss'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // const handleClick = () => {
  //   setOpen(!open)
  // }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && event.target.id !== 'navbar-toggle') {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [open])

  return (
    <div className="navbar">
      <h1 className="navbar-title">Hansel López</h1>
      <div className="navbar-tabs-container">
        <div className="navbar-tabs">Home</div>
        <div className="navbar-tabs">Projects</div>
        <div className="navbar-tabs">Contact</div>
      </div>
    </div>
  )
}

export default Navbar
