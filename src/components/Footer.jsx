import React from 'react'
import './../styles/Footer.css';
import slack from './../assets/slack1.png'
import ball from './../assets/ball.png';
import hand from './../assets/hand.png';
import linkedin from './../assets/linkedin.png';
import facebook from './../assets/facebook.png'
import twitter from './../assets/twitter.png'


const Footer = () => {
  return (
    <div className='w-full bg-gradient-to-t from-[#fdf2f8] to-transparent footer__page-sm sm:footer__page pb-[10px]'>
        <div className='w-[95%] ml-auto mr-auto'>
            <div>
                <h1 className='footer__header text-[#374151]'>UniCraft</h1>
                <p className='footer__desc text-[#9CA3AF] mt-[10px]'>Design amazing digital experiences that <br />
create more happy in the world.</p>
            </div>
            <div className='flex justify-between items-bottom mt-[30px] mb-[20px]'>
                <p className='Text-md-Regular text-[#98A2B3]'>© 2077 Untitled UI. All rights reserved.</p>
                <div className='flex flex-wrap ml-6 float-right'>
                    <div className='w-[24px] h-[24px] mr-[20px] mb-3'>
                        <img src={twitter} alt='' />
                    </div>
                    <div className='w-[24px] h-[24px] mr-[20px] mb-3'>
                        <img src={linkedin} alt='' />
                    </div>
                    <div className='w-[24px] h-[24px] mr-[20px] mb-3'>
                        <img src={facebook} alt='' />
                    </div>
                    <div className='w-[24px] h-[24px] mr-[20px] mb-3'>
                        <img src={slack} alt='' />
                    </div>
                    <div className='w-[24px] h-[24px] mr-[20px] mb-3'>
                        <img src={hand} alt='' />
                    </div>
                    <div className='w-[24px] h-[24px]  mb-3'>
                        <img src={ball} alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer