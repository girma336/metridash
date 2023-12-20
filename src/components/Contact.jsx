import React from 'react'
import './../styles/Contact.css';

const Contact = () => {
    return (
        <div className='bg-gradient-to-b from-[#fdf2f8] to-transparent mt-[40px] pt-[40px] mb-[80px]'>
            <div>
                <h1 className='contact__header-mob  sm:contact__header-sm md:contact__header'>No long-term contracts. <br />
                    No catches. Simple.
                </h1>
                <p className='Contact-Description text-[#667085]'>Start your 30-day free trial. Cancel anytime.</p>
                <div className=' ml-auto mr-auto text-center'>
                    <div className='Button-contact flex justify-center item-center ml-auto mr-auto mt-[40px]'>Contact us</div>
                </div>
            </div>
        </div>
    )
}

export default Contact