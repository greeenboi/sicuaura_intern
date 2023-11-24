import Image from 'next/image'
import Hero from "../public/herosvg.svg";
import Apollo from "../public/icon.svg";
import { RxSlash } from "react-icons/rx";

export default function Home() {
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
    <section className='w-2/3 flex flex-col my-12 px-20'>
      <div className='w-full flex flex-row justify-between h-max items-center text-black'>
        <Image 
           
          src={Apollo}
          alt="Icon"
          height='500px'
          width='500px'
        />
        {/* <div className='flex-row' > */}
          <button >hello</button>
          <RxSlash />
          <button>me too</button>
        {/* </div> */}
      </div>
      <div></div>
      <div></div>
    </section>
  </main>
  )
}
