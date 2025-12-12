import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Eye, Heart, Award, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Unilink Transportation',
  description: 'Learn about Unilink Transportation - an international 3PL service provider specializing in transportation and logistics solutions across USA, Mexico, and Canada.',
};

const values = [
  {
    icon: Target,
    title: 'Our Purpose',
    description: 'To help you be successful at what you do. We focus on delivering timely, budget-conscious shipments with reliable service.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To earn client trust through open communication, offering competitive prices, tracking their cargo, and ensuring full transparency.',
  },
  {
    icon: Heart,
    title: 'Our Mission',
    description: 'To constantly innovate a self-propelling formula that always adds value to our customers, employees, and vendors while expanding globally as a multicultural enterprise.',
  },
];

const qualityObjectives = [
  { metric: '≥95%', label: 'Pick-up On-Time Performance' },
  { metric: '≥95%', label: 'On-Time Delivery (OTD)' },
  { metric: 'Zero', label: 'Major Audit Non-Conformities' },
];

const strengths = [
  'Drop trailer capabilities',
  'Reliable on-time performance',
  'Specialized transportation equipment',
  'Fast service delivery',
  'Advanced technology systems',
  '24/7 customer support',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              About <span className="text-accent-500">Unilink</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              One of the leading transportation and logistics providers around the world.
              We specialize in comprehensive shipping services across multiple modes including
              truck, ship, train, and airplane transport.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/images/headquarters.jpeg"
                alt="Unilink Transportation Headquarters"
                width={800}
                height={450}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="heading-2 text-primary-900">
                International 3PL Excellence
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Unilink Transportation is an international 3PL (third-party logistics) service
                provider specializing in transportation and logistics solutions. We operate a
                hybrid-asset business model with pre-approved carriers.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our firm maintains carrier partnerships that dedicate fleet portions to our
                company, enabling advance planning for shipments and spot freight coverage
                within 24 hours across USA, Mexico, and Canada.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Partner carriers hold certifications including <strong>C-TPAT</strong> and <strong>OEA</strong>,
                ensuring the highest standards of security and compliance in international trade.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/services" className="btn-primary">
                  Our Services
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-primary-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 text-lg">
              Our core values guide every decision we make and every shipment we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card p-8 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="heading-2 text-primary-900">
                Leadership
              </h2>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary-700">Erick Mendoza</h3>
                <p className="text-accent-500 font-semibold text-lg">Chief Executive Officer</p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Under the leadership of CEO Erick Mendoza, Unilink Transportation has grown
                to become one of the leading transportation and logistics providers, serving
                clients across North America and beyond.
              </p>

              <p className="text-gray-600 leading-relaxed">
                His vision for the company emphasizes innovation, customer success, and
                building a multicultural enterprise that delivers value at every touchpoint.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <Image
                src="/images/team-photo.jpeg"
                alt="Unilink Transportation Team"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Key Strengths</h2>
              <p className="text-primary-200 text-lg mb-8">
                What sets us apart in the logistics industry.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/images/truck-driver.jpg"
                alt="Unilink Professional Driver"
                width={800}
                height={450}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Award size={18} />
              ISO 9001:2015 Certified
            </div>
            <h2 className="heading-2 text-primary-900 mb-4">
              Commitment to Quality
            </h2>
            <p className="text-gray-600 text-lg">
              We maintain rigorous quality standards and continuously measure our
              performance against industry benchmarks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {qualityObjectives.map((obj, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">{obj.metric}</div>
                <p className="text-gray-600">{obj.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                {/* [PHOTO NEEDED: ISO 9001:2015 certification badge - official ISO certification logo/badge] */}
                <div className="w-24 h-24 bg-white rounded-xl shadow flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">ISO</span>
                </div>
                <p className="font-semibold text-primary-900">ISO 9001:2015</p>
                <p className="text-sm text-gray-500">Quality Management</p>
              </div>
              <div className="text-center">
                {/* [PHOTO NEEDED: C-TPAT certification logo - Customs-Trade Partnership Against Terrorism official badge] */}
                <div className="w-24 h-24 bg-white rounded-xl shadow flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-sm">C-TPAT</span>
                </div>
                <p className="font-semibold text-primary-900">C-TPAT Partners</p>
                <p className="text-sm text-gray-500">Security Certified</p>
              </div>
              <div className="text-center">
                {/* [PHOTO NEEDED: OEA certification logo - Operador Económico Autorizado official badge] */}
                <div className="w-24 h-24 bg-white rounded-xl shadow flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">OEA</span>
                </div>
                <p className="font-semibold text-primary-900">OEA Partners</p>
                <p className="text-sm text-gray-500">Authorized Economic Operator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white">
            <h2 className="heading-2 mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Experience the Unilink difference. Let us handle your logistics while you focus on growing your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote" className="btn-accent inline-flex items-center gap-2">
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link href="/careers" className="btn-secondary bg-white hover:bg-gray-100">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
