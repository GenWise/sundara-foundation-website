import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
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
          Terms & Conditions
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
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the website <strong>sundaratrust.org</strong> ("Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this Website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These terms apply to all visitors, donors, and users of the Website.
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
              2. About Sundara Charitable Trust
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sundara Charitable Trust ("Trust," "we," "us," or "our") is a public charitable trust registered under the Bombay Public Trusts Act, 1950, with the following details:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Registration Number:</strong> E-10456</li>
              <li><strong>PAN:</strong> AAATS0371E</li>
              <li><strong>80G Certification:</strong> Valid through Assessment Year 2026-27</li>
              <li><strong>12A Registration:</strong> Active</li>
              <li><strong>Registered Office:</strong> Mumbai, Maharashtra, India</li>
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
              3. Use of Website
            </h2>
            
            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              3.1 Permitted Use
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may use this Website to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Learn about Sundara Foundation's mission and programs</li>
              <li>Make voluntary charitable donations</li>
              <li>Access information about our students and impact</li>
              <li>Contact us for inquiries</li>
            </ul>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              3.2 Prohibited Activities
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree NOT to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Use the Website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Scrape, copy, or reproduce content without permission</li>
              <li>Impersonate the Trust or misrepresent your affiliation</li>
              <li>Make fraudulent donations or payment disputes in bad faith</li>
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
              4. Donations
            </h2>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              4.1 Voluntary Nature
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All donations made through this Website are <strong>voluntary</strong> and non-refundable (see our Refund Policy for exceptions). Donations are used for the charitable purposes of the Trust.
            </p>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              4.2 Tax Deductibility (80G)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Donations to Sundara Charitable Trust are eligible for tax deduction under Section 80G of the Income Tax Act, 1961, subject to applicable limits and conditions. We will provide 80G receipts for all eligible donations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> For donations above ₹2,000, you must provide your PAN number as required by Income Tax regulations.
            </p>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              4.3 Use of Funds
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              100% of donations are used for charitable purposes related to our mission of identifying and nurturing gifted students from underprivileged backgrounds. The Trust operates with zero administrative overhead for program delivery.
            </p>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              4.4 No Quid Pro Quo
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Donations do not entitle you to any goods, services, or benefits in return. All contributions are purely charitable.
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
              5. Payment Processing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payments are processed through <strong>Razorpay</strong>, a third-party payment gateway. By making a donation, you also agree to Razorpay's terms of service and privacy policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are not responsible for any payment failures, errors, or issues arising from Razorpay's services. Please contact Razorpay support for payment-related technical issues.
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
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on this Website, including text, images, logos, videos, and design elements, is the property of Sundara Charitable Trust or our licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
            </p>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              Student Testimonials & Media
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Student testimonials, photographs, and videos are shared with consent and are used solely to showcase our impact. These materials may not be used for any other purpose without permission.
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
              7. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Website is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis. We make no warranties, express or implied, regarding:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>The accuracy, completeness, or reliability of information</li>
              <li>Uninterrupted or error-free operation of the Website</li>
              <li>Compatibility with your device or browser</li>
              <li>Security of data transmission (although we use industry-standard measures)</li>
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
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Sundara Charitable Trust, its trustees, officers, employees, and volunteers shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Damages arising from third-party services (e.g., Razorpay)</li>
              <li>Unauthorized access to your data (despite our security measures)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our total liability for any claim shall not exceed the amount of your donation.
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
              9. External Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Website may contain links to third-party websites (e.g., partner organizations, payment gateways). We are not responsible for the content, privacy practices, or terms of these external sites. Accessing them is at your own risk.
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
              10. Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Sundara Charitable Trust from any claims, damages, or expenses arising from your use of the Website or violation of these Terms.
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
              11. Modifications to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use of the Website after changes constitutes acceptance of the revised terms.
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
              12. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Website at our discretion, without notice, for any violation of these Terms or for any other reason.
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
              13. Governing Law & Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms and Conditions are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
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
              14. Severability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall continue in full force and effect.
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
              15. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Sundara Charitable Trust</strong><br />
                Email: <a href="mailto:info@sundaratrust.org" className="text-blue-600 underline">info@sundaratrust.org</a><br />
                Subject: Terms & Conditions Inquiry
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
