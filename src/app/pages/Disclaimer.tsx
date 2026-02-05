import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Disclaimer() {
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
          Disclaimer
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
              1. General Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The information provided on <strong>sundaratrust.org</strong> ("Website") by Sundara Charitable Trust ("we," "us," or "Trust") is for general informational purposes only. All information on the Website is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Website or reliance on any information provided on the Website. Your use of the Website and reliance on any information is solely at your own risk.</strong>
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
              2. Tax Advice Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we provide information about the tax benefits of donating to Sundara Charitable Trust under <strong>Section 80G of the Income Tax Act, 1961</strong>, this information is for general guidance only and does not constitute professional tax advice.
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-4">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--navy)' }}>
                ⚠️ Important Notice
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Tax laws are complex and subject to change</li>
                <li>Tax benefits depend on your individual circumstances</li>
                <li>The applicability of 80G deductions varies based on income type, tax regime (old vs. new), and other factors</li>
                <li>We are not tax advisors or chartered accountants</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              <strong>We strongly recommend consulting a qualified chartered accountant or tax professional before claiming any tax deductions related to your donations.</strong> We are not responsible for any tax implications, penalties, or disputes arising from your donation or tax filing decisions.
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
              3. 80G Certification Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sundara Charitable Trust holds a valid 80G certification from the Income Tax Department. However:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>80G certification validity is subject to renewal and may change</li>
              <li>Current validity: Assessment Year 2026-27 (as stated on our website)</li>
              <li>We will make reasonable efforts to update our website if our 80G status changes, but we are not liable for delays in updating this information</li>
              <li>Donors are responsible for verifying our 80G status at the time of donation if this is critical to their decision</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              If you have concerns about 80G validity, please contact us at <a href="mailto:info@sundaratrust.org" className="text-blue-600 underline">info@sundaratrust.org</a> before donating.
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
              4. Use of Funds Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to using 100% of donated funds for charitable purposes aligned with our mission of identifying and nurturing gifted students from underprivileged backgrounds. However:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>The Trust reserves the right to allocate funds to specific programs, initiatives, or students based on current needs and strategic priorities</li>
              <li>Unless otherwise specified at the time of donation, all contributions are considered <strong>unrestricted donations</strong> and may be used for any charitable purpose within our mission</li>
              <li>We do not guarantee that funds will be used for a specific student, school, or program unless explicitly agreed upon in writing</li>
              <li>Administrative and operational costs may be covered by separate funding sources or trustee contributions</li>
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
              5. Student Outcomes Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we showcase student testimonials, success stories, and program outcomes on our Website:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Past results do not guarantee future outcomes</li>
              <li>Every student's journey is unique, and success depends on multiple factors beyond our control</li>
              <li>We cannot guarantee admission to specific institutions or achievement of particular academic/career milestones</li>
              <li>Testimonials reflect individual student experiences and may not be representative of all participants</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our role is to provide opportunities, mentorship, and support — ultimate outcomes depend on student effort, aptitude, and circumstances.
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
              6. External Links Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Website may contain links to external websites operated by partner organizations, payment gateways (Razorpay), educational institutions, or other third parties.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We have no control over the content, privacy policies, or practices of third-party sites</li>
              <li>Inclusion of any link does not imply endorsement, approval, or responsibility for the linked site</li>
              <li>We are not responsible for any loss or damage arising from your use of external websites</li>
              <li>You access external links at your own risk</li>
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
              7. Payment Gateway Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All online donations are processed through <strong>Razorpay</strong>, a third-party payment gateway.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We are not responsible for payment failures, delays, or errors caused by Razorpay or your bank</li>
              <li>Transaction fees, currency conversion charges, or international transaction fees may apply (charged by your bank/card issuer)</li>
              <li>For payment-related technical issues, please contact Razorpay support or your bank directly</li>
              <li>We do not store your credit card, debit card, or banking information</li>
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
              8. Website Availability & Errors
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to maintain accurate, up-to-date information on the Website, but:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>The Website may be temporarily unavailable due to maintenance, technical issues, or unforeseen circumstances</li>
              <li>We do not guarantee uninterrupted, error-free, or secure access</li>
              <li>Typographical errors, inaccuracies, or omissions may occur — we reserve the right to correct them at any time</li>
              <li>We are not liable for any losses resulting from Website downtime or errors</li>
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
              9. Photography & Student Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Photos, videos, and testimonials of students are shared with appropriate consent for the purpose of showcasing our impact.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Some images may be stock photos or illustrative (clearly marked where applicable)</li>
              <li>Student names and identifying details may be altered or anonymized for privacy reasons</li>
              <li>We take reasonable measures to protect student privacy, but we are not liable for unauthorized use of images by third parties after publication</li>
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
              10. No Professional Relationship
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The content on this Website does not create any professional relationship between you and Sundara Charitable Trust, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Tax advisor-client relationship</li>
              <li>Legal advisor-client relationship</li>
              <li>Financial advisor-client relationship</li>
              <li>Educational institution-student relationship (we are a funding organization, not an educational institution)</li>
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
              11. No Guarantee of Student Selection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Information about our selection process, partnership with Avanti Fellows, and eligibility criteria is provided for transparency. However:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We do not accept unsolicited applications through the Website</li>
              <li>Visiting this Website or making a donation does not entitle anyone to participation in our programs</li>
              <li>Student selection is conducted through our official partners and processes</li>
              <li>We are not responsible for inquiries about student applications — please contact our official partner organizations</li>
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
              12. Changes to Content
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, update, or remove any content on the Website at any time without prior notice. This includes program details, partnership information, student testimonials, and legal documents.
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
              13. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by Indian law, Sundara Charitable Trust, its trustees, officers, employees, volunteers, and partners shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Any direct, indirect, incidental, or consequential damages</li>
              <li>Loss of data, revenue, profits, or opportunities</li>
              <li>Damages arising from your use of or inability to use the Website</li>
              <li>Reliance on information provided on the Website</li>
              <li>Tax disputes, penalties, or issues arising from donations or 80G claims</li>
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
              14. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Disclaimer is governed by the laws of India. Any disputes arising from this Disclaimer shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
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
              If you have questions about this Disclaimer or need clarification on any matter:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Sundara Charitable Trust</strong><br />
                Email: <a href="mailto:info@sundaratrust.org" className="text-blue-600 underline">info@sundaratrust.org</a><br />
                Subject: Disclaimer Inquiry
              </p>
            </div>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <h3 className="font-semibold mb-2" style={{ color: 'var(--navy)' }}>
              📌 Summary
            </h3>
            <p className="text-gray-700">
              This Website provides general information about our charitable work. It is not a substitute for professional advice. We encourage you to do your own due diligence before making donations or relying on any information provided. Use of this Website is entirely at your own risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
