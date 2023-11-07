import { TextField, Button } from "@mui/material"
import './formLogin.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from './actions';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function FormLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = () => {
    dispatch(loginRequest(formData)); // Kirim aksi loginRequest ke Redux-Saga
  };

  const loginStatus = useSelector((state) => state.loginReducer.user)

    useEffect(() => {
        if (loginStatus) {
            window.alert('You are Logged In')
            navigate('/')
        }
    }, [loginStatus, navigate])

  return (
    <>
      <div className="con-form-login">
        <div className="login-input1">
          <h1>Login</h1>
          <p>Email</p>
          <TextField
            label="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ backgroundColor: 'rgba(210, 210, 210, 0.25)', width: '50vh' }} id="outlined-basic" variant="outlined" />
          <p className="pass">Password</p>
          <TextField
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            style={{ backgroundColor: 'rgba(210, 210, 210, 0.25)', width: '50vh' }} id="outlined-basic" variant="outlined" />
          <br />
          <div style={{ paddingTop: '22px' }}>
            <button onClick={handleLogin}>Login</button>
          </div>
          <p className="last-p">Don't have an account? ? Click <span>
            Here</span> </p>
        </div>
        <div className="login-input2">
        </div>
      </div>
    </>
  )

}