import Link from 'next/link';
import Image from 'next/image';
import { Truck, Clock, Shield, Globe, ArrowRight, CheckCircle, Phone, Users } from 'lucide-react';

const equipmentTypes = [
  { name: 'Dry Van 48\' & 53\'', description: 'Standard enclosed trailers for general freight' },
  { name: 'Flatbed', description: 'Open trailers for oversized and heavy cargo' },
  { name: 'Reefer', description: 'Temperature-controlled for perishable goods' },
  { name: 'Over-Dimension', description: 'Specialized equipment for exceptional loads' },
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
  { icon: Globe, title: 'North America', description: 'Coverage across USA, Canada & Mexico' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-primary-900/80 to-primary-700/60" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Full Container Trucking Specialists
              </div>

              <h1 className="heading-1">
                Over The Road
                <span className="text-accent-500 block">Excellence</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Your trusted partner for full container trucking across USA, Mexico, and Canada.
                Reliable FTL services with pre-approved carrier partnerships.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/services/trucking" className="btn-accent inline-flex items-center gap-2">
                  Our Services
                  <ArrowRight size={18} />
                </Link>
                <Link href="/carriers" className="btn-secondary">
                  Become a Carrier
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
                <Image
                  src="/images/hero-main.jpg"
                  alt="Unilink Transportation - Trucking Services"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
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

      {/* Equipment Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-primary-900 mb-4">
              Full Container Trucking
            </h2>
            <p className="text-gray-600 text-lg">
              We specialize in full truckload (FTL) services with a variety of equipment
              to handle any type of cargo across North America.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentTypes.map((equipment, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Truck size={28} className="text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{equipment.name}</h3>
                <p className="text-sm text-gray-600">{equipment.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services/trucking" className="btn-primary inline-flex items-center gap-2">
              Learn More About Our Services
              <ArrowRight size={18} />
            </Link>
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
                <span className="text-accent-500"> North American Logistics</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Unilink Transportation operates a hybrid-asset business model with pre-approved carriers.
                We maintain carrier partnerships that dedicate fleet portions to our company, enabling
                advance planning for shipments and spot freight coverage within 24 hours.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our mission is to constantly innovate a self-propelling formula that always adds value
                to our customers, employees, and vendors while expanding as a multicultural enterprise.
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
              <Image
                src="/images/operations.jpg"
                alt="Unilink Transportation Operations Center"
                width={600}
                height={600}
                className="rounded-2xl object-cover"
              />
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

      {/* Carrier CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h2 className="heading-2 mb-4">Are You a Carrier?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Join our network of trusted carrier partners. We&apos;re always looking for
                reliable carriers to grow with us across North America.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/carriers" className="btn-accent">
                  Become a Carrier
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
