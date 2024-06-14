import React, { useState } from "react";
import { Link,useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faArrowRight, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faWatchmanMonitoring } from "@fortawesome/free-brands-svg-icons";
import BlogData from "./BlogData"; // Import blog data

const BlogPost = () => {
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { id } = useParams(); // Get the id parameter from the URL
  
  const blog = BlogData.find(blog => blog.id === parseInt(id)); // Assuming id is a number

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { title, author, date, readingTime, maincontent, image, twitter, image1, image2, image3, image4,image5, image6 } = blog; // Destructure properties from the blog object


  return (
    <div className="">
    
    <div className="my-10">
        <div className="mx-10">
        <h1 className="mb-4 md:text-5xl text-3xl font-bold md:mx-14 text-center">{title}</h1>
          <img src={image} alt={title} className="mx-auto mb-8 md:w-[700px] md:h-[400px] w-[700px] h-[250px]"  />
          <div className="flex md:space-x-14 justify-center mb-5 space-x-7 ">
          <img src={image1} className="md:w-[500px] md:h-[400px] w-[300px] h-[100px]"/>
          <img src={image2}className="md:w-[500px] md:h-[400px] w-[300px] h-[100px]" />
          </div>
          <div className="flex items-center mb-4">
            <p className="mr-4 text-sm text-gray-600">{author}</p>
            <p className="text-sm text-gray-600">
              <span className="mr-2">
                {date}
              </span>
              <span>
                <FontAwesomeIcon icon={faWatchmanMonitoring} /> {readingTime}
              </span>
            </p>
          </div>
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: blog.maincontent }} />
          <div className="flex md:space-x-14 justify-center space-x-7 mb-5 ">
          <img src={image3} className="md:w-[500px] md:h-[400px] w-[300px] h-[100px]"/>
          <img src={image4}className="md:w-[500px] md:h-[400px] w-[300px] h-[100px]" />
          </div>
          <div className="flex md:space-x-14 justify-center space-x-7 mb-5 ">
          <img src={image5} className="md:w-[500px] md:h-[400px] w-[300px] h-[100px]"/>
          <img src={image6} className="md:w-[500px] md:h-[400px] w-[300px] h-[100px]" />
          </div>
          {/* Add social media links */}
          <div className="mt-8">
            <p className="mb-2 text-lg font-semibold">Reporter: {author}</p>
            <div className="flex items-center">
              {/* Example icons */}
              <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-2xl text-[#6584d8] mr-4">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-500">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
