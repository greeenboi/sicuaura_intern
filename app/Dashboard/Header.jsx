import React from 'react'
import Image from 'next/image'
import Sicu_logo1 from '../../public/sicu-aura 3.svg'
import Sicu_logo2 from '../../public/sicu-aura 4.svg'

import {
    Button,
    Avatar,
} from '@chakra-ui/react'

export function Header () {
  return (
    <nav className='w-full min-h-max navbar flex flex-row justify-between items-center'>
        <div className='flex flex-row mx-12'>
          <Image src={Sicu_logo1} alt="Sicu-aura" width={60} height={62} />
          <Image src={Sicu_logo2} alt="Sicu-aura" width={132} height={29} />
        </div>
        
        <div className='w-fit max-w-4xl mx-8 pl-36 flex flex-row gap-4 justify-evenly items-center'>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            <p className='font-inter font-medium text-sm'>Alex Robinson</p>
            <Button className=' px-4 py-2 my-2 text-black bg-slate-300 hover:bg-slate-700 hover:text-white transition-all'>Log Out</Button>
        </div>
    </nav>
  )
}

