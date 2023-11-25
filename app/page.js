"use client"
import Image from 'next/image'
import Hero from "../public/herosvg.svg";
import Apollo from "../public/icon.svg";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

import {
  Stack,
  Button,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

export default function Home() {
  const [isLogin, setIslogin] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert("Success");

    }
  };

  return (
  <main className='h-screen w-screen flex flex-row bg-white'>
    <section className='w-1/3 overflow-clip '>
      <Image 
        priority 
        src={Hero}
        alt="Hero Image"
        height='100vh'
        width='1/3vw'
      />
    </section>
    <section className='w-2/3 flex flex-col justify-around items-center my-12 px-20'>
      <div className='w-full flex flex-row justify-center h-max items-center text-black mr-12'>
        <Image 
           
          src={Apollo}
          alt="Icon"
          height='500px'
          width='500px'
        />
        <div className='flex flex-row gap-6 w-1/2 items-center justify-center mx-20 px-4 font-poppins font-semibold text-4xl' >
          <button className={` font-poppins font-semibold text-3xl ${isLogin ? 'text-gray-300' : ' text-black'}`} onClick={()=>setIslogin(false)}>Sign Up</button>
          /
          <button className={` font-poppins font-semibold text-3xl ${isLogin ? ' text-black' : 'text-gray-300'}`} onClick={()=>setIslogin(true)}>Login</button>
        </div>
      </div>
      {isLogin ? (
        <div className={`text-black flex flex-col items-center justify-evenly h-4/6 my-12 px-12 w-full shadow-xl rounded-lg transition-all duration-500 ${isLogin ? 'opacity-100' : 'opacity-0'}`}> {/* This div will be shown when isLogin is true */}
          {/* Login form */}
          login
        </div>
      ) : (
          <form className='w-full h-4/6 shadow-xl px-12 flex flex-col gap-4 justify-evenly items-center rounded-lg'  onSubmit={handleSubmit}>
            <div className={`flex flex-row gap-8 w-full  items-center justify-evenly text-black transition-all duration-500 ${isLogin ? 'opacity-0' : 'opacity-100'}`}> {/* This div will be shown when isLogin is false */}
              {/* SignUp Form */}
                <Stack className='w-1/2 h-full gap-4'>
                  <Input variant='flushed'  placeholder='Hospital Name' />
                  <Input variant='flushed' placeholder='Address' />
                  <Input variant='flushed' placeholder='City' />
                  <Input variant='flushed' placeholder='State' />
                  <NumberInput variant='flushed'>
                    <NumberInputField placeholder='Pincode' />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Input variant='flushed' placeholder='Hospital Registration Date' />
                  <NumberInput variant='flushed'>
                    <NumberInputField placeholder='Number of Ambulance available'/>
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack >
                <Stack className='w-1/2 h-full gap-4'>
                  <Input variant='flushed' placeholder='Email ID' />
                  <Input variant='flushed' placeholder='Phone Number' />
                  <Input variant='flushed' placeholder='Hospital Registration Number' />
                  <Input variant='flushed' placeholder='Emergency-Ward Number' />
                  <Button  leftIcon={<FaCloudUploadAlt />}>Registration Certificate Upload</Button>
                  <Input variant='flushed' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <Input variant='flushed' type='password' placeholder='Confirm Password ' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </Stack >
            </div>
            <Button type="submit" size='xl' className=' py-3 px-6 text-white bg-gray-600 hover:bg-gray-800'>Sign Up</Button>
          </form>
      )}
    </section>
  </main>
  )
}
