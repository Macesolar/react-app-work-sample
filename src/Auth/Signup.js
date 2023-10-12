import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Alert } from 'react-bootstrap';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export default function Signup( {setLogins}) {
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')
  const [comfirmPassword, setComfirmPassword] = useState('')
  const [message, setMessage] = useState('')


  

  async function handleSubmit(e) {
    e.preventDefault()
    
   
    const checkPassword = PWD_REGEX.test(password);

    if (password !== comfirmPassword) return setMessage('password is not the same');
    
      
    if (!checkPassword) return setMessage(`Password strength is low. 8 to 24 characters 
    Must include uppercase and lowercase letters, a number and a special character.
    Allowed special characters`);
       
    try {

      await axios.post('http://localhost:8000/signup', {
        email, password
      }).then(res => {
        
        if(res.data === 'Already exist') {
          setMessage('User already registered')
        } else if (res.data === 'Non existing') {
          setMessage(`Your ${email} is now registered`)
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

    {message && (<Alert variant={message == `Your ${email} is now registered` ? "success" :"danger"} onClose={() => setMessage(null)} dismissible>
        <Alert.Heading>{message == `Your ${email} is now registered` ? "Congrats" : "Error!"}</Alert.Heading>
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
            placeholder='Enter your Email'
            autoComplete='off'
            name='name'
            onChange={e => setEmail(e.target.value)}
            className='form-control rounded-30 w-100 border border-dark'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='password'>
            <strong>Password</strong>
          </label>

          <input 
            type='password'
            placeholder='Enter Password'
            autoComplete='off'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            className='form-control rounded-30 w-100 border border-dark'
          />

           
        </div>

        <div className='mb-3'>
          <label htmlFor='password'>
            <strong>Comfirm Password</strong>
          </label>

          <input 
            type='password'
            placeholder='Comfirm Password'
            autoComplete='off'
            name='password'
            aria-describedby="pwdnote"
            onChange={e => setComfirmPassword(e.target.value)}
            className='form-control rounded-30 w-100 border border-dark'
          />

            

        </div>

        <button type='submit' className='btn btn-success w-100 round-0 ' >
          Register
        </button>

        <p>Already have an account</p>

        <button className='btn btn-default border w-100 bg-light round-0 text-decoration-none' onClick={() => setLogins(true)}>
          Login
        </button>
      </form>

    </div>

   </div>
  )
}
