import React from 'react';
import { Home, Trash2, Package, Clock, Shield, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-blue-700" />,
      title: 'Moving Services',
      description: 'Professional local moving for dorms, apartments, and homes. Experienced movers with proper equipment.',
      features: ['Local Moves', 'Packing Services', 'Furniture Assembly', 'Storage Solutions']
    },
    {
      icon: <Trash2 className="h-12 w-12 text-orange-600" />,
      title: 'Junk Removal',
      description: 'Fast and eco-friendly junk removal services. We handle everything from single items to full cleanouts.',
      features: ['Same-Day Service', 'Eco-Friendly Disposal', 'No Job Too Small', 'Upfront Pricing']
    },
    {
      icon: <Package className="h-12 w-12 text-green-600" />,
      title: 'Student Storage',
      description: 'Convenient summer storage solutions for LSU students. We pickup, store, and deliver your belongings.',
      features: ['LSU Area Pickup', 'Summer Storage', 'Secure Facility', 'Easy Scheduling']
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-8 w-8 text-blue-700" />,
      title: 'On-Time Service',
      description: 'We respect your time and arrive when scheduled.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-700" />,
      title: 'Fully Insured',
      description: 'Your belongings are protected with full insurance coverage.'
    },
    {
      icon: <Star className="h-8 w-8 text-blue-700" />,
      title: 'Local Experts',
      description: 'Born and raised in Baton Rouge, we know the area.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive moving and junk removal services tailored to meet your needs in Baton Rouge and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 bg-blue-700 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Bolt Haulers?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;