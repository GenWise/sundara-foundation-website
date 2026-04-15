import { useState } from 'react';
import { Heart } from 'lucide-react';
import { BankDetailsModal } from './BankDetailsModal';

interface DonateButtonProps {
  className?: string;
}

export function DonateButton({ className = '' }: DonateButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`px-10 py-4 rounded-lg transition-all hover:scale-105 ${className}`}
        style={{
          backgroundColor: 'var(--gold)',
          color: 'var(--navy)',
          fontSize: '1.25rem',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <Heart className="inline-block w-6 h-6 mr-2" style={{ marginBottom: '2px' }} />
        Donate Now
      </button>

      <BankDetailsModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
