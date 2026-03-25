import { motion } from "motion/react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    alt: "Child in occupational therapy",
    category: "Therapy Sessions"
  },
  {
    src: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=800&auto=format&fit=crop",
    alt: "Speech therapy session",
    category: "Therapy Sessions"
  },
  {
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=800&auto=format&fit=crop",
    alt: "Behavioral therapy activities",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    alt: "Special education classroom",
    category: "Environment"
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    alt: "Sensory integration tools",
    category: "Environment"
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    alt: "Early intervention play",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    alt: "Therapist working with child",
    category: "Therapy Sessions"
  },
  {
    src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop",
    alt: "Child-friendly waiting area",
    category: "Environment"
  },
  {
    src: "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?q=80&w=800&auto=format&fit=crop",
    alt: "Group activity",
    category: "Activities"
  }
];

export function Gallery() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary-700 py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Center in Action</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Take a look inside Ephphatha Therapy Center. A safe, welcoming, and child-friendly environment designed for growth.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-sm aspect-square bg-slate-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-bold text-lg">{image.alt}</p>
                  <p className="text-primary-300 text-sm font-medium">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
