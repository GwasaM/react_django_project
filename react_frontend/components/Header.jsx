import React, { useContext } from 'react'
import Button from './Button'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from './AuthProvider'


const Header = () => {
  const navigate = useNavigate()
  const{isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const handleLogout = () =>{
    localStorage.removeItem('AccessToken')
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container d-flex justify-content-between align-items-center">
      <Link className="text-light text-decoration-none" to="/">
        Bus Ticketing Portal
      </Link>
      <div>
        {isLoggedIn ? (<button className="btn btn-danger text-light" onClick={handleLogout}>Logout</button>
        ) : (
        <><Button text="Login" class="btn btn-primary mx-1" url="/login"/>
        <Button text="Register" class="btn btn-outline-primary mx-1" url="/register"/></>
        )
        }
      </div>
    </div>
  </nav>
</>

  )
}

export default Header