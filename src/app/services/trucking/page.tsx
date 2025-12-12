import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, CheckCircle, ArrowRight, MapPin, Clock, Shield, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Over The Road Trucking | Unilink Transportation',
  description: 'Comprehensive trucking services throughout USA, Canada, and Mexico. Dry van, flatbed, reefer, and over-dimension equipment with 24/7 coverage.',
};

const equipmentTypes = [
  {
    name: 'Dry Van',
    sizes: '48\' and 53\'',
    description: 'Standard enclosed trailers for general freight, protecting cargo from weather and theft.',
    image: '/images/equipment-dryvan.jpg',
  },
  {
    name: 'Flatbed',
    sizes: '48\' and 53\'',
    description: 'Open trailers for oversized, heavy, or irregularly shaped cargo that cannot fit in enclosed trailers.',
    image: '/images/equipment-flatbed.jpeg',
  },
  {
    name: 'Reefer',
    sizes: '48\' and 53\'',
    description: 'Temperature-controlled trailers for perishable goods, pharmaceuticals, and temperature-sensitive cargo.',
    image: '/images/equipment-dryvan.jpg',
  },
  {
    name: 'Over-Dimension',
    sizes: 'Various',
    description: 'Specialized equipment for cargo that exceeds standard size and weight limits.',
    image: '/images/equipment-overdimension.jpg',
  },
];

const features = [
  { icon: MapPin, title: 'North America Coverage', description: 'Comprehensive shipping throughout USA, Canada, and Mexico' },
  { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock coverage and support for your shipments' },
  { icon: Shield, title: 'Trusted Partners', description: 'Highly trained, pre-approved carriers with quality equipment' },
  { icon: Package, title: 'Online Tracking', description: 'Real-time visibility into your shipment status' },
];

export default function TruckingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Background image area */}
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Truck size={24} className="text-white" />
                </div>
                <span className="text-accent-500 font-semibold">Ground Transportation</span>
              </div>

              <h1 className="heading-1 text-white mb-6">
                Over The Road <span className="text-accent-500">Trucking</span>
              </h1>

              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Access to an industry-leading fleet that delivers goods throughout North America.
                Recognized for on-time pick-up and delivery, and outstanding service.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:972-200-0606" className="btn-secondary">
                  Call 972-200-0606
                </a>
              </div>
            </div>

            <div>
              <Image
                src="/images/trucking-hero.jpg"
                alt="Professional trucking services"
                width={800}
                height={450}
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-white -mt-1 relative z-20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary-600" />
                  </div>
                  <h3 className="font-bold text-primary-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="heading-2 text-primary-900">
                Your Trucking Partner Across North America
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Deliver your goods anywhere in North America with comprehensive shipping throughout
                the U.S., Canada, and Mexico. Our highly trained, trusted partners operate quality
                equipment and provide worry-free shipping experiences.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether you need full truckload (FTL) services, temperature-controlled transport,
                or specialized equipment for oversized cargo, we have the fleet and expertise to
                meet your requirements.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  'Full Truckload (FTL) services',
                  'Spot freight coverage within 24 hours',
                  'Dedicated fleet portions for advance planning',
                  'Pre-approved, certified carrier network',
                  'Real-time tracking and visibility',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/images/operations.jpg"
                alt="Trucking operations center"
                width={600}
                height={600}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-primary-900 mb-4">
              Equipment Types
            </h2>
            <p className="text-gray-600 text-lg">
              We offer a variety of equipment options to handle any type of cargo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipmentTypes.map((equipment, index) => (
              <div key={index} className="card overflow-hidden">
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  width={600}
                  height={340}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary-900">{equipment.name}</h3>
                    <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                      {equipment.sizes}
                    </span>
                  </div>
                  <p className="text-gray-600">{equipment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/images/coverage-map.jpg"
                alt="North America coverage map"
                width={800}
                height={450}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="heading-2 text-primary-900">
                Coverage Across <span className="text-accent-500">North America</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our extensive carrier network enables us to pick up and deliver shipments
                across the United States, Canada, and Mexico.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">US</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">United States</h4>
                    <p className="text-sm text-gray-600">All 48 contiguous states with extensive coverage</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">CA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Canada</h4>
                    <p className="text-sm text-gray-600">Cross-border services with certified partners</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">MX</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Mexico</h4>
                    <p className="text-sm text-gray-600">C-TPAT and OEA certified cross-border operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Ship?</h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Are you a carrier looking to partner with us? Join our network and grow your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/carriers" className="btn-accent">
              Become a Carrier
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
