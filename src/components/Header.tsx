'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services/trucking' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden' : 'bg-primary-900'}`}>
        <div className="container-custom py-2">
          <div className="flex justify-between items-center text-sm text-white">
            <div className="flex items-center gap-6">
              <a href="tel:972-200-0606" className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                <Phone size={14} />
                972-200-0606
              </a>
              <a href="mailto:sales@unilinktransportation.com" className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                <Mail size={14} />
                sales@unilinktransportation.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>24/7 Support Available</span>
              <span className="text-accent-500 font-semibold">|</span>
              <span>San Antonio, TX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Unilink Transportation"
              width={180}
              height={50}
              className={`h-12 w-auto transition-all ${scrolled ? '' : 'brightness-0 invert'}`}
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/carriers" className="btn-accent">
              Become a Carrier
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={28} className={scrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={28} className={scrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white shadow-xl transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container-custom py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-700 font-medium hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/carriers"
            className="btn-accent block text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Become a Carrier
          </Link>
        </div>
      </div>
    </header>
  );
}
