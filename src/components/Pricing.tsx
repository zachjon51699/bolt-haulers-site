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
      title: 'Dorm Move',
      price: '$149-$199',
      period: 'flat rate',
      description: 'Dorm to dorm or dorm to local address',
      features: [
        'Perfect for students',
        'Quick turnaround',
        'Local only',
        'No hidden fees'
      ]
    },
    {
      title: 'Apartment Move',
      price: '$249-$349',
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
      title: 'Small Load',
      price: '$125',
      description: '¼ trailer load',
      features: ['Perfect for cleanouts', 'Same-day service', 'Professional crew']
    },
    {
      title: 'Medium Load',
      price: '$250',
      description: '½ trailer load',
      features: ['Home renovations', 'Office cleanouts', 'Furniture removal']
    },
    {
      title: 'Full Trailer',
      price: '$375',
      description: 'Full 6-yard trailer load',
      features: ['Estate cleanouts', 'Large projects', 'Complete removal']
    }
  ];

  const storagePricing = [
    {
      title: 'Small Items',
      price: '$9',
      description: 'Per item monthly',
      features: [
        'Desk Fan, Headboard, Shoe Rack',
        'Folding Chair, Poster Tube, Pillow',
        'Broom, Ironing Board, Umbrella'
      ]
    },
    {
      title: 'Medium Items',
      price: '$18',
      description: 'Per item monthly',
      features: [
        'Storage Box (22x18x18), Microwave, Duffle Bag',
        'Plastic Bin < 4 cu ft, Nightstand',
        'Suitcase, Printer, End Table'
      ]
    },
    {
      title: 'Large Items',
      price: '$32',
      description: 'Per item monthly',
      features: [
        'Mini Fridge, Large Plastic Bin > 4 cu ft',
        'Television Stand, Golf Bag, Trunk',
        'Camp Duffle, Chest, Large Suitcase'
      ]
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
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
          <div className="grid md:grid-cols-3 gap-6">
            {junkRemovalPricing.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{plan.title}</h4>
                  <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                  <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
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
              <span className="font-semibold">Note:</span> $125 minimum per pickup. Add $40 for TVs or mattresses due to disposal fees.
            </p>
          </div>
        </div>

        {/* Student Storage Pricing */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Summer Storage for Students</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {storagePricing.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{plan.title}</h4>
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              <span className="font-semibold">Shipping Option:</span> $50 per box + FedEx shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
