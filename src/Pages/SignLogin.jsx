import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SignUp from '../Components/SignUp/SignUp'
import LogIn from '../Components/SignUp/LogIn'
import { useState } from 'react'

function SignLogin() {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  }

  return (
    <div>
      <Navbar/>
      {isSignUp ? <SignUp onToggleForm={handleToggleForm} /> : <LogIn onToggleForm={handleToggleForm} />}
    </div>
  )
}


export default SignLogin
