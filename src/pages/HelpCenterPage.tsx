
import React, { useState } from 'react';
import { Plus, Minus, MailPlus, Phone, HelpCircle, CreditCard, User, ShieldAlert, MessageCircle, MessagesSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CTA from "@/components/CTA";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const HelpCenterPage = () => {
  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const faqItems: FaqItem[] = [
    {
      question: "How can I request a refund?",
      answer: "To request a refund, please contact our customer support team through the Contact Us page. Refunds are processed within 7-10 business days after approval.",
      category: "refunds"
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee for most of our services. However, custom projects and completed campaigns may have different refund terms as specified in your contract.",
      category: "refunds"
    },
    {
      question: "Do you provide partial refunds?",
      answer: "Yes, we may offer partial refunds depending on the circumstances. If a service was partially delivered or didn't meet requirements, we'll evaluate each case individually.",
      category: "refunds"
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription by logging into your account dashboard and navigating to 'Subscription Settings'. From there, select 'Cancel Subscription' and follow the prompts.",
      category: "account"
    },
    {
      question: "I forgot my password. How do I reset it?",
      answer: "Click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password.",
      category: "account"
    },
    {
      question: "Can I change my account email address?",
      answer: "Yes, you can change your email address by going to 'Account Settings' and selecting 'Update Contact Information'.",
      category: "account"
    },
    {
      question: "How do I add or remove team members from my account?",
      answer: "Go to 'Account Settings' and select 'Team Management'. From there, you can invite new team members or remove existing ones.",
      category: "account"
    },
    {
      question: "How can I update my billing information?",
      answer: "Log into your account, go to 'Billing Settings', and select 'Update Payment Method' to change your billing information.",
      category: "billing"
    },
    {
      question: "When will I be charged for my subscription?",
      answer: "Your subscription is billed automatically on the same date each month (or year, for annual plans) based on your initial signup date.",
      category: "billing"
    },
    {
      question: "How can I get a copy of my invoice?",
      answer: "Invoices are automatically emailed to you when payments are processed. You can also find all your invoices in your account under 'Billing History'.",
      category: "billing"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for larger accounts. Payment options may vary based on your location.",
      category: "billing"
    },
    {
      question: "How do I create a support ticket?",
      answer: "You can create a support ticket by visiting our Contact page and filling out the form, or by emailing support@digihaq.com with your request.",
      category: "support"
    },
    {
      question: "What are your support hours?",
      answer: "Our customer support team is available Monday through Friday, 9 AM to 6 PM EST. We aim to respond to all inquiries within 24 business hours.",
      category: "support"
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes, we offer phone support for all our clients. You can call our support line during business hours for immediate assistance.",
      category: "support"
    },
    {
      question: "How quickly can I expect a response to my support request?",
      answer: "We typically respond to support requests within 24 hours during business days. Premium clients receive priority support with faster response times.",
      category: "support"
    },
    {
      question: "Can I schedule a consultation call?",
      answer: "Yes, existing clients can schedule consultation calls with our team through their account dashboard. New clients can request a consultation through our Contact page.",
      category: "support"
    }
  ];
  
  const toggleFaq = (id: number) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };
  
  const filteredFaqs = faqItems.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesCategory;
  });
  
  const categories = [
    { id: 'all', name: 'All Topics', icon: <HelpCircle size={18} /> },
    { id: 'refunds', name: 'Refunds', icon: <CreditCard size={18} /> },
    { id: 'account', name: 'Account', icon: <User size={18} /> },
    { id: 'billing', name: 'Billing', icon: <ShieldAlert size={18} /> },
    { id: 'support', name: 'Support', icon: <MailPlus size={18} /> }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-digihaq-primary to-digihaq-secondary text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl mb-8">
              Find answers to frequently asked questions and get personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-12 bg-digihaq-accent">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">How Can We Help You Today?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Phone Support */}
            <div className="support-card flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-digihaq-primary flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us Directly</h3>
              <p className="text-gray-600 text-center mb-6">
                Speak with our support team for immediate assistance with your questions.
              </p>
              <a 
                href="tel:+18084313931" 
                className="mt-auto btn btn-primary py-3 px-6 w-full justify-center"
              >
                Call Support
              </a>
            </div>

            {/* Card 2: Live Chat */}
            <div className="support-card flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-digihaq-secondary flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Live Chat Support</h3>
              <p className="text-gray-600 text-center mb-6">
                Chat with our customer support representatives for quick answers to your questions.
              </p>
              <button 
                className="mt-auto btn btn-secondary py-3 px-6 w-full justify-center"
                onClick={() => {}} // Live chat functionality would go here
              >
                Start Live Chat
              </button>
            </div>

            {/* Card 3: Email Support */}
            <div className="support-card flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-digihaq-tertiary flex items-center justify-center mb-4">
                <MailPlus className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Support</h3>
              <p className="text-gray-600 text-center mb-6">
                Send us an email with your question and we'll get back to you within 24 hours.
              </p>
              <Link 
                to="/contact" 
                className="mt-auto btn bg-digihaq-tertiary text-white hover:bg-digihaq-primary py-3 px-6 w-full justify-center"
              >
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse through our comprehensive FAQ section to find quick answers to common questions. 
              If you can't find what you're looking for, contact our support team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                          activeCategory === category.id 
                          ? "bg-digihaq-primary text-white" 
                          : "text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-digihaq-light rounded-lg">
                  <h3 className="font-bold mb-2">Need more help?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Our support team is ready to assist you with any questions.
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="tel:+18084313931" 
                      className="flex items-center text-digihaq-tertiary hover:underline"
                    >
                      <Phone size={16} className="mr-2" />
                      <span>Call Support</span>
                    </a>
                    <Link 
                      to="/contact" 
                      className="flex items-center text-digihaq-tertiary hover:underline"
                    >
                      <MailPlus size={16} className="mr-2" />
                      <span>Email Support</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Listing */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-6">
                {activeCategory === 'all' ? 'Frequently Asked Questions' : `${categories.find(c => c.id === activeCategory)?.name} FAQs`}
              </h2>
              
              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-gray-50 focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        {expandedFaqId === index ? (
                          <Minus size={18} className="text-digihaq-primary" />
                        ) : (
                          <Plus size={18} className="text-digihaq-primary" />
                        )}
                      </button>
                      
                      {expandedFaqId === index && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">No Results Found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any answers matching your search criteria.
                  </p>
                  <Link to="/contact" className="btn btn-primary py-2 px-4">
                    Contact Support
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Support Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Support Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-digihaq-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Submit Your Question</h3>
              <p className="text-gray-600">
                Reach out to us through phone, email, or our contact form with your questions or concerns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-digihaq-secondary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Quick Response</h3>
              <p className="text-gray-600">
                Our support team will review your request and get back to you within 24 hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-digihaq-tertiary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Personalized Solution</h3>
              <p className="text-gray-600">
                We'll work with you to find the best solution for your specific situation and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Still Need Help?" 
        description="Our dedicated support team is ready to assist you with any questions or concerns."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </main>
  );
};

export default HelpCenterPage;
