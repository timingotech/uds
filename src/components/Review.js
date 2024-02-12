import React from 'react'
import Ayodeji from '../images/Ayodeji.jpg'
import Emma from '../images/Emma.jpg'
import Eniola from '../images/Eniola.jpg'
import Samuel from '../images/Samuel.jpg'
import Mosees from '../images/Mosees.jpg'
import Rahimat from '../images/Rahimat.jpg'

const Review = () => {
  return (
    <div>
        <div className=" justify-center  bg-[#fed393] pb-[50px] mb-[50px]  bottom-0 right-0 border-b-4 border-r-4 rounded-br-full">
            <div className='py-[50px]'>
                <h1 className='text-3xl font-semibold text-center'>WHAT PEOPLE SAY ABOUT <br /> OUR SERVICES</h1>
            </div>
            <div className="md:flex justify-center md:space-x-8">
            <div className='bg-white border border-black rounded-lg w-[310px] rahmat '>
                <div className='flex justify-center mt-7'>
                <img src={Rahimat} alt="" className='w-[150px] h-[150px] rounded-full' />
                </div>
                <h1 className='mt-4 mb-2 text-xl font-bold text-center'>RAHAMAT MUFTAUDEEN</h1>
                <p className='px-[20px] mb-4 text-center font-semibold'>
                INTERN 22'23
                </p>
                <p className='px-[20px] mb-4 text-center '>
                The internship taught me how to apply core engineering principles for the understanding and advancement of medical and healthcare technologies. I have also learnt to provide solution to some specific problems in medicine.                </p>
            </div>
            
            <div className='bg-white border border-black rounded-lg w-[310px] mosses'>
                <div className='flex justify-center mt-7'>
                <img src={Mosees} alt="" className='w-[150px] h-[150px] rounded-full' />
                </div>
                <h1 className='mt-4 mb-2 text-xl font-bold text-center'>MOSES ONOWENON</h1>
                <p className='px-[20px] mb-4 text-center font-semibold'>
                INTERN 21'22
                </p>
                <p className='px-[20px] mb-4 text-center '>
                The Rice 360 internship has opened my mind to a world of opportunities and has shown me ways to efficiently apply my knowledge in medical science in solving problems.   </p>
            </div>
            <div className='bg-white border border-black rounded-lg w-[310px] mosses1 '>
                <div className='flex justify-center mt-7'>
                <img src={Ayodeji} alt="" className='w-[150px] h-[150px] rounded-full' />
                </div>
                <h1 className='mt-4 mb-2 text-xl font-bold text-center'>AYODEJI OYELAKIN</h1>
                <p className='px-[20px] mb-4 text-center font-semibold'>
                INTERN 22'23
                </p>
                <p className='px-[20px] mb-4 text-center '>
                The rice internship was a really exciting one. the team based projects helped me learn how to work with other people. I'm really grateful to have been part of the first cohort.

</p>
            </div>
            </div>
        </div>
        <div className=" justify-center  bg-[#fed393] pb-[50px] pt-[20px] bottom-0 right-0 border-b-4 border-l-4 rounded-tl-full">
            <div>
            <div className="md:flex justify-center md:space-x-8 ">
            <div className='bg-white border border-black rounded-lg w-[310px] rahmat'>
                <div className='flex justify-center mt-7'>
                <img src={Samuel} alt="" className='w-[150px] h-[150px] rounded-full' />
                </div>
                <h1 className='mt-4 mb-2 text-xl font-bold text-center'>SAMUEL AKINREMI</h1>
                <p className='px-[20px] mb-4 text-center font-semibold'>
                INTERN 22'23
                </p>
                <p className='px-[20px] mb-4 text-center '>
                This internship has exposed me to the endless opportunities that are available in the engineering field and how I can impact the health situation of Nigeria for good through innovation

</p>
            </div>            
            <div className='bg-white border border-black rounded-lg w-[310px] mosses'>
                <div className='flex justify-center mt-7'>
                <img src={Emma} alt="" className='w-[150px] h-[150px] rounded-full' />
                </div>
                <h1 className='mt-4 mb-2 text-xl font-bold text-center'>EMMANUEL AWORESAN
</h1>
                <p className='px-[20px] mb-4 text-center font-semibold'>
                INTERN 22'23
                </p>
                <p className='px-[20px] mb-4 text-center '>
                Intening at UNILAG Design Studio has really motivated me to passionately grow the healthcare of Nigeria using cost effective locally made materials to achieving effective results. Cheers

        </p>
            </div>
            <div className='bg-white border border-black rounded-lg w-[310px] mosses'>
                <div className='flex justify-center mt-7'>
                <img src={Eniola} alt="" className='w-[150px] h-[150px] rounded-full' />
                </div>
                <h1 className='mt-4 mb-2 text-xl font-bold text-center'>ENIOLA ALEX</h1>
                <p className='px-[20px] mb-4 text-center font-semibold'>
                INTERN 22'23
                </p>
                <p className='px-[20px] mb-4 text-center '>
                The UNILAG design studio pulses with creativity and collaboration, echoing with the sounds of innovation. Within its vibrant walls, diverse ideas intertwine, fostering a dynamic environment. A testament to UNILAG's commitment, the studio stands as a hub shaping the future of design.             </p>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Review