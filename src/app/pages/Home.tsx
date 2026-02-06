import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Search, Users, TrendingUp, Shield, Award } from 'lucide-react';
import { StudentCard } from '../components/StudentCard';
import { SundaraLogo } from '../components/SundaraLogo';
import { PersonCard } from '../components/PersonCard';
import { PartnerLogo } from '../components/PartnerLogo';
import { DonateButton } from '../components/DonateButton';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGVhcm5pbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzcwMjI3MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <SundaraLogo size={80} className="md:hidden" />
            <SundaraLogo size={120} className="hidden md:block" />
          </div>

          <h1 
            className="mb-6 text-4xl md:text-5xl lg:text-6xl"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--gold)', 
              fontWeight: 600,
              letterSpacing: '-0.02em'
            }}
          >
            Sundara Foundation
          </h1>
          
          <p className="text-white/90 mb-16 max-w-3xl mx-auto text-base md:text-lg lg:text-xl" style={{ lineHeight: 1.7 }}>
            Identifying and nurturing India's brightest minds from underserved communities since 1985.
          </p>

          <blockquote className="max-w-4xl mx-auto">
            <p 
              className="text-white/80 mb-4 italic leading-relaxed text-sm md:text-base lg:text-lg"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                lineHeight: 1.8
              }}
            >
              "By that part of our plan which prescribes the selection of the youths of genius from among the classes of the poor, we hope to avail the state of those talents which nature has sown as liberally among the poor as the rich, but which perish without use, if not sought for and cultivated."
            </p>
            <cite className="text-white/60 not-italic block text-xs md:text-sm">
              — Thomas Jefferson, <em>Notes on the State of Virginia</em>
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Problem + Approach Section */}
      <section id="approach" className="py-12 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20">
            {/* The Problem */}
            <div>
              <h2 
                className="mb-4 md:mb-6 text-3xl md:text-4xl"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--navy)',
                  fontWeight: 600
                }}
              >
                The Problem
              </h2>
              <p className="mb-4 text-xl md:text-2xl" style={{ lineHeight: 1.4, color: 'var(--navy)', fontWeight: 500 }}>
                Talent is equally distributed. Opportunity is not.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                India's Jawahar Navodaya Vidyalayas (JNVs) educate the top 1-2% of government school students — for free, including boarding. The top 10% of this pool represents the <strong>top 0.1% of public school talent</strong> in India. These students have extraordinary ability but lack exposure, mentors, and confidence.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                There are millions of other students spread around the country who do not manage to get into the JNV system at the end of Grade 5. We need to be able to make a difference to these students too.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <h2 
                className="mb-4 md:mb-6 text-3xl md:text-4xl"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--navy)',
                  fontWeight: 600
                }}
              >
                Our Approach
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                Since 2022, the mission has sharpened: identify and nurture intellectually gifted children from economically disadvantaged backgrounds — primarily from the JNV system. In partnership with the Godrej Foundation, Manipal Academy of Higher Education (MAHE), GenWise, and a host of other philanthropic investors, 30+ students (2025) are able to experience a new universe.
              </p>

              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Starting 2026, by working with GenWise and the Godrej Foundation, we hope to touch hundreds more... and potentially thousands, in a few years.
              </p>
            </div>
          </div>

          {/* 3-Step Pipeline */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Scout */}
            <div className="text-center">
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center"
                style={{ backgroundColor: 'var(--navy)' }}
              >
                <Search className="w-8 h-8 md:w-10 md:h-10" style={{ color: 'var(--gold)' }} />
              </div>
              <h3 
                className="mb-3 md:mb-4 text-xl md:text-2xl"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--navy)',
                  fontWeight: 600
                }}
              >
                Scout
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Partner with Avanti Fellows to screen ~200 top JNV students via Ei's ASSET Talent Search. A leadership panel selects ~20-30 per year.
              </p>
            </div>

            {/* Immerse */}
            <div className="text-center">
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center"
                style={{ backgroundColor: 'var(--navy)' }}
              >
                <Users className="w-8 h-8 md:w-10 md:h-10" style={{ color: 'var(--gold)' }} />
              </div>
              <h3 
                className="mb-3 md:mb-4 text-xl md:text-2xl"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--navy)',
                  fontWeight: 600
                }}
              >
                Immerse
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Fund their participation in a 3-week intensive residential program at MAHE Manipal — enrichment courses 3-4 years above grade level (Forensic Science, Economics, Robotics, Astrophysics — NOT exam coaching).
              </p>
            </div>

            {/* Mentor */}
            <div className="text-center">
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center"
                style={{ backgroundColor: 'var(--navy)' }}
              >
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10" style={{ color: 'var(--gold)' }} />
              </div>
              <h3 
                className="mb-3 md:mb-4 text-xl md:text-2xl"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--navy)',
                  fontWeight: 600
                }}
              >
                Mentor
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Support each student over a 4-5 year journey — academic and socio-emotional development — toward admission to world-class institutions.
              </p>
            </div>
          </div>

          {/* Cost Info */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-gray-600 text-sm md:text-base">
              <span className="font-semibold" style={{ color: 'var(--navy)' }}>Cost:</span> Rs 1,00,000 per student for the 3-week residential. Rs 4-5 lakhs for the full multi-year journey.
            </p>
          </div>
        </div>
      </section>

      {/* Student Voices Section */}
      <section id="students" className="py-12 md:py-24 px-6" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-center mb-4 text-3xl md:text-4xl lg:text-5xl"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--navy)',
              fontWeight: 600
            }}
          >
            Student Voices
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto text-base md:text-lg">
            The emotional heart of our mission — hear directly from the brilliant students we serve.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Liesha */}
            <StudentCard
              name="Liesha Nilkanth Pawade"
              age={14}
              location="Chandrapur, Maharashtra"
              school="JNV Chandrapur"
              year="2025"
              quote="Before coming to GenWise I was an introvert and after coming here I have the courage to talk to people. I now have the courage to come out and be more interactive and help them if they need anything."
              media={[
                { type: 'image', url: '/images/students/liesha-1.jpg' },
                { type: 'image', url: '/images/students/liesha-2.jpg' },
                { type: 'image', url: '/images/students/liesha-3.jpg' },
                {
                  type: 'video',
                  url: 'https://drive.google.com/file/d/1WKnKkSMH00eIywHLSipnf8hWwSMBn-oh/preview',
                  thumbnail: '/images/students/liesha-1.jpg'
                }
              ]}
            />

            {/* Preksha */}
            <StudentCard
              name="Preksha Santosh Jungari"
              age={14}
              location="Chandrapur, Maharashtra"
              school="JNV Chandrapur"
              year="2025"
              quote="I used to be afraid to ask questions but now I ask doubts and I have learned that no questions are right or wrong."
              media={[
                { type: 'image', url: '/images/students/preksha-1.jpg' },
                { type: 'image', url: '/images/students/preksha-2.jpg' },
                { type: 'image', url: '/images/students/preksha-3.jpg' },
                { type: 'image', url: '/images/students/preksha-4.jpg' },
                {
                  type: 'video',
                  url: 'https://drive.google.com/file/d/1ivz7vwCP2vJaLyFhvFWU2_eVweqwBmKE/preview',
                  thumbnail: '/images/students/preksha-1.jpg'
                }
              ]}
            />

            {/* Unnathi */}
            <StudentCard
              name="Unnathi CP"
              age={16}
              location="Bangalore Urban"
              school="JNV Uttara Kannada"
              year="2024 & 2025"
              quote="Other teachers complete the syllabus for exams' sake. We don't do that here — we do it for learning purposes."
              media={[
                { type: 'image', url: '/images/students/unnathi-1.jpg' },
                { type: 'image', url: '/images/students/unnathi-2.jpg' },
                { type: 'image', url: '/images/students/unnathi-3.jpg' },
                { type: 'image', url: '/images/students/unnathi-4.jpg' }
              ]}
            />

            {/* Satakshi */}
            <StudentCard
              name="Satakshi Gangwar"
              age={15}
              location="Bulandshahar, UP"
              school="VidyaGyan Bulandshahar"
              year="2024"
              quote="I will never forget my 3 weeks in this gifted program. Gifted World is my utopic world."
              media={[
                { type: 'image', url: '/images/students/satakshi-1.jpg' },
                { type: 'image', url: '/images/students/satakshi-2.jpg' },
                { type: 'image', url: '/images/students/satakshi-3.jpg' },
                {
                  type: 'video',
                  url: 'https://drive.google.com/file/d/1XQHl9jeScHqvqqySnSbtDf_043XAVpsL/preview',
                  thumbnail: '/images/students/satakshi-1.jpg'
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-12 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20">
            {/* Our Story */}
            <div>
              <h2 
                className="mb-4 md:mb-6 text-3xl md:text-4xl"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--navy)',
                  fontWeight: 600
                }}
              >
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                Founded on 8 April 1985 in Mumbai by three distinguished members of the Patil family. Originally focused on elementary education and scholarships for underprivileged students.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Since 2022, the mission has sharpened: identify and nurture intellectually gifted children from economically disadvantaged backgrounds — and to reach hundreds/ thousands of such students.
              </p>
            </div>

            {/* Founders */}
            <div>
              <h2 
                className="mb-6 md:mb-8 text-3xl md:text-4xl"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--navy)',
                  fontWeight: 600
                }}
              >
                Founders
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                {/* Dr S.H. Patil */}
                <PersonCard
                  name="Dr S.H. Patil"
                  role="Founding Trustee"
                  description="Prof Emeritus, Physics, IIT Bombay"
                  imageUrl="/images/founders/sh-patil.jpg"
                  linkedinUrl="#"
                />

                {/* Late Dr Venkutai Patil */}
                <PersonCard
                  name="Late Dr Venkutai Patil"
                  role="Co-Founder"
                  description="Former Director, Jamnalal Bajaj Institute of Management Studies; IIM Lucknow"
                  imageUrl="/images/founders/venkutai-patil.jpg"
                />

                {/* Late V.H. Patil */}
                <PersonCard
                  name="Late V.H. Patil"
                  role="Settlor"
                  description="Advocate, Supreme Court — Hindu Law & Income Tax"
                  imageUrl="/images/founders/vh-patil.jpg"
                />
              </div>
            </div>
          </div>

          {/* Current Trustees */}
          <div className="mb-20">
            <h2
              className="mb-8 text-center"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              Current Trustees
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <PersonCard
                name="Dr S.H. Patil"
                role="Reporting Trustee"
                imageUrl="/images/founders/sh-patil.jpg"
              />
              <PersonCard
                name="Shrikant Jayawant Patil"
                role="Trustee"
                imageUrl="/images/trustees/shrikant-patil.jpg"
              />
              <PersonCard
                name="Ranjani Shrikant Patil"
                role="Trustee"
                imageUrl="/images/trustees/ranjani-patil.jpg"
              />
              <PersonCard
                name="Rohan Shrikant Patil"
                role="Trustee"
                imageUrl="/images/trustees/rohan-patil.jpg"
              />
            </div>
          </div>

          {/* Team & Volunteers */}
          <div>
            <h2
              className="mb-8 text-center text-2xl md:text-3xl"
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--navy)',
                fontWeight: 600
              }}
            >
              Team & Volunteers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
              <p className="text-gray-700">Vishnu Agnihotri</p>
              <p className="text-gray-700">Rajesh Panchanathan</p>
              <p className="text-gray-700">Sowmya Arunajatesan</p>
              <p className="text-gray-700">Lakshmanan Madhu</p>
              <p className="text-gray-700">Koushik Sekhar</p>
              <p className="text-gray-700">Siddharth Patil</p>
              <p className="text-gray-700">Girish Reddy</p>
              <p className="text-gray-700">Ganesh Panchanathan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section id="partners" className="py-12 md:py-24 px-6" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-center mb-4 text-3xl md:text-4xl lg:text-5xl"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--navy)',
              fontWeight: 600
            }}
          >
            Our Partners
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto text-base md:text-lg">
            Together, we're transforming the lives of India's brightest students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            <PartnerLogo name="GenWise" url="https://genwise.com" logoUrl="/images/partners/genwise.png" />
            <PartnerLogo name="Godrej Foundation" url="https://godrejfoundation.org" logoUrl="/images/partners/godrej-foundation.svg" />
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-12 md:py-24 px-6" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="mb-6 text-3xl md:text-4xl lg:text-5xl"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--gold)',
              fontWeight: 600
            }}
          >
            Invest in India's Brightest Minds
          </h2>
          <p className="text-white/90 mb-4 text-base md:text-lg lg:text-xl" style={{ lineHeight: 1.7 }}>
            Donate Rs 100 or Rs 10,00,000.
          </p>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-base md:text-lg lg:text-xl" style={{ lineHeight: 1.7 }}>
            Your donation is <strong>80G tax-deductible</strong>. Every rupee transforms a gifted student's life.
          </p>
          <p className="text-white/80 mb-10 text-sm md:text-base lg:text-lg">
            100% of income goes to charitable purposes — zero overhead.
          </p>

          {/* CTA Button */}
          <DonateButton className="mb-12" />

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-3" style={{ color: 'var(--gold)' }} />
              <p className="text-white/70" style={{ fontSize: '0.875rem' }}>
                Established 1985
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 mb-3" style={{ color: 'var(--gold)' }} />
              <p className="text-white/70" style={{ fontSize: '0.875rem' }}>
                80G Certified<br />(Valid through AY 2026-27)
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-3" style={{ color: 'var(--gold)' }} />
              <p className="text-white/70" style={{ fontSize: '0.875rem' }}>
                12A Registered<br />Public Trust
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}