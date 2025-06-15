
import { User, Award, Microscope, Shield } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Dentist & Practice Owner",
      qualification: "DDS, Harvard School of Dental Medicine",
      icon: User,
      description: "15+ years of experience in general and cosmetic dentistry"
    },
    {
      name: "Dr. Michael Chen",
      title: "Orthodontist",
      qualification: "DDS, MS Orthodontics",
      icon: User,
      description: "Specialist in Invisalign and traditional orthodontic treatments"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Dentist",
      qualification: "DDS, Pediatric Specialty",
      icon: User,
      description: "Dedicated to making dental visits fun and comfortable for children"
    },
    {
      name: "Lisa Thompson",
      title: "Dental Hygienist",
      qualification: "RDH, 10+ years experience",
      icon: User,
      description: "Expert in preventive care and patient education"
    }
  ];

  const certifications = [
    {
      name: "ADA Member",
      icon: Award,
      bgColor: "bg-purple-100"
    },
    {
      name: "Board Certified",
      icon: Shield,
      bgColor: "bg-indigo-100"
    },
    {
      name: "Latest Technology",
      icon: Microscope,
      bgColor: "bg-purple-100"
    },
    {
      name: "Insurance Accepted",
      icon: Shield,
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-purple-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced team of dental professionals is committed to providing 
            you with the highest quality care in a comfortable, welcoming environment.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At SmileCare Dental, we believe everyone deserves a healthy, beautiful smile. 
              We combine cutting-edge technology with compassionate care to deliver exceptional 
              dental services that exceed your expectations. Our commitment to excellence and 
              patient satisfaction drives everything we do.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-gray-100"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-2">
                  {member.title}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {member.qualification}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Certifications & Affiliations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`${cert.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">{cert.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
