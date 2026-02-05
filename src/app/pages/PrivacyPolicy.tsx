import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 
          className="mb-6 text-4xl md:text-5xl"
          style={{ 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--navy)',
            fontWeight: 600
          }}
        >
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> February 5, 2026<br />
          <strong>Last Updated:</strong> February 5, 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sundara Charitable Trust ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>sundaratrust.org</strong> and make donations through our platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This policy is in compliance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              2. Information We Collect
            </h2>
            
            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              2.1 Personal Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you make a donation or contact us, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Postal address (for 80G certificate delivery)</li>
              <li>PAN number (for donations above ₹2,000, as required by Income Tax rules)</li>
              <li>Payment information (processed securely through Razorpay)</li>
            </ul>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              2.2 Automatically Collected Information
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Process your donations securely</li>
              <li>Issue 80G tax exemption certificates</li>
              <li>Send donation receipts and acknowledgments</li>
              <li>Communicate updates about our programs and impact</li>
              <li>Comply with legal and regulatory requirements (Income Tax Act, FCRA, etc.)</li>
              <li>Improve our website and donor experience</li>
              <li>Respond to your inquiries and requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              4. Payment Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All online payments are processed through <strong>Razorpay</strong>, a PCI DSS compliant payment gateway. We do not store your credit card, debit card, or net banking information on our servers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Razorpay uses industry-standard SSL encryption to protect your payment data. Please refer to <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Razorpay's Privacy Policy</a> for more details.
            </p>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              5. Sharing Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Payment processors:</strong> Razorpay (for donation processing)</li>
              <li><strong>Government authorities:</strong> Income Tax Department, Registrar of Public Trusts (as legally required)</li>
              <li><strong>Service providers:</strong> Email service providers, hosting providers (under strict confidentiality agreements)</li>
              <li><strong>Legal compliance:</strong> When required by law, court order, or government regulation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              6. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Fulfill the purposes outlined in this Privacy Policy</li>
              <li>Comply with legal obligations (donation records must be kept for 7 years as per Income Tax Act)</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              7. Your Rights (DPDP Act, 2023)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under the Digital Personal Data Protection Act, 2023, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (subject to legal retention requirements)</li>
              <li><strong>Withdraw consent:</strong> Opt out of marketing communications at any time</li>
              <li><strong>Grievance redressal:</strong> Lodge a complaint with our Data Protection Officer</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookies through your browser settings. However, disabling cookies may affect certain features of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              9. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not intended for children under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              11. Contact Us / Grievance Officer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For any questions, concerns, or to exercise your data rights, please contact our Data Protection Officer:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Sundara Charitable Trust</strong><br />
                Email: <a href="mailto:info@sundaratrust.org" className="text-blue-600 underline">info@sundaratrust.org</a><br />
                Subject: Privacy Inquiry / Data Protection Request
              </p>
              <p className="text-gray-600 text-sm mt-4">
                We will respond to your request within 30 days as required under the DPDP Act.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              12. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy is governed by the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
