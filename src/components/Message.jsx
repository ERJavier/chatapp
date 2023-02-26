import React from 'react'
import fakeAvatar from '../images/fakeavatar.jpg'

function Message() {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src={fakeAvatar} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={fakeAvatar} alt="" />
      </div>
    </div>
  )
}

export default Message
