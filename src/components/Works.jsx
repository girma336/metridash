import React from 'react'
import './../styles/Works.css';
import arowcorve from './../assets/arow-corve.png';

const Works = () => {
    return (
        <div className='w-full less-than-lg xl:flex'>
            <div className='w-[87.5%] ml-auto mr-auto box-work bd-[#FFFFFF] h-[535px] rounded-[25.64px] border-[0.92px] border-gray-300'>
                <div className='mt-[20px]'>
                    <h2 className="font-Satoshi text-[48px] font-bold leading-60 tracking-tighter text-center text-[#1F2937]">
                        How it works
                    </h2>
                    <p className="font-Satoshi text-[20px] font-medium leading-27 tracking-normal text-center text-[#4B5563] mt-[20px]">
                        Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='grid-works mt-[100px]'>
                        <div className='relative first-class h-[190px]'>
                            <div className='absolute bottom-[-15px] left-1/2 transform -translate-x-1/2'>
                                <h1 className='works-header font-Satoshi text-[#1F2937]'>Subscribe</h1>
                                <p className='text-works w-[339px]'>Subscribe to a plan & you’ll get an instant access to your private Slack channel.</p>

                            </div>
                            <div className='absolute right-[-50px]  top-1/2 transform -translate-y-1/2'>
                                <img src={arowcorve} alt="" />
                            </div>
                        </div>
                        <div className='relative second-class'>
                            <div className='absolute bottom-[-15px] left-1/2 transform -translate-x-1/2'>
                                <h1 className='works-header font-Satoshi text-[#1F2937]'>Request</h1>
                                <p className='text-works w-[339px]'>Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours.</p>
                            </div>
                            <div className='absolute right-[-50px]  top-1/2 transform -translate-y-1/2'>
                                <img src={arowcorve} alt="" />
                            </div>
                        </div>
                        <div className='relative third-class'>
                            <div className='absolute bottom-[-15px] left-1/2 transform -translate-x-1/2'>
                                <h1 className='works-header font-Satoshi text-[#1F2937]'>Revise</h1>
                                <p className='text-works w-[339px]'>Need changes? We guarantee unlimited revisions until you're 200% satisfied.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Works