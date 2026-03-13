import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMakeReservation } from "@/hooks/useQueries";
import { CalendarDays, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ReservationSection() {
  const mutation = useMakeReservation();
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time || !form.guests) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutation.mutateAsync({
        name: form.name,
        phone: form.phone,
        email: form.email,
        date: form.date,
        time: form.time,
        guests: BigInt(form.guests),
        specialRequests: form.specialRequests,
      });
      setSuccess(true);
      toast.success("Reservation confirmed! We look forward to welcoming you.");
    } catch {
      toast.error("Unable to confirm reservation. Please try again.");
    }
  };

  const times = [
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];
  const guestCounts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  if (success) {
    return (
      <section id="reservations" className="py-24 bg-background pattern-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            data-ocid="reservation.success_state"
          >
            <CheckCircle2 className="w-20 h-20 text-saffron-500 mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-spice-800 mb-4">
              Reservation Confirmed!
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Thank you, <strong>{form.name}</strong>! Your table has been
              reserved for {form.guests} guest
              {Number(form.guests) > 1 ? "s" : ""} on {form.date} at {form.time}
              . We look forward to welcoming you to Honey Point.
            </p>
            <Button
              onClick={() => {
                setSuccess(false);
                setForm({
                  name: "",
                  phone: "",
                  email: "",
                  date: "",
                  time: "",
                  guests: "",
                  specialRequests: "",
                });
              }}
              className="bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold px-8 py-3"
              data-ocid="reservation.secondary_button"
            >
              Make Another Reservation
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="py-24 bg-background pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-saffron-600 text-xs font-body tracking-[0.3em] uppercase mb-3">
              Book Your Experience
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-spice-800 mb-6">
              Reserve a <span className="text-saffron-500 italic">Table</span>
            </h2>
            <div className="section-divider mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Secure your seat at Honey Point and let us craft an unforgettable
              dining experience for you and your loved ones. For groups larger
              than 10, please call us directly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-saffron-50 rounded-lg border border-saffron-100">
                <CalendarDays className="text-saffron-500 shrink-0" size={24} />
                <div>
                  <div className="font-display font-semibold text-spice-700 text-sm">
                    Dining Hours
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    Lunch: 11 AM – 3 PM | Dinner: 6 PM – 11 PM
                  </div>
                </div>
              </div>
              <div className="p-4 bg-saffron-50 rounded-lg border border-saffron-100">
                <div className="font-display font-semibold text-spice-700 text-sm mb-1">
                  📞 Reservations Helpline
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  +91 22 4567 8901 | Available 10 AM – 10 PM
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-8 shadow-warm"
              data-ocid="reservation.panel"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="font-body font-medium text-spice-700 text-sm">
                    Full Name *
                  </Label>
                  <Input
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Rahul Sharma"
                    className="font-body border-border focus:ring-saffron-400"
                    data-ocid="reservation.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-body font-medium text-spice-700 text-sm">
                    Phone Number *
                  </Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="font-body border-border"
                    data-ocid="reservation.input"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label className="font-body font-medium text-spice-700 text-sm">
                    Email Address
                  </Label>
                  <Input
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="rahul@example.com"
                    type="email"
                    className="font-body border-border"
                    data-ocid="reservation.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-body font-medium text-spice-700 text-sm">
                    Date *
                  </Label>
                  <Input
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    type="date"
                    className="font-body border-border"
                    data-ocid="reservation.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-body font-medium text-spice-700 text-sm">
                    Time *
                  </Label>
                  <Select onValueChange={(v) => handleChange("time", v)}>
                    <SelectTrigger
                      className="font-body"
                      data-ocid="reservation.select"
                    >
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {times.map((t) => (
                        <SelectItem key={t} value={t} className="font-body">
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label className="font-body font-medium text-spice-700 text-sm">
                    Number of Guests *
                  </Label>
                  <Select onValueChange={(v) => handleChange("guests", v)}>
                    <SelectTrigger
                      className="font-body"
                      data-ocid="reservation.select"
                    >
                      <SelectValue placeholder="How many guests?" />
                    </SelectTrigger>
                    <SelectContent>
                      {guestCounts.map((g) => (
                        <SelectItem key={g} value={g} className="font-body">
                          {g} {g === "1" ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label className="font-body font-medium text-spice-700 text-sm">
                    Special Requests
                  </Label>
                  <Textarea
                    value={form.specialRequests}
                    onChange={(e) =>
                      handleChange("specialRequests", e.target.value)
                    }
                    placeholder="Dietary requirements, celebration details, seating preferences..."
                    className="font-body border-border resize-none"
                    rows={3}
                    data-ocid="reservation.textarea"
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full mt-6 bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold py-6 text-base rounded-sm transition-all duration-300"
                data-ocid="reservation.submit_button"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Confirming...
                  </>
                ) : (
                  "Confirm Reservation"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
