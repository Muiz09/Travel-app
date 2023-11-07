import { TextField, Button } from "@mui/material"
import './formRegister.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { registerRequest } from './action'

export default function FormRegister() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  // Handle Change Form
  const handleChange = (e) => {
    const inputName = e.target.name;
    setError((prevError) => {
      return { ...prevError, [inputName]: '' };
    });

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e) => {
    // console.log();
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const emailExist = await checkEmailExists(formData.email)
    if (emailExist) {
      setError({
        ...error,
        email: 'Email is already registered',
      });
      return;
    }

    dispatch(registerRequest(formData))
    window.alert('Data has been successfully added!')
    navigate('/login')
  }

  // Check Email
  const checkEmailExists = async (email) => {
    try {
      const response = await axios.get('http://localhost:3000/profile', {
        params: { email: email },
      });

      return response.data.length > 0;
    } catch (error) {
      console.error('Error checking email existence: ', error);
      return false;
    }
  };

  // Validation Function
  const validateForm = () => {
    let valid = true
    const newError = {}

    if (formData.fullname === '') {
      newError.fullname = '*Fullname is Required'
      valid = false
    }

    if (formData.email === '') {
      newError.email = '*Email is Required'
      valid = false
    }

    if (formData.password === '') {
      newError.password = '*Password is Required'
      valid = false
    } else if (formData.password.length < 6) {
      newError.password = '*Password must be at least 6 characters long';
      valid = false;
    }

    setError(newError)
    return valid
  }
  return (
    <>
      <div className="con-form-register">
        <div className="register-input">
          <h1>Register</h1>
          <p>Full Name</p>
          <form onSubmit={handleRegister}>
            <TextField onChange={handleChange} name='fullname' value={formData.fullname} style={{ backgroundColor: 'rgba(210, 210, 210, 0.25)', width: '50vh' }} id="outlined-basic" label="" variant="outlined" />
            {error.fullname && <p className="error-message">{error.fullname}</p>} 
            <p className="em">Email</p>
            <TextField onChange={handleChange} name='email' value={formData.email} style={{ backgroundColor: 'rgba(210, 210, 210, 0.25)', width: '50vh' }} id="outlined-basic" label="" variant="outlined" />
            {error.fullname && <p className="error-message">{error.email}</p>} 
            <br />
            <p className="pw">Password</p>
            <TextField onChange={handleChange} name='password' value={formData.password} style={{ backgroundColor: 'rgba(210, 210, 210, 0.25)', width: '50vh' }} id="outlined-basic" label="" variant="outlined" />
            {error.fullname && <p className="error-message">{error.password}</p>} 
            <br />
            <div style={{ paddingTop: '22px' }}>
              <button type="submit" onSubmit={handleRegister}>Register</button>
            </div>
          </form>
        </div>
        <div className="login-input2">
        </div>
      </div>
    </>
  )
}