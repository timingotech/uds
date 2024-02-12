import React from 'react'
import {useRef  } from 'react';
import emailjs from 'emailjs-com';

const Enroll = () => {
 
  //email sending 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bt2q0z7', 'template_kwl0ojh', form.current, 'Yz16g8qPG_-f9ArRT')
      .then((result) => {
          console.log(result.text);
          window.alert('Email sent successfully! We will get back to you as soon as possible.');
          window.location.reload();
      }, (error) => {
          console.log(error.text);
          window.alert('Failed to send email. Please try again later.');
      });
    };
  
  return (
    <div>
    <div className='bg-[white] pb-5'>
    <div className="flex justify-center ">
      </div> 
          <h2 className="mt-4 mb-4 text-2xl font-bold text-center">Leave a <span className='text-[#] '>Message </span></h2>
          <div className='flex justify-center px-4'>
          <form ref={form} onSubmit={sendEmail}  className="space-y-4 w-[500px] ">
            <div>
              <label htmlFor="name" className="block mb-1 text-lg font-medium ">Name:</label>
              <input type="text" id="name" name="user_name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md bg-[#eaeaec]" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-lg font-medium">Email:</label>
              <input type="email" id="email" name="user_email" placeholder="Your email" className="w-full px-3 py-2 border rounded-md bg-[#eaeaec]" />
            </div>
            <div>
              <label htmlFor="whyus" className="block mb-1 text-lg font-medium">Reason</label>
              <input type="text" id="whyus" name="whyus" placeholder="Why do you want to join us?" className="w-full px-3 py-2 border rounded-md bg-[#eaeaec]" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-lg font-medium">Why you?</label>
              <textarea id="message" name="message" placeholder="Tell us about you and why we should select you?" className="w-full px-3 py-2 border rounded-md bg-[#eaeaec]"></textarea>
            </div>
            <button type="submit" className="bg-[#cc9c53] text-white mt-4 px-8 py-2 rounded font-bold">Send Message</button>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Enroll