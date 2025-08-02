import React from 'react';
import { Users, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-700" />,
      number: 'Trusted',
      label: 'by Locals'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-700" />,
      number: 'Fast',
      label: 'Reliable Service'
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-700" />,
      number: '100%',
      label: 'Local Owned'
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-700" />,
      number: '24/7',
      label: 'Customer Support'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Bolt Haulers</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Born and raised in Baton Rouge, we understand the unique needs of our community. From helping LSU students with dorm moves to assisting families with relocations, we've been the trusted choice for reliable moving services.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team is fully insured and committed to providing exceptional service. We take pride in our work and treat your belongings with the same care we'd give our own.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4246209/pexels-photo-4246209.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Bolt Haulers team"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">Local</div>
                <div className="text-sm">Baton Rouge</div>
                <div className="text-sm">Owned & Operated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Bolt Haulers?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {[
              'Baton Rouge',
              'LSU Campus',
              'Denham Springs',
              'Prairieville',
              'Gonzales',
              'Zachary',
              'Baker',
              'Central',
              'Geismar'
            ].map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-blue-700 mx-auto mb-2" />
                <span className="font-medium text-gray-900">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Don't see your area? <a href="#contact" className="text-blue-700 hover:underline">Contact us</a> to check if we service your location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
