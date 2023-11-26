import React from 'react'
import {
    Stack,
    Input,
    Button,

} from "@chakra-ui/react"


export function LoginForm () {
  return (
    <form className='flex flex-col justify-between items-center w-full h-full '>
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
        <Button className=' px-4 py-2 mt-24 mb-4 bg-slate-700 hover:bg-slate-300 text-gray-300 hover:text-black' size="md">
            Login
        </Button>
    </form>
  )
}

