import React from 'react'
import Button from './Button'

const Header = () => {
  return (
<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="text-light">
        Bus Ticketing Portal
      </div>
      <div>
        <Button text="Login" class="btn btn-primary mx-1"/>
        <Button text="Register" class="btn btn-outline-primary mx-1"/>
      </div>
    </div>
  </nav>
</>


  )
}

export default Header