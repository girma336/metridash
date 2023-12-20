import React from 'react'
import zapier from './../assets/zapier.png'
import zoom from './../assets/zoom.png'
import slack from './../assets/slack.png'
import adobe from './../assets/adobe.png'
import amazon from './../assets/amazon.png'
import spotify from './../assets/spotify.png'
import './../styles/About.css';

const About = () => {
    return (
        <div className='h-auto w-full bg-gradient-to-b from-white to-transparent grid text-center'>
            <div className='ml-auto mr-auto md:mt-[100px] sm:w-[85%] lg:mt-[60px] md:w-[80%] lg:w-[76%] '>
                <div className='w-full'>
                    <h1 className="mobile__header md:text-6xl md:font-extrabold md:leading-[85px] md:tracking-tighter text-center text-[#1F2937] sm:text-4xl sm:font-bold sm:leading[56px] sm:tracking-tine sm:mt-[80px]">Elevate Your Presence with Seamless Design and Innovation.</h1>
                    <p className="mobile__desc font-satoshi md:text-base md:font-medium md:leading-[27px] md:tracking-normal md:text-center mt-4 text-[#4B5563]">
                        From strategic planning to digital presence, we're your dedicated partner in achieving solo success.
                    </p>
                </div>
                <div className="w-[215px] h-[60px] top-293 left-613 p-[16px 34px] rounded-[8px] gap-10 shadow-inner bg-[#1F2937] ml-auto mr-auto flex justify-center mt-[60px]">
                    <button className="font-satoshi text-base font-bold leading-[27px] tracking-tighter text-center text-[#F9FAFB]">
                        View Pricing
                    </button>
                </div>
                <div className='mt-[100px] md:w-[90%] lg:w-[72%] ml-auto mr-auto'>
                    <div>
                        <p className="font-satoshi text-sm font-medium leading-[19px] tracking-tighter text-center text-[#9CA3AF]">Trusted By 250+ Companies</p>
                        <div className='flex justify-center mt-[10px] flex-wrap lg:md:flex-nowrap w-[95%] mr-auto ml-auto'>
                            <div className="w-[172px] flex justify-center items-center h-[65px] p-[14.44px 28.89px] mb-2 mr-3 mr-3">
                                <img className='w-[72.22px] h-[36.11px]' src={zapier} alt='' />
                            </div>
                            <div className="w-[172px] flex justify-center items-center h-[65px] p-[14.44px 28.89px] mb-2 mr-3 mr-3">
                                <img className='w-[72.22px] h-[36.11px]' src={spotify} alt='' />
                            </div>
                            <div className="w-[172px] flex justify-center items-center h-[65px] p-[14.44px 28.89px] mb-2 mr-3 mr-3">
                                <img className='w-[72.22px] h-[36.11px]' src={zoom} alt='' />
                            </div>

                            <div className="w-[172px] flex justify-center items-center h-[65px] p-[14.44px 28.89px] mb-2 mr-3 mr-3 gap-[21.67px]">
                                <img className='w-[72.22px] h-[36.11px]' src={slack} alt='' />
                            </div>
                            <div className="w-[172px] flex justify-center items-center h-[65px] p-[14.44px 28.89px] mb-2 mr-3 mr-3">
                                <img className='w-[72.22px] h-[36.11px]' src={amazon} alt='' />
                            </div>
                            <div className="w-[172px] flex justify-center items-center h-[65px] p-[14.44px 28.89px] mb-2 mr-3 mr-3">
                                <img className='w-[72.22px] h-[36.11px]' src={adobe} alt='' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About