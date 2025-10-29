import React, { useContext, useState } from 'react'
import Input from './Input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'



const Login = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
 

 

  const handleLogin = async (e) => {
    e.preventDefault()
    const userData = {
      username, password
    }
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      localStorage.setItem('AccessToken', response.data.access)
      localStorage.setItem('RefreshToken', response.data.refresh)
      console.log('Login successful')
      console.log(response.data)
      setIsLoggedIn(true)
      navigate('/')
      

    }catch(error){
      console.error(error.message, error.code)
      alert(error.code)
    }finally{
      setUsername('')
      setPassword('')
    }

  }

  return (
          <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleLogin}
        className="bg-dark text-light p-5 rounded shadow-lg w-100" 
        style={{ maxWidth: '420px' }}
      >
        <h3 className="text-center mb-4">Our Login Portal</h3>
        
        <Input text="Username" class="mb-3" type="text" onChange={(e)=>setUsername(e.target.value)} value={username} />
        
        <Input text="Password" class="mb-3" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        
        <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-lg">
            Login
        </button>
        </div>

        <p className="text-center mt-3 mb-0">
          Don't have an account?{' '}
          <a href="/register" className="text-info text-decoration-none">
            Register here
          </a>
        </p>
      </form>
    </div>
  
 
  )
}

export default Login