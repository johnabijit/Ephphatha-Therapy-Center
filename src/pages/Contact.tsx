import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    childAge: "",
    phone: "",
    concern: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", childAge: "", phone: "", concern: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary-700 py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Take the first step towards your child's brighter future. We are here to listen, assess, and guide you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Our Center</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Ephphatha Therapy Center<br />
                      Palaniappa Nagar, Sembakkam<br />
                      Chennai, Tamil Nadu 600073, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Call or WhatsApp</h3>
                    <p className="text-slate-600 mb-1">+91 97911 92699</p>
                    <p className="text-slate-600 mb-1">+91 98401 19895</p>
                    <a href="https://wa.me/919791192699" className="text-green-600 font-medium hover:underline flex items-center gap-1 mt-2">
                      <MessageCircle className="w-4 h-4" /> Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Working Hours</h3>
                    <p className="text-slate-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-slate-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                  Google Maps Embed (Sembakkam, Chennai)
                </div>
                {/* Real implementation would use an iframe here */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583321556093!2d80.1481183148216!3d12.93448799088046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e5a5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSembakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  className="absolute inset-0 opacity-50 mix-blend-multiply"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Book an Appointment</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and our team will get back to you within 24 hours to schedule a consultation.</p>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-2xl text-center border border-green-200">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Request Received!</h3>
                  <p>Thank you for reaching out. We will contact you shortly to confirm your appointment.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-primary-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Parent's Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="10-digit number"
                      />
                    </div>
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-slate-700 mb-2">Child's Age</label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="e.g., 4 years"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="concern" className="block text-sm font-medium text-slate-700 mb-2">Primary Concern / Reason for Visit *</label>
                    <textarea
                      id="concern"
                      name="concern"
                      required
                      rows={4}
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                      placeholder="Briefly describe what you'd like help with (e.g., speech delay, behavioral issues)..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" /> Request Appointment
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    Your information is strictly confidential and will only be used to contact you regarding therapy services.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
