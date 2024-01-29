import Image from "next/image";
import Navbar from "../Navbar";
import Dashboard from '@/public/Dashboard.svg'
import Link from 'next/link'
import Star from '@/public/star.svg'
import Aibutton from '@/public/aibutton.svg'
import { Button } from '@chakra-ui/react'

export default function Page() {
    return(
        <main className=" w-screen h-auto flex flex-row items-start">
            <Navbar />
            <section className='w-3/5 bg-[#F8F3E9] h-screen flex flex-col justify-around items-start'>
                <div className="flex flex-col mx-4 gap-6">
                    <p className=' font-MerriWeather font-normal text-6xl mx-12 '>
                    {`Flexible and `}<br/> {` Easy to use`}<br/> {` Personal Dashboard`}
                    </p>
                    <div className=' mx-24 my-6 gap-6 flex flex-row'>
                        <Button variant='solid' bg='black' color='white' colorScheme='blackAlpha' borderRadius='0' className=' px-6 py-2 font-MerriWeather font-normal text-base '>Download Now</Button>
                        <Link href='/Account' >
                            <Image src={Aibutton} width={129} height={133} className=' hover:translate-y-3 hover:translate-x-1 ease-in-out duration-300' />
                        </Link>
                    </div>

                </div>
            </section>
            <section className='w-2/5 bg-black h-screen flex flex-row-reverse'>
                <Image src={Dashboard} width={1008} height={673} className='absolute z-10 top-[20%] right-[0%]'/>
            </section>
        </main>
    )
}