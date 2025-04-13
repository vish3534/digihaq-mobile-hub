
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DigiHaq</h3>
            <p className="mb-4 text-gray-300">
              Your trusted partner for innovative digital marketing solutions that drive results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-digihaq-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-digihaq-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-digihaq-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-digihaq-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-digihaq-primary">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-digihaq-primary">About Us</Link>
              </li>
              <li>
                <Link to="/help-center" className="text-gray-300 hover:text-digihaq-primary">Help Center</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-digihaq-primary">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-digihaq-primary">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-digihaq-primary">Search Engine Optimization</li>
              <li className="text-gray-300 hover:text-digihaq-primary">Social Media Marketing</li>
              <li className="text-gray-300 hover:text-digihaq-primary">Content Marketing</li>
              <li className="text-gray-300 hover:text-digihaq-primary">Email Marketing</li>
              <li className="text-gray-300 hover:text-digihaq-primary">PPC Advertising</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-digihaq-primary" size={20} />
                <span className="text-gray-300">123 Marketing Street, Digital City</span>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-digihaq-primary">
                  <Phone className="mr-2 text-digihaq-primary" size={20} />
                  <span>Call Us</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@digihaq.com" className="flex items-center text-gray-300 hover:text-digihaq-primary">
                  <Mail className="mr-2 text-digihaq-primary" size={20} />
                  <span>info@digihaq.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} DigiHaq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
