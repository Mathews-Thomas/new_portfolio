import React from 'react';
import blog1 from '../assets/img/blog-1.jpg';
import blog2 from '../assets/img/blog-2.jpg';

const Blog = () => {
  return (
    <div className="blog bg-black py-20" id="blog">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg uppercase tracking-wide text-white">From Blog</p>
        <h2 className="text-4xl font-bold mb-10 text-white">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[blog1, blog2].map((blog, index) => (
            <div key={index} className="blog-item bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
              <img src={blog} alt={`Blog ${index + 1}`} className="w-full h-64 object-cover rounded mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-white">Lorem ipsum dolor sit amet</h2>
              <div className="blog-meta text-left mb-4 text-gray-400">
                <p><i className="far fa-user mr-2"></i> Admin</p>
                <p><i className="far fa-list-alt mr-2"></i> {index === 0 ? 'Web Design' : 'Apps Design'}</p>
                <p><i className="far fa-calendar-alt mr-2"></i> 01-Jan-2045</p>
                <p><i className="far fa-comments mr-2"></i> {index === 0 ? '5' : '10'}</p>
              </div>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin.
              </p>
              <a className="btn bg-gray-400 text-black px-4 py-2 rounded mt-4 inline-block transition duration-300 hover:bg-gray-600 hover:text-white" href="#">
                Read More <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
