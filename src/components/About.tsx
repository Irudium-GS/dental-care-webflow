
const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Dentist & Practice Owner",
      qualification: "DDS, Harvard School of Dental Medicine",
      image: "👩‍⚕️",
      description: "15+ years of experience in general and cosmetic dentistry"
    },
    {
      name: "Dr. Michael Chen",
      title: "Orthodontist",
      qualification: "DDS, MS Orthodontics",
      image: "👨‍⚕️",
      description: "Specialist in Invisalign and traditional orthodontic treatments"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Dentist",
      qualification: "DDS, Pediatric Specialty",
      image: "👩‍⚕️",
      description: "Dedicated to making dental visits fun and comfortable for children"
    },
    {
      name: "Lisa Thompson",
      title: "Dental Hygienist",
      qualification: "RDH, 10+ years experience",
      image: "👩‍⚕️",
      description: "Expert in preventive care and patient education"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced team of dental professionals is committed to providing 
            you with the highest quality care in a comfortable, welcoming environment.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 mb-16">
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
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-gray-100"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-2">
                {member.title}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {member.qualification}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Certifications & Affiliations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏆</span>
              </div>
              <p className="text-sm font-semibold text-gray-700">ADA Member</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✅</span>
              </div>
              <p className="text-sm font-semibold text-gray-700">Board Certified</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔬</span>
              </div>
              <p className="text-sm font-semibold text-gray-700">Latest Technology</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💯</span>
              </div>
              <p className="text-sm font-semibold text-gray-700">Insurance Accepted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
