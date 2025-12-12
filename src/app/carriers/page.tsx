'use client';

import { useState } from 'react';
import { Truck, CheckCircle, Users, Shield, Clock, ArrowRight, Zap, DollarSign, Headphones } from 'lucide-react';

const benefits = [
  { icon: DollarSign, title: 'Competitive Pay', description: 'Fair market rates with quick payment options to keep your business moving' },
  { icon: Zap, title: 'Consistent Freight', description: 'Steady load opportunities across North America - USA, Canada & Mexico' },
  { icon: Headphones, title: '24/7 Support', description: 'Real humans available around the clock, backed by cutting-edge technology' },
  { icon: Shield, title: 'Trusted Partnership', description: 'Join a network of pre-approved carriers with ISO 9001:2015 standards' },
];

const whyPartner = [
  'Digital-first operations with human expertise - the best of both worlds',
  'Dedicated carrier representatives who know your business',
  'Advanced TMS integration for seamless load tracking',
  'Fast onboarding process - start hauling in days, not weeks',
  'Fuel advance programs available',
  'No forced dispatch - choose the loads that work for you',
];

const equipmentOptions = [
  'Dry Van 48\'',
  'Dry Van 53\'',
  'Flatbed 48\'',
  'Flatbed 53\'',
  'Reefer 48\'',
  'Reefer 53\'',
  'Step Deck',
  'Over-Dimension / Specialized',
];

export default function CarriersPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    mcNumber: '',
    dotNumber: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    fleetSize: '',
    equipmentTypes: [] as string[],
    operatingStates: '',
    yearsInBusiness: '',
    additionalInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Carrier Application:', formData);
    setSubmitted(true);
  };

  const handleEquipmentChange = (equipment: string) => {
    setFormData(prev => ({
      ...prev,
      equipmentTypes: prev.equipmentTypes.includes(equipment)
        ? prev.equipmentTypes.filter(e => e !== equipment)
        : [...prev.equipmentTypes, equipment]
    }));
  };

  if (submitted) {
    return (
      <>
        <section className="bg-gradient-hero pt-32 pb-20">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h1 className="heading-1 text-white mb-6">Application Received!</h1>
              <p className="text-xl text-primary-100">
                Thank you for your interest in partnering with Unilink Transportation.
                Our carrier relations team will review your information and contact you
                within 1-2 business days.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="heading-3 text-primary-900 mb-4">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Verification</h3>
                <p className="text-gray-600 text-sm">Our team verifies your MC/DOT, insurance, and safety record</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Welcome Call</h3>
                <p className="text-gray-600 text-sm">Your dedicated rep will reach out to discuss lanes and rates</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Start Hauling</h3>
                <p className="text-gray-600 text-sm">Complete onboarding and book your first load with Unilink</p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-gray-600 mb-4">Questions? Call our carrier team directly:</p>
              <a href="tel:972-200-0606" className="text-2xl font-bold text-primary-600 hover:text-accent-500">
                972-200-0606
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Truck size={24} className="text-white" />
                </div>
                <span className="text-accent-500 font-semibold">Carrier Partnership</span>
              </div>
              <h1 className="heading-1 text-white mb-6">
                Partner With a <span className="text-accent-500">Digital-First</span> Freight Leader
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Join Unilink Transportation&apos;s growing network of trusted carriers.
                We combine cutting-edge technology with 24/7 human support to help you
                grow your business across North America.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-accent-500" />
                  <span>Quick Onboarding</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-accent-500" />
                  <span>Consistent Freight</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="text-center text-white">
                  <Users size={48} className="mx-auto mb-4 text-accent-500" />
                  <h3 className="text-2xl font-bold mb-2">Join 500+ Carriers</h3>
                  <p className="text-primary-200">
                    Trusted partners delivering excellence across USA, Canada & Mexico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white -mt-1 relative z-20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary-600" />
                  </div>
                  <h3 className="font-bold text-primary-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 text-primary-900 mb-6">
                Why Carriers Choose <span className="text-accent-500">Unilink</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We&apos;re not just another broker. We&apos;re a technology-powered partner that
                treats carriers as an extension of our team. Our hybrid model combines
                digital efficiency with dedicated human support - because we know that
                behind every truck is a business owner who deserves respect and fair treatment.
              </p>
              <div className="space-y-4">
                {whyPartner.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">The Unilink Difference</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Technology That Works For You</h4>
                    <p className="text-primary-200 text-sm">Real-time tracking, digital paperwork, and instant load booking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Humans When You Need Them</h4>
                    <p className="text-primary-200 text-sm">24/7 dispatch support from trained professionals who understand trucking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fair & Fast Payment</h4>
                    <p className="text-primary-200 text-sm">Competitive rates with quick pay options to keep your cash flowing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-primary-900 mb-4">Start Your Partnership</h2>
              <p className="text-gray-600 text-lg">
                Complete the form below and our carrier team will reach out within 1-2 business days.
                Fast onboarding means you could be hauling with us this week.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="card p-8 md:p-12">
              {/* Company Information */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary-900 mb-6 pb-2 border-b">
                  Company Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      MC Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.mcNumber}
                      onChange={(e) => setFormData({ ...formData, mcNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="MC-XXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      DOT Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.dotNumber}
                      onChange={(e) => setFormData({ ...formData, dotNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="DOT Number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years in Business
                    </label>
                    <input
                      type="text"
                      value={formData.yearsInBusiness}
                      onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., 5 years"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary-900 mb-6 pb-2 border-b">
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City, State
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="San Antonio, TX"
                    />
                  </div>
                </div>
              </div>

              {/* Fleet Information */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary-900 mb-6 pb-2 border-b">
                  Fleet Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fleet Size (Number of Trucks)
                    </label>
                    <input
                      type="text"
                      value={formData.fleetSize}
                      onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., 5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Lanes / Operating Area
                    </label>
                    <input
                      type="text"
                      value={formData.operatingStates}
                      onChange={(e) => setFormData({ ...formData, operatingStates: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., TX to CA, Southeast region"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Equipment Types (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {equipmentOptions.map((equipment) => (
                      <label
                        key={equipment}
                        className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                          formData.equipmentTypes.includes(equipment)
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.equipmentTypes.includes(equipment)}
                          onChange={() => handleEquipmentChange(equipment)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          formData.equipmentTypes.includes(equipment)
                            ? 'bg-primary-500 border-primary-500'
                            : 'border-gray-400'
                        }`}>
                          {formData.equipmentTypes.includes(equipment) && (
                            <CheckCircle size={12} className="text-white" />
                          )}
                        </div>
                        <span className="text-sm">{equipment}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary-900 mb-6 pb-2 border-b">
                  Additional Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Anything else we should know? (optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Special capabilities, certifications, preferred freight types..."
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-accent inline-flex items-center gap-2 px-8 py-4 text-lg"
                >
                  Submit Application
                  <ArrowRight size={20} />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  By submitting, you agree to be contacted by Unilink Transportation regarding carrier opportunities.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
