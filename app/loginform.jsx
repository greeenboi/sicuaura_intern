'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import {
    Stack,
    Input,
    Button,

} from "@chakra-ui/react"
import { IoMdCamera } from "react-icons/io";
import { Webcamcomp } from './Webcam';
import { useRouter } from 'next/navigation'

export function LoginForm () {
    const [ formStatus, setFormStatus ] = useState(true); // details or picture
    const [ allowCamera, setAllowCamera ] = useState(false);
    const [ confirmPhoto, setConfirmPhoto ] = useState(false);
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(confirmPhoto){
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                router.push('/Dashboard');
            }, 2000);
        } 
    }, [confirmPhoto, setLoading]);

  return (
    
    <form className='flex flex-col justify-between items-center w-full h-full '>
    { formStatus ? ( 
            <>
            <section className='w-full h-full  flex flex-col justify-evenly'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className=' font-poppins text-3xl font-medium'>Welcome to Sicu-aura</h1>
                    <p className='font-poppins text-sm font-normal text-gray-400 overflow-clip'>Your one stop safety solutions using innovative technology</p>        
                </div>
                    <Stack spacing={3}>
                        <Input variant='flushed' placeholder="Hospital Name" />
                        <Input variant='flushed' type='email' placeholder="Email ID" />
                        <Input variant='flushed' type='password' placeholder="Password" />
                        <Input variant='flushed' type='password' placeholder="Special Access Code" />
                    </Stack>
            </section>
            <Button onClick={ () => setFormStatus(false) }  className=' px-4 py-2 mt-24 mb-4 bg-slate-700 hover:bg-slate-300 text-gray-300 hover:text-black' size="md">
                Login
            </Button>
            </>
        ) : (
            <>
                <section className='w-full h-full flex flex-col items-center justify-evenly'>
                    {
                        allowCamera ?
                        (
                            <Webcamcomp setConfirmPhoto={setConfirmPhoto} loading={loading} />
                        ) : (
                            <>
                                <div className='text-6xl font-thin hover:cursor-pointer text-gray-500 h-full w-10/12 border bg-gray-300 rounded-xl flex flex-col justify-center items-center'>
                                    <IoMdCamera />
                                </div> 
                                <Button onClick={() => setAllowCamera(true)}  className=' px-4 py-2 mt-24 mb-4 bg-slate-700 hover:bg-slate-300 text-gray-300 hover:text-black' size="md">
                                    Capture
                                </Button>
                            </>
                        )
                        
                    }                   
                </section>
                
            </>
        )
    }
    </form>
    
  )
}

