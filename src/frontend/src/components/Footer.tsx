import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = window.location.hostname;

  return (
    <footer
      id="contact"
      className="bg-spice-900 border-t border-saffron-800/20"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/generated/hotel-logo-transparent.dim_300x300.png"
                alt="Honey Point Logo"
                className="h-14 w-14 object-contain"
              />
              <div>
                <div className="font-display font-bold text-2xl text-saffron-300">
                  Honey Point
                </div>
                <div className="text-xs text-saffron-500 tracking-[0.2em] uppercase font-body">
                  Hotel & Restaurant
                </div>
              </div>
            </div>
            <p className="font-body text-saffron-200/60 text-sm leading-relaxed max-w-sm mb-6">
              A celebration of authentic Indian cuisine and modern fast food
              delights. Where every meal is a journey of flavour, crafted with
              love and tradition.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-saffron-500/10 hover:bg-saffron-500/20 border border-saffron-700/30 rounded-full flex items-center justify-center text-saffron-400 hover:text-saffron-300 transition-colors"
                data-ocid="footer.link"
              >
                <SiFacebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-saffron-500/10 hover:bg-saffron-500/20 border border-saffron-700/30 rounded-full flex items-center justify-center text-saffron-400 hover:text-saffron-300 transition-colors"
                data-ocid="footer.link"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-saffron-500/10 hover:bg-saffron-500/20 border border-saffron-700/30 rounded-full flex items-center justify-center text-saffron-400 hover:text-saffron-300 transition-colors"
                data-ocid="footer.link"
              >
                <SiX size={16} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-saffron-200 text-lg mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-saffron-400 shrink-0 mt-0.5"
                />
                <span className="font-body text-sm text-saffron-200/60 leading-relaxed">
                  12, Marine Drive, Nariman Point,
                  <br />
                  Mumbai – 400 021, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-saffron-400 shrink-0" />
                <a
                  href="tel:+912245678901"
                  className="font-body text-sm text-saffron-200/60 hover:text-saffron-300 transition-colors"
                  data-ocid="footer.link"
                >
                  +91 22 4567 8901
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-saffron-400 shrink-0" />
                <a
                  href="mailto:hello@honeypoint.in"
                  className="font-body text-sm text-saffron-200/60 hover:text-saffron-300 transition-colors"
                  data-ocid="footer.link"
                >
                  hello@honeypoint.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-semibold text-saffron-200 text-lg mb-5">
              Opening Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-saffron-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-body text-sm text-saffron-200/80 font-medium">
                    Mon – Fri
                  </div>
                  <div className="font-body text-xs text-saffron-200/50">
                    11:00 AM – 11:00 PM
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-saffron-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-body text-sm text-saffron-200/80 font-medium">
                    Sat – Sun
                  </div>
                  <div className="font-body text-xs text-saffron-200/50">
                    10:00 AM – 12:00 AM
                  </div>
                </div>
              </li>
              <li className="mt-3 font-body text-xs text-saffron-400/70 italic">
                Kitchen closes 30 minutes before closing time
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-saffron-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-saffron-200/40">
            © {year} Honey Point Hotel & Restaurant. All rights reserved.
          </p>
          <p className="font-body text-xs text-saffron-200/30">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron-400/50 hover:text-saffron-400 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
