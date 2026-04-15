import { X, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface BankDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BANK_DETAILS = [
  { label: 'Account Name', value: 'Sundara Charitable Trust' },
  { label: 'Bank', value: 'Janata Sahakari Bank Ltd., Pune' },
  { label: 'Branch', value: 'Fort Branch, Mumbai' },
  { label: 'Account Number', value: '018220100001204' },
  { label: 'IFSC Code', value: 'JSBP0000018' },
  { label: 'Account Type', value: 'Savings' },
];

export function BankDetailsModal({ isOpen, onClose }: BankDetailsModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{ backgroundColor: 'var(--navy)', color: 'white' }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--gold)' }}>
            Bank Transfer Details
          </h2>
          <p className="text-sm text-gray-300">
            Use NEFT / RTGS / IMPS to transfer directly to our account.
            Please email <a href="mailto:info@sundaratrust.org" className="underline" style={{ color: 'var(--gold)' }}>info@sundaratrust.org</a> after transfer for your 80G receipt.
          </p>
        </div>

        {/* Details */}
        <div className="space-y-3 mb-6">
          {BANK_DETAILS.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-lg px-4 py-3"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
            >
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                <p className="font-mono font-semibold text-white">{value}</p>
              </div>
              <button
                onClick={() => handleCopy(label, value)}
                className="ml-3 flex-shrink-0 text-gray-400 hover:text-white transition-colors"
                title="Copy"
              >
                {copied === label
                  ? <CheckCircle className="w-4 h-4 text-green-400" />
                  : <Copy className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>

        {/* 80G note */}
        <div
          className="rounded-lg px-4 py-3 text-sm"
          style={{ backgroundColor: 'rgba(232,200,74,0.12)', color: 'var(--gold)' }}
        >
          Your donation is eligible for <strong>80G tax deduction</strong>. Certificate will be sent to your email within 7 days of transfer confirmation.
        </div>
      </div>
    </div>
  );
}
