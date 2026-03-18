import React from 'react'

function Footer() {
    return (
        <>
        <footer className='bg-gray-800 text-gray-500 text-center font-serif'>
            <div className='max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <h2 className='font-bold text-2xl mb-2'>Pop & Drop Vending</h2>
                    <p className='mb-2'>Serving Orlando and Surrounding Areas Since 2023</p>
                </div>

                <div className='md:text-right'>
                    <h1 className='font-bold md:text-right text-sm'>Contact Us</h1>
                    <p className='hover:underline text-white transition text-sm'>
                    Email: <a href="mailto:Contact@Pop&DropVending.com">Contact@Pop&DropVending.com</a>
                    </p>

                    <p className='hover:underline text-white transition text-sm'>Phone: 
                    <a href="tel:4075555555">(407) 555-5555</a>
                </p>
                </div>
            </div>

                <div className=' text-centermd:text-left text-gray-400 text-sm border-t border-gray-700 py-4 '>© 2023 Pop & Drop Vending. All rights reserved</div>
        </footer>
        </>
    )
}

export default Footer;