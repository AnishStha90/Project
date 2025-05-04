import React from 'react';

const About = () => {
  return (
    <div className="bg-amber-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-amber-800 mb-10">About FlavorFusion</h1>

        <div className="md:flex md:gap-12">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/restaurant-about.jpg"
              alt="About FlavorFusion"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-amber-700 mb-6">
              At FlavorFusion, we believe that food is more than just sustenance. It’s an experience
              that brings people together, celebrates diverse cultures, and offers a taste of
              tradition with every bite. Our chefs are committed to preparing every dish with the
              freshest ingredients, using time-honored recipes passed down through generations.
            </p>
            <p className="text-lg text-amber-700 mb-6">
              From our signature dishes to seasonal specials, every meal at FlavorFusion is crafted
              with care and passion. Whether you're here for a casual dinner or a special
              celebration, we promise an unforgettable dining experience.
            </p>
            <p className="text-lg text-amber-700">
              Join us and experience the fusion of flavors, where tradition meets innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
