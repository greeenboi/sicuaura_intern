
import React from 'react'
import Head from 'next/head'
import { Header } from './Header'
import Image from 'next/image'

import Icon from '../../public/image 18.svg'

import {
  Button,
  Input
} from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";

export default function page () {
  return (
    <>
        <Header />
        <Head>
            <title>Dashboard</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main className='bg-white w-screen h-screen flex flex-col items-center py-24'>
          <div className='flex flex-row-reverse w-4/6 h-fit '>
            <Image src={Icon} alt="Cool Logo" width={83} height={83} />
          </div>
          <section className='w-4/6 h-max '>
              <div className=' flex flex-row w-full h-fit text-black justify-between'>
                <h1 className=' font-montserrat font-medium text-4xl'>Hospital Registrations</h1>
                <div className='flex items-center flex-row '>
                  <Input placeholder="Search" className='w-full h-fit ml-4 p-2 border-r-0 shadow-md' size='md' />
                  <Button className='p-0 bg-white hover:bg-white active:bg-gray-400 right-10 z-10 hover:opacity-70'  ><CiSearch /></Button>
                  <Button className='p-0 hover:bg-white active:bg-gray-400 shadow-md mx-12' size="md" ><IoFilterOutline /></Button>
                </div>
              </div>
          </section>
        </main>
    </>
  )
}
