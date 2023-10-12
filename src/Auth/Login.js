import React, { useState } from 'react'
import axios from 'axios'
import { Alert } from 'react-bootstrap'



export default function Login({setLogins}) {
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    try {

      await axios.post('http://localhost:8000/login', {
        email, password
      }).then(res => {
        
        if(res.data === 'exist') {
          setMessage(`You logged in as ${email}`)
        } else if (res.data === 'Non existing') {
          setMessage('Failed to log in')
        }
      })

    } catch (err) {
      setMessage(`${err?.message.length > 60 ? err?.message.slice(9, 99) + '.....'
      : err?.message}`)
    }

  }
  
  return (
    <div className='d-flex justify-content-center align-item-center bg-secondary vh-80'>
    <div className='d-flex flex-column bg-white p-3 rounded vw-100'>
     
      {message && (<Alert variant={ message == `You logged in as ${email}` ? "success" : "danger"} onClose={() => setMessage(null)} dismissible>
        <Alert.Heading>{ message == `You logged in as ${email}` ? "Welcome back!" : "Error!"}</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>)}

      
      <form className='vw-70 text-dark' onSubmit={handleSubmit}>
  
        <div className='mb-3'>
          <label htmlFor='email'>
            <strong>Email</strong>
          </label>

          <input 
            type='email'
            placeholder='Enter Email'
            autoComplete='off'
            name='email'
            onChange={e => setEmail(e.target.value)}
            className='form-control rounded-30 w-100 border border-dark'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='email'>
            <strong>Password</strong>
          </label>

          <input 
            type='password'
            placeholder='Enter password'
            autoComplete='off'
            name='email'
            onChange={e => setPassword(e.target.value)}
            className='form-control rounded-30 w-100 border border-dark'
          />
        </div>

        <button type='submit' className='btn btn-success w-100 round-0 ' >
          Login
        </button>

        <p>Don't have an account</p>

        <button className='btn btn-default border w-100 bg-light round-0 text-decoration-none' onClick={() => setLogins(false)}>
          Register
        </button>
      </form>

    </div>

   </div>
  )
}
