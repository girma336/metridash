import React from 'react'
import './../styles/Header.css'

const Header = () => {
  return (
    <div className="h-[80px] bg-gradient-to-b from-white to-transparent  tablet__below lg:flex lg:justify-between ld:items-center">
        <div className='w-full flex justify-between items-center ml-10 mr-10'>
            <div>
                <hl className='className="font-satoshi text-lg font-bold leading-[32px] tracking-tighter text-center text-[#374151]'>UniCraft</hl>
            </div>
            <div>
                <ul className='flex justify-between items-center font-satoshi text-xl font-medium leading-6 tracking-tighter text-left text-[#374151]'>
                   <li className='mr-10'>
                       <a href='works'>How it Works</a>
                   </li>
                    <li className='mr-10'>
                        <a href='works'>Pricing</a>
                    </li>
                    <li className=''>
                        <a href='works'>FQI</a>
                    </li>
                </ul>
            </div>
            <div>
                <div className='font-satoshi text-xl font-medium leading-6 tracking-tighter text-left w-[153px] h-[50px]  p-[16px 34px] rounded-[8px] border border-solid border-gray-500 gap-10 flex justify-center items-center'>
                   <a href='works'>Contact us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header