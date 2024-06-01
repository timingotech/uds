import React from 'react'
import Additive from '../images/Additive.jpg'
import AiMl from '../images/AiMl.jpg'
import ElectronicDesign from '../images/ElectronicDesign.webp'
import MechanicalFabrication from '../images/MechanicalFabrication.jpg'
import Substractive from '../images/Substractive.jfif'
import Totalstudio from '../images/Totalimage-removebg.png'

const Services = () => {
  return (
    <div>
      
        <div className=" py-5 ml-[100px] mt-7 mb-9 bg-[]">
            <h1 className='text-4xl font-bold'>Our Services.</h1>
            <p className='w-[680px] h-full font-semibold mt-3'>We provide AI/ML solutions, embedded systems, mechanical fabrications, laser cutting, lathe machining, and 3D printing services. All our offerings are supported by comprehensive training programs.</p>
        </div>
        <div className=" mt-[-230px] mb-9 flex justify-between w-[1400px] mr-[]">
            <img src={Totalstudio} alt="" className='w-[1400px]'/>
        </div>
    </div>
  )
}

export default Services