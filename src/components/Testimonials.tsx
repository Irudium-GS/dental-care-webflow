
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      service: "Cosmetic Dentistry",
      rating: 5,
      review: "Dr. Johnson completely transformed my smile under their magical moonlight approach! The teeth whitening and veneers look absolutely natural. The whole team made me feel like I was in a serene, calming environment.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      location: "Los Angeles, CA"
    },
    {
      name: "Robert Kim",
      service: "Dental Implants",
      rating: 5,
      review: "After years of avoiding the dentist, I finally found a place I trust. The moonlight atmosphere made the implant procedure surprisingly relaxing and the results exceeded my expectations. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "San Francisco, CA"
    },
    {
      name: "Maria Gonzalez",
      service: "Pediatric Care",
      rating: 5,
      review: "Dr. Rodriguez is amazing with children! My 7-year-old actually looks forward to dental visits now because of the magical moonlight setting. The office feels like a fairy tale and the staff is so patient and caring.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      location: "San Diego, CA"
    },
    {
      name: "David Thompson",
      service: "Emergency Care",
      rating: 5,
      review: "Broke my tooth on a weekend and they saw me immediately. Even during an emergency, the moonlight ambiance kept me calm. Professional, quick, and pain-free treatment. They really care about their patients' well-being.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      location: "Sacramento, CA"
    },
    {
      name: "Lisa Chen",
      service: "Orthodontics",
      rating: 5,
      review: "The Invisalign treatment was perfect for my lifestyle. Dr. Chen explained everything clearly in their beautiful moonlight setting. The results are exactly what I hoped for and the experience was magical!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      location: "Oakland, CA"
    },
    {
      name: "James Wilson",
      service: "General Dentistry",
      rating: 5,
      review: "Clean, modern facility with the latest equipment in the most calming moonlight atmosphere I've ever experienced. The team is professional and friendly. My regular cleanings are always thorough and comfortable.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      location: "Fresno, CA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#ccccff]/20 to-[#a3a3cc]/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#5c5c99] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#292966] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#ccccff] to-[#a3a3cc] rounded-full text-[#292966] font-semibold text-sm mb-6 shadow-lg">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            Patient Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#292966] mb-6">
            Moonlight <span className="text-[#5c5c99]">Success Stories</span>
          </h2>
          <p className="text-xl text-[#5c5c99] max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied patients about 
            their magical experience at SmileCare Dental under the moonlight.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-[#ccccff]/50 relative group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-[#5c5c99] to-[#292966] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                ))}
              </div>

              {/* Review */}
              <p className="text-[#5c5c99] leading-relaxed mb-8 text-center italic">
                "{testimonial.review}"
              </p>

              {/* Patient Info */}
              <div className="text-center border-t border-[#ccccff]/30 pt-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 shadow-lg border-4 border-[#ccccff]"
                />
                <h4 className="font-bold text-[#292966] text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-[#5c5c99] font-semibold mb-1">
                  {testimonial.service}
                </p>
                <p className="text-[#a3a3cc] text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-r from-[#292966] via-[#5c5c99] to-[#a3a3cc] rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Moonlight Excellence by the Numbers
              </h3>
              <p className="text-[#ccccff] text-lg">
                Our commitment to exceptional care shines through every statistic
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-[#ccccff] font-semibold">Moonlight Smiles</div>
                <div className="text-[#a3a3cc] text-sm mt-1">Happy Patients</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-[#ccccff] font-semibold">Years Experience</div>
                <div className="text-[#a3a3cc] text-sm mt-1">In Moonlight Care</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  5.0
                </div>
                <div className="text-[#ccccff] font-semibold">Average Rating</div>
                <div className="text-[#a3a3cc] text-sm mt-1">Perfect Reviews</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-[#ccccff] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-[#ccccff] font-semibold">Emergency Care</div>
                <div className="text-[#a3a3cc] text-sm mt-1">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
