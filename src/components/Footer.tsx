
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#292966] via-[#5c5c99] to-[#a3a3cc] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#ccccff] mb-4">SmileCare Dental</h3>
            <p className="text-[#ccccff]/80 mb-6 leading-relaxed">
              Your trusted partner for comprehensive dental care under the moonlight. 
              Creating beautiful, healthy smiles for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gradient-to-r from-[#a3a3cc] to-[#ccccff] p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Facebook className="w-5 h-5 text-[#292966]" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-[#a3a3cc] to-[#ccccff] p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Instagram className="w-5 h-5 text-[#292966]" />
              </a>
              <a
                href="mailto:info@smilecare.com"
                className="bg-gradient-to-r from-[#a3a3cc] to-[#ccccff] p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 text-[#292966]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#ccccff]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-[#ccccff]/80 hover:text-[#ccccff] transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#ccccff]/80 hover:text-[#ccccff] transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#ccccff]/80 hover:text-[#ccccff] transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-[#ccccff]/80 hover:text-[#ccccff] transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#ccccff]/80 hover:text-[#ccccff] transition-colors duration-200 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#ccccff]">Moonlight Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-[#ccccff]/80 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  General Dentistry
                </span>
              </li>
              <li>
                <span className="text-[#ccccff]/80 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  Cosmetic Dentistry
                </span>
              </li>
              <li>
                <span className="text-[#ccccff]/80 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  Orthodontics
                </span>
              </li>
              <li>
                <span className="text-[#ccccff]/80 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  Emergency Care
                </span>
              </li>
              <li>
                <span className="text-[#ccccff]/80 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  Pediatric Dentistry
                </span>
              </li>
              <li>
                <span className="text-[#ccccff]/80 flex items-center">
                  <div className="w-2 h-2 bg-[#ccccff] rounded-full mr-3"></div>
                  Dental Implants
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#ccccff]">Contact Under the Moonlight</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#a3a3cc] to-[#ccccff] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#292966]" />
                </div>
                <div>
                  <p className="text-[#ccccff]">(555) 123-4567</p>
                  <p className="text-sm text-[#ccccff]/80">Emergency: 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#a3a3cc] to-[#ccccff] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#292966]" />
                </div>
                <div>
                  <p className="text-[#ccccff]">info@smilecare.com</p>
                  <p className="text-sm text-[#ccccff]/80">Response within 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#a3a3cc] to-[#ccccff] rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#292966]" />
                </div>
                <div>
                  <p className="text-[#ccccff]">123 Moonlight Street</p>
                  <p className="text-[#ccccff]">Dental City, DC 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#a3a3cc] to-[#ccccff] rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#292966]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#ccccff]">Office Hours:</p>
                  <p className="text-sm text-[#ccccff]/80">Mon-Fri: 8AM-6PM</p>
                  <p className="text-sm text-[#ccccff]/80">Sat: 9AM-4PM</p>
                  <p className="text-sm text-[#ccccff]/80">Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ccccff]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#ccccff]/80 text-sm">
              © 2024 SmileCare Dental. All rights reserved. Moonlight care for everyone.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#ccccff]/80 hover:text-[#ccccff] text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-[#ccccff]/80 hover:text-[#ccccff] text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-[#ccccff]/80 hover:text-[#ccccff] text-sm transition-colors duration-200">
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
