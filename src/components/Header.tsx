'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Over The Road', href: '/services/trucking' },
      { name: 'Air Freight', href: '/services/air' },
      { name: 'Ocean Shipping', href: '/services/ocean' },
    ],
  },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
            <div className={`font-bold text-2xl transition-colors ${scrolled ? 'text-primary-700' : 'text-white'}`}>
              <span className="text-accent-500">UNILINK</span>
              <span className="block text-sm font-normal tracking-wider">TRANSPORTATION</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 font-medium transition-colors ${
                        scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-500'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
                        servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors ${
                      scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/quote" className="btn-accent">
              Get a Quote
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
            <div key={item.name}>
              <Link
                href={item.href}
                className="block py-2 text-gray-700 font-medium hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block py-2 text-gray-500 hover:text-primary-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/quote"
            className="btn-accent block text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
