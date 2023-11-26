import React from 'react'
import Image from 'next/image'
import {
    Button,

} from '@chakra-ui/react'

export function Header () {
  return (
    <nav className='w-full min-h-max navbar flex flex-row justify-between items-center'>
        {/* <Image src={logo} alt="Sicu-aura" width={100} height={100} /> */}
        <div>hello</div>
        <div className='w-fit max-w-4xl pl-36 flex flex-row gap-4 justify-evenly'>
            {/* <Image src={logo} alt="Sicu-aura" width={100} height={100} /> */}
            <Button>Log Out</Button>
        </div>
    </nav>
  )
}

