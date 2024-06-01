import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import UnilagLogo from '../images/UnilagLogo.jfif'

const Footer = () => {
  const form = useRef(null); // Define a ref for the form

  // Newsletter sending
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
    <footer className='bg-[#263238] md:flex md:px-[50px] px-[40px] py-10'>
      <div className="text-white">
        <div className="flex mb-8">
        <img src={UnilagLogo} alt="" width={50}/>
        <h1 className='ml-6 text-2xl font-bold '>UNILAG Design Studio</h1>
        </div>
        <p className='mb-5 md:w-[370px]'> Pioneering innovative research and education programs that actively involve students in the realm of creativity and exploration. </p>
        <p className='mb-5 copyright'>Copyright &copy; 2023 Timingotech. <br />All rights reserved.</p>
        <Link to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='mr-6 linkdesktop'>
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <a href="https://www.instagram.com/unilag_designstudio" target="_blank" rel="noopener noreferrer" className='mr-6 linkdesktop'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.x.com/Unilag_Design" target="_blank" rel="noopener noreferrer" className='mr-6 linkdesktop'>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://www.linkedin.com/company/unilag-design-studio" target="_blank" rel="noopener noreferrer" className='linkdesktop'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className='md:flex footersecond '>
      <div className="text-white md:space-x-6 md:ml-[220px]">
        <h1 className="font-bold text-md md:ml-[22.9px] ">Company</h1>  
                <p className=''>
            <Link to='/' className=''>
              Home
            </Link>
          </p>
          <p className=''>
            <Link to='/reviews' className=''>
            Reviews
            </Link>
          </p>
          <p className=''>
            <Link to='/services' className=''>
            Services
            </Link>
          </p>
          <p className=''>
            <Link to='/about' className=''>
              About
            </Link>
          </p>
          <p className=''>
            <Link to='/contact' className=''>
              Contact
            </Link>
          </p>
        
      </div>
      <div className="text-white space-x-6 ml-[120px] support">
        <h1 className="font-bold text-md ml-[22.9px] ">Support</h1>  
                <p className=''>
            <Link to='/contact' className=''>
              Help Center
            </Link>
          </p>
          <p className=''>
            <Link to='/enroll' className=''>
            Enroll Now
            </Link>
          </p>
          <p className=''>
            <Link to='/pricing' className=''>
            Legal
            </Link>
          </p>
          <p className=''>
            <Link to='/Community' className=''>
              Privacy Policy 
            </Link>
          </p>
          <p className=''>
            <Link to='/contact' className=''>
              Status
            </Link>
          </p>
        
      </div>
      </div>
      
      <div className='bg-[#263238] '>
      <form ref={form} onSubmit={newsLetter} className="md:ml-[60px] ">
        <h2 className="mb-4 font-bold text-white text-md">Stay up to date</h2>
        <div className="mb-1">
          <input type="email" id="newsletterEmail" placeholder='Your email address' name="user_email" className="w-full px-3 py-2 border-none rounded-md" />
        </div>
        <button type="submit" value="Send" className="bg-[#fed393] text-white mt-4 px-4 py-1 rounded font-bold">Subscribe</button>
      </form>
    </div>
    <div className="text-white mt-7">
        <Link to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='mr-6 text-2xl md:hidden '>
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <a href="https://www.instagram.com/unilag_designstudio" target="_blank" rel="noopener noreferrer" className='mr-6 text-2xl md:hidden'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://x.com/Unilag_Design" target="_blank" rel="noopener noreferrer" className='mr-6 text-2xl md:hidden'>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://www.linkedin.com/company/unilag-design-studio" target="_blank" rel="noopener noreferrer" className='text-2xl md:hidden'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
                       <p className='mt-5 mb-5 text-center md:hidden'>Copyright &copy; 2024 Babcock Intern 24'. <br />All rights reserved.</p>

      </div>
      </footer>
  );
};

export default Footer;
