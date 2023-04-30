import { useState } from 'react'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
  const [modal, setModal] = useState(false)

  const handleOpen = () => setModal(true)
  const handleClose = () => setModal(false)

  return (
    <div className="side-navbar">
      <button
        type="button"
        className="hamburger"
        onClick={handleOpen}
      >
        <div className="side-navbar--1"></div>
        <div className="side-navbar--2"></div>
        <div className="side-navbar--3"></div>
      </button>
      {modal && (
        <div className="sidebar">
          <button onClick={handleClose} className="close">
            CLOSE
          </button>
          <div className="menu">
            <Link onClick={handleClose} to="/">
              Home
            </Link>
            <Link onClick={handleClose} to="/about">
              About
            </Link>
            <Link onClick={handleClose} to="/contact">
              Contact Us
            </Link>
            <Link onClick={handleClose} to="/admin">
              Admin
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default SideNavbar
