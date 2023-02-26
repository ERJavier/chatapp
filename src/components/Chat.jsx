import React from 'react'
import Cam from '../images/cam.png'
import Add from "../images/add.png";
import More from "../images/more.png";



function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Name</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat
