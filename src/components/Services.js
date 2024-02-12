import React from 'react'
import Additive from '../images/Additive.jpg'
import AiMl from '../images/AiMl.jpg'
import ElectronicDesign from '../images/ElectronicDesign.webp'
import MechanicalFabrication from '../images/MechanicalFabrication.jpg'
import Substractive from '../images/Substractive.jfif'
import Project from '../images/Project.jpg'

const Services = () => {
  return (
    <div>
        <div className="text-2xl font-bold py-5 text-center mb-9 bg-[#fed393]">
            <h1>Our Services</h1>
        </div>
        <div className="md:flex justify-center text-center mx-[10px]">
            <p className='md:w-[700px] font-semibold'>The UNILAG Design Studio prides itself on providing an extensive array of services that collectively contribute to the dynamic and comprehensive field of design and engineering. Among the diverse offerings, the studio incorporates the latest advancements and traditional techniques to meet the needs of various projects:

</p>
        </div>
        <div className='service bg-[#fed393]'>
        <div className=' services'>
        <div className="md:flex justify-center pt-10 md:mx-auto pb-9 mt-9 rounded-xl ">
                <div>
                    <img src={Additive} alt="" className='w-[350px] rounded'/>
                </div>
                <div className='md:ml-[100px]'>
                    <h1 className="text-2xl font-bold">Additive Manufacturing:</h1>
                    <p className='w-[350px] font-semibold mt-4'>  Leveraging state-of-the-art 3D printing and additive manufacturing technologies, the studio provides a platform for the realization of innovative concepts. Through additive manufacturing, intricate designs can be rapidly prototyped and produced, facilitating a swift and efficient development process.</p>
                </div>
            </div>
            <div className="md:flex justify-center pt-5 mx-auto rounded-xl pb-9 ">
            <div>
                    <img src={AiMl} alt="" className='md:hidden w-[350px] h-[250px] rounded'/>
                </div>
                <div className='md:mr-[100px]'>
                    <h1 className="text-2xl font-bold">AI and ML Solutions:</h1>
                    <p className='w-[350px] font-semibold mt-4'> In recognition of the transformative potential of artificial intelligence (AI) and machine learning (ML), the UNILAG Design Studio incorporates these cutting-edge technologies into its services. By leveraging algorithms and data-driven insights, the studio optimizes design processes, enhances decision-making, and introduces intelligent solutions across the creative and engineering spectrum.

</p>
                </div>
                <div>
                    <img src={AiMl} alt="" className='w-[350px] h-[250px] rounded small'/>
                </div>
            </div>
            <div className="md:flex justify-center pt-5 mx-auto rounded-xl pb-9 ">
                <div>
                    <img src={Substractive} alt="" className='w-[350px] rounded'/>
                </div>
                <div className='md:ml-[100px]'>
                    <h1 className="text-2xl font-bold"> Subtractive Manufacturing:</h1>
                    <p className='w-[350px] font-semibold mt-4'>Complementing modern additive techniques, the studio seamlessly integrates subtractive manufacturing processes. This involves employing CNC machining and milling to precisely shape and carve materials, ensuring the realization of intricate designs with the utmost accuracy and attention to detail.

</p>
                </div>
            </div>
            <div className="md:flex justify-center pt-5 mx-auto rounded-xl pb-9 ">
            <div>
                    <img src={Project} alt="" className='w-[350px] rounded md:hidden'/>
                </div>
                <div className='md:mr-[100px] '>
                    <h1 className="text-2xl font-bold">Project Consultation:</h1>
                    <p className='w-[350px] font-semibold mt-4'>The studio serves as a collaborative partner through its project consultation services. Experts within the UNILAG Design Studio work closely with clients, students, and professionals to refine project goals, troubleshoot challenges, and provide valuable insights at every stage of the design and engineering process. This collaborative approach ensures that projects are not only successful but also aligned with the highest standards of creativity and functionality.

</p>
                </div>
                <div>
                    <img src={Project} alt="" className='w-[350px] rounded small'/>
                </div>
            </div>
            <div className="md:flex justify-center pt-5 mx-auto rounded-xl pb-9 ">
                <div>
                    <img src={MechanicalFabrication} alt="" className='w-[350px] rounded'/>
                </div>
                <div className=' md:ml-[100px]'>
                    <h1 className="text-2xl font-bold">Mechanical Fabrication:
</h1>
                    <p className='w-[350px] font-semibold mt-4'> Proficiency in mechanical fabrication is a cornerstone of the studio's capabilities. The UNILAG Design Studio excels in the construction and assembly of mechanical components, employing a diverse range of materials and techniques to meet project specifications while adhering to rigorous quality standards.

</p>
                </div>
            </div>
            <div className="md:flex justify-center pt-5 mx-auto rounded-xl pb-9 ">  
            <div>
                    <img src={ElectronicDesign} alt="" className='w-[350px] rounded md:hidden'/>
                </div>             
                <div className='md:mr-[100px]'>
                    <h1 className="text-2xl font-bold">Electronic Design:</h1>
                    <p className='w-[350px] font-semibold mt-4'> The studio's expertise extends to electronic design, covering the development of circuits, systems, and electronic components. From prototyping to testing and final implementation, the UNILAG Design Studio navigates the complexities of electronic design to provide innovative solutions tailored to diverse applications.

</p>
                </div>
                <div>
                    <img src={ElectronicDesign} alt="" className='w-[350px] rounded small'/>
                </div>
            </div>
            <div className="md:flex justify-center pt-5 mx-auto rounded-xl pb-9 ">
                <div>
                    <img src={ElectronicDesign} alt="" className='w-[350px] rounded'/>
                </div>
                <div className='md:ml-[100px]'>
                    <h1 className="text-2xl font-bold">General Engineering Design:</h1>
                    <p className='w-[350px] font-semibold mt-4'> The UNILAG Design Studio adopts a holistic approach to engineering design, encapsulating a broad spectrum of disciplines. This includes structural, electrical, and mechanical engineering, ensuring a comprehensive and integrated response to the multifaceted challenges posed by diverse design projects.

</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services