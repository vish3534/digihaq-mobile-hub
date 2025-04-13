
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "Ready to Boost Your Digital Presence?",
  description = "Get in touch with our experts to start your digital marketing journey today.",
  buttonText = "Contact Us Now",
  buttonLink = "/contact",
  className = "",
}) => {
  return (
    <section className={`bg-gradient-to-r from-digihaq-primary to-digihaq-secondary text-white ${className}`}>
      <div className="container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-8 opacity-90">{description}</p>
          <Link 
            to={buttonLink} 
            className="btn bg-white text-digihaq-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md inline-flex items-center"
          >
            {buttonText}
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
