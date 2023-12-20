import React, { useState } from 'react';
import './../styles/Question.css';
import mines from './../assets/mines.png';
import plus from './../assets/plus-circle.png';
const Question = () => {

    const faqItems = [
        {
            question: 'Is there a free trial available?',
            answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
        {
            question: 'Can I change my plan later?',
            answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
        {
            question: 'What is your cancellation policy?',
            answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
        {
            question: 'Can other info be added to an invoice?',
            answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
        {
            question: 'How does billing work?',
            answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
        {
            question: 'How do I change my account email?',
            answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div className='mb-[60px] mt-[50px]'>
            <div>
                <div>
                    <h1 className='question-Heading-mob sm:question-Heading-sm md:question-Heading '>Frequently asked questions</h1>
                    <p className='question-Description-mob sm:question-Description-sm md:question-Description mt-1'>Everything you need to know about the product and billing.</p>
                </div>
                <div>
                    <div className='flex justify-centre items-center w-full mt-[30px] md:mt-[60px]'>
                        <div className='flex justify-centre items-center w-full'>
                            <div className="faq-container-sm md:faq-container">
                                {faqItems.map((item, index) => (
                                    <div className="faq-item-sm md:faq-item" key={index}>
                                        <div className="question-sm md:question relative">
                                            
                                            <h3 className='Question-Description text-[#1F2937]'>{item.question}</h3>
                                            <span className='absolute right-[-25px] top-[3px]' onClick={() => toggleAnswer(index)}>{activeIndex === index ? <img src={mines} alt="" /> : <img src={plus} alt="" />}</span>
                                        </div>
                                        {activeIndex === index && (
                                            <div className="answer">
                                                <p className='Question-Answer text-[#6B7280] mt-2'>{item.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question