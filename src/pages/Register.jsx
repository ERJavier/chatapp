import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="logo">Register</span>
        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Display Email" />
          <input type="password" placeholder="Password" />
          <input type="file" />
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register
