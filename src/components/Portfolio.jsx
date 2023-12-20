import React from 'react'
import './../styles/Portfolio.css'
import frame1 from './../assets/Frame1.png'
import frame2 from './../assets/Frame2.png'
import frame3 from './../assets/Frame3.png'
import frame4 from './../assets/Frame4.png'
import frame5 from './../assets/Frame5.png'

const Portfolio = () => {
    return (
        <div className='w-full h-[682px] xl:flex less-than-xl'>
            <div className='w-full mt-[60px]'>
                <div className='grid-system w-full'>
                    <div>
                        <img src={frame1} alt='' />
                    </div>
                    <div>
                        <img src={frame2} alt='' />
                    </div>
                    <div>
                        <img src={frame3} alt='' />
                    </div>
                    <div>
                        <img src={frame4} alt='' />
                    </div>
                    <div className="">
                        <img className='ml-auto' src={frame5} alt='' />
                    </div>
                </div>
                <div className=''>
                    <div className="w-[273px] ml-auto mr-auto mt-[80px] h-[62px] p-[16px 34px] rounded-md border border-gray-300 gap-10 flex justify-center items-center cursor-pointer">
                        <button
                            className="Button-text font-Satoshi text-20 font-bold leading-27 tracking-tighter text-center text-[#4B5563]"
                        >
                            View recent work
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio