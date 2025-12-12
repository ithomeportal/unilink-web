import { Metadata } from 'next';
import Link from 'next/link';
import { Truck, Plane, Ship, ArrowRight, CheckCircle, Globe, Clock, Shield } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Our Services | Unilink Transportation',
  description: 'Comprehensive transportation services including Over The Road trucking, Air Freight, and Ocean Shipping across USA, Mexico, and Canada.',
};

const services = [
  {
    icon: Truck,
    title: 'Over The Road',
    slug: 'trucking',
    description: 'Access to an industry-leading fleet that delivers goods throughout North America. Recognized for on-time pick-up and delivery, and outstanding service.',
    features: [
      'Dry Van: 48\' and 53\' options',
      'Flatbed: 48\' and 53\' options',
      'Reefer (Temperature Control): 48\' and 53\'',
      'Over-dimension equipment',
      '24/7 coverage and availability',
      'Online shipment tracking',
    ],
    coverage: 'USA, Canada, and Mexico',
    imageDescription: '[PHOTO NEEDED: Professional image of semi-truck (preferably Unilink branded) on highway or at loading dock. Should show modern equipment and professional operations.]',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    slug: 'air',
    description: 'Air Transportation changes the ability of worldwide companies to compete in every market. Affordable, time-sensitive services with on-time delivery as our priority.',
    features: [
      'Air Charter services',
      'Next Available Flight',
      'Next Day AM/PM delivery',
      '2nd and 3rd day air options',
      'Expedited LTL',
      'Domestic and international capacity',
    ],
    coverage: 'Worldwide',
    imageDescription: '[PHOTO NEEDED: Cargo plane being loaded or in flight, or air freight operations at airport. Should convey speed and global connectivity.]',
  },
  {
    icon: Ship,
    title: 'Ocean Shipping',
    slug: 'ocean',
    description: 'Comprehensive import and export ocean services with door to door, full container load, less container load, or break-bulk movements anywhere in the world.',
    features: [
      '20 Ft. Container',
      '40 Ft. Container',
      '40 Ft. HQ Container',
      'Shipment consolidation',
      'Customs clearance',
      'Warehousing & distribution',
    ],
    coverage: 'Global routes',
    imageDescription: '[PHOTO NEEDED: Container ship at port or cargo containers being moved. Should show scale of ocean freight operations.]',
  },
];

const benefits = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Pre-approved carriers across North America and worldwide shipping partners.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock availability and real-time shipment tracking.',
  },
  {
    icon: Shield,
    title: 'Certified Partners',
    description: 'C-TPAT and OEA certified carriers ensuring security and compliance.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Our <span className="text-accent-500">Services</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive logistics solutions tailored to your needs. From ground transportation
              to air and ocean freight, we deliver cargo beyond borders.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.slug}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <ImagePlaceholder
                      description={service.imageDescription}
                      aspectRatio="video"
                      className="rounded-2xl shadow-lg"
                    />
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                        <Icon size={28} className="text-primary-600" />
                      </div>
                      <div>
                        <h2 className="heading-3 text-primary-900">{service.title}</h2>
                        <p className="text-accent-500 font-medium">Coverage: {service.coverage}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle size={18} className="text-accent-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-primary-900 mb-4">
              Why Ship With Unilink?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card p-8 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Our logistics experts are ready to design a transportation solution tailored to your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn-accent">
              Request a Quote
            </Link>
            <a href="tel:972-200-0606" className="btn-secondary">
              Call 972-200-0606
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
