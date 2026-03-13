import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1600x700.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.78 0.14 75) 0, oklch(0.78 0.14 75) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-saffron-300 text-sm font-body tracking-[0.35em] uppercase mb-4">
            ✦ Welcome to ✦
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Honey <span className="text-saffron-300 italic">Point</span>
        </motion.h1>

        <motion.div
          className="section-divider mx-auto mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        />

        <motion.p
          className="font-body text-lg sm:text-xl text-saffron-100/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Experience the rich tapestry of authentic Indian cuisine and indulgent
          fast food delights — where tradition meets modern flavours.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <Button
            onClick={() => handleScroll("#menu")}
            className="bg-saffron-500 hover:bg-saffron-400 text-white font-body font-semibold text-base px-8 py-6 rounded-sm shadow-glow transition-all duration-300 hover:scale-105"
            data-ocid="hero.primary_button"
          >
            Explore Our Menu
          </Button>
          <Button
            onClick={() => handleScroll("#reservations")}
            variant="outline"
            className="border-2 border-saffron-300 text-saffron-100 hover:bg-saffron-300/10 font-body font-semibold text-base px-8 py-6 rounded-sm bg-transparent transition-all duration-300 hover:scale-105"
            data-ocid="hero.secondary_button"
          >
            Reserve a Table
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-saffron-300/70"
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
