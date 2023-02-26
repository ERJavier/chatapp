import React from 'react'
import fakeAvatar from '../images/fakeavatar.jpg'

function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src={fakeAvatar} alt="" />
        <div className="userChatInfo">
          <span>
            Nombre
          </span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Search
