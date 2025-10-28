import React, { useState } from 'react';
import Input from './Input';
import axios from 'axios'


const Register = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleRegister = async(e) =>{
    setLoading(true)
    e.preventDefault()
    const userData = {
      username, email, password
    }
    
  try{
        const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData, {
          headers: {
          'content-Type': 'application/json',
          'Accept': 'application/json',
          }
        });
          
          setUsername('')
          setEmail('')
          setPassword('')
          setSuccess(true)
          console.log('successfully logged in', response.data);
  
        }catch(error){
          console.error('Something went wrong!', );
          setErrors(error.response.data)
        }finally{
          setLoading(false)
        }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleRegister}
        className="bg-dark text-light p-5 rounded shadow-lg w-100" 
        style={{ maxWidth: '420px' }}
      >
        <h3 className="text-center mb-4">Create Your Account</h3>
        
        <Input text="Full Name" name = "username" class="mb-3" type="text" onChange = {(e) => setUsername(e.target.value)} value = {username} />
        {errors && <small className='text-danger'>{errors.username}</small>}
        <Input text="Email Address" class="mb-3" type="email" onChange = {(e) => setEmail(e.target.value)} value = {email} />
        {errors && <small className='text-danger'>{errors.email}</small>}
        <Input text="Password" class="mb-3" type="password" onChange = {(e) => setPassword(e.target.value)} value = {password} />
        {errors && <small className='text-danger'>{errors.password}</small>}
        {'<Input text="Confirm Password" class="mb-4" type="password" />'}
        
        <div className="d-grid">

          {loading ? (
            <button type="submit" className="btn btn-primary btn-lg" disabled>
            Loading...
          </button>
          ) : (
          <button type="submit" className="btn btn-primary btn-lg">
            Register
          </button>
        )}
          {success && <small className='text-success p-3'>Registration successful</small>}
        </div>

        <p className="text-center mt-3 mb-0">
          Already have an account?{' '}
          <a href="/login" className="text-info text-decoration-none">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
