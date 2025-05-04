import { FaInstagram, FaTwitter, FaTripadvisor, FaYelp, FaLink } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fef3c7] text-black pt-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 pb-6">
        {/* Contact Section */}
        <div>
          <h3 className="text-[#92400e] italic font-semibold text-lg mb-2">Contact</h3>
          <p>212 459-0700</p>
          <p>308 West 50th Street</p>
          <p>New York, NY 10019</p>
          <a
            href="mailto:corporate@bluedognyc.com"
            className="text-blue-600 hover:underline"
          >
            corporate@flavorfusionnyc.com
          </a>
        </div>

        {/* Center Section */}
        <div className="text-center flex-1">
          <h2 className="text-2xl font-semibold text-[#92400e]">FlavorFusion</h2>
          <div className="flex justify-center gap-4 mt-2 text-xl">
            <FaInstagram />
            <FaTwitter />
            <FaTripadvisor />
            <FaYelp />
            <FaLink />
          </div>
        </div>

        {/* Hours Section */}
        <div>
          <h3 className="text-[#92400e] italic font-semibold text-lg mb-2">Hours</h3>
          <p>Monday to Thursday & Sunday: 8:30am - 10pm</p>
          <p>Fri. & Sat.: 8:30am - 11pm</p>
          <br />
          <p>Monday to Sunday:</p>
          <p>Brunch: 8:30 - 3:30</p>
          <p>Afternoon Offerings: 3:30pm - 4:30pm</p>
          <p>Dinner starts at 5pm</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-300 text-center text-sm py-4">
        © {new Date().getFullYear()} FlavorFusion NYC. All rights reserved.
      </div>
    </footer>
  );
}
