import { useState } from 'react';
import { Heart } from 'lucide-react';

// Declare Razorpay on window for TypeScript
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface DonateButtonProps {
  className?: string;
}

export function DonateButton({ className = '' }: DonateButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDonate = () => {
    setLoading(true);

    // Load Razorpay script if not already loaded
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        initializeRazorpay();
      };
      script.onerror = () => {
        alert('Failed to load payment gateway. Please try again.');
        setLoading(false);
      };
      document.body.appendChild(script);
    } else {
      initializeRazorpay();
    }
  };

  const initializeRazorpay = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your actual Razorpay Key ID
      amount: 10000, // Amount in paise (100 INR = 10000 paise). Update as needed or make dynamic
      currency: 'INR',
      name: 'Sundara Foundation',
      description: 'Support gifted students from underprivileged backgrounds',
      image: '', // You can add logo URL here
      handler: function (response: any) {
        // Payment successful
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        setLoading(false);
        
        // Here you would typically:
        // 1. Send payment details to your backend
        // 2. Verify the payment
        // 3. Show thank you message
        console.log('Payment details:', response);
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        purpose: 'Donation to Sundara Foundation'
      },
      theme: {
        color: '#e8c84a' // Gold color from your brand
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
    setLoading(false);
  };

  return (
    <button 
      onClick={handleDonate}
      disabled={loading}
      className={`px-10 py-4 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{ 
        backgroundColor: 'var(--gold)', 
        color: 'var(--navy)',
        fontSize: '1.25rem',
        fontWeight: 600,
        cursor: loading ? 'wait' : 'pointer',
        border: 'none'
      }}
    >
      <Heart className="inline-block w-6 h-6 mr-2" style={{ marginBottom: '2px' }} />
      {loading ? 'Loading...' : 'Donate Now'}
    </button>
  );
}
