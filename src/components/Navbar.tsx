import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Programs", path: "/programs" },
  { name: "Success Stories", path: "/testimonials" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 97911 92699
            </span>
            <span>Palaniappa Nagar, Sembakkam, Chennai, Tamil Nadu 600073</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary-700 leading-tight">Ephphatha</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">Therapy Center</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  location.pathname === link.path ? "text-primary-600 font-semibold" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium py-2 border-b border-slate-50",
                  location.pathname === link.path ? "text-primary-600" : "text-slate-600"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-medium text-center flex items-center justify-center gap-2 mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
