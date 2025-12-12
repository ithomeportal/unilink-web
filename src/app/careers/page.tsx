import { Metadata } from 'next';
import Link from 'next/link';
import { Users, Target, TrendingUp, Heart, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Careers | Unilink Transportation',
  description: 'Join the Unilink Transportation team. Explore career opportunities in transportation and logistics.',
};

const values = [
  {
    icon: Target,
    title: 'Clear Accountability',
    description: 'We believe in streamlined processes and results-driven outcomes.',
  },
  {
    icon: Users,
    title: 'Open Communication',
    description: 'Fostering an environment where ideas are shared and valued.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Adaptability to change and commitment to getting better every day.',
  },
  {
    icon: Heart,
    title: 'Adding Value',
    description: 'Everything we do adds value to our customers, employees, and partners.',
  },
];

const benefits = [
  'Competitive compensation packages',
  'Professional development opportunities',
  'Dynamic, multicultural work environment',
  'Career growth within a growing company',
  'Collaborative team culture',
  'Industry-leading training programs',
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Work With <span className="text-accent-500">Us</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Join a leading transportation and logistics provider. We&apos;re always looking for talented
              individuals who share our passion for excellence and customer success.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ImagePlaceholder
                description="[PHOTO NEEDED: Team photo of Unilink employees - could be office setting, team meeting, or group photo. Should show diverse, professional team members working together. Conveys positive company culture.]"
                aspectRatio="video"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="heading-2 text-primary-900">
                Join Our Growing Team
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Unilink Transportation emphasizes clear accountability, streamlined processes,
                and results-driven outcomes. We foster an environment where employees align
                with company goals and contribute effectively.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our company promotes open communication, adaptability to change, and a
                commitment to continuous improvement. We&apos;re building a multicultural
                enterprise that values every team member&apos;s contribution.
              </p>

              <div className="pt-4">
                <a
                  href="https://unilink.buk.mx/trabaja-con-nosotros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Open Positions
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-primary-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-gray-600 text-lg">
              What drives us every day and shapes our work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card p-8 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="heading-2 text-primary-900">
                Why Work at Unilink?
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                We differentiate ourselves by delivering strong industry results and customizing
                services to client needs. As part of our team, you&apos;ll have the opportunity to
                grow professionally while making a real impact.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ImagePlaceholder
                description="[PHOTO NEEDED: Professional workplace image - could be modern office space, employee at work station, or team collaboration moment. Should convey professional, positive work environment.]"
                aspectRatio="square"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carrier Partners */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ImagePlaceholder
                description="[PHOTO NEEDED: Truck driver in cab, or carrier partner handshake, or fleet of trucks. Should represent carrier partnership opportunities. Professional and welcoming.]"
                aspectRatio="video"
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="heading-2">
                Carrier <span className="text-accent-500">Partners</span>
              </h2>

              <p className="text-primary-200 text-lg leading-relaxed">
                We&apos;re always looking to expand our network of trusted carrier partners.
                Join our network and gain access to consistent freight, competitive rates,
                and dedicated support.
              </p>

              <ul className="space-y-3">
                {[
                  'Access to consistent freight opportunities',
                  'Competitive rates and quick payment',
                  'Dedicated carrier support team',
                  'Technology integration for seamless operations',
                  'Long-term partnership opportunities',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
                  Become a Partner
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
            <h2 className="heading-2 text-primary-900 mb-4">Ready to Join Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our current job openings and take the next step in your career with Unilink Transportation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://unilink.buk.mx/trabaja-con-nosotros"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Available Positions
                <ExternalLink size={18} />
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact HR
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
