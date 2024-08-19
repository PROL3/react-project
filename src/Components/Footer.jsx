import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0 flex flex-col items-start space-y-2">
          <a href='./contactus' className="nav-footer text-lg font-bold hover:text-red-400">Contact Us</a>
          <a href='./menu' className="nav-footer text-lg font-bold hover:text-red-400">Menu</a>
          <a href='./storebranches' className="nav-footer text-lg font-bold hover:text-red-400">Store branches</a>
          <p>Email: <a href="mailto:pizzabar@gmail.com" className="text-red-400 hover:text-blue-400">pizzabar@gmail.com</a></p>
          <p>Phone: <a href="tel:+03677655675" className="text-blue-400 hover:text-red-400">03-677655675</a></p>
        </div>

        <div className="flex justify-around items-center  gap-2 md:flex-row md:justify-end  space-y-2 md:space-y-0 md:space-x-2">
          <h1 className='font-bold text-teal-600'>Follow Us On:</h1>
          <a href="https://www.facebook.com" className="text-gray-300 hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" className="text-gray-300 hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" className="text-gray-300 hover:text-pink-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/03677655675" className="text-gray-300 hover:text-green-600" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} />
          </a>
        </div>

        <div className="text-center mt-4 md:mt-0 flex   items-end ">
          <p className="text-sm">Privacy Policy | Terms of Service</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Pizza Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
