import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className="container card text-center bg-dark p-5 my-5">

  <div className="card-body">
    <h5 className="card-title text-light">BUS TICKETING PORTAL</h5>
    <p className="card-text text-light">Bus ticketing portal is the online system aiming to automate the task of bus booking. This system is developed by using React Js and Django Rest Framework (DRF). In the Front end code, it is implemented using React Js and in the Backend code it is implemented in Django Rest Framework (DRF). Welcome and enjoy the seemless bus ticketing which reduces hustle of commuting just to book for a ticket.</p>
    <Button text="Login" class="btn btn-primary text-light"/>
    
  </div>

    </div>
    </>
    
  )
}

export default Main