
import { Award, Microscope, Shield, GraduationCap } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Dentist & Practice Owner",
      qualification: "DDS, Harvard School of Dental Medicine",
      description: "15+ years of experience in general and cosmetic dentistry",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Chen",
      title: "Orthodontist",
      qualification: "DDS, MS Orthodontics",
      description: "Specialist in Invisalign and traditional orthodontic treatments",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Dentist",
      qualification: "DDS, Pediatric Specialty",
      description: "Dedicated to making dental visits fun and comfortable for children",
      image: "https://images.unsplash.com/photo-1594824773652-a3e7b937ac89?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      title: "Dental Hygienist",
      qualification: "RDH, 10+ years experience",
      description: "Expert in preventive care and patient education",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&crop=face"
    }
  ];

  const certifications = [
    {
      name: "ADA Member",
      icon: Award,
      bgColor: "bg-gradient-to-br from-[#ccccff] to-[#a3a3cc]"
    },
    {
      name: "Board Certified",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-[#a3a3cc] to-[#5c5c99]"
    },
    {
      name: "Latest Technology",
      icon: Microscope,
      bgColor: "bg-gradient-to-br from-[#5c5c99] to-[#292966]"
    },
    {
      name: "Continuing Education",
      icon: GraduationCap,
      bgColor: "bg-gradient-to-br from-[#292966] to-[#ccccff]"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ccccff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#a3a3cc] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#ccccff] to-[#a3a3cc] rounded-full text-[#292966] font-semibold text-sm mb-6 shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            Expert Dental Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#292966] mb-6">
            Meet Our <span className="text-[#5c5c99]">Moonlight Experts</span>
          </h2>
          <p className="text-xl text-[#5c5c99] max-w-3xl mx-auto leading-relaxed">
            Our experienced team of dental professionals combines expertise with compassion, 
            providing you with the highest quality care in our serene moonlight environment.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#ccccff]/40 via-white to-[#a3a3cc]/40 rounded-3xl p-12 md:p-16 mb-20 backdrop-blur-sm shadow-xl border border-[#ccccff]/30">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-[#5c5c99] to-[#292966] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#292966] mb-6">Our Moonlight Mission</h3>
            <p className="text-lg text-[#5c5c99] leading-relaxed max-w-4xl mx-auto">
              At SmileCare Dental, we believe everyone deserves a healthy, beautiful smile that shines 
              as bright as the moon. We combine cutting-edge technology with compassionate, gentle care 
              in our serene moonlight atmosphere to deliver exceptional dental services that exceed your expectations. 
              Our commitment to excellence and patient satisfaction illuminates everything we do.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-[#ccccff]/50"
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292966]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#ccccff] text-sm font-semibold">
                    {member.title}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#5c5c99] font-semibold mb-3">
                  {member.qualification}
                </p>
                <p className="text-[#5c5c99] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-[#292966] via-[#5c5c99] to-[#a3a3cc] rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Certifications & Excellence Under the Moonlight
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`${cert.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white font-semibold">{cert.name}</p>
                </div>
              );
            })}
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-[#ccccff]">Moonlight Smiles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-[#ccccff]">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-[#ccccff]">Care Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-[#ccccff]">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
