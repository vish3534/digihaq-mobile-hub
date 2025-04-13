
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-digihaq-primary to-digihaq-secondary text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl">
              Last Updated: April 13, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="mb-4">
                DigiHaq ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="mb-6">
                This privacy policy applies to all information collected through our website, as well as any related services, sales, marketing, or events.
              </p>

              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
              </p>
              <p className="mb-4">
                The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name and contact data (such as your email address, phone number, and address)</li>
                <li>Credentials (such as passwords and security questions)</li>
                <li>Payment data (such as your credit card information)</li>
                <li>Location information (such as your IP address)</li>
                <li>Device and usage information (such as your browser type and operating system)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
              </p>
              <p className="mb-6">
                We use the information we collect or receive:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>To send you marketing and promotional communications</li>
                <li>To respond to your inquiries and solve any potential issues you might have</li>
                <li>To send administrative information to you</li>
                <li>To protect our services</li>
                <li>To comply with legal obligations</li>
                <li>For other business purposes such as data analysis and improving our website</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">How We Share Your Information</h2>
              <p className="mb-6">
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                <li>Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                <li>Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                <li>Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                <li>Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, or as evidence in litigation.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-6">
                We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
              </p>

              <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>The right to access your personal data</li>
                <li>The right to rectify or update your personal data</li>
                <li>The right to erase your personal data</li>
                <li>The right to restrict the processing of your personal data</li>
                <li>The right to object to the processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mb-6">
                To exercise these rights, please contact us using the contact information provided below.
              </p>

              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="mb-6">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
              </p>

              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.
              </p>

              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-2">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <ul className="list-none mb-6">
                <li>By email: privacy@digihaq.com</li>
                <li>By visiting our contact page: <a href="/contact" className="text-digihaq-primary hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
