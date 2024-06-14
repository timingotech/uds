
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom"; // Assuming React Router is used for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSave, faShare, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';
import BlogPost from "./BlogPost"; // Import the BlogPost component

const Blog = ({ blogs }) => {
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs.slice(0, 15));

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = blogs.filter(blog => blog.category.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredBlogs(filtered);
  };
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);


  return (
    <div className="">
    {/* Side Navigation Bar */}
   
    <div className="">

    <div className=" py-8 mx-10">
      <div className="flex items-center justify-center mb-4 ">
        <input type="text" placeholder="Search by category..." value={search} onChange={handleSearch} className="px-4 py-2 mr-2 border border-gray-300 rounded-md" />
        <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          Search
        </button>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div key={blog.id} className="p-4 bg-white rounded-lg shadow-md">
              <Link to={`/blog/${blog.id}`} className="block">
                <h2 className="text-[18px] font-semibold mb-2">{blog.title}</h2>
                <img src={blog.image} alt="Blog Image" className="mb-4 rounded-lg h-[200px] w-full" />
              </Link>
              <p>{blog.content.substring(0, 100)}...</p>
              
              {/* Additional details */}
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <p className="mr-4 text-sm text-gray-500">{blog.author}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-500">
                    <FontAwesomeIcon icon={faClock} /> {blog.readingTime}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
                <div className="flex items-center">
                  <button className="mr-2">
                    <FontAwesomeIcon icon={faSave} />
                  </button>
                  <button className="mr-2">
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found for "{search}"</p>
          )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Blog;
