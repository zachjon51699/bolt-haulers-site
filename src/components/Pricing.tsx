import React from 'react';
import { Check, Plus } from 'lucide-react';

const Pricing = () => {
  const movingPricing = [
    {
      title: 'Hourly Rate',
      price: '$99',
      period: '/hour',
      description: '2 movers + 1 truck (1-hour minimum)',
      features: [
        'Professional movers',
        'Moving truck included',
        'Basic moving equipment',
        'Local moves only'
      ],
      addOn: 'Add $40/hour per extra mover'
    },
    {
      title: 'Dorm Storage Move',
      price: '$199',
      period: 'flat rate',
      description: 'Pickup & drop-off from LSU dorms',
      features: [
        'Perfect for students',
        'Includes transportation',
        'Quick turnaround',
        'Secure storage drop-off'
      ]
    },
    {
      title: 'Apartment Move',
      price: '$249–$349',
      period: 'flat rate',
      description: 'Apartment to apartment (within 10 miles)',
      features: [
        'Complete apartment moves',
        'Up to 10 miles',
        'Professional service',
        'Transparent pricing'
      ],
      popular: true
    }
  ];

  const junkRemovalPricing = [
    {
      title: 'Single Item',
      price: '$75',
      description: 'One item pickup and disposal',
      features: ['Quick service', 'Eco-friendly disposal', 'No hidden fees']
    },
    {
      title: 'Small Load',
      price: '$150',
      description: '1–2 yards of junk',
      features: ['Perfect for small cleanouts', 'Same-day service', 'Professional crew']
    },
    {
      title: 'Medium Load',
      price: '$250',
      description: '3–4 yards of junk',
      features: ['Home renovations', 'Office cleanouts', 'Furniture removal']
    },
    {
      title: 'Full Trailer',
      price: '$350',
      description: 'Up to 6 yards (max capacity)',
      features: ['Estate cleanouts', 'Large projects', 'Dump fee included up to 1 ton']
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Our pricing is straightforward and competitive.
          </p>
        </div>

        {/* Moving Services Pricing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Moving Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {movingPricing.map((plan, index) => (
              <div key={index} className={`rounded-xl p-8 ${plan.popular ? 'bg-blue-700 text-white ring-4 ring-blue-200' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.title}</h4>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                    <span className={`text-lg ml-1 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>{plan.period}</span>
                  </div>
                  <p className={`mt-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-blue-200' : 'text-green-600'}`} />
                      <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.addOn && (
                  <div className={`text-sm p-3 rounded-lg ${plan.popular ? 'bg-blue-800' : 'bg-gray-50'}`}>
                    <Plus className={`h-4 w-4 inline mr-1 ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`} />
                    <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{plan.addOn}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Junk Removal Pricing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Junk Removal</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {junkRemovalPricing.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{plan.title}</h4>
                  <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                  <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              <span className="font-semibold">Note:</span> Dump fees passed to customer beyond 1 ton. TVs/mattresses: +$40
            </p>
          </div>
        </div>

        {/* Student Storage Pricing */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Student Summer Storage</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Simple Per-Box Pricing</h4>
            <div className="text-4xl font-bold text-gray-900 mb-2">$15</div>
            <p className="text-gray-600 mb-4">per box/month — no hidden fees</p>
            <ul className="space-y-3 text-left max-w-sm mx-auto">
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>LSU dorm pickup & drop-off included</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Secure local storage facility</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>No minimums or complicated tiers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
