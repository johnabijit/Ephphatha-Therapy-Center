import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Users, Award, Heart, MessageCircle, Calendar, Phone } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Speech Therapy",
    description: "Helping children overcome speech delays, articulation issues, and communication challenges.",
    icon: <MessageCircle className="w-8 h-8 text-secondary-500" />,
    color: "bg-secondary-50",
    path: "/services#speech",
  },
  {
    title: "Occupational Therapy",
    description: "Developing fine motor skills, sensory processing, and daily living skills for independence.",
    icon: <Heart className="w-8 h-8 text-primary-500" />,
    color: "bg-primary-50",
    path: "/services#occupational",
  },
  {
    title: "Behavioral Therapy",
    description: "Evidence-based strategies to manage behaviors, improve focus, and build positive habits.",
    icon: <Star className="w-8 h-8 text-accent-500" />,
    color: "bg-accent-50",
    path: "/services#behavioral",
  },
  {
    title: "Special Education",
    description: "Tailored educational support for children with learning disabilities and special needs.",
    icon: <Award className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-50",
    path: "/services#special-education",
  },
];

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6">
                <Heart className="w-4 h-4" />
                <span>Trusted Therapy Center in Sembakkam, Chennai</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-tight mb-6">
                Helping Your Child <span className="text-primary-600">Unlock Their Full Potential</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Expert, personalized therapy for children with developmental delays, autism, ADHD, and learning challenges. We provide compassionate care that transforms lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </Link>
                <a
                  href="https://wa.me/919791192699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-lg">10+</p>
                    <p>Years Experience</p>
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-lg">500+</p>
                    <p>Children Helped</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-secondary-200 rounded-[2rem] transform rotate-3 scale-105 opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
                alt="Therapist helping a child"
                className="relative z-10 rounded-[2rem] shadow-2xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600 fill-current" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Parent Rating</p>
                  <p className="text-lg font-bold text-slate-900">4.9/5 (120+ Reviews)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST & CREDIBILITY */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-4">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Recognized & Certified Excellence in Child Development
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos for certifications */}
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-slate-700">
              <Award className="w-8 h-8" /> Certified Therapists
            </div>
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-slate-700">
              <CheckCircle2 className="w-8 h-8" /> Evidence-Based
            </div>
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-slate-700">
              <Heart className="w-8 h-8" /> Child-Safe Environment
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Comprehensive Therapy Services
            </h2>
            <p className="text-lg text-slate-600">
              We offer a multidisciplinary approach to ensure your child receives the exact support they need to thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=600&auto=format&fit=crop"
                  alt="Therapy session"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=600&auto=format&fit=crop"
                  alt="Child playing"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                Why Parents Trust Ephphatha Therapy Center
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We believe every child is unique. Our approach is centered around understanding your child's specific needs and creating a supportive environment for growth.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Personalized Therapy Plans", desc: "Customized strategies based on detailed assessments." },
                  { title: "Active Parent Involvement", desc: "We train and empower parents to continue therapy at home." },
                  { title: "Evidence-Based Techniques", desc: "Using proven methods for effective and lasting results." },
                  { title: "Compassionate Care", desc: "A warm, child-friendly environment where kids feel safe." },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary-100 p-1 rounded-full text-primary-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES (MINI) */}
      <section className="py-24 bg-primary-700 text-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Stories of Transformation
            </h2>
            <p className="text-primary-100 text-lg">
              Real progress from real families in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="flex text-accent-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg italic mb-6 leading-relaxed">
                "When we first came to Ephphatha, my 3-year-old wasn't speaking. Within 6 months of speech and occupational therapy, he's now forming sentences and making eye contact. The therapists here are angels."
              </p>
              <div>
                <p className="font-bold">— Priya S., Mother of a 4-year-old</p>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="flex text-accent-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg italic mb-6 leading-relaxed">
                "The early intervention program completely changed our trajectory. They didn't just treat my daughter; they taught us how to support her at home. We finally feel hopeful about her future."
              </p>
              <div>
                <p className="font-bold">— Karthik R., Father of a 5-year-old</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-700 transition-colors"
            >
              Read More Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Give Your Child the Support They Deserve
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Early intervention makes a lifetime of difference. Don't wait to get the help your child needs. Schedule an assessment today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href="tel:+919791192699"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
