import React from 'react';
import review1 from '../assets/img/testimonial-1.jpg';
import review2 from '../assets/img/testimonial-2.jpg';
import review3 from '../assets/img/testimonial-3.jpg';

const Review = () => {
  return (
    <div className="testimonial py-20 bg-red-600 text-white" id="review">
      <div className="container mx-auto text-center px-6">
        <div className="testimonial-icon mb-10">
          <i className="fas fa-quote-left text-6xl"></i>
        </div>
        <div className="flex flex-wrap justify-center">
          {[review1, review2, review3].map((review, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="testimonial-item bg-white text-center shadow-lg p-6 rounded-lg">
                <div className="testimonial-img mx-auto mb-4 flex justify-center">
                  <img src={review} alt={`Review ${index + 1}`} className="w-24 h-24 rounded-full border-4 border-dotted border-red-600 p-2" />
                </div>
                <div className="testimonial-text">
                  <p className="text-xl italic mb-4 text-gray-600">Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.</p>
                  <h3 className="text-2xl font-bold text-red-600 mb-2">Customer Name</h3>
                  <h4 className="text-lg text-gray-600">Profession</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
