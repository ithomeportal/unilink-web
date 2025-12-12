import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Plane, CheckCircle, ArrowRight, Clock, Globe, Zap, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Air Freight Services | Unilink Transportation',
  description: 'Time-sensitive air freight solutions including air charter, next day delivery, and expedited LTL. Domestic and international air cargo services.',
};

const serviceOptions = [
  {
    name: 'Air Charter',
    description: 'Dedicated aircraft for your most urgent and specialized shipments.',
    icon: Plane,
  },
  {
    name: 'Next Available Flight',
    description: 'Get your cargo on the next departing flight for fastest transit.',
    icon: Zap,
  },
  {
    name: 'Next Day AM/PM',
    description: 'Guaranteed next-day delivery with morning or afternoon options.',
    icon: Clock,
  },
  {
    name: '2nd Day Air',
    description: 'Cost-effective option for time-sensitive but flexible shipments.',
    icon: Package,
  },
  {
    name: '3rd Day Air',
    description: 'Budget-friendly air option when you have a bit more time.',
    icon: Package,
  },
  {
    name: 'Expedited LTL',
    description: 'Less-than-truckload expedited services for smaller shipments.',
    icon: Zap,
  },
];

const features = [
  { icon: Globe, title: 'Global Reach', description: 'Domestic and international air capacity worldwide' },
  { icon: Clock, title: 'Time-Critical', description: 'On-time delivery is our utmost priority' },
  { icon: Zap, title: 'Fast Response', description: 'Dedicated expert teams ready to serve you' },
  { icon: Package, title: 'Any Size', description: 'Handle shipments of any size or weight' },
];

export default function AirFreightPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pt-32 pb-20 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Plane size={24} className="text-white" />
                </div>
                <span className="text-accent-500 font-semibold">Air Transportation</span>
              </div>

              <h1 className="heading-1 text-white mb-6">
                Air <span className="text-accent-500">Freight</span> Services
              </h1>

              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Air Transportation changes the ability of worldwide companies to compete in every market.
                Affordable, time-sensitive services with on-time delivery as our priority.
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
                src="/images/air-freight-hero.jpg"
                alt="Air freight cargo services"
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
                Compete Globally with Air Freight
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Whether your shipment is large or small, heavy or light, going across the country
                or around the world, we have the capability to deliver. Our air freight services
                give you the competitive edge in today&apos;s fast-paced global market.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We maintain access to both domestic and international air capacity with dedicated
                expert teams ready to handle your time-sensitive shipments with care and precision.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  'Access to domestic and international air capacity',
                  'Dedicated expert teams for your shipments',
                  'Flexible delivery options from same-day to 3rd day',
                  'Real-time tracking and updates',
                  'Customs clearance assistance for international shipments',
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
                src="/images/air-freight-hero.jpg"
                alt="Air cargo operations"
                width={600}
                height={600}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-primary-900 mb-4">
              Air Freight Options
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the service level that matches your timeline and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="card p-6 hover:border-primary-500 border-2 border-transparent transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-2">{option.name}</h3>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Air Freight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/images/coverage-map.jpg"
                alt="Global air freight coverage"
                width={800}
                height={450}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="heading-2 text-primary-900">
                When Speed <span className="text-accent-500">Matters Most</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Air freight is the solution when time is critical. Whether you&apos;re responding to an
                emergency, meeting a tight deadline, or simply need the fastest transit time possible,
                our air freight services deliver.
              </p>

              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-semibold text-primary-900 mb-3">Ideal for:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent-500" />
                    Emergency parts and equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent-500" />
                    Time-sensitive documents
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent-500" />
                    High-value goods
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent-500" />
                    Perishable items
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent-500" />
                    Trade show materials
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Need It There Fast?</h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Contact us for a customized air freight solution. We&apos;ll find the fastest,
            most cost-effective option for your shipment.
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
