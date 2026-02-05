import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 
              className="mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.25rem',
                color: 'var(--gold)',
                fontWeight: 600
              }}
            >
              Sundara Foundation
            </h3>
            <p className="text-gray-400 leading-relaxed" style={{ fontSize: '0.875rem' }}>
              Identifying and nurturing intellectually gifted children from economically disadvantaged backgrounds since 1985.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.125rem',
                color: 'var(--gold)',
                fontWeight: 600
              }}
            >
              Contact
            </h4>
            <div className="text-gray-400 space-y-2" style={{ fontSize: '0.875rem' }}>
              <p>info@sundaratrust.org</p>
            </div>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 
              className="mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.125rem',
                color: 'var(--gold)',
                fontWeight: 600
              }}
            >
              Legal
            </h4>
            <div className="text-gray-400 space-y-2" style={{ fontSize: '0.875rem' }}>
              <Link to="/privacy-policy" className="block hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="block hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="block hover:text-gold transition-colors">
                Refund Policy
              </Link>
              <Link to="/disclaimer" className="block hover:text-gold transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Trust Information */}
          <div>
            <h4 
              className="mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.125rem',
                color: 'var(--gold)',
                fontWeight: 600
              }}
            >
              Trust Information
            </h4>
            <div className="text-gray-400 space-y-1" style={{ fontSize: '0.75rem' }}>
              <p>Public Trust Reg. No. E-10456</p>
              <p>Bombay Public Trust Act, 1950</p>
              <p>PAN: AAATS0371E</p>
              <p>80G Certified (Valid AY 2026-27)</p>
              <p>12A Registered</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Sundara Charitable Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
