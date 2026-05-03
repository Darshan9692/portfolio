import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { API_CONFIG } from "@/config/api";
import { contactInfo, MAP_URL, QR_CODE_API } from "@/constants/portfolio-data";
import { toast } from "@/hooks/use-toast";
import apiClient from "@/lib/axios";
import { motion } from "framer-motion";
import { ArrowRight, QrCode } from "lucide-react";
import { useState } from "react";

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

  const qrCodeUrl = QR_CODE_API(MAP_URL);

  return (
    <SectionWrapper id="contact">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <SectionHeader eyebrow="06 — Contact" />
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center justify-between p-5 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-colors group/item">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-electric shadow-electric">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>

                {item.showQR && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-10 w-10 border border-border/40 opacity-0 group-hover/item:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
                        aria-label="Show Location QR Code">
                        <QrCode className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[300px]">
                      <DialogHeader>
                        <DialogTitle className="text-center">Scan for Location</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center justify-center p-4">
                        <div className="bg-white p-4 rounded-xl shadow-lg mb-4">
                          <img src={qrCodeUrl} alt="Location QR Code" width={200} height={200} className="w-full h-full object-contain" />
                        </div>
                        <p className="text-xs text-center text-muted-foreground">Scan this to open my exact location in Google Maps</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
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
          className="lg:col-span-3 p-6 md:p-10 rounded-3xl border border-border/60 bg-card/80 backdrop-blur-md space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
              <Input id="name" name="name" required placeholder="Darshan Panchal" className="mt-2 h-12 rounded-xl bg-background/60" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
              <Input id="email" name="email" required type="email" placeholder="dpinfo9692@gmail.com" className="mt-2 h-12 rounded-xl bg-background/60" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject</label>
            <Input id="subject" name="subject" required placeholder="Topic..." className="mt-2 h-12 rounded-xl bg-background/60" />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
            <Textarea id="message" name="message" required rows={6} placeholder="Hello..." className="mt-2 rounded-xl bg-background/60 resize-none" />
          </div>
          <Button type="submit" variant="electric" size="lg" disabled={loading} className="w-full md:w-auto">
            {loading ? "Sending…" : "Send message"} <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};
