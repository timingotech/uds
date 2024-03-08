import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Rice from '../images/Rice360.jpeg';
import Nest from '../images/Nest360.png'
import Ui from '../images/UIdesignstudio.jpeg'

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

    // State to control the animation
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        // Use a timeout to delay the animation
        const timer = setTimeout(() => {
            setTextVisible(true);
        }, 1000); // Adjust the delay as needed

        // Clear the timeout to prevent memory leaks
        return () => clearTimeout(timer);
    }, []);

    // State to control the animation
    const [aboutVisible, setAboutVisible] = useState(false);
    const [missionVisible, setMissionVisible] = useState(false);
    const [visionVisible, setVisionVisible] = useState(false);
    
    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setAboutVisible(true);
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Adjust the threshold as needed

        sectionObserver.observe(document.querySelector('.about'));

        // Clean up the observer
        return () => sectionObserver.disconnect();
    }, []);

    useEffect(() => {
      const handleScroll = () => {
          const missionSection = document.getElementById('mission');
          const visionSection = document.getElementById('vision');
          const scrollPosition = window.scrollY + window.innerHeight;

          if (missionSection && scrollPosition > missionSection.offsetTop && !missionVisible) {
              setMissionVisible(true);
          }

          if (visionSection && scrollPosition > visionSection.offsetTop && !visionVisible) {
              setVisionVisible(true);
          }
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup function to remove the event listener
      return () => window.removeEventListener('scroll', handleScroll);
  }, [missionVisible, visionVisible]);

  var partnershipsRef = useRef(null);

  useEffect(function() {
      var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  entry.target.classList.add('fade-in');
              }
          });
      });

      observer.observe(partnershipsRef.current);

      // Clean up the observer
      return function() {
          observer.disconnect();
      };
  }, []);
// State for managing background images
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [Rice, Nest, Ui];

  // Function to change background image
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000); // Change background every 4 seconds

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
         <div className='bgimage'>
                <div className={`mt-[110px] text-center content ${textVisible ? 'slide-up' : ''}`}>
                    <h1 className='text-6xl font-bold'>UNILAG DESIGN <br /> STUDIO</h1>
                    <p className='mt-12 text-2xl font-semibold'>A home of innovators</p>
                    <button className='px-3 py-3 mt-12 font-bold border-2 border-black rounded-md body-button'>
                        <Link to="/services">
                            Explore Innovative Designs
                        </Link>
                    </button>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className={`py-10 about ${aboutVisible ? 'fade-in-right' : ''}`}>
                    <h1 className='text-4xl font-bold text-center'>About Us</h1>
                    <p className='md:px-[180px] px-[20px] mt-9 font-semibold'>UNILAG Design Studio emerged through a dynamic collaboration between the University of Lagos and RICE360 Global Institute, based in Houston, Texas, USA. This institute is renowned for pioneering innovative research and education programs that actively involve students in the realm of creativity and exploration. The partnership brings forth a unique space – the UNILAG Design Studio – where academic excellence intersects with a commitment to fostering innovation and empowering the next generation of creative minds.</p>
                    <div className='text-center mt-11'>
                        <Link to="/services" className={`inline-block body-button px-3 py-3 border-2 border-black rounded-md font-bold ${aboutVisible ? 'fade-in-bottom' : ''}`}>
                            Discover Our Journey
                        </Link>
                    </div>
                </div>
            </div>
            <div className="justify-center py-10 md:flex vision-mission backgroundcontact md:px-52 md:space-x-10">
                <div id="mission" className={`bg-[#eed1a7] border border-black rounded-lg w-[310px] mission ${missionVisible ? 'fade-in-right' : ''}`}>
                    <h1 className='my-4 text-2xl font-bold text-center body-link'>Our Mission</h1>
                    <p className='px-[20px] mb-4'>
                        To provide a conducive innovation space, where staff, students and the general community can interact and join hands to solve problems and develop the world.
                    </p>
                </div>
                <div id="vision" className={`bg-[#eed1a7] border border-black rounded-lg w-[310px] mission ${visionVisible ? 'fade-in-left' : ''}`}>
                    <h1 className='my-4 text-2xl font-bold text-center body-link '>Our Vision</h1>
                    <p className='px-[20px] mb-4'>
                        To become a globally competitive institution-based Technology Hub in pursuit of excellence in innovation and idea translation to solve societal problems
                    </p>
                </div>
            </div>
            <div ref={partnershipsRef} className="mt-8 mb-8 text-3xl font-bold text-center fade-in md:text-4xl">
                Our Trusted <span className="body-link ">Partnerships</span>
            </div>
  <div className="marquee-container">
    <div className="marquee">
      <img src={Rice} alt="" className='md:w-[100px]  mr-8' />
      <img src={Nest} alt="" className='w-48 mr-8' />
      <img src={Ui} alt="" className='w-48 mr-8' />
      <img src={Rice} alt="" className='mr-8 md:w-48' />
      <img src={Nest} alt="" className='w-48 mr-8' />
      <img src={Ui} alt="" className='w-48 mr-8' />
      <img src={Rice} alt="" className='mr-8 md:w-48' />
      <img src={Nest} alt="" className='w-48 mr-8' />
      <img src={Ui} alt="" className='w-48 mr-8' />
      <img src={Rice} alt="" className='mr-8 md:w-48' />
      <img src={Nest} alt="" className='w-48 mr-8' />
      <img src={Ui} alt="" className='w-48 mr-8' /><img src={Rice} alt="" className='mr-4 md:w-48' />
      <img src={Nest} alt="" className='w-48 mr-8' />
      <img src={Ui} alt="" className='w-48 mr-8' />

    </div>
  </div>
        <div className='backgroundcontact'>
              <h1 className='font-bold text-4xl ml[-200px] text-center pt-6'>
              <span className='body-link '>Connect </span>
               With Us</h1>

      <div className="flex flex-col gap-8 md:px-[70px]  py-20 md:flex-row " >
      {/* Leave a Message Form */}
      
      <form ref={form} onSubmit={sendEmail} className={` w-full md:w-1/2 formhome rounded-lg w-[310px] mission ${missionVisible ? 'fade-in-right' : ''}`}>
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
        <button type="submit" value="Send" className="px-8 py-2 mt-4 font-bold text-white border-2 border-black rounded bodyy-button">Submit</button>
      </form> 

      {/* Join Newsletter Form */}
      <form ref={form} onSubmit={newsLetter} className="w-full md:w-1/2 right-to-left formhome">
        <h2 className="mb-4 text-xl font-bold">Stay up to date</h2>
        <div className="mb-4">
          <label htmlFor="newsletterEmail" className="block text-gray-700">Email</label>
          <input type="email" id="newsletterEmail" name="user_email" className="w-full px-3 py-2 border-none rounded-md" />
        </div>
        <button type="submit" value="Send" className="px-8 py-2 mt-4 font-bold text-white border-2 border-black rounded bodyy-button">Subscribe</button>
      </form>
    </div>
    </div>

    </div>
  )
}

export default Home