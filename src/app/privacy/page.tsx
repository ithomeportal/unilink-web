import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Unilink Transportation',
  description: 'Privacy Policy for Unilink Transportation services.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-4">Privacy Policy</h1>
            <p className="text-primary-200">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="heading-3 text-primary-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-8">
              Unilink Transportation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our services.
            </p>

            <h2 className="heading-3 text-primary-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and shipping details that you voluntarily provide when requesting quotes or contacting us.</li>
              <li><strong>Shipment Information:</strong> Origin and destination addresses, cargo descriptions, and other logistics-related information necessary to provide our services.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
            </ul>

            <h2 className="heading-3 text-primary-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Provide, operate, and maintain our transportation and logistics services</li>
              <li>Process and respond to your quote requests and inquiries</li>
              <li>Communicate with you about shipments, services, and updates</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="heading-3 text-primary-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-8">
              We may share your information with third parties only in the following situations:
              with carrier partners to fulfill shipments, with service providers who assist in our operations,
              to comply with legal requirements, or with your consent.
            </p>

            <h2 className="heading-3 text-primary-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-8">
              We implement appropriate technical and organizational security measures to protect your
              personal information. However, no method of transmission over the Internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>

            <h2 className="heading-3 text-primary-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-8">
              Depending on your location, you may have certain rights regarding your personal information,
              including the right to access, correct, or delete your data. Contact us to exercise these rights.
            </p>

            <h2 className="heading-3 text-primary-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700"><strong>Unilink Transportation</strong></p>
              <p className="text-gray-600">San Antonio, TX</p>
              <p className="text-gray-600">Phone: 972-200-0606</p>
              <p className="text-gray-600">Email: sales@unilinktransportation.com</p>
            </div>

            <div className="pt-8 border-t">
              <Link href="/" className="btn-primary">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
