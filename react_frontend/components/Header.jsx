import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container d-flex justify-content-between align-items-center">
      <Link className="text-light text-decoration-none" to="/">
        Bus Ticketing Portal
      </Link>
      <div>
        <Button text="Login" class="btn btn-primary mx-1" url="/login"/>
        <Button text="Register" class="btn btn-outline-primary mx-1" url="/register"/>
      </div>
    </div>
  </nav>
</>

  )
}

export default Header