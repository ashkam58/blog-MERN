import React, { useState } from 'react'

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  return (
    <form className='register'>
        <h1>Register</h1>
        <input type="text" placeholder='username' value={username} onchange={ev => setUsername(ev.target.value)} />
        <input type="password" placeholder='password' value={password} onchange ={}>
        <button>Register</button>
    </form>
)
}

export default RegisterPage