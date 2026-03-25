import { GraduationCap, Users, Baby, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const programs = [
  {
    title: "Early Intervention Program (EIP)",
    icon: <Baby className="w-10 h-10 text-primary-600" />,
    color: "bg-primary-50",
    description: "Designed for children aged 0-3 years who show signs of developmental delays. This crucial program capitalizes on early brain plasticity to maximize your child's developmental trajectory.",
    features: [
      "Comprehensive developmental assessment",
      "Play-based therapy sessions",
      "Parent coaching and home programs",
      "Multidisciplinary approach (Speech, OT, PT)"
    ]
  },
  {
    title: "Autism Support Program",
    icon: <HandHeart className="w-10 h-10 text-secondary-600" />,
    color: "bg-secondary-50",
    description: "A holistic, structured program specifically tailored for children on the Autism Spectrum. We focus on communication, social skills, sensory regulation, and behavioral management.",
    features: [
      "Applied Behavior Analysis (ABA) techniques",
      "Social skills training groups",
      "Sensory integration therapy",
      "Visual schedules and communication aids (PECS)"
    ]
  },
  {
    title: "School Readiness Program",
    icon: <GraduationCap className="w-10 h-10 text-accent-600" />,
    color: "bg-accent-50",
    description: "Preparing children with developmental challenges for a smooth transition into mainstream or special education schools. We focus on classroom behaviors, pre-academic skills, and independence.",
    features: [
      "Following instructions and routines",
      "Fine motor skills for writing",
      "Peer interaction and group play",
      "Attention and focus building"
    ]
  },
  {
    title: "Individualized Therapy Plans (ITP)",
    icon: <Users className="w-10 h-10 text-purple-600" />,
    color: "bg-purple-50",
    description: "For children who need a highly customized approach. We create a unique roadmap combining various therapies based on a detailed assessment of their strengths and challenges.",
    features: [
      "1-on-1 intensive therapy sessions",
      "Regular progress tracking and goal adjustment",
      "Collaboration with pediatricians and schools",
      "Flexible scheduling"
    ]
  }
];

export function Programs() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary-700 py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Specialized Programs</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Structured, goal-oriented programs designed to address specific developmental stages and challenges.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-20 h-20 ${program.color} rounded-2xl flex items-center justify-center mb-8`}>
                  {program.icon}
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">{program.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {program.description}
                </p>
                <h3 className="font-bold text-slate-900 mb-4">Program Highlights:</h3>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-colors w-full sm:w-auto"
                >
                  Enquire About This Program
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
