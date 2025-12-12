import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Trucking Services', href: '/services/trucking' },
    { name: 'Become a Carrier', href: '/carriers' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Unilink Transportation"
                width={180}
                height={50}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              One of the leading transportation and logistics providers around the world. Delivering cargo beyond borders with excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:972-200-0606"
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-500 transition-colors"
                >
                  <Phone size={18} className="text-accent-500" />
                  972-200-0606
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@unilinktransportation.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-500 transition-colors"
                >
                  <Mail size={18} className="text-accent-500" />
                  sales@unilinktransportation.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-accent-500 flex-shrink-0 mt-1" />
                <span>San Antonio, TX<br />Headquarters</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock size={18} className="text-accent-500" />
                24 Hours - Monday to Sunday
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              {/* [PHOTO NEEDED: ISO 9001:2015 certification badge/logo - official ISO certification mark] */}
              <div className="w-12 h-12 bg-primary-800 rounded flex items-center justify-center text-xs">ISO</div>
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              {/* [PHOTO NEEDED: C-TPAT certification logo - Customs-Trade Partnership Against Terrorism badge] */}
              <div className="w-12 h-12 bg-primary-800 rounded flex items-center justify-center text-xs">C-TPAT</div>
              <span>C-TPAT Certified Partners</span>
            </div>
            <div className="flex items-center gap-2">
              {/* [PHOTO NEEDED: OEA certification logo - Operador Económico Autorizado badge] */}
              <div className="w-12 h-12 bg-primary-800 rounded flex items-center justify-center text-xs">OEA</div>
              <span>OEA Certified Partners</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Unilink Transportation. All rights reserved.</p>
            <p>24/7 Support Available</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
