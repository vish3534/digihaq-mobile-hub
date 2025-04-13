
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-digihaq-primary">DigiHaq</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-digihaq-primary font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-digihaq-primary font-medium">
              About Us
            </Link>
            <Link to="/help-center" className="text-gray-700 hover:text-digihaq-primary font-medium">
              Help Center
            </Link>
            <Link to="/privacy" className="text-gray-700 hover:text-digihaq-primary font-medium">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-digihaq-primary font-medium">
              Contact
            </Link>
            <Link to="/contact" className="btn btn-primary py-2 px-4">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-digihaq-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-white pt-16 px-4",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-lg font-medium p-2 text-gray-700 hover:text-digihaq-primary hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-medium p-2 text-gray-700 hover:text-digihaq-primary hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/help-center" 
            className="text-lg font-medium p-2 text-gray-700 hover:text-digihaq-primary hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Help Center
          </Link>
          <Link 
            to="/privacy" 
            className="text-lg font-medium p-2 text-gray-700 hover:text-digihaq-primary hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/contact" 
            className="text-lg font-medium p-2 text-gray-700 hover:text-digihaq-primary hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/contact" 
            className="w-full btn btn-primary text-center py-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
