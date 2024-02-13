import React from 'react'
import {useRef  } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
 
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
  
  return (
    <div>
      <div className='bg-[#eaeaec]' >
      <div className="container px-[58px] py-3 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center hometext-gradient"><span className='text-[#] '>Contact </span> Us</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2" >
        <div  >
          <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
          <p className="mb-4">
            We'd love to hear from you! Feel free to reach out to us with any questions, inquiries, or partnership opportunities.
            Our team is ready to assist you.
          </p>
          <p className="mb-4">
            Contact us via email or phone:
          </p>
          <ul className="ml-6 list-disc">
            <li>Email: unilagds@gmail.com</li>
            <li>Phone: +1234567890</li>
          </ul>
        </div>

        <div >
          <h2 className="mb-4 text-2xl font-semibold">Visit Us</h2>
          <p className="mb-4">
            Come and visit our office! We are conveniently located and would be delighted to meet you in person.
          </p>
          <p className="mb-4">
            UNILAG Design Studio Headquarters:
          </p>
          <address className="not-italic">
            3rd Floor Systems Engineering Building,<br />
            UNILAG, Lagos State, 10001,<br />
            Nigeria.
          </address>
        </div>
      </div>
    </div>
    </div>
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
              <label htmlFor="message" className="block mb-1 text-lg font-medium">Message:</label>
              <textarea id="message" name="message" placeholder="Your message" className="w-full px-3 py-2 border rounded-md bg-[#eaeaec]"></textarea>
            </div>
            <button type="submit" className="bg-[#cc9c53] text-white mt-4 px-8 py-2 rounded font-bold">Send Message</button>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Contact