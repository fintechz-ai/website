import React from 'react'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import Srmseal from '@/public/Srmseal 1.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    
    <nav className='w-screen absolute flex flex-row gap-8 justify-between items-center my-5 mx-6'>
        <Link href='/' className=' font-MerriWeatherSans font-normal text-4xl flex flex-row items-center hover:border-b-2 hover:border-black pb-2 gap-2 hover:gap-4 mt-2 hover:mt-0 ease-in-out duration-200' ><Image src={Srmseal} width='35' height='35' /> SRMFINPAY</Link>
        <div className=' flex flex-row justify-start gap-24 mr-36 items-center'>
            <Link href='/Features' className=' font-KulimPark font-light text-2xl'>Features</Link>
            <Link href='/Benefits' className=' font-KulimPark text-white font-light text-2xl'>Benefits</Link>
            <Link href='/Security' className=' font-KulimPark text-white font-light text-2xl'>Security</Link>
            <Link href='/Auth' className=' font-KulimPark font-light text-white text-2xl'><Button colorScheme='white' variant='outline'>Login</Button></Link>
        </div>
        
    </nav>
  )
}

export default Navbar