
import React from 'react';
import { Award, Target, Users, CheckCircle } from 'lucide-react';
import CTA from '@/components/CTA';

const AboutPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-digihaq-primary to-digihaq-secondary text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DigiHaq</h1>
            <p className="text-xl">
              We're a team of passionate digital marketers dedicated to helping businesses grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                DigiHaq was founded in 2015 with a simple mission: to help businesses navigate the complex digital landscape and achieve meaningful results. What started as a small team of three passionate digital marketers has grown into a full-service digital marketing agency serving clients across industries.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that effective digital marketing is about more than just driving traffic – it's about creating meaningful connections with your audience and driving real business growth. That's why we take a strategic, data-driven approach to every campaign we develop.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped hundreds of businesses transform their digital presence and achieve their marketing goals. As we continue to grow, we remain committed to our core values of excellence, innovation, and client success.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            These principles guide everything we do at DigiHaq.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="card text-center">
              <div className="mx-auto bg-digihaq-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="text-digihaq-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering exceptional quality in everything we do.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto bg-digihaq-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-digihaq-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and strong ethical principles.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto bg-digihaq-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="text-digihaq-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new ideas and technologies to keep our clients ahead.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto bg-digihaq-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="text-digihaq-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work as true partners with our clients, fostering open communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our diverse team of experts is passionate about digital marketing and client success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="CEO" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-digihaq-primary font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600">
                With over 15 years in digital marketing, Sarah leads our team with vision and expertise.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" 
                alt="Marketing Director" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Emily Rodriguez</h3>
              <p className="text-digihaq-primary font-medium mb-2">Marketing Director</p>
              <p className="text-gray-600">
                Emily specializes in developing comprehensive marketing strategies that drive results.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="SEO Specialist" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">David Chen</h3>
              <p className="text-digihaq-primary font-medium mb-2">SEO Specialist</p>
              <p className="text-gray-600">
                David has helped numerous businesses improve their search rankings and visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Work With Us?" 
        description="Let's discuss how we can help your business achieve its digital marketing goals."
        buttonText="Get in Touch"
      />
    </main>
  );
};

export default AboutPage;
