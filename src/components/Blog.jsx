import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import blog1 from '../assets/img/blog-1.jpg';
import blog2 from '../assets/img/blog-2.jpg';

const blogs = [
  {
    image: blog1,
    title: "The Future of Web Design",
    author: "",
    category: "",
    date: "",
    comments: "",
    description: "Explore the latest trends and technologies shaping the future of web design. Learn how to create user-friendly and visually appealing websites that stand out."
  },
  {
    image: blog2,
    title: "Top Mobile App Design Tips",
    author: "",
    category: "",
    date: "",
    comments: "",
    description: "Discover essential tips for designing mobile apps that offer a seamless user experience. From navigation to aesthetics, find out how to make your app a hit."
  }
];

const Blog = () => {
  return (
    <div className="blog bg-gray-900 py-20" id="blog">
      <div className="container mx-auto text-center px-6">
        <Parallax y={[-20, 20]} tagOuter="div">
          <motion.p 
            className="text-lg uppercase tracking-wide text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            From Blog
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold mb-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Latest Articles
          </motion.h2>
        </Parallax>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={index} 
              className="blog-item bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <Parallax y={[10 * index, -10 * index]} tagOuter="div">
                <img src={blog.image} alt={`Blog ${index + 1}`} className="w-full h-64 object-cover rounded mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-white">{blog.title}</h2>
                <div className="blog-meta text-left mb-4 text-gray-400">
                  <p className="flex items-center mb-2">
                    <i className="far fa-user mr-2"></i> {blog.author}
                  </p>
                  <p className="flex items-center mb-2">
                    <i className="far fa-list-alt mr-2"></i> {blog.category}
                  </p>
                  <p className="flex items-center mb-2">
                    <i className="far fa-calendar-alt mr-2"></i> {blog.date}
                  </p>
                  <p className="flex items-center mb-2">
                    <i className="far fa-comments mr-2"></i> {blog.comments}
                  </p>
                </div>
                <p className="text-gray-400 mb-4">{blog.description}</p>
                <a 
                  className="btn bg-gray-700 text-gray-400 px-4 py-2 rounded mt-4 inline-block transition duration-300 hover:bg-gray-800 border border-gray-600 hover:border-gray-600 hover:text-gray-400" 
                  href="#"
                >
                  Read More <i className="fa fa-angle-right ml-2"></i>
                </a>
              </Parallax>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
