
import { Calendar, Clock, Phone, Star, Heart, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-[#ccccff] via-white to-[#a3a3cc] min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#5c5c99] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#292966] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#a3a3cc] rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#292966] font-semibold text-sm mb-6 shadow-lg">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Rated #1 Dental Clinic in the City
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#292966] leading-tight">
              Your Perfect{' '}
              <span className="text-[#5c5c99] bg-gradient-to-r from-[#5c5c99] to-[#a3a3cc] bg-clip-text text-transparent">Smile</span>{' '}
              Under the Moonlight
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#5c5c99] leading-relaxed">
              Experience exceptional dental care in a serene, moonlit atmosphere. 
              Our expert team combines cutting-edge technology with gentle care to create 
              the healthy, beautiful smile you've always dreamed of.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#5c5c99] to-[#292966] text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Moonlight Appointment</span>
              </a>
              <a
                href="tel:+1234567890"
                className="border-2 border-[#5c5c99] text-[#5c5c99] px-8 py-4 rounded-full hover:bg-[#5c5c99] hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 backdrop-blur-sm bg-white/50"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center lg:text-left bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#a3a3cc] to-[#5c5c99] rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-[#292966]">24/7 Emergency</span>
                </div>
                <p className="text-[#5c5c99] mt-2">Available anytime</p>
              </div>
              <div className="text-center lg:text-left bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#a3a3cc] to-[#5c5c99] rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-[#292966]">Advanced Care</span>
                </div>
                <p className="text-[#5c5c99] mt-2">Latest technology</p>
              </div>
              <div className="text-center lg:text-left bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#a3a3cc] to-[#5c5c99] rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-[#292966]">Gentle Touch</span>
                </div>
                <p className="text-[#5c5c99] mt-2">Compassionate care</p>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#ccccff]/80 to-[#a3a3cc]/80 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 backdrop-blur-sm">
              <div className="bg-white/90 rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#ccccff] to-[#5c5c99] rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1606811841689-23dfdb7ee46c?w=300&h=300&fit=crop&crop=face"
                      alt="Happy dental patient with perfect smile"
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#292966] mb-2">Moonlight Smiles</h3>
                  <p className="text-[#5c5c99] mb-4">Join thousands of patients who shine brighter under our moonlight care</p>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#5c5c99]">5.0 stars from 500+ moonlight reviews</p>
                  
                  {/* Additional patient photos */}
                  <div className="flex justify-center mt-6 space-x-2">
                    <img 
                      src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=50&h=50&fit=crop&crop=face"
                      alt="Patient testimonial"
                      className="w-10 h-10 rounded-full border-2 border-[#a3a3cc]"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                      alt="Patient testimonial"
                      className="w-10 h-10 rounded-full border-2 border-[#a3a3cc]"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
                      alt="Patient testimonial"
                      className="w-10 h-10 rounded-full border-2 border-[#a3a3cc]"
                    />
                    <div className="w-10 h-10 bg-[#5c5c99] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      +50
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#a3a3cc] to-[#5c5c99] rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#ccccff] to-[#a3a3cc] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Star className="w-6 h-6 text-[#292966]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
