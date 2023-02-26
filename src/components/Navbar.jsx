import React from 'react'
import fakeAvatar from "../images/fakeavatar.jpg"

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={fakeAvatar} alt="" />
        <span>Nombre</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar
