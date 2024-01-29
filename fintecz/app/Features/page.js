import Navbar from "../Navbar";
import Payment from '@/public/payment.svg'
import Image from "next/image";

export default function Page() {
    return (
        <main className=" w-screen h-auto flex flex-row items-start ">
            <Navbar />
            <section className='w-3/5 bg-[#F8F3E9] h-screen flex flex-col justify-around items-start'>
                <p className=' font-MerriWeather font-normal text-6xl mx-12 absolute z-10 top-[35%] left-[0%]'>
                {`Easy way`}<br/> {` to make`}<br/> {` your Payments`}
                </p>
                
            </section>
            <section className='w-2/5 bg-black h-screen flex flex-row-reverse'>
                <Image src={Payment} width={300} height={700} className='absolute z-10 top-[20%] right-[30%]'/>
            </section>
        </main>
    )   
}