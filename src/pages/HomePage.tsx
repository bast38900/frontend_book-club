import { User } from '../components/User';
import { useState } from 'react';
import Login from '../components/Login'
import Signup from '../components/Login'

export const HomePage: any = () => {
  const [currUser, setCurrUser]=useState(null)
  const [show, setShow]=useState(true)

  if (sessionStorage.getItem("token")) {
  return (
    <>
    <div style={{marginTop: 25, marginBottom: 25}}>
      <h1>Welcome to Book Club</h1>
    </div>
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </>
  )
  } else {
    return (
      <div>
      <br></br>
      <h1>Welcome to Book Club</h1>
      <br></br>
        { show?
            <Login setCurrUser={setCurrUser} setShow={setShow}/>  
            :
            <Signup setCurrUser={setCurrUser}  setShow={setShow} />
        }
    </div>
    )
  }
}