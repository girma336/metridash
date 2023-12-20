import React from 'react'
import './../styles/Pricing.css';
import blackCheck from './../assets/balck-circle.png';
import whiteCheck from './../assets/white-bg.png';
import moreWhite from './../assets/more-white.png';

const Pricing = () => {
    return (
        <div className='w-full h-auto bg-gradient-to-b from-[#fdf2f8] to-transparent mt-[40px]'>
            <div>
                <div className='mt-[50px] pt-[20px]'>
                    <h1 className='Pricing-heder-mob md:Pricing-Heading mt-[50px]'> Pricing made for collaborative support.</h1>
                    <p className='Pricing-Description-mob md:Pricing-Description md:w-[665px] mt-[5px] ml-auto mr-auto'>Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='grid__pricin-lg xl:grid__pricing'>
                        <div className='pricing__element-mob sm:pricing__element'>
                            <div>
                                <h4 className='header__box__pricing text-[#191D23]'>Freebie</h4>
                                <p className='para__box__pricing text-[#6B7280] mt-3'>Ideal for individuals who need quick access to basic features.</p>
                            </div>                            <div className='flex justify-left items-center mt-[10px]'>
                                <h1 className='cost__pricing text[#1F2937]'>$0 </h1><span className='per__month ml-[10px] text-[#4B5563]'>{' '}/Month</span>
                            </div>
                            <div className='button__pricing-mob sm:button__pricing text-center flex items-center justify-center mt-[30px]'>
                                Get Started Now
                            </div>
                            <div className='mt-[50px]'>
                                <div className='flex justify-left items-center'>
                                    <img src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>20,000+ of PNG & SVG graphics</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>Access to 100 million stock images</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={whiteCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#9CA3AF]'>Upload custom icons and fonts</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={whiteCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#9CA3AF]'>Unlimited Sharing</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={whiteCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#9CA3AF]'>Upload graphics & video in up to 4k</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={whiteCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#9CA3AF]'>Unlimited Projects</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={whiteCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#9CA3AF]'>Instant Access to our design system</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={whiteCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#9CA3AF]'>Create teams to collaborate on designs</p>
                                </div>
                            </div>

                        </div>
                        <div className='pricing__element-mob sm:pricing__element middle__pricing sm:middle__pricing'>
                            <div>
                                <h4 className='header__box__pricing text-[#ffffff]'>Professional</h4>
                                <p className='para__box__pricing text-[#F3F4F6] mt-3'>Ideal for individuals who who need advanced features and tools for client work.</p>
                            </div>                            <div className='flex justify-left items-center mt-[10px]'>
                                <h1 className='cost__pricing text-[#F9FAFB]'>$25 </h1><span className='per__month ml-[10px] text-[#F9FAFB]'>{' '}/Month</span>
                            </div>
                            <div className='button__pricing-mob sm:button__pricing text-center flex items-center justify-center mt-[30px] bg-[#F9FAFB] text-[#1F2937]'>
                                Get Started Now
                            </div>
                            <div className='mt-[50px]'>
                                <div className='flex justify-left items-center'>
                                    <img src={moreWhite} alt="" />
                                    <p className='spec_pricing ml-2 text-[#F9FAFB]'>20,000+ of PNG & SVG graphics</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img src={moreWhite} alt="" />
                                    <p className='spec_pricing ml-2 text-[#F9FAFB]'>Access to 100 million stock images</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={moreWhite} alt="" />
                                    <p className='spec_pricing ml-2 text-[#F9FAFB]'>Upload custom icons and fonts</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={moreWhite} alt="" />
                                    <p className='spec_pricing ml-2 text-[#F9FAFB]'>Unlimited Sharing</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={moreWhite} alt="" />
                                    <p className='spec_pricing ml-2 text-[#F9FAFB]'>Upload graphics & video in up to 4k</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={whiteCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#9CA3AF]'>Unlimited Projects</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={whiteCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#9CA3AF]'>Instant Access to our design system</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={whiteCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#9CA3AF]'>Create teams to collaborate on designs</p>
                                </div>
                            </div>
                        </div>
                        <div className='pricing__element-mob sm:pricing__element mr-auto ml-auto'>
                            <div>
                                <h4 className='header__box__pricing text-[#191D23]'>Enterprise</h4>
                                <p className='para__box__pricing text-[#6B7280] mt-3'>Ideal for businesses who need personalized services and security for large teams. </p>
                            </div>
                            <div className='flex justify-left items-center mt-[10px]'>
                                <h1 className='cost__pricing text[#1F2937]'>$100 </h1><span className='per__month ml-[10px] text-[#4B5563]'>{' '}/Month</span>
                            </div>
                            <div className='button__pricing-mob sm:button__pricing text-center flex items-center justify-center mt-[30px]'>
                                Get Started Now
                            </div>
                            <div className='mt-[50px]'>
                                <div className='flex justify-left items-center'>
                                    <img src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>20,000+ of PNG & SVG graphics</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>Access to 100 million stock images</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>Upload custom icons and fonts</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>Unlimited Sharing</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>Upload graphics & video in up to 4k</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>Unlimited Projects</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>Instant Access to our design system</p>
                                </div>
                                <div className='flex justify-left items-center mt-2'>
                                    <img className='text-[#9CA3AF]' src={blackCheck} alt="" />
                                    <p className='spec_pricing ml-2 text-[#1F2937]'>Create teams to collaborate on designs</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing