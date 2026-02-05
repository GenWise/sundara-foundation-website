import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function RefundPolicy() {
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
          Refund & Cancellation Policy
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
              1. General Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sundara Charitable Trust ("we," "us," or "Trust") deeply appreciates every donation made to support our mission of nurturing gifted students from underprivileged backgrounds.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              All donations made to the Trust are <strong>voluntary, irrevocable, and generally non-refundable</strong>, in accordance with Indian charity laws and the nature of charitable contributions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, we understand that errors can occur. This policy outlines the limited circumstances under which refunds may be processed.
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
              2. Non-Refundable Donations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once a donation is successfully processed and a receipt is issued, it <strong>cannot be refunded</strong> under normal circumstances, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Change of mind after making a donation</li>
              <li>Disagreement with how funds are utilized (funds are used as per our stated mission)</li>
              <li>Personal financial difficulties arising after the donation</li>
              <li>Tax planning changes (e.g., deciding not to claim 80G deduction)</li>
              <li>Duplicate donations made intentionally to increase tax benefits</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Important:</strong> Once an 80G receipt is issued, the donation becomes part of our audited financial records and cannot be reversed for tax compliance reasons.
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
              3. Eligible Refund Scenarios
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds will <strong>only</strong> be considered in the following exceptional circumstances:
            </p>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              3.1 Technical Errors
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Duplicate charges:</strong> If you were charged multiple times for a single intended donation due to a technical error</li>
              <li><strong>Incorrect amount:</strong> If a significantly different amount was charged due to a website or payment gateway malfunction</li>
              <li><strong>Payment failure with debit:</strong> If your account was debited but the payment failed on our end (and we did not receive the funds)</li>
            </ul>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              3.2 Fraudulent Transactions
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Unauthorized use of your payment method (subject to verification and police report)</li>
              <li>Identity theft or fraudulent donation in your name</li>
            </ul>

            <h3 className="text-xl mb-3" style={{ color: 'var(--navy)', fontWeight: 600 }}>
              3.3 Timing Considerations
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Refund requests must be made within <strong>7 days</strong> of the transaction date. Requests after this period will not be entertained except in cases of proven fraud.
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
              4. Refund Request Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe you qualify for a refund under Section 3, please follow these steps:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                Step 1: Contact Us
              </h4>
              <p className="text-gray-700 mb-2">
                Email us at: <a href="mailto:info@sundaratrust.org" className="text-blue-600 underline">info@sundaratrust.org</a>
              </p>
              <p className="text-gray-700">
                Subject: <strong>Refund Request - [Your Name] - [Transaction ID]</strong>
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                Step 2: Provide Required Information
              </h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Full name and contact details</li>
                <li>Transaction ID / Razorpay Payment ID</li>
                <li>Date and amount of donation</li>
                <li>Email address used for donation</li>
                <li>Detailed explanation of why you believe a refund is warranted</li>
                <li>Supporting evidence (e.g., bank statement showing duplicate charges, screenshots of errors)</li>
                <li>For fraud claims: Police complaint / FIR copy</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                Step 3: Review & Decision
              </h4>
              <p className="text-gray-700 mb-2">
                We will review your request within <strong>10-15 business days</strong> and notify you of our decision via email.
              </p>
              <p className="text-gray-700">
                Approved refunds will be processed within <strong>30 business days</strong> to the original payment method.
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
              5. Cancellation of Recurring Donations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Note:</strong> We do not currently offer recurring donation subscriptions. All donations on our website are one-time contributions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If recurring donations are introduced in the future, you will be able to cancel future installments at any time. However, donations already processed cannot be refunded.
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
              6. Impact of Refunds on 80G Certificates
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If a refund is approved and processed:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Any 80G tax exemption certificate issued for that donation becomes <strong>invalid</strong></li>
              <li>You must <strong>not</strong> claim a tax deduction for the refunded amount</li>
              <li>If you have already claimed the deduction, you are responsible for informing the Income Tax Department and rectifying your tax return</li>
              <li>We will notify the Income Tax Department of the refund as per compliance requirements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Legal Note:</strong> Claiming tax benefits on refunded donations is illegal and may result in penalties from the Income Tax Department.
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
              7. Payment Gateway Refunds
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds are processed through <strong>Razorpay</strong>. The time taken for the refund to reflect in your account depends on:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Credit Cards:</strong> 5-7 business days</li>
              <li><strong>Debit Cards:</strong> 7-10 business days</li>
              <li><strong>Net Banking / UPI:</strong> 5-7 business days</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Please contact your bank if the refund is delayed beyond these timeframes. We are not responsible for delays caused by banks or payment networks.
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
              8. Refund Denial
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to deny refund requests that do not meet the criteria outlined in Section 3. Common reasons for denial include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Request made after 7-day window (except fraud cases)</li>
              <li>Insufficient evidence of technical error or fraud</li>
              <li>Change of mind or personal financial reasons</li>
              <li>Attempt to abuse refund policy</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our decision on refund requests is final and binding.
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
              9. Dispute Resolution
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you dispute a refund decision, you may escalate the matter by:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Sending a detailed written complaint to our Grievance Officer at <a href="mailto:info@sundaratrust.org" className="text-blue-600 underline">info@sundaratrust.org</a></li>
              <li>We will review escalated disputes within 30 days</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              For payment gateway issues, you may also contact Razorpay support directly.
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
              10. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Refund and Cancellation Policy is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
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
              11. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For refund requests or questions about this policy:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Sundara Charitable Trust</strong><br />
                Email: <a href="mailto:info@sundaratrust.org" className="text-blue-600 underline">info@sundaratrust.org</a><br />
                Subject: Refund Request / Cancellation Policy Inquiry
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
              12. Policy Updates
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Refund and Cancellation Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Please review this policy before making a donation.
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <h3 className="font-semibold mb-2" style={{ color: 'var(--navy)' }}>
              💡 Donation Tip
            </h3>
            <p className="text-gray-700">
              Before donating, please double-check the amount and your payment details to avoid errors. If you have any questions about how donations are used, please review our <Link to="/" className="text-blue-600 underline">mission and impact</Link> or contact us before donating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
