import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate

const Home = () => {
  const navigate = useNavigate();  // Initialize navigate

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-amber-100 text-center py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-amber-800">Welcome to FlavorFusion</h1>
          <p className="mt-4 text-xl text-amber-600">Where every meal is a celebration of flavors</p>
          <button
            onClick={() => navigate('/menu')}  // Navigate to /menu when clicked
            className="mt-8 bg-amber-600 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-500 transition"
          >
            View Menu
          </button>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-amber-800 mb-12">Today's Specials</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {["Grilled Salmon", "Steak Au Poivre", "Pasta Primavera"].map((dish, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition">
                <h3 className="text-2xl font-bold text-amber-700 mb-4">{dish}</h3>
                <p className="text-gray-600 mb-4">Freshly prepared with locally sourced ingredients.</p>
                <span className="text-lg font-semibold text-amber-700">$25</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="/restaurant.jpg" alt="Restaurant Interior" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-amber-800 mb-6">A Taste of Tradition</h2>
            <p className="text-amber-700 mb-6">At FlavorFusion, we believe every dish tells a story. Our chefs craft each meal with passion, using recipes passed down through generations.</p>
            <button
              onClick={() => navigate('/about')}  // Navigate to /about when clicked
              className="bg-amber-600 text-white px-6 py-3 rounded-full text-lg hover:bg-amber-500 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="bg-amber-700 text-white text-center py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Reserve Your Table</h2>
          <p className="text-lg mb-8">Experience an unforgettable dining experience. Book now!</p>
          <button
            onClick={() => navigate('/reserve')}  // Navigate to /reserve when clicked
            className="bg-white text-amber-700 px-8 py-3 rounded-full text-lg font-bold hover:bg-amber-200 transition"
          >
            Book a Table
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
