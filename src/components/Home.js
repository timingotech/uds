import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Rice from '../images/Rice360.jpeg';
import Nest from '../images/Nest360.png'
import Ui from '../images/UIdesignstudio.jpeg'
import Ayodeji from '../images/Ayodeji.jpg'
import Emma from '../images/Emma.jpg'
import Eniola from '../images/Eniola.jpg'
import Samuel from '../images/Samuel.jpg'
import Mosees from '../images/Mosees.jpg'
import Rahimat from '../images/Rahimat.jpg'
import Group1 from '../images/Group15.png'
import Group2 from '../images/Group17.png'
import Group3 from '../images/Group18.png'
import Group4 from '../images/Group19.png'
import Group5 from '../images/Group20.png'
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

  const [reviews] = useState([
    // {
    //   name: 'RAHAMAT MUFTAUDEEN',
    //   position: 'INTERN 22\'23',
    //   review: 'The internship taught me how to apply core engineering principles for the understanding and advancement of medical and healthcare technologies. I have also learnt to provide solution to some specific problems in medicine.',
    //   image: Rahimat
    // },
    {
      name: 'MOSES ONOWENON',
      position: 'INTERN 21\'22',
      review: 'The Rice 360 internship has opened my mind to a world of opportunities and has shown me ways to efficiently apply my knowledge in medical science in solving problems.',
      image: Mosees
    },
    {
      name: 'AYODEJI OYELAKIN',
      position: 'INTERN 22\'23',
      review: 'The rice internship was a really exciting one. the team based projects helped me learn how to work with other people. I\'m really grateful to have been part of the first cohort.',
      image: Ayodeji
    },
    {
      name: 'SAMUEL AKINREMI',
      position: 'INTERN 22\'23',
      review: 'This internship has exposed me to the endless opportunities that are available in the engineering field and how I can impact the health situation of Nigeria for good through innovation.',
      image: Samuel
    },
    // {
    //   name: 'EMMANUEL AWORESAN',
    //   position: 'INTERN 22\'23',
    //   review: 'Interning at UNILAG Design Studio has really motivated me to passionately grow the healthcare of Nigeria using cost effective locally made materials to achieving effective results. Cheers!',
    //   image: Emma
    // },
    {
      name: 'ENIOLA ALEX',
      position: 'INTERN 22\'23',
      review: 'The UNILAG design studio pulses with creativity and collaboration, echoing with the sounds of innovation. Within its vibrant walls, diverse ideas intertwine, fostering a dynamic environment. A testament to UNILAG\'s commitment, the studio stands as a hub shaping the future of design.',
      image: Eniola
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  
  return (
    <div>
         <div className='bgimage'>
                <div className={`mt-[80px] md:ml-[100px] ml-7 md:flex  content ${textVisible ? 'slide-up' : ''}`}>
                  <div className="text-left">
                  <h1 className='md:text-6xl text-4xl font-bold '>UNILAG DESIGN <br /> STUDIO</h1>
                    <p className='mt-12 text-2xl md:w-[500px]'><i> Pioneering innovative research and education programs that actively involve students in the realm of creativity and exploration</i></p>
                    <button className='px-3 py-3 mt-12 font-bold  text-white border-2 rounded-md bg-[#451010] '>
                        <Link to="/gallery">
                            Explore Innovative Designs
                        </Link>
                    </button>
                  </div>
                    <div className="ml-[390px] mt-[-80px] ">
                      <img src={Group5} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className={`py-10 about ${aboutVisible ? 'fade-in-right' : ''}`}>
                    <h1 className='md:text-4xl text-2xl font-bold text-left '>We offer the best services</h1>
                    <div className='text-center mt-11'>
                      <div className="md:flex justify-center space-x-6 mx-auto">
                        <div className="">
                        <img src={Group1} alt=""  className='w-[300px]'/>
                        <h1 className='w-[260px] font-bold mt-[-100px] mb-16'>Artificial Intelligence & Machine Learning</h1>
                        </div>
                        <div className="">
                        <img src={Group2} alt=""  className='w-[300px]'/>
                        <h1 className='w-[260px] font-bold mt-[-100px] mb-16'>Mechanical Fabrication</h1>
                        </div>
                        <div className="">
                        <img src={Group3} alt=""  className='w-[300px]'/>
                        <h1 className='w-[260px] font-bold mt-[-100px] mb-16'>Electronic Design</h1>
                        </div>
                      </div>
                        <Link to="/code" className={`inline-block px-3 py-3 border-2 border-black rounded-md font-bold mb-[-20px] mt-3 ${aboutVisible ? 'fade-in-bottom' : ''}`}>
                            See More...
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center mx-[40px] shadow-2xl rounded-lg mb-5">
              <h1 className='my-4 text-4xl font-bold'>Our Partners</h1>
            <div className=" flex justify-center space-x-7 partners">
              <img className='w-[300px] h-[100px]' src={Rice} alt="" />
              <img className='w-[300px] h-[100px]' src={Nest} alt="" />
              <img className='w-[200px] h-[200px]' src={Ui} alt="" />
            </div>
            </div>
            <div className="flex justify-center text-center space-x-[150px] pb-[100px] pt-[100px] bg-[#FCF4F4]">
              <div className='mt-[-50px] pageimage'>
                <img src={Group4} alt="" />
              </div>
              <div className="md:mt-[40px] mt-[-80px]">
                <h1 className='mb-6 md:text-5xl text-3xl font-bold text-left'>About Us</h1>
                <p className='w-[350px] text-left text-lg'>
                UNILAG Design Studio emerged through a dynamic collaboration between the university of Lagos and RICE360 Global Institute, based in Houston, Texas, USA. This institute is renowned for pioneering innovative research and education programs that actively involve students in creativity and exploration.
                </p>
              </div>
            </div>
            <div className="py-1 bg-gray-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Reviews & Testimonials
          </p>
        </div>
        <div className="max-w-lg mx-auto mt-2 ">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-[270px]  flex justify-center">
              <img className="absolute object-cover h-[250px] rounded-full w-[250px]" src={reviews[currentIndex].image} alt={reviews[currentIndex].name} />
            </div>
            <div className="relative p-8 bg-white">
              <div className="text-lg">
                <p className="text-gray-900">{reviews[currentIndex].review}</p>
              </div>
              <div className="mt-6">
                <p className="text-base font-medium text-gray-900">{reviews[currentIndex].name}</p>
                <p className="text-base font-medium text-gray-500">{reviews[currentIndex].position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            <div ref={partnershipsRef} className="hidden mt-8 mb-8 text-3xl font-bold text-center fade-in md:text-4xl">
                Our Trusted <span className="body-link ">Partnerships</span>
            </div>
  <div className="hidden marquee-container">
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
        <div className='bg-[#FCF4F4]'>
              <h1 className='font-bold text-4xl ml[-200px] text-center pt-6'>
              <span className='text-gray-500 '>Connect </span>
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
        <button type="submit" value="Send" className="px-8 py-2 mt-4 font-bold text-white bg-gray-500 border-2 rounded">Submit</button>
      </form> 

      {/* Join Newsletter Form */}
      <form ref={form} onSubmit={newsLetter} className="w-full md:w-1/2 right-to-left formhome">
        <h2 className="mb-4 text-xl font-bold">Stay up to date</h2>
        <div className="mb-4">
          <label htmlFor="newsletterEmail" className="block text-gray-700">Email</label>
          <input type="email" id="newsletterEmail" name="user_email" className="w-full px-3 py-2 border-none rounded-md" />
        </div>
        <button type="submit" value="Send" className="px-8 py-2 mt-4 font-bold text-white bg-gray-500 border-2 rounded">Subscribe</button>
      </form>
    </div>
    </div>

    </div>
  )
}

export default Home