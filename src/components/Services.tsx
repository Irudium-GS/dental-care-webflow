
import { Stethoscope, Sparkles, Smile, AlertTriangle, Baby, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'general-dentistry',
      icon: Stethoscope,
      title: "General Dentistry",
      description: "Comprehensive oral care including cleanings, fillings, and preventive treatments under our gentle moonlight approach",
      features: ["Regular Cleanings", "Cavity Fillings", "Oral Exams", "Fluoride Treatments"],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop"
    },
    {
      id: 'cosmetic-dentistry',
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic procedures that shine as bright as moonbeams",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
      image: "https://images.unsplash.com/photo-1606811841689-23dfdb7ee46c?w=400&h=300&fit=crop"
    },
    {
      id: 'orthodontics',
      icon: Smile,
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or modern clear aligners in our serene environment",
      features: ["Traditional Braces", "Invisalign", "Retainers", "Bite Correction"],
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
    },
    {
      id: 'emergency-care',
      icon: AlertTriangle,
      title: "Emergency Care",
      description: "24/7 immediate dental care when you need it most, available under the moonlight",
      features: ["24/7 Emergency", "Pain Relief", "Trauma Care", "Urgent Repairs"],
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=300&fit=crop"
    },
    {
      id: 'pediatric-dentistry',
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Gentle, specialized care for children in our magical moonlight setting",
      features: ["Child-Friendly Environment", "Preventive Care", "Education", "Sealants"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      id: 'dental-implants',
      icon: Wrench,
      title: "Dental Implants",
      description: "Permanent solution for missing teeth with natural-looking results that glow",
      features: ["Single Implants", "Multiple Implants", "Full Mouth", "Bone Grafting"],
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#ccccff]/30 to-[#a3a3cc]/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#5c5c99] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#a3a3cc] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#ccccff] to-[#a3a3cc] rounded-full text-[#292966] font-semibold text-sm mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Dental Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#292966] mb-6">
            Our Moonlight <span className="text-[#5c5c99]">Services</span>
          </h2>
          <p className="text-xl text-[#5c5c99] max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive dental care using the latest technology and techniques 
            in our serene moonlight atmosphere to ensure your comfort and satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#ccccff]/80 to-[#a3a3cc]/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-[#ccccff]/50"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292966]/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6 text-[#5c5c99]" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#292966] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#5c5c99] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[#5c5c99]">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#a3a3cc] to-[#5c5c99] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full bg-gradient-to-r from-[#5c5c99] to-[#292966] text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold group-hover:from-[#292966] group-hover:to-[#5c5c99] block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#292966] via-[#5c5c99] to-[#a3a3cc] rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Smile Under the Moonlight?
              </h3>
              <p className="text-xl mb-8 text-[#ccccff] max-w-2xl mx-auto">
                Experience our unique moonlight dental care approach. Schedule your consultation 
                today and discover the magic of our gentle, comprehensive treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-white text-[#292966] px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1 inline-flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Book Your Moonlight Appointment</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="border-2 border-white/50 text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#292966] transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center space-x-2"
                >
                  <AlertTriangle className="w-5 h-5" />
                  <span>Emergency Care</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
