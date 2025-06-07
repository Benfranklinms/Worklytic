import { useState } from "react"
import React from 'react'

const Login = () => {

    const [email,setemail] = useState('')
    const [password, setpassword] = useState('')

const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is ", email)
    console.log("Password is ", password)
}
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='border-2 border-red-400 p-20 rounded-xl'>
            <form onSubmit = {(e) => {
                submitHandler(e)
                setemail("")
                setpassword("")
            }}
            className='flex flex-col items-center justify-center gap'>
                <input onChange = {(e) => {
                    setemail(e.target.value)
                }}
                value={email}
                className='border-2 border-red-400 rounded-full py-3 px-5 outline-none bg-transparent placeholder:text-gray-200' type="email" placeholder='Enter your email'/>
                <input onChange={(e) => {
                    setpassword(e.target.value)
                }}
                value={password}
                className='border-2 border-red-400 rounded-full py-3 px-5 outline-none bg-transparent placeholder:text-gray-200 mt-3' type="password" placeholder='Enter your password' required/>
                <button className='mt-5 border-none border-red-600 rounded-full py-3 px-14 text-xl outline-none text-[14px] bg-red-400'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login