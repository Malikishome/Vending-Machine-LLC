import React from 'react'
import VisaIcon from "./assets/visa.svg";
import MastercardIcon from "./assets/mastercard-alt.svg";
import AmexIcon from "./assets/american-express.svg";
import ApplePayIcon from "./assets/apple-pay.svg";
import GooglePayIcon from "./assets/google-pay.svg";


function Footer() {
  return (
      <footer className='bg-gray-800 text-gray-500 text-center font-serif'>
        
        <div className='max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
          
          <div>
            <h2 className='font-bold text-2xl mb-2 text-white'>Pop & Drop Vending</h2>
            <p className='mb-2 text-white'>Serving Orlando and Surrounding Areas Since 2023</p>
          </div>

          <div className='md:text-right'>
            <h3 className='font-bold text-sm'>Contact Us</h3>

            <p className='hover:underline text-white transition text-sm'>
              Email: <a href="mailto:Contact@Pop&DropVending.com">Contact@Pop&DropVending.com</a>
            </p>

            <p className='hover:underline text-white transition text-sm'>
              Phone: <a href="tel:4075555555">(407) 555-5555</a>
            </p>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-3xl max-w-6xl mx-auto px-6 pb-4">
          <span className="text-xs text-gray-500 uppercase tracking-widest">We Accept:</span>
          <img src={VisaIcon} alt="Visa" className="h-6 hover:scale-110 transition rounded-sm" />
          <img src={MastercardIcon} alt="Mastercard" className="h-6  hover:scale-110 transition rounded-sm" />
          <img src={AmexIcon} alt="American Express" className="h-6  hover:scale-110 transition rounded-sm" />
          <img src={ApplePayIcon} alt="Apple Pay" className="h-6  hover:scale-110 transition rounded-sm" />
          <img src={GooglePayIcon} alt="Google Pay" className="h-6  hover:scale-110 transition rounded-sm" />
        </div>
        <div className='text-center text-gray-400 text-sm border-t border-gray-700 py-4'>
          © {new Date().getFullYear()} Pop & Drop Vending. All rights reserved
        </div>

      </footer>
  )
}

export default Footer;