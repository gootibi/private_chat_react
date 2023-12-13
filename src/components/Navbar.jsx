import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Gootibi Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/19414563/pexels-photo-19414563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Tibi</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar