import React from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const auth = getAuth();

  const logOut = () => {
    auth.signOut()
    navigate('/')
  }

  // console.log (getAuth())
  return (
    <>
      <div className='bg-primary d-flex align-items-center p-2' style={{ justifyContent: 'space-between' }}>

        <div className="user-content d-flex justify-content-center align-items-center">
          <img src={auth?.currentUser.photoURL} alt="" style={{ width: "15%", borderRadius: "50%", marginRight: '0.5rem' }} />
          <h3>{auth?.currentUser.displayName}</h3>

        </div>

        <div className="email d-flex justify-content-center align-items-center" style={{ gap: '1rem' }}>


          {( location.pathname === '/blogs') && (<Link to={'/addblog'} className='btn btn-warning'>AddBlog</Link>)}
           {( location.pathname !== '/blogs') && (<Link to={'/blogs'} className='btn btn-warning'>Backtoblogs</Link>)}

          <h3>{auth?.currentUser.email}</h3>
          <button onClick={logOut} className='btn btn-danger'>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Navbar



