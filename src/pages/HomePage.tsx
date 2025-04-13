
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BarChart, MessageSquare, TrendingUp, Target, Users, Mail } from 'lucide-react';
import CTA from '@/components/CTA';

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-digihaq-primary to-digihaq-secondary text-white py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transforming Your Digital Presence
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Strategic digital marketing solutions that drive growth and increase your ROI. 
                Partner with DigiHaq for result-oriented campaigns.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn bg-white text-digihaq-primary hover:bg-gray-100 py-3 px-8 rounded-md font-medium">
                  Get Started
                </Link>
                <Link to="/about" className="btn bg-transparent border-2 border-white hover:bg-white/10 py-3 px-8 rounded-md font-medium">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Digital Marketing" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital marketing solutions tailored to your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card hover:border-l-4 hover:border-l-digihaq-primary">
              <Search size={48} className="text-digihaq-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Search Engine Optimization</h3>
              <p className="text-gray-600 mb-4">
                Improve your website's visibility in search engines and drive organic traffic.
              </p>
              <Link to="/contact" className="inline-flex items-center text-digihaq-primary font-medium hover:underline">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card hover:border-l-4 hover:border-l-digihaq-primary">
              <BarChart size={48} className="text-digihaq-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Pay-Per-Click Advertising</h3>
              <p className="text-gray-600 mb-4">
                Targeted ads that appear at the top of search engine results, driving immediate traffic.
              </p>
              <Link to="/contact" className="inline-flex items-center text-digihaq-primary font-medium hover:underline">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card hover:border-l-4 hover:border-l-digihaq-primary">
              <MessageSquare size={48} className="text-digihaq-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Engage with your audience and build your brand on major social platforms.
              </p>
              <Link to="/contact" className="inline-flex items-center text-digihaq-primary font-medium hover:underline">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card hover:border-l-4 hover:border-l-digihaq-primary">
              <Mail size={48} className="text-digihaq-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Marketing</h3>
              <p className="text-gray-600 mb-4">
                Stay connected with your customers and drive repeat business with targeted campaigns.
              </p>
              <Link to="/contact" className="inline-flex items-center text-digihaq-primary font-medium hover:underline">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card hover:border-l-4 hover:border-l-digihaq-primary">
              <TrendingUp size={48} className="text-digihaq-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Content Marketing</h3>
              <p className="text-gray-600 mb-4">
                Attract and engage your target audience with valuable, relevant content.
              </p>
              <Link to="/contact" className="inline-flex items-center text-digihaq-primary font-medium hover:underline">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card hover:border-l-4 hover:border-l-digihaq-primary">
              <Target size={48} className="text-digihaq-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Conversion Rate Optimization</h3>
              <p className="text-gray-600 mb-4">
                Improve your website's effectiveness in converting visitors into customers.
              </p>
              <Link to="/contact" className="inline-flex items-center text-digihaq-primary font-medium hover:underline">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose DigiHaq?</h2>
          <p className="section-subtitle">
            We're committed to delivering exceptional results through data-driven strategies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Why Choose DigiHaq" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-digihaq-light p-3 rounded-lg flex items-center justify-center h-12 w-12 shrink-0">
                    <Users className="text-digihaq-tertiary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Expert Team</h3>
                    <p className="text-gray-600">
                      Our team of experienced professionals stays up-to-date with the latest trends and technologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-digihaq-light p-3 rounded-lg flex items-center justify-center h-12 w-12 shrink-0">
                    <Target className="text-digihaq-tertiary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Results-Driven Approach</h3>
                    <p className="text-gray-600">
                      We focus on measurable results and ROI for all our marketing campaigns.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-digihaq-light p-3 rounded-lg flex items-center justify-center h-12 w-12 shrink-0">
                    <BarChart className="text-digihaq-tertiary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Data-Driven Strategies</h3>
                    <p className="text-gray-600">
                      Our strategies are based on thorough research, analysis, and ongoing optimization.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-digihaq-light p-3 rounded-lg flex items-center justify-center h-12 w-12 shrink-0">
                    <MessageSquare className="text-digihaq-tertiary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Transparent Communication</h3>
                    <p className="text-gray-600">
                      We maintain open communication and provide regular updates on campaign performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-digihaq-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-gray-600 text-sm">CEO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-600">
                "DigiHaq transformed our online presence completely. Their SEO strategy increased our organic traffic by 200% in just six months!"
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-digihaq-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JS
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Jane Smith</h3>
                  <p className="text-gray-600 text-sm">Marketing Director, FashionBrand</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The social media campaign DigiHaq created for us exceeded all our expectations. Our engagement rates are up, and sales have increased by 35%."
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-digihaq-tertiary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  RJ
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Robert Johnson</h3>
                  <p className="text-gray-600 text-sm">Founder, StartupHub</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a startup, we needed a cost-effective marketing strategy. DigiHaq delivered just that, helping us establish our brand in a competitive market."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  );
};

export default HomePage;
