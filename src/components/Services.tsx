
const Services = () => {
  const services = [
    {
      icon: "🦷",
      title: "General Dentistry",
      description: "Comprehensive oral care including cleanings, fillings, and preventive treatments",
      features: ["Regular Cleanings", "Cavity Fillings", "Oral Exams", "Fluoride Treatments"]
    },
    {
      icon: "✨",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic procedures",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"]
    },
    {
      icon: "🦷",
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or modern clear aligners",
      features: ["Traditional Braces", "Invisalign", "Retainers", "Bite Correction"]
    },
    {
      icon: "🚨",
      title: "Emergency Care",
      description: "Immediate dental care when you need it most",
      features: ["24/7 Emergency", "Pain Relief", "Trauma Care", "Urgent Repairs"]
    },
    {
      icon: "👶",
      title: "Pediatric Dentistry",
      description: "Gentle, specialized care for children and teenagers",
      features: ["Child-Friendly Environment", "Preventive Care", "Education", "Sealants"]
    },
    {
      icon: "🔧",
      title: "Dental Implants",
      description: "Permanent solution for missing teeth with natural-looking results",
      features: ["Single Implants", "Multiple Implants", "Full Mouth", "Bone Grafting"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive dental care using the latest technology and techniques 
            to ensure your comfort and satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Schedule your consultation today and discover what we can do for you.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
