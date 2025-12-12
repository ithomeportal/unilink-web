import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Ship, CheckCircle, ArrowRight, Globe, Package, FileText, Warehouse } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ocean Shipping Services | Unilink Transportation',
  description: 'Comprehensive ocean freight services including FCL, LCL, and break-bulk movements. Door to door shipping anywhere in the world.',
};

const containerTypes = [
  {
    name: '20 Ft. Container',
    capacity: '~33 cubic meters',
    description: 'Standard container for smaller shipments. Ideal for heavy cargo or partial loads.',
    image: '/images/container-20ft.jpg',
  },
  {
    name: '40 Ft. Container',
    capacity: '~67 cubic meters',
    description: 'Most common container size for international shipping. Great balance of capacity and cost.',
    image: '/images/container-40ft.jpg',
  },
  {
    name: '40 Ft. High Cube',
    capacity: '~76 cubic meters',
    description: 'Extra height for voluminous cargo. One foot taller than standard 40ft containers.',
    image: '/images/container-40ft-hc.jpg',
  },
];

const services = [
  { icon: Ship, title: 'Full Container Load (FCL)', description: 'Dedicated containers for your cargo' },
  { icon: Package, title: 'Less Container Load (LCL)', description: 'Share container space for smaller shipments' },
  { icon: FileText, title: 'Customs Clearance', description: 'Complete documentation and clearance services' },
  { icon: Warehouse, title: 'Warehousing', description: 'Storage and distribution services globally' },
];

const features = [
  { icon: Globe, title: 'Global Routes', description: 'Shipping to ports worldwide' },
  { icon: Ship, title: 'Door to Door', description: 'Complete origin to destination service' },
  { icon: FileText, title: 'Documentation', description: 'Full customs and paperwork support' },
  { icon: Warehouse, title: 'Warehousing', description: 'Storage and distribution included' },
];

export default function OceanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pt-32 pb-20 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Ship size={24} className="text-white" />
                </div>
                <span className="text-accent-500 font-semibold">Ocean Transportation</span>
              </div>

              <h1 className="heading-1 text-white mb-6">
                Ocean <span className="text-accent-500">Shipping</span> Services
              </h1>

              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Comprehensive import and export ocean services with door to door, full container load,
                less container load, or break-bulk movements anywhere in the world.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="btn-accent inline-flex items-center gap-2">
                  Get a Quote
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:972-200-0606" className="btn-secondary">
                  Call Us Now
                </a>
              </div>
            </div>

            <div>
              <Image
                src="/images/ocean-hero.jpg"
                alt="Ocean container shipping"
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

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="heading-2 text-primary-900">
                Complete Ocean Freight Solutions
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                We handle shipment consolidation, carrier selection, ocean contracting, local
                pickup/delivery arrangements, and customs clearance. Complete documentation
                services are available for hassle-free international shipping.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Beyond ocean freight, we offer tailored warehousing, distribution, and assembly
                services domestically and abroad, providing a complete supply chain solution.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  'Full Container Load (FCL) services',
                  'Less than Container Load (LCL) consolidation',
                  'Break-bulk cargo handling',
                  'Customs brokerage and clearance',
                  'Port to port and door to door options',
                  'Warehousing and distribution services',
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
                src="/images/container-40ft.jpg"
                alt="Container yard operations"
                width={600}
                height={600}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Container Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-primary-900 mb-4">
              Container Options
            </h2>
            <p className="text-gray-600 text-lg">
              We transport cargo using various container types to match your shipment needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {containerTypes.map((container, index) => (
              <div key={index} className="card overflow-hidden">
                <Image
                  src={container.image}
                  alt={container.name}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{container.name}</h3>
                  <p className="text-accent-500 font-medium text-sm mb-3">{container.capacity}</p>
                  <p className="text-gray-600">{container.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-primary-900 mb-4">
              Our Ocean Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive services to support your international shipping needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card p-8 flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={28} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Routes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/images/coverage-map.jpg"
                alt="Global shipping routes"
                width={800}
                height={450}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="heading-2 text-primary-900">
                Shipping Routes <span className="text-accent-500">Worldwide</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our ocean shipping services connect you to major ports around the world.
                Whether you&apos;re importing goods from Asia, exporting to Europe, or shipping
                throughout the Americas, we have the routes and partnerships to deliver.
              </p>

              <div className="bg-white rounded-xl p-6 shadow">
                <h4 className="font-semibold text-primary-900 mb-4">Key Trade Lanes:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Asia - North America',
                    'Europe - Americas',
                    'Latin America',
                    'Transpacific',
                    'Transatlantic',
                    'Intra-Americas',
                  ].map((route, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={16} className="text-accent-500" />
                      {route}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Ship Overseas?</h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Get competitive rates for your ocean freight shipments. Our team will handle
            all the logistics from origin to destination.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn-accent">
              Request a Quote
            </Link>
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
