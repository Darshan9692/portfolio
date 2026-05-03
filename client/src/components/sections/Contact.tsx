import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { API_CONFIG } from "@/config/api";
import apiClient from "@/lib/axios";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      await apiClient.post(API_CONFIG.ENDPOINTS.CONTACT, data);

      toast({
        title: "Message sent ⚡",
        description: "Thanks — I'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <SectionHeader eyebrow="05 — Contact" />
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "dpinfo9692@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 9054849692" },
            { icon: MapPin, label: "Based in", value: "Ahmedabad, Gujarat, India" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-electric shadow-electric">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 p-8 md:p-10 rounded-3xl border border-border/60 bg-card/80 backdrop-blur-md space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
              <Input name="name" required placeholder="Darshan Panchal" className="mt-2 h-12 rounded-xl bg-background/60" />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
              <Input name="email" required type="email" placeholder="dpinfo9692@gmail.com" className="mt-2 h-12 rounded-xl bg-background/60" />
            </div>
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject</label>
            <Input name="subject" required placeholder="Topic..." className="mt-2 h-12 rounded-xl bg-background/60" />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
            <Textarea name="message" required rows={6} placeholder="Hello..." className="mt-2 rounded-xl bg-background/60 resize-none" />
          </div>
          <Button type="submit" variant="electric" size="lg" disabled={loading} className="w-full md:w-auto">
            {loading ? "Sending…" : "Send message"} <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};
