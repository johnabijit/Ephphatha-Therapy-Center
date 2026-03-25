import { MessageCircle, Heart, Star, Award, Brain, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const services = [
  {
    id: "speech",
    title: "Speech & Language Therapy",
    icon: <MessageCircle className="w-10 h-10 text-secondary-600" />,
    color: "bg-secondary-50",
    description: "Our speech therapy program focuses on helping children overcome communication challenges, from articulation issues to severe language delays.",
    whoNeedsIt: ["Children with delayed speech", "Stuttering or fluency issues", "Articulation disorders", "Autism Spectrum Disorder (ASD)"],
    benefits: ["Improved verbal communication", "Better social interactions", "Enhanced comprehension skills", "Increased confidence"],
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "occupational",
    title: "Occupational Therapy",
    icon: <Heart className="w-10 h-10 text-primary-600" />,
    color: "bg-primary-50",
    description: "We help children develop the fine motor skills, sensory processing abilities, and cognitive skills needed for daily living and independence.",
    whoNeedsIt: ["Sensory Processing Disorder", "Fine/gross motor skill delays", "ADHD and Autism", "Difficulty with daily tasks (dressing, eating)"],
    benefits: ["Enhanced motor skills", "Better sensory regulation", "Increased independence", "Improved handwriting and school readiness"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "behavioral",
    title: "Behavioral Therapy",
    icon: <Star className="w-10 h-10 text-accent-600" />,
    color: "bg-accent-50",
    description: "Using evidence-based strategies, we help children manage challenging behaviors, improve focus, and build positive habits for better social integration.",
    whoNeedsIt: ["Children with ADHD", "Oppositional Defiant Disorder", "Autism Spectrum Disorder", "Tantrums and aggression issues"],
    benefits: ["Reduced problem behaviors", "Improved emotional regulation", "Better focus and attention", "Enhanced social skills"],
    image: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "special-education",
    title: "Special Education",
    icon: <Award className="w-10 h-10 text-purple-600" />,
    color: "bg-purple-50",
    description: "Tailored educational support designed to meet the unique learning needs of children with disabilities, ensuring they reach their academic potential.",
    whoNeedsIt: ["Learning disabilities (Dyslexia, Dyscalculia)", "Intellectual disabilities", "Children struggling in mainstream schools"],
    benefits: ["Individualized Education Plans (IEPs)", "Improved academic performance", "Enhanced learning strategies", "Boosted self-esteem"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "sensory",
    title: "Sensory Integration Therapy",
    icon: <Brain className="w-10 h-10 text-teal-600" />,
    color: "bg-teal-50",
    description: "A specialized approach to help children who have difficulty processing sensory information (sight, sound, touch, smell, taste, movement).",
    whoNeedsIt: ["Sensory Processing Disorder (SPD)", "Autism Spectrum Disorder", "Hypersensitivity or hyposensitivity"],
    benefits: ["Better response to sensory stimuli", "Improved focus in noisy environments", "Reduced anxiety", "Enhanced physical coordination"],
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "early-intervention",
    title: "Early Intervention Programs",
    icon: <Activity className="w-10 h-10 text-rose-600" />,
    color: "bg-rose-50",
    description: "Crucial support for infants and toddlers (0-3 years) showing signs of developmental delays, maximizing their potential during critical brain development years.",
    whoNeedsIt: ["Premature infants", "Toddlers missing developmental milestones", "Early signs of Autism or speech delay"],
    benefits: ["Capitalizes on neuroplasticity", "Prevents severe delays later", "Empowers parents early on", "Better long-term outcomes"],
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop"
  }
];

export function Services() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary-700 py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Therapy Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Comprehensive, evidence-based therapies tailored to your child's unique developmental needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 scroll-mt-32`}
              >
                <div className="w-full lg:w-1/2">
                  <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-8`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-500"></span> Who Needs It
                      </h4>
                      <ul className="space-y-2 text-slate-600">
                        {service.whoNeedsIt.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Key Benefits
                      </h4>
                      <ul className="space-y-2 text-slate-600">
                        {service.benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors shadow-md"
                  >
                    Book an Assessment
                  </Link>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            Not sure which therapy your child needs?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Every child is different. Schedule a comprehensive assessment with our experts to create a personalized therapy plan.
          </p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
