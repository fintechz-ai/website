import AuthForm from './auth-form'

export default function Home() {
  return (
    <main className=' w-screen h-screen bg-black flex flex-col justify-center items-center'>
        <section className=' bg-[#1c1c1c] w-1/2 h-1/2 border-white border rounded-lg flex flex-col gap-2 p-8' >
            <h1 className=' font-KulimPark font-thin text-2xl text-white text-center my-4'>
                {`Sign In / Sign up`}
            </h1>
            <AuthForm />
        </section>
    </main>
  )
}