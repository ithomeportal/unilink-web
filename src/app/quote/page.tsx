'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Truck, Plane, Ship, CheckCircle, Phone, Clock, Shield, Send } from 'lucide-react';

const serviceTypes = [
  { id: 'trucking', name: 'Over The Road', icon: Truck, description: 'Ground transportation across North America' },
  { id: 'air', name: 'Air Freight', icon: Plane, description: 'Time-sensitive air cargo services' },
  { id: 'ocean', name: 'Ocean Shipping', icon: Ship, description: 'International ocean freight' },
];

const equipmentTypes = [
  'Dry Van 48\'',
  'Dry Van 53\'',
  'Flatbed 48\'',
  'Flatbed 53\'',
  'Reefer 48\'',
  'Reefer 53\'',
  'Over-Dimension',
  'Other',
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Service selection
    serviceType: '',
    // Shipment details
    originCity: '',
    originState: '',
    originCountry: 'USA',
    destinationCity: '',
    destinationState: '',
    destinationCountry: 'USA',
    // Cargo details
    weight: '',
    dimensions: '',
    commodity: '',
    equipmentType: '',
    hazmat: false,
    // Timeline
    pickupDate: '',
    deliveryDate: '',
    flexibility: 'flexible',
    // Contact info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    additionalNotes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, serviceType: serviceId });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (isSubmitted) {
    return (
      <>
        <section className="bg-gradient-hero pt-32 pb-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-1 text-white mb-6">Quote Request</h1>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-2xl">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h2 className="heading-2 text-green-800 mb-4">Quote Request Submitted!</h2>
              <p className="text-green-700 text-lg mb-8">
                Thank you for your request. Our team will review your shipment details and
                get back to you with a competitive quote within 24 hours.
              </p>
              <div className="space-y-4">
                <p className="text-green-600">
                  <strong>Reference:</strong> #{Math.random().toString(36).substring(2, 10).toUpperCase()}
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link href="/" className="btn-primary">
                    Return Home
                  </Link>
                  <a href="tel:972-200-0606" className="btn-secondary">
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Request a <span className="text-accent-500">Quote</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Get a competitive quote for your shipment. Fill out the form below and
              our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white py-8 border-b sticky top-0 z-30">
        <div className="container-custom">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {['Service', 'Shipment', 'Cargo', 'Contact'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      step > index + 1
                        ? 'bg-accent-500 text-white'
                        : step === index + 1
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step > index + 1 ? <CheckCircle size={20} /> : index + 1}
                  </div>
                  <span className={`text-sm mt-2 ${step === index + 1 ? 'text-primary-600 font-semibold' : 'text-gray-500'}`}>
                    {label}
                  </span>
                </div>
                {index < 3 && (
                  <div className={`w-16 sm:w-24 h-1 mx-2 ${step > index + 1 ? 'bg-accent-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <div className="card p-8">
                    <h2 className="heading-3 text-primary-900 mb-6">Select Service Type</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                      {serviceTypes.map((service) => {
                        const Icon = service.icon;
                        const isSelected = formData.serviceType === service.id;
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => handleServiceSelect(service.id)}
                            className={`p-6 rounded-xl border-2 text-left transition-all ${
                              isSelected
                                ? 'border-primary-600 bg-primary-50'
                                : 'border-gray-200 hover:border-primary-300'
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                              isSelected ? 'bg-primary-600' : 'bg-gray-100'
                            }`}>
                              <Icon size={24} className={isSelected ? 'text-white' : 'text-gray-600'} />
                            </div>
                            <h3 className="font-bold text-primary-900 mb-1">{service.name}</h3>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.serviceType}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipment Details */}
                {step === 2 && (
                  <div className="card p-8">
                    <h2 className="heading-3 text-primary-900 mb-6">Shipment Details</h2>

                    <div className="space-y-8">
                      {/* Origin */}
                      <div>
                        <h3 className="font-semibold text-primary-900 mb-4">Origin</h3>
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                            <input
                              type="text"
                              name="originCity"
                              value={formData.originCity}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                              placeholder="San Antonio"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                            <input
                              type="text"
                              name="originState"
                              value={formData.originState}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                              placeholder="TX"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                            <select
                              name="originCountry"
                              value={formData.originCountry}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            >
                              <option value="USA">United States</option>
                              <option value="Canada">Canada</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Destination */}
                      <div>
                        <h3 className="font-semibold text-primary-900 mb-4">Destination</h3>
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                            <input
                              type="text"
                              name="destinationCity"
                              value={formData.destinationCity}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                              placeholder="Los Angeles"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                            <input
                              type="text"
                              name="destinationState"
                              value={formData.destinationState}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                              placeholder="CA"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                            <select
                              name="destinationCountry"
                              value={formData.destinationCountry}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            >
                              <option value="USA">United States</option>
                              <option value="Canada">Canada</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div>
                        <h3 className="font-semibold text-primary-900 mb-4">Timeline</h3>
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                            <input
                              type="date"
                              name="pickupDate"
                              value={formData.pickupDate}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Date</label>
                            <input
                              type="date"
                              name="deliveryDate"
                              value={formData.deliveryDate}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Flexibility</label>
                            <select
                              name="flexibility"
                              value={formData.flexibility}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            >
                              <option value="flexible">Flexible (+/- few days)</option>
                              <option value="exact">Exact dates required</option>
                              <option value="asap">ASAP</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button type="button" onClick={prevStep} className="btn-secondary">
                        Back
                      </button>
                      <button type="button" onClick={nextStep} className="btn-primary">
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Cargo Details */}
                {step === 3 && (
                  <div className="card p-8">
                    <h2 className="heading-3 text-primary-900 mb-6">Cargo Details</h2>

                    <div className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Weight (lbs)</label>
                          <input
                            type="text"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            placeholder="e.g., 40,000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions (L x W x H)</label>
                          <input
                            type="text"
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            placeholder="e.g., 48' x 8' x 9'"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Commodity Description *</label>
                        <input
                          type="text"
                          name="commodity"
                          value={formData.commodity}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          placeholder="What are you shipping?"
                        />
                      </div>

                      {formData.serviceType === 'trucking' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Equipment Type</label>
                          <select
                            name="equipmentType"
                            value={formData.equipmentType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          >
                            <option value="">Select equipment type</option>
                            {equipmentTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="hazmat"
                          name="hazmat"
                          checked={formData.hazmat}
                          onChange={handleChange}
                          className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="hazmat" className="text-gray-700">
                          This shipment contains hazardous materials
                        </label>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button type="button" onClick={prevStep} className="btn-secondary">
                        Back
                      </button>
                      <button type="button" onClick={nextStep} className="btn-primary">
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Info */}
                {step === 4 && (
                  <div className="card p-8">
                    <h2 className="heading-3 text-primary-900 mb-6">Contact Information</h2>

                    <div className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                        <textarea
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 resize-none"
                          placeholder="Any special requirements or additional information..."
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button type="button" onClick={prevStep} className="btn-secondary">
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-accent flex items-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Quote Request
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-primary-900 mb-4">Why Request a Quote?</h3>
                <ul className="space-y-3">
                  {[
                    'Competitive rates tailored to your shipment',
                    'Response within 24 hours',
                    'No obligation quote',
                    'Expert recommendations',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="text-accent-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6 bg-primary-900 text-white">
                <h3 className="font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-primary-200 text-sm mb-4">
                  Call us directly for urgent shipments or immediate assistance.
                </p>
                <a href="tel:972-200-0606" className="flex items-center gap-2 text-accent-500 font-bold text-lg">
                  <Phone size={20} />
                  972-200-0606
                </a>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} className="text-primary-600" />
                  <span className="font-bold text-primary-900">24/7 Support</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Our team is available around the clock to assist with your shipping needs.
                </p>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-primary-600" />
                  <span className="font-bold text-primary-900">ISO Certified</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Quality assured with ISO 9001:2015 certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
