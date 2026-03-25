import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const blogPosts = [
  {
    id: 1,
    title: "Signs Your Child Needs Speech Therapy",
    excerpt: "Is your child not meeting their communication milestones? Learn the early warning signs of speech and language delays and when to seek professional help.",
    date: "October 12, 2023",
    author: "Dr. Sarah M.",
    category: "Speech Therapy",
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Autism Early Signs Every Parent Should Know",
    excerpt: "Early intervention is key for children on the Autism Spectrum. Discover the subtle signs to look out for in toddlers and preschoolers.",
    date: "November 05, 2023",
    author: "Priya Therapist",
    category: "Autism Support",
    image: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "How Occupational Therapy Helps Children",
    excerpt: "Occupational therapy isn't just about jobs; for children, their 'job' is playing and learning. See how OT builds essential life skills.",
    date: "December 18, 2023",
    author: "Karthik OT",
    category: "Occupational Therapy",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Choosing the Best Therapy Center in Sembakkam",
    excerpt: "What should parents look for when selecting a therapy center? A guide to finding the right fit for your child's unique needs in Chennai.",
    date: "January 22, 2024",
    author: "Admin",
    category: "Parenting Guide",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Fun Sensory Activities to Try at Home",
    excerpt: "Keep your child engaged and regulated with these simple, low-cost sensory integration activities you can easily set up in your living room.",
    date: "February 10, 2024",
    author: "Dr. Sarah M.",
    category: "Sensory Integration",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "The Importance of Early Intervention",
    excerpt: "Why the first three years of a child's life are critical for brain development, and how early intervention programs make a lasting impact.",
    date: "March 05, 2024",
    author: "Admin",
    category: "Early Intervention",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop"
  }
];

export function Blog() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary-700 py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Resources & Insights</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Expert advice, therapy tips, and the latest insights on child development to support your parenting journey.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col h-full group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-heading font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to="#"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:gap-2 transition-all mt-auto"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
