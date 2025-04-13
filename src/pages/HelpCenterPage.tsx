
import React, { useState } from 'react';
import { Search, Plus, Minus, MailPlus, Phone, HelpCircle, CreditCard, User, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const HelpCenterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for larger accounts. Payment options may vary based on your location.",
      category: "billing"
    }
  ];
  
  const toggleFaq = (id: number) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };
  
  const filteredFaqs = faqItems.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
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
              Find answers to frequently asked questions and get support.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
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
                      href="tel:+1234567890" 
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
    </main>
  );
};

export default HelpCenterPage;
