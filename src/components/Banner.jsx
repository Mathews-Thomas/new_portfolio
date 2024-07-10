import React from 'react';

const Banner = () => {
  return (
    <div className="banner bg-black text-white py-20">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg mb-2">Reasonable Price</p>
        <h2 className="text-4xl font-bold mb-4">
          Get A <span className="text-gray-300">Special</span> Price
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
        </p>
        <a className="btn bg-white text-black px-8 py-3 rounded-full mt-8 inline-block transition duration-300 hover:bg-gray-700 hover:text-white" href="#">
          Pricing Plan
        </a>
      </div>
    </div>
  );
}

export default Banner;
