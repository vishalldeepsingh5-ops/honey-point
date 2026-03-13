import { Clock, Flame, Leaf, Star } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Finest ingredients sourced locally and from across India",
  },
  {
    icon: Flame,
    title: "Authentic Recipes",
    desc: "Time-honoured recipes passed down through generations",
  },
  {
    icon: Leaf,
    title: "Fresh Daily",
    desc: "Prepared fresh every day with love and care",
  },
  {
    icon: Clock,
    title: "Open Daily",
    desc: "Serving you from 11 AM to 11 PM, every day",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-saffron-600 text-xs font-body tracking-[0.3em] uppercase mb-3">
              Our Story
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-spice-800 leading-tight mb-6">
              A Taste of India,
              <br />
              <span className="text-saffron-500 italic">Close to Home</span>
            </h2>
            <div className="section-divider mb-8" />
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">
              Nestled in the heart of Mumbai, Honey Point Hotel is a culinary
              sanctuary where the vibrant aromas and bold flavours of Indian
              cooking come alive. Our master chefs bring decades of expertise to
              every dish — from the fiery tang of street-style chaat to the
              slow-cooked richness of aromatic biryanis.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              Beyond our Indian specialities, we also craft satisfying fast food
              favourites — gourmet burgers, loaded fries, and crispy snacks —
              ensuring there's something for every craving and every guest.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-saffron-500">
                  15+
                </div>
                <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  Years of Excellence
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-saffron-500">
                  80+
                </div>
                <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  Menu Items
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-saffron-500">
                  4.9★
                </div>
                <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  Guest Rating
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-card border border-border rounded-lg p-6 shadow-warm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              >
                <div className="w-12 h-12 bg-saffron-500/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-saffron-500" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-spice-800 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
