import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Priya S.",
    role: "Mother of a 4-year-old",
    text: "When we first came to Ephphatha, my 3-year-old wasn't speaking and avoided eye contact. We were terrified. Within 6 months of intensive speech and occupational therapy, he's now forming sentences, playing with his sister, and making eye contact. The therapists here are absolute angels. They gave us our son back.",
    rating: 5,
    program: "Early Intervention & Speech Therapy"
  },
  {
    name: "Karthik R.",
    role: "Father of a 5-year-old",
    text: "The Autism Support Program completely changed our trajectory. They didn't just treat my daughter; they taught us how to support her at home. The sensory integration techniques they showed us stopped her daily meltdowns. We finally feel hopeful and equipped for her future.",
    rating: 5,
    program: "Autism Support Program"
  },
  {
    name: "Anitha M.",
    role: "Mother of an 8-year-old",
    text: "My son was struggling severely in school with reading and writing. He hated going to class. The special educators at Ephphatha diagnosed his dyslexia and created a tailored plan. Two years later, he is reading at grade level and his confidence has skyrocketed. I cannot thank this team enough.",
    rating: 5,
    program: "Special Education"
  },
  {
    name: "Suresh V.",
    role: "Father of a 6-year-old",
    text: "We tried two other centers before finding Ephphatha. What makes them different is their genuine empathy. They celebrate every tiny milestone with us. The behavioral therapy has helped my son manage his ADHD incredibly well. Highly recommend to any parent in Sembakkam.",
    rating: 5,
    program: "Behavioral Therapy"
  },
  {
    name: "Lakshmi D.",
    role: "Mother of a 3-year-old",
    text: "The facility is so child-friendly and safe. My daughter actually looks forward to her occupational therapy sessions. Her fine motor skills have improved drastically, and she can finally hold a pencil and feed herself. The therapists are patient, kind, and brilliant at what they do.",
    rating: 5,
    program: "Occupational Therapy"
  },
  {
    name: "Dr. Ramesh K.",
    role: "Pediatrician",
    text: "I regularly refer my patients with developmental delays to Ephphatha Therapy Center. Their multidisciplinary approach and evidence-based practices consistently yield excellent results. They are a vital asset to the healthcare community in Chennai.",
    rating: 5,
    program: "Professional Referral"
  }
];

export function Testimonials() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary-700 py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Real stories of hope, progress, and transformation from the families we serve.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
                <div className="flex text-accent-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-100 pt-6">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-xs font-medium text-primary-600 mt-2 bg-primary-50 inline-block px-3 py-1 rounded-full">
                    {testimonial.program}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
