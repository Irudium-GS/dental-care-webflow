
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SmileCare Dental</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted partner for comprehensive dental care. 
              Creating beautiful, healthy smiles for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-sm"
              >
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="mailto:info@smilecare.com"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-sm"
              >
                <Mail className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-600 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  General Dentistry
                </span>
              </li>
              <li>
                <span className="text-gray-600 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Cosmetic Dentistry
                </span>
              </li>
              <li>
                <span className="text-gray-600 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Orthodontics
                </span>
              </li>
              <li>
                <span className="text-gray-600 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Emergency Care
                </span>
              </li>
              <li>
                <span className="text-gray-600 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Pediatric Dentistry
                </span>
              </li>
              <li>
                <span className="text-gray-600 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Dental Implants
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-900">(555) 123-4567</p>
                  <p className="text-sm text-gray-600">Emergency: 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-900">info@smilecare.com</p>
                  <p className="text-sm text-gray-600">Response within 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-900">123 Dental Street</p>
                  <p className="text-gray-900">Dental City, DC 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Office Hours:</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM</p>
                  <p className="text-sm text-gray-600">Sat: 9AM-4PM</p>
                  <p className="text-sm text-gray-600">Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 SmileCare Dental. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
