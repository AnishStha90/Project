import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-amber-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-amber-800 mb-10">Contact Us</h1>

        <div className="md:flex md:gap-12 items-start">
          {/* Contact Info */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-amber-700 mb-2">Phone: (212) 459-0700</p>
            <p className="text-lg text-amber-700 mb-2">Email: contact@flavorfusion.com</p>
            <p className="text-lg text-amber-700">Address: 308 West 50th Street, New York, NY 10019</p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <label className="block text-amber-800 font-medium mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-amber-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-amber-800 font-medium mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-amber-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-amber-800 font-medium mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border border-amber-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-amber-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
