import { useRef } from "react"
import { Form, Button } from 'react-bootstrap';

const Login = ({setCurrUser, setShow}) =>{
  const formRef=useRef()
  const login=async (userInfo, setCurrUser)=>{
    const url="http://localhost:3001/login"
    try{
        const response=await fetch(url, {
            method: "post",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const data=await response.json()
        if(!response.ok) 
          throw data.error
        localStorage.setItem("token", response.headers.get("Authorization"))
        setCurrUser(data)        
    }catch(error){
       console.log("error", error)
    }
}
  const handleSubmit=e=>{
    e.preventDefault()
      const formData=new FormData(formRef.current)
      const data=Object.fromEntries(formData)
      const userInfo={
        "user":{ email: data.email, password: data.password }
      }
      login(userInfo, setCurrUser)
      e.target.reset()
  }
  const handleClick=e=>{
    e.preventDefault()
    setShow(false)
  }
  return(
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Email: <input type="email" name='email' placeholder="email" /> */}
        <Form.Control type="email" name='email' placeholder="Enter email" style={{width: 200}}/>
        <br/>
        {/* Password: <input type="password" name='password' placeholder="password" /> */}
        <Form.Control type="password" name='password' placeholder="Password" style={{width: 200}}/>
        <br/>
        {/* <input type='submit' value="Login" /> */}
        <Button variant="primary" type="submit" value="Login">
        Submit
      </Button>
      </form>
      <br />
      <div>Not registered? <a href="#signup" onClick={handleClick} >Signup</a> </div>
    </div>
  )
}
export default Login