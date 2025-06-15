
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Users, Award, Phone, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    'general-dentistry': {
      title: "General Dentistry",
      subtitle: "Comprehensive Oral Health Care Under the Moonlight",
      description: "Our general dentistry services form the foundation of excellent oral health. We provide comprehensive care using the latest techniques and technology in our serene moonlight environment.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop",
      features: [
        "Comprehensive Oral Examinations",
        "Professional Dental Cleanings",
        "Cavity Detection and Fillings",
        "Fluoride Treatments",
        "Dental X-rays and Imaging",
        "Gum Disease Prevention",
        "Oral Cancer Screenings",
        "Preventive Care Education"
      ],
      process: [
        { step: "Initial Consultation", desc: "Comprehensive examination and health history review" },
        { step: "Digital Imaging", desc: "Advanced X-rays and 3D imaging for accurate diagnosis" },
        { step: "Treatment Planning", desc: "Personalized care plan tailored to your needs" },
        { step: "Treatment Execution", desc: "Gentle, professional treatment in our moonlight setting" },
        { step: "Follow-up Care", desc: "Ongoing monitoring and preventive care" }
      ],
      benefits: [
        "Early detection of dental problems",
        "Prevention of costly future treatments",
        "Maintaining optimal oral health",
        "Fresh breath and confident smile",
        "Overall health improvement"
      ]
    },
    'cosmetic-dentistry': {
      title: "Cosmetic Dentistry",
      subtitle: "Transform Your Smile to Shine Like Moonbeams",
      description: "Our cosmetic dentistry services are designed to enhance your smile's beauty while maintaining optimal oral health. We use advanced techniques to create stunning, natural-looking results.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfdb7ee46c?w=800&h=500&fit=crop",
      features: [
        "Professional Teeth Whitening",
        "Porcelain Veneers",
        "Dental Bonding",
        "Smile Makeovers",
        "Gum Contouring",
        "Tooth Reshaping",
        "Cosmetic Crowns",
        "Digital Smile Design"
      ],
      process: [
        { step: "Smile Analysis", desc: "Digital assessment of your current smile" },
        { step: "Design Phase", desc: "Creating your ideal smile using advanced technology" },
        { step: "Treatment Planning", desc: "Step-by-step plan for your transformation" },
        { step: "Gentle Procedures", desc: "Comfortable treatment in our moonlight environment" },
        { step: "Final Reveal", desc: "Your stunning new smile that glows" }
      ],
      benefits: [
        "Increased confidence and self-esteem",
        "Professional appearance enhancement",
        "Natural-looking results",
        "Long-lasting smile transformation",
        "Improved facial aesthetics"
      ]
    },
    'orthodontics': {
      title: "Orthodontics",
      subtitle: "Straight Teeth in Our Serene Moonlight Setting",
      description: "Our orthodontic treatments help you achieve perfectly aligned teeth using both traditional and modern approaches, all within our calming moonlight atmosphere.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=500&fit=crop",
      features: [
        "Traditional Metal Braces",
        "Clear Ceramic Braces",
        "Invisalign Clear Aligners",
        "Retainers and Maintenance",
        "Bite Correction",
        "Early Orthodontic Treatment",
        "Adult Orthodontics",
        "Digital Treatment Planning"
      ],
      process: [
        { step: "Initial Assessment", desc: "Comprehensive orthodontic examination" },
        { step: "3D Imaging", desc: "Advanced digital modeling of your teeth" },
        { step: "Treatment Selection", desc: "Choosing the best option for your lifestyle" },
        { step: "Active Treatment", desc: "Regular adjustments and monitoring" },
        { step: "Retention Phase", desc: "Maintaining your perfect smile" }
      ],
      benefits: [
        "Improved bite function",
        "Enhanced facial appearance",
        "Easier teeth cleaning",
        "Reduced risk of dental problems",
        "Boosted self-confidence"
      ]
    },
    'emergency-care': {
      title: "Emergency Dental Care",
      subtitle: "24/7 Immediate Care When You Need It Most",
      description: "Dental emergencies don't wait for convenient times. Our emergency care services are available around the clock to provide immediate relief and treatment.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=500&fit=crop",
      features: [
        "24/7 Emergency Availability",
        "Immediate Pain Relief",
        "Trauma and Injury Care",
        "Emergency Tooth Extraction",
        "Urgent Dental Repairs",
        "Infection Treatment",
        "Lost Filling/Crown Replacement",
        "Same-Day Emergency Appointments"
      ],
      process: [
        { step: "Emergency Contact", desc: "Call our 24/7 emergency line" },
        { step: "Immediate Triage", desc: "Quick assessment of your condition" },
        { step: "Pain Management", desc: "Immediate relief from dental pain" },
        { step: "Emergency Treatment", desc: "Urgent care to address the problem" },
        { step: "Follow-up Care", desc: "Continued treatment plan if needed" }
      ],
      benefits: [
        "Immediate pain relief",
        "Prevention of further damage",
        "Peace of mind knowing help is available",
        "Professional emergency care",
        "Quick resolution of dental crises"
      ]
    },
    'pediatric-dentistry': {
      title: "Pediatric Dentistry",
      subtitle: "Gentle Care for Children in Our Magical Moonlight Setting",
      description: "We specialize in making dental visits fun and comfortable for children, creating positive experiences that last a lifetime in our specially designed moonlight environment.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
      features: [
        "Child-Friendly Environment",
        "Preventive Pediatric Care",
        "Dental Sealants",
        "Fluoride Treatments",
        "Cavity Prevention Education",
        "Early Orthodontic Assessment",
        "Behavior Management",
        "Sedation Options for Anxious Children"
      ],
      process: [
        { step: "Fun Introduction", desc: "Making your child comfortable in our moonlight setting" },
        { step: "Gentle Examination", desc: "Child-friendly assessment techniques" },
        { step: "Education & Fun", desc: "Teaching proper oral hygiene through games" },
        { step: "Gentle Treatment", desc: "Pain-free procedures designed for children" },
        { step: "Reward & Encouragement", desc: "Celebrating good dental habits" }
      ],
      benefits: [
        "Positive dental experiences",
        "Early prevention of dental problems",
        "Proper oral hygiene habits",
        "Reduced dental anxiety",
        "Healthy smiles that last a lifetime"
      ]
    },
    'dental-implants': {
      title: "Dental Implants",
      subtitle: "Permanent Solution for Missing Teeth That Glow",
      description: "Our dental implant services provide a permanent, natural-looking solution for missing teeth, restoring both function and aesthetics with results that shine.",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=500&fit=crop",
      features: [
        "Single Tooth Implants",
        "Multiple Tooth Implants",
        "Full Mouth Reconstruction",
        "Bone Grafting Procedures",
        "Implant-Supported Dentures",
        "Same-Day Implants",
        "Digital Implant Planning",
        "Premium Implant Materials"
      ],
      process: [
        { step: "Comprehensive Planning", desc: "3D imaging and treatment planning" },
        { step: "Implant Placement", desc: "Precise surgical placement of titanium implants" },
        { step: "Healing Period", desc: "Osseointegration and tissue healing" },
        { step: "Crown Placement", desc: "Custom crown attachment" },
        { step: "Long-term Care", desc: "Ongoing maintenance and monitoring" }
      ],
      benefits: [
        "Permanent tooth replacement",
        "Natural look and feel",
        "Improved chewing function",
        "Prevents bone loss",
        "Long-lasting solution"
      ]
    }
  };

  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#ccccff]/30 to-[#a3a3cc]/30">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#292966] mb-4">Service Not Found</h1>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-[#5c5c99] to-[#292966] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Return Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ccccff]/30 to-[#a3a3cc]/30">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#5c5c99] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#a3a3cc] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-[#5c5c99] hover:text-[#292966] mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#292966] mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-[#5c5c99] mb-8 leading-relaxed">
                {service.subtitle}
              </p>
              <p className="text-lg text-[#5c5c99] mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#5c5c99] to-[#292966] text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </button>
                <button className="border-2 border-[#5c5c99] text-[#5c5c99] px-8 py-4 rounded-full hover:bg-[#5c5c99] hover:text-white transition-all duration-300 font-semibold flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292966]/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-[#292966]/90 to-[#5c5c99]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our {service.title} Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <Check className="w-8 h-8 text-[#ccccff] mb-4" />
                <h3 className="text-white font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#292966] text-center mb-16">
            Our Treatment Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-[#5c5c99] to-[#292966] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#292966] mb-2">{step.step}</h3>
                <p className="text-[#5c5c99] text-sm">{step.desc}</p>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#a3a3cc] to-[#ccccff] transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[#ccccff]/40 to-[#a3a3cc]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#292966] mb-8">
                Benefits of Our {service.title}
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#5c5c99] to-[#292966] rounded-full mr-4"></div>
                    <span className="text-[#5c5c99] text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#292966] to-[#5c5c99] rounded-3xl p-8 text-white">
              <div className="text-center">
                <Clock className="w-16 h-16 mx-auto mb-6 text-[#ccccff]" />
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-[#ccccff] mb-6">
                  Experience the magic of our moonlight dental care. Schedule your consultation today.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <Users className="w-8 h-8 mx-auto mb-2 text-[#ccccff]" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-[#ccccff]">Happy Patients</div>
                  </div>
                  <div>
                    <Award className="w-8 h-8 mx-auto mb-2 text-[#ccccff]" />
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-[#ccccff]">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
