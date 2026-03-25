import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-20">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-white leading-tight">Ephphatha</h2>
              <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">Therapy Center</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Helping your child unlock their full potential with personalized, compassionate, and evidence-based therapy in Sembakkam, Chennai.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 transition-colors">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 transition-colors">
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 transition-colors">
              <Twitter className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
            <li><Link to="/programs" className="hover:text-primary-400 transition-colors">Programs</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary-400 transition-colors">Success Stories</Link></li>
            <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Blog & Resources</Link></li>
            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-white mb-6">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Speech Therapy</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Occupational Therapy</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Behavioral Therapy</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Special Education</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Early Intervention</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-white mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <span>Palaniappa Nagar, Sembakkam, Chennai, Tamil Nadu 600073, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-500 shrink-0" />
              <span>+91 97911 92699 / +91 98401 19895</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-500 shrink-0" />
              <span>info@ephphathatherapy.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Ephphatha Therapy Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
