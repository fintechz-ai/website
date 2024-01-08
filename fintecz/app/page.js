import Image from 'next/image'
import Navbar from './Navbar'
import Star from '@/public/star.svg'
import Aibutton from '@/public/aibutton.svg'
import Phone from '@/public/phone.svg'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className='flex flex-row h-screen w-screen  '>
        
        <section className='w-3/5 bg-[#F8F3E9] h-screen flex flex-col justify-around items-start'>
          <div className=' flex flex-col mx-24 items-start'>
            <Image src={Star} width={52} height={52} />
            <p className=' font-MerriWeather font-normal text-6xl'>
              {`Easy way`}<br/> {` to manage`}<br/> {` your money`}
            </p>
            <div className=' my-6 mx-2 gap-6 flex flex-row'>
              <Button variant='solid' bg='black' color='white' colorScheme='blackAlpha' borderRadius='0' className=' px-6 py-2 font-MerriWeather font-normal text-base '>Download Now</Button>
              <Link href='/Account/Ai' >
                <Image src={Aibutton} width={129} height={133} className=' hover:translate-y-3 hover:translate-x-1 ease-in-out duration-300' />
              </Link>
            </div>
          </div>
        </section>
        <section className='w-2/5 bg-black h-screen flex flex-row-reverse'>
          <Image src={Phone} width={1090} height={764} className='absolute z-0'/>
        </section>

      </main>
    </>
  )
}
