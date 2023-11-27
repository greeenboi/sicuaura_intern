"use client"
import Image from 'next/image'
import Hero from "../public/herosvg.svg";
import Apollo from "../public/icon.svg";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";

import {
  Stack,
  Button,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

import { LoginForm } from "./loginform";
import Head from 'next/head';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Home() {
  const [isLogin, setIslogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [ hospital_reg , setHospital_reg ] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [date_reg, setDate_reg] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      console.log('Data being inserted');
      const { data, error } = await supabase
        .from('hospitalreg')
        .insert([
          { 
            hospital_reg: hospital_reg, 
            hospital_name: hospitalName, 
            date_reg: date_reg, 
            email: email, 
            address: address, 
            phone_no: phoneNumber, 
            city: city, 
            state: state, 
            pincode: pincode 
          },
        ]);
      if (error) {
        console.error('Error: ', error);
        setIsLoading(false);
      } else {
        console.log('Data inserted successfully: ', data);
        setIsLoading(false);
        onOpen();
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    }
  };

  return (
  <main className='h-screen w-screen flex flex-row bg-white'>
    <Head>
      <title>Sign Up</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
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
        <div className={`text-black flex flex-col items-center justify-evenly h-4/6 my-12 px-12 w-2/3 shadow-xl rounded-lg transition-all duration-500 ${isLogin ? 'opacity-100' : 'opacity-0'}`}> {/* This div will be shown when isLogin is true */}
          {/* Login form */}
          <LoginForm/>
        </div>
      ) : (
          <form className='w-full h-4/6 shadow-xl px-12 flex flex-col gap-4 justify-evenly items-center rounded-lg'  onSubmit={handleSubmit}>
            <div className={`flex flex-row gap-8 w-full  items-center justify-evenly text-black transition-all duration-500 ${isLogin ? 'opacity-0' : 'opacity-100'}`}> {/* This div will be shown when isLogin is false */}
              {/* SignUp Form */}
                <Stack className='w-1/2 h-full gap-4'>
                  <Input variant='flushed'  placeholder='Hospital Name' value={hospitalName} onChange={(e) => setHospitalName(e.target.value)}/>
                  <Input variant='flushed' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                  <Input variant='flushed' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)}/>
                  <Input variant='flushed' placeholder='State' value={state} onChange={(e) => setState(e.target.value)}/>
                  <NumberInput variant='flushed'>
                    <NumberInputField placeholder='Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Input type='date' variant='flushed' placeholder='Hospital Registration Date' value={date_reg} onChange={(e) => setDate_reg(e.target.value)}/>
                  <NumberInput variant='flushed'>
                    <NumberInputField placeholder='Number of Ambulance available' />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack >
                <Stack className='w-1/2 h-full gap-4'>
                  <Input type='email' variant='flushed' placeholder='Email ID' value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <Input type="number" variant='flushed' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                  <Input type="number" variant='flushed' placeholder='Hospital Registration Number' value={hospital_reg} onChange={(e) => setHospital_reg(e.target.value)}/>
                  <Input type="number" variant='flushed' placeholder='Emergency-Ward Number' />
                  <Button  leftIcon={<FaCloudUploadAlt />} >Registration Certificate Upload</Button>
                  <Input  variant='flushed' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <Input  variant='flushed' type='password' placeholder='Confirm Password ' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </Stack >
            </div>
            {isLoading? 
              (
                <Button
                  isLoading
                  loadingText='Submitting'
                  colorScheme='teal'
                  variant='outline'
                >
                  Submit
                </Button>
                ) : (
                <Button type="submit" size='xl' className=' py-3 px-6 text-white bg-gray-600 hover:bg-gray-800' >Sign Up</Button>
              )
          }
          </form>
      )}
      <p className='flex flex-row font-poppins text-sm text-gray-400 hover:text-sky-300 transition-all items-center hover:cursor-pointer'><LuDot />  Terms and Condition privacy policy</p>
    </section>
    <>
      <Modal isCentered motionPreset='slideInTop' isOpen={isOpen} onClose={onClose} colorScheme='whiteAlpha'>
        <ModalOverlay backdropFilter='blur(10px)'/>
        <ModalContent minWidth='max-content' padding='2rem'>
          <ModalBody>
          <p className='  text-black font-poppins text-2xl flex flex-col gap-10 justify-center items-center'><FaCheckCircle className=' h-10 text-green-400 font-semibold text-6xl'/>Your Registration has been Successfull</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  </main>
  )
}
