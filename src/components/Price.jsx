import React from 'react';

const Price = () => {
  const plans = [
    { title: 'Basic', price: 49, features: ['Bootstrap 4', 'Font Awesome 5', 'Responsive Design', 'Browser Compatibility', 'Easy To Use'], featured: false },
    { title: 'Standard', price: 99, features: ['Bootstrap 4', 'Font Awesome 5', 'Responsive Design', 'Browser Compatibility', 'Easy To Use'], featured: true },
    { title: 'Premium', price: 149, features: ['Bootstrap 4', 'Font Awesome 5', 'Responsive Design', 'Browser Compatibility', 'Easy To Use'], featured: false }
  ];

  return (
    <div className="price py-20 bg-gray-100" id="price">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4">
          <span className="absolute inset-0 h-0.5 bg-red-600 top-1/2 left-0"></span>
          Pricing Plan
        </p>
        <h2 className="text-4xl font-bold mb-10">Affordable Price</h2>
        <div className="flex flex-wrap -mx-4">
          {plans.map((plan, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className={`price-item bg-white shadow-lg ${plan.featured ? 'shadow-2xl border-t-4 border-red-600' : ''} transition-shadow duration-500 rounded-lg`}>
                <div className="price-header py-8 text-center border-b">
                  <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                  <h2 className="text-4xl font-bold relative inline-block">
                    <span className="absolute text-lg top-2 left-0">$</span>{plan.price}<span className="text-lg">/ mo</span>
                  </h2>
                </div>
                <div className="price-body p-6">
                  <ul className="text-left mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="py-2 border-b last:border-none">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="price-footer pb-8 text-center">
                  <a href="#" className="btn bg-red-600 text-white hover:bg-transparent hover:text-red-600 border border-red-600 transition-all duration-300 px-6 py-2 rounded-full">Order Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Price;
