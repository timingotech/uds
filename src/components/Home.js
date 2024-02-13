import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Home = () => {
    //email sending 
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qriz1ox', 'template_xe0m2br', form.current, 'tF72W2sKqDNgJhYEn')
        .then((result) => {
            console.log(result.text);
            window.alert('Email sent successfully!');
            window.location.reload();
        }, (error) => {
            console.log(error.text);
            window.alert('Failed to send email. Please try again later.');
        });
      };
    //newsletter sending 
      const newsLetter = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qriz1ox', 'template_dw99i57', form.current, 'tF72W2sKqDNgJhYEn')
          .then((result) => {
              console.log(result.text);
              window.alert('Successfully!');
              window.location.reload();
          }, (error) => {
              console.log(error.text);
              window.alert('Failed to send email. Please try again later.');
          });
        };
  

  return (
    <div>
        <div className='bgimage'>
        <div className='mt-[110px] text-center content'>
            <h1 className='text-6xl font-bold'>UNILAG DESIGN <br /> STUDIO</h1>
            <p className='mt-12 text-2xl font-semibold'>A home of innovators</p>
            <button className='mt-12 bg-[#f5b960] px-3 py-3 border-2 border-black rounded-md font-bold'>
                <Link to="/services">
                    Explore Innovative Designs
                </Link>
            </button>
        </div>
        </div>
        <div className='flex justify-center'>
            <div className="py-10 about">
                <h1 className='text-4xl font-bold text-center'>About Us</h1>
                <p className='md:px-[180px] px-[20px] mt-9 font-semibold'>UNILAG Design Studio emerged through a dynamic collaboration between the University of Lagos and RICE360 Global Institute, based in Houston, Texas, USA. This institute is renowned for pioneering innovative research and education programs that actively involve students in the realm of creativity and exploration. The partnership brings forth a unique space – the UNILAG Design Studio – where academic excellence intersects with a commitment to fostering innovation and empowering the next generation of creative minds.</p>
                <div className='text-center mt-11'>
                <Link to="/services" className='inline-block bg-[#fed393] px-3 py-3 border-2 border-black rounded-md font-bold'>
                    Discover Our Journey
                </Link>
                </div>
            </div>
            </div>
            
        <div className="md:flex justify-center vision-mission bg-[#fed393] md:px-52 py-10 md:space-x-10"> 
            <div className='bg-[#eed1a7] border border-black rounded-lg w-[310px] mission '>
                <h1 className='my-4 text-2xl font-bold text-center'>Our Mission</h1>
                <p className='px-[20px] mb-4'>
                    To provide a conducive innovation space, where staff, students and the general community can interact and join hands to solve problems and develop the world.
                </p>
            </div>
            <div className='bg-[#eed1a7] border border-black rounded-lg w-[310px] mission'>
                <h1 className='my-4 text-2xl font-bold text-center'>Our Vision</h1>
                <p className='px-[20px] mb-4'>
                    To become a globally competitive institution-based Technology Hub in pursuit of excellence in innovation and idea translation to solve societal problems                    
                </p>
            </div>
        </div>
        <div className='bg-[#efefef]'>
              <h1 className='font-bold text-4xl ml[-200px] text-center pt-6'>
              <span className=''>Connect </span>
               With Us</h1>

      <div className="flex flex-col gap-8 md:px-[70px]  py-20 md:flex-row " >
      {/* Leave a Message Form */}
      
      <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 formhome">
        <h2 className="mb-4 text-xl font-bold">Leave a Message for Us</h2>
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-gray-700">Name</label>
          <input type="text" id="name" name="user_name" className="w-full px-3 py-2 border-none rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="user_email" className="block text-gray-700">Email</label>
          <input type="email" id="email" name="user_email" className="w-full px-3 py-2 border-none rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea id="message" name="message" required className="w-full px-3 py-2 border-none rounded-md" rows="4"></textarea>
        </div>
        <button type="submit" value="Send" className="bg-[#fed393] text-white mt-4 px-8 py-2 rounded font-bold">Submit</button>
      </form> 

      {/* Join Newsletter Form */}
      <form ref={form} onSubmit={newsLetter} className="w-full md:w-1/2 right-to-left formhome">
        <h2 className="mb-4 text-xl font-bold">Stay up to date</h2>
        <div className="mb-4">
          <label htmlFor="newsletterEmail" className="block text-gray-700">Email</label>
          <input type="email" id="newsletterEmail" name="user_email" className="w-full px-3 py-2 border-none rounded-md" />
        </div>
        <button type="submit" value="Send" className="bg-[#fed393] text-white mt-4 px-8 py-2 rounded font-bold">Subscribe</button>
      </form>
    </div>
    </div>

    </div>
  )
}

export default Home