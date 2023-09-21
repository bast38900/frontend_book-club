import User from '../components/User';
import { useState } from 'react';

export const HomePage = () => {
  const [currUser, setCurrUser]=useState(null);
  return (
    <>
      <h1>Welcome to Book Club</h1>
      <br></br>
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </>
  )
}