import Link from 'next/link';
import { Truck, Plane, Ship, Clock, Shield, Globe, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const services = [
  {
    icon: Truck,
    title: 'Over The Road',
    description: 'The most suitable partner for your FTL inquiries. Comprehensive trucking throughout USA, Canada, and Mexico.',
    href: '/services/trucking',
    features: ['Dry Van 48\' & 53\'', 'Flatbed', 'Reefer', '24/7 Coverage'],
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Save time and optimize your cost with our air freight solutions. Next flight out to scheduled deliveries.',
    href: '/services/air',
    features: ['Air Charter', 'Next Day AM/PM', 'International', 'Expedited LTL'],
  },
  {
    icon: Ship,
    title: 'Ocean Shipping',
    description: 'A wide variety of shipping routes for ocean cargo. Door to door, FCL, LCL, and break-bulk movements.',
    href: '/services/ocean',
    features: ['20\' & 40\' Containers', 'FCL & LCL', 'Customs Clearance', 'Global Routes'],
  },
];

const stats = [
  { number: '15+', label: 'Years of Experience' },
  { number: '10K+', label: 'Shipments Delivered' },
  { number: '3', label: 'Countries Covered' },
  { number: '24/7', label: 'Support Available' },
];

const features = [
  { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock support and shipment tracking' },
  { icon: Shield, title: 'ISO 9001:2015', description: 'Certified quality management systems' },
  { icon: Globe, title: 'Global Network', description: 'Pre-approved carriers across North America' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0 opacity-20">
          {/* [PHOTO NEEDED: High-quality hero image - Semi-truck on highway at sunset/sunrise,
              or aerial view of logistics operations, or container ship at port.
              Should convey scale, professionalism, and global reach. Minimum 1920x1080px] */}
          <div className="w-full h-full bg-gradient-to-r from-primary-900/80 to-primary-700/60" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                International 3PL Solutions
              </div>

              <h1 className="heading-1">
                Delivering Cargo
                <span className="text-accent-500 block">Beyond Borders</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Revolutionizing 3rd-Party Logistics through our Hybrid Business Model.
                Your trusted partner for international freight solutions across USA, Mexico, and Canada.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="btn-accent inline-flex items-center gap-2">
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-accent-500" />
                  <span>C-TPAT Partners</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-accent-500" />
                  <span>ISO Certified</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <ImagePlaceholder
                  description="[PHOTO NEEDED: Professional image of Unilink truck/fleet, or logistics operations center, or team at work. Should show branded equipment if available. High quality, well-lit photo.]"
                  aspectRatio="square"
                  className="rounded-2xl shadow-2xl"
                />
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs animate-slide-up">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call us now</p>
                      <p className="font-bold text-primary-700">972-200-0606</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-1 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-primary-600 rounded-2xl p-8 md:p-12 -mt-20 shadow-xl">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-primary-900 mb-4">
              Our Transportation Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive logistics solutions tailored to your needs. From ground transportation
              to air and ocean freight, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="card card-hover p-8 group"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                    <Icon size={32} className="text-primary-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="heading-3 text-primary-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle size={16} className="text-accent-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:text-accent-500 transition-colors">
                    Learn More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="heading-2 text-primary-900">
                Your Trusted Partner in
                <span className="text-accent-500"> Global Logistics</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Unilink Transportation operates a hybrid-asset business model with pre-approved carriers.
                We maintain carrier partnerships that dedicate fleet portions to our company, enabling
                advance planning for shipments and spot freight coverage within 24 hours.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our mission is to constantly innovate a self-propelling formula that always adds value
                to our customers, employees, and vendors while expanding globally as a multicultural enterprise.
              </p>

              <div className="grid grid-cols-3 gap-6 py-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon size={24} className="text-primary-600" />
                      </div>
                      <h4 className="font-semibold text-primary-900 text-sm">{feature.title}</h4>
                    </div>
                  );
                })}
              </div>

              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <ImagePlaceholder
                description="[PHOTO NEEDED: Image showing Unilink operations - could be warehouse/distribution center, team meeting, or CEO Erick Mendoza. Professional, shows company culture and scale of operations.]"
                aspectRatio="square"
                className="rounded-2xl"
              />
              {/* Accent shape */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-accent-500/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Why Choose Unilink?</h2>
            <p className="text-primary-200 text-lg">
              We earn client trust through open communication, competitive prices,
              cargo tracking, and full transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Drop Trailer Capabilities', desc: 'Flexible solutions for your logistics needs' },
              { title: 'On-Time Performance', desc: '≥95% pick-up and delivery performance' },
              { title: 'Specialized Equipment', desc: 'Dry van, flatbed, reefer & over-dimension' },
              { title: 'Advanced Technology', desc: 'Real-time tracking and online systems' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-accent-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="heading-2 mb-4">Ready to Ship?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Get a free quote for your next shipment. Our team is ready to help you
                find the best logistics solution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/quote" className="btn-accent">
                  Get Free Quote
                </Link>
                <a href="tel:972-200-0606" className="btn-secondary bg-white hover:bg-gray-100">
                  Call 972-200-0606
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
