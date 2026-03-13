import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Reservations", href: "#reservations" },
    { label: "Order", href: "#order" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-spice-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
            onClick={() => handleNav("#home")}
          >
            <img
              src="/assets/generated/hotel-logo-transparent.dim_300x300.png"
              alt="Honey Point Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="font-display font-bold text-xl text-saffron-300 leading-tight">
                Honey Point
              </div>
              <div className="text-xs text-saffron-500 tracking-[0.2em] uppercase font-body">
                Hotel & Restaurant
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-body font-medium text-saffron-100 hover:text-saffron-300 transition-colors relative group"
                data-ocid="nav.link"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-saffron-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
            <Button
              onClick={() => handleNav("#reservations")}
              className="ml-4 bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold px-5 py-2 rounded-sm"
              data-ocid="nav.primary_button"
            >
              Book a Table
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden text-saffron-200 hover:text-saffron-400 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-spice-900/98 backdrop-blur-md border-t border-saffron-800/30"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-saffron-100 hover:text-saffron-300 hover:bg-saffron-500/10 rounded transition-colors font-body"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNav("#reservations")}
                className="mt-2 bg-saffron-500 hover:bg-saffron-600 text-white font-semibold"
                data-ocid="nav.primary_button"
              >
                Book a Table
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
