
import { Calendar, Clock, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Perfect{' '}
              <span className="text-blue-600">Smile</span>{' '}
              Starts Here
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Experience exceptional dental care in a comfortable, modern environment. 
              Our expert team is dedicated to giving you the healthy, beautiful smile you deserve.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href="tel:+1234567890"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Emergency Care</span>
                </div>
                <p className="text-gray-600 mt-1">Available 24/7</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-5 h-5 bg-green-600 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Modern Tech</span>
                </div>
                <p className="text-gray-600 mt-1">Latest equipment</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-5 h-5 bg-green-600 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Expert Team</span>
                </div>
                <p className="text-gray-600 mt-1">15+ years experience</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-200 to-green-200 rounded-full flex items-center justify-center mb-6">
                    <div className="text-4xl">😊</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Patients</h3>
                  <p className="text-gray-600">Join thousands of satisfied patients who trust us with their smiles</p>
                  <div className="mt-4 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">5.0 stars from 500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
