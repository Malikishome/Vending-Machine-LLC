import React from 'react'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaApplePay, FaGooglePay } from "react-icons/fa"

function Footer() {
  return (
    <>
      <footer className='bg-gray-800 text-gray-500 text-center font-serif'>
        
        <div className='max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
          
          <div>
            <h2 className='font-bold text-2xl mb-2 text-white'>Pop & Drop Vending</h2>
            <p className='mb-2 text-white'>Serving Orlando and Surrounding Areas Since 2023</p>
          </div>

          <div className='md:text-right'>
            <h1 className='font-bold text-sm'>Contact Us</h1>

            <p className='hover:underline text-white transition text-sm'>
              Email: <a href="mailto:Contact@Pop&DropVending.com">Contact@Pop&DropVending.com</a>
            </p>

            <p className='hover:underline text-white transition text-sm'>
              Phone: <a href="tel:4075555555">(407) 555-5555</a>
            </p>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-3xl max-w-6xl mx-auto px-6 text-white pb-4">
          <FaApplePay className="h-8 hover:scale-110 transition" />
          <FaGooglePay className="h-8 hover:scale-110 transition" />
          <FaCcVisa className="h-8 hover:scale-110 transition" />
          <FaCcMastercard className="h-8 hover:scale-110 transition" />
          <FaCcAmex className="h-8 hover:scale-110 transition" />
        </div>

        <div className='text-center text-gray-400 text-sm border-t border-gray-700 py-4'>
          © 2023 Pop & Drop Vending. All rights reserved
        </div>

      </footer>
    </>
  )
}

export default Footer;