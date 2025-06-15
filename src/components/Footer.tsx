
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">SmileCare Dental</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for comprehensive dental care. 
              Creating beautiful, healthy smiles for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@smilecare.com"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">General Dentistry</span>
              </li>
              <li>
                <span className="text-gray-300">Cosmetic Dentistry</span>
              </li>
              <li>
                <span className="text-gray-300">Orthodontics</span>
              </li>
              <li>
                <span className="text-gray-300">Emergency Care</span>
              </li>
              <li>
                <span className="text-gray-300">Pediatric Dentistry</span>
              </li>
              <li>
                <span className="text-gray-300">Dental Implants</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">(555) 123-4567</p>
                  <p className="text-sm text-gray-400">Emergency: 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">info@smilecare.com</p>
                  <p className="text-sm text-gray-400">Response within 24h</p>
                </div>
              </div>
              <div>
                <p className="text-gray-300">123 Smile Street</p>
                <p className="text-gray-300">Dental City, DC 12345</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-400">Office Hours:</p>
                <p className="text-sm text-gray-300">Mon-Fri: 8AM-6PM</p>
                <p className="text-sm text-gray-300">Sat: 9AM-4PM</p>
                <p className="text-sm text-gray-300">Sun: Emergency Only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SmileCare Dental. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
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
