"use client"
import Image from 'next/image'
import Hero from "../public/herosvg.svg";
import Apollo from "../public/icon.svg";
import { RxSlash } from "react-icons/rx";
import { useState } from "react";

export default function Home() {
  const [isLogin, setIslogin] = useState(false);

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
      <div className='w-full flex flex-row justify-between h-max items-center text-black'>
        <Image 
           
          src={Apollo}
          alt="Icon"
          height='500px'
          width='500px'
        />
        {/* <div className='flex-row' > */}
          <button onClick={()=>setIslogin(false)}>hello</button>
          <RxSlash />
          <button onClick={()=>setIslogin(true)}>me too</button>
        {/* </div> */}
      </div>
      {isLogin ? (
        <div className={`text-black flex flex-col items-center justify-evenly h-4/6 my-12 px-12 w-1/2 shadow-xl rounded-lg transition-all duration-500 ${isLogin ? 'opacity-100' : 'opacity-0'}`}> {/* This div will be shown when isLogin is true */}
          {/* Add your content here */}
          HELLOO
        </div>
      ) : (
        <div className={`text-black flex flex-col items-center justify-evenly h-4/6 my-12 px-12 w-1/2 shadow-xl rounded-lg transition-all duration-500 ${isLogin ? 'opacity-0' : 'opacity-100'}`}> {/* This div will be shown when isLogin is false */}
          {/* Add your content here */}
          HOOHA
        </div>
      )}
    </section>
  </main>
  )
}
