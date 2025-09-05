import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

const Login = () => {
  const data = {
    username:'',
    password:''
  }
  const [formData, setFormData] = useState(data);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [logginIn,setIsLoggingIn] = useState(false)
  function handleInput(e) {
    // console.log(e.target.value)
    const {value,name} = e.target
    console.log(name);
    setFormData(prev => ({...prev, [name]:value}))
    // console.log(formData)
  }
  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("Logging in")
  //   try {
  //     const res = await fetch(`${baseUrl}/users`);
  //     const data = await res.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   } finally{
  //     console.log("Logged in su....")
  //   }
  // }
  
  async function handleSubmi(e) {
    e.preventDefault()
    setIsLoggingIn(true)
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          // "Authorization":"Bearer "
        },
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data)
      toast.success("Log in successfully")
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally{
      setIsLoggingIn(false)
    }
  }

  return (
    <form onSubmit={handleSubmi}>
      <label >User Name</label>
      <input type="text" name="username" id="" onChange={handleInput} required/>
      <label >Password</label>
      <input type="password" name="password" id="" onChange={handleInput}/>
      <Button text={logginIn ? "Logging in...." : "Log In"}/>
      <Link to="/admin">Go to admin panel</Link>
    </form>
  )
}

export default Login

//C - Create
//R - Read
//U - Update
//D - Delete