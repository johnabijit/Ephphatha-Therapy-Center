import { Heart, Users, Target, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary-700 py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Ephphatha Therapy Center</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            A sanctuary of hope, healing, and holistic development for children in Sembakkam, Chennai.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Ephphatha Therapy Center was founded with a single, powerful mission: to provide a nurturing environment where every child, regardless of their developmental challenges, can thrive and reach their full potential.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The word "Ephphatha" means "be opened." We believe in opening doors of opportunity, opening minds to new ways of learning, and opening hearts to the incredible possibilities within every child.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Located in the heart of Sembakkam, Chennai, we have grown into a trusted community resource, helping hundreds of families navigate the complexities of autism, speech delays, ADHD, and learning disabilities with expert, compassionate care.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                alt="Therapist and child"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To empower children with special needs through evidence-based, individualized therapy programs, while equipping parents with the knowledge and tools to support their child's continuous growth.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the leading center for child development in Chennai, recognized for our holistic approach, compassionate therapists, and transformative impact on families and the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Our Philosophy of Care</h2>
            <p className="text-lg text-slate-600">
              We don't just treat symptoms; we treat the whole child. Our approach is built on four core pillars.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="w-6 h-6" />, title: "Empathy First", desc: "Every child is treated with profound respect, patience, and love." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Evidence-Based", desc: "We use scientifically proven methods tailored to each child's unique profile." },
              { icon: <Users className="w-6 h-6" />, title: "Family-Centered", desc: "Parents are our partners. We train you to be your child's best advocate." },
              { icon: <Target className="w-6 h-6" />, title: "Goal-Oriented", desc: "Clear milestones, regular assessments, and transparent progress tracking." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
