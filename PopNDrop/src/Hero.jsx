import React from 'react'

function Hero() {
    return (
        <>
        <section className='relative h-screen w-full'>
            <img src="./public/HeroPic.jpg" alt="Picture of pop and drop vending" className='absolute inset-0 w-full h-full object-cover'/>
            <div className='bg-[#f6f7f8] text-amber-400 p-4 text-center h-screen flex flex-col justify-center items-center gap-4 '>
            <h1 className='relative z-10 text-4xl font-bold font-serif animate-wiggle-more'>POP & DROP VENDING</h1>
            <h2 className='relative z-10'>Modern Vending Solutions for <br />
            the Orlando Area</h2>
            <h3 className='relative z-10'>Bring your business to the next level <br />
            with our modern vending machines.</h3>
            <button className="relative z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href="#form">Request a Machine </a></button>
            </div>
        </section>
        </>
    )
}

export default Hero;