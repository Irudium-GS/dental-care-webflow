
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      service: "Cosmetic Dentistry",
      rating: 5,
      review: "Dr. Johnson completely transformed my smile! The teeth whitening and veneers look absolutely natural. The whole team made me feel comfortable throughout the entire process.",
      initial: "JM"
    },
    {
      name: "Robert Kim",
      service: "Dental Implants",
      rating: 5,
      review: "After years of avoiding the dentist, I finally found a place I trust. The implant procedure was painless and the results exceeded my expectations. Highly recommend!",
      initial: "RK"
    },
    {
      name: "Maria Gonzalez",
      service: "Pediatric Care",
      rating: 5,
      review: "Dr. Rodriguez is amazing with children! My 7-year-old actually looks forward to dental visits now. The office is kid-friendly and the staff is so patient and caring.",
      initial: "MG"
    },
    {
      name: "David Thompson",
      service: "Emergency Care",
      rating: 5,
      review: "Broke my tooth on a weekend and they saw me immediately. Professional, quick, and pain-free treatment. They really care about their patients' well-being.",
      initial: "DT"
    },
    {
      name: "Lisa Chen",
      service: "Orthodontics",
      rating: 5,
      review: "The Invisalign treatment was perfect for my lifestyle. Dr. Chen explained everything clearly and the results are exactly what I hoped for. Great experience overall!",
      initial: "LC"
    },
    {
      name: "James Wilson",
      service: "General Dentistry",
      rating: 5,
      review: "Clean, modern facility with the latest equipment. The team is professional and friendly. My regular cleanings are always thorough and comfortable.",
      initial: "JW"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-purple-600">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied patients about 
            their experience at SmileCare Dental.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-relaxed mb-6 text-center italic">
                "{testimonial.review}"
              </p>

              {/* Patient Info */}
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-lg">{testimonial.initial}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-purple-600 font-semibold">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-purple-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5.0</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
