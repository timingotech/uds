import React from 'react';
import UnilagLogo from '../images/UnilagLogo.jfif'

const AboutPage = () => {
  return (
    <div className='bg-[#efefef]'>
    <div className="container py-8 mx-auto bg-[#efefef]">
      <h1 className="mb-8 text-4xl font-bold text-center">About UNILAG Design Studio</h1>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <div className="md:w-1/2">
          <img src={UnilagLogo} alt="UNILAG Design Studio" className="w-full" />
        </div>
        <div className="md:w-1/2 px-4">
          <p className="text-lg">UNILAG Design Studio is a creative hub located in the heart of the University of Lagos campus. We specialize in providing design solutions for various projects, including branding, web design, graphic design, and more.</p>
          <p className="mt-4 text-lg">Our team consists of talented designers, developers, and creatives who are passionate about delivering high-quality work that exceeds our clients' expectations. We collaborate closely with our clients to understand their needs and goals, ensuring that we produce designs that are both visually appealing and functional.</p>
          <p className="mt-4 text-lg">At UNILAG Design Studio, creativity and innovation are at the core of everything we do. Whether you're a student looking to enhance your skills or a business in need of professional design services, we're here to help you bring your ideas to life.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;
