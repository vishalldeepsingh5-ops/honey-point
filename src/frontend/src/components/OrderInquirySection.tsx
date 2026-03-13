import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { usePlaceOrder } from "@/hooks/useQueries";
import { CheckCircle2, Loader2, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function OrderInquirySection() {
  const mutation = usePlaceOrder();
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    itemsOrdered: "",
    deliveryPickup: "delivery",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.customerName || !form.phone || !form.itemsOrdered) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutation.mutateAsync(form);
      setSuccess(true);
      toast.success("Order inquiry received! We'll confirm shortly.");
    } catch {
      toast.error("Unable to place order. Please try again or call us.");
    }
  };

  if (success) {
    return (
      <section id="order" className="py-24 bg-spice-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            data-ocid="order.success_state"
          >
            <CheckCircle2 className="w-20 h-20 text-saffron-400 mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-saffron-100 mb-4">
              Order Received!
            </h2>
            <p className="font-body text-saffron-200/80 mb-8">
              Thank you,{" "}
              <strong className="text-saffron-300">{form.customerName}</strong>!
              Our team will call you at {form.phone} to confirm your{" "}
              {form.deliveryPickup} order.
            </p>
            <Button
              onClick={() => {
                setSuccess(false);
                setForm({
                  customerName: "",
                  phone: "",
                  itemsOrdered: "",
                  deliveryPickup: "delivery",
                });
              }}
              className="bg-saffron-500 hover:bg-saffron-400 text-white font-body font-semibold px-8 py-3"
              data-ocid="order.secondary_button"
            >
              Place Another Order
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-24 bg-spice-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-saffron-400 text-xs font-body tracking-[0.3em] uppercase mb-3">
            Quick & Easy
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-saffron-100 mb-4">
            Place an <span className="text-saffron-400 italic">Order</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-body text-saffron-200/70 max-w-xl mx-auto">
            Tell us what you'd like and we'll get it ready for delivery or
            pickup.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-spice-800 border border-saffron-700/30 rounded-xl p-8 shadow-warm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-ocid="order.panel"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="font-body font-medium text-saffron-200 text-sm">
                    Your Name *
                  </Label>
                  <Input
                    value={form.customerName}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, customerName: e.target.value }))
                    }
                    placeholder="Priya Mehta"
                    className="font-body bg-spice-700 border-saffron-700/40 text-saffron-100 placeholder:text-saffron-400/50"
                    data-ocid="order.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-body font-medium text-saffron-200 text-sm">
                    Phone Number *
                  </Label>
                  <Input
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+91 98765 43210"
                    className="font-body bg-spice-700 border-saffron-700/40 text-saffron-100 placeholder:text-saffron-400/50"
                    data-ocid="order.input"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-body font-medium text-saffron-200 text-sm">
                  What would you like to order? *
                </Label>
                <Textarea
                  value={form.itemsOrdered}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, itemsOrdered: e.target.value }))
                  }
                  placeholder="e.g. 2x Butter Chicken, 1x Garlic Naan, 1x Gulab Jamun..."
                  className="font-body bg-spice-700 border-saffron-700/40 text-saffron-100 placeholder:text-saffron-400/50 resize-none"
                  rows={4}
                  data-ocid="order.textarea"
                />
              </div>

              <div className="space-y-3">
                <Label className="font-body font-medium text-saffron-200 text-sm">
                  Order Preference
                </Label>
                <RadioGroup
                  value={form.deliveryPickup}
                  onValueChange={(v) =>
                    setForm((p) => ({ ...p, deliveryPickup: v }))
                  }
                  className="flex gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="delivery"
                      id="delivery"
                      className="border-saffron-400 text-saffron-400"
                      data-ocid="order.radio"
                    />
                    <Label
                      htmlFor="delivery"
                      className="font-body text-saffron-200 cursor-pointer"
                    >
                      🛵 Delivery
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="pickup"
                      id="pickup"
                      className="border-saffron-400 text-saffron-400"
                      data-ocid="order.radio"
                    />
                    <Label
                      htmlFor="pickup"
                      className="font-body text-saffron-200 cursor-pointer"
                    >
                      🏃 Pickup
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-saffron-500 hover:bg-saffron-400 text-white font-body font-semibold py-6 text-base rounded-sm flex items-center gap-2 justify-center"
                data-ocid="order.submit_button"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} /> Submit Order Inquiry
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
