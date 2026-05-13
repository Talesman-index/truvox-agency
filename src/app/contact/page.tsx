'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from '@/components/ui/Badge';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24 md:pt-48 md:pb-32 px-6">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
        {/* Left Column - Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <Reveal>
              <Badge variant="lime" rotation={-2} className="mb-8">Contact Us</Badge>
              <h1 className="text-5xl md:text-7xl lg:text-[80px] font-medium text-text-heading leading-[1.05] tracking-tight">
                Let&apos;s Build <br /><span className="gradient-text italic">The Future.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[18px] md:text-[20px] text-text-muted leading-relaxed max-w-lg">
                Ready to elevate your digital authority? Share your vision with us and we&apos;ll get back to you within 24 hours.
              </p>
            </Reveal>
          </div>

          <div className="space-y-10 pt-8 border-t border-white/5">
             {[
               { icon: <Mail size={20} />, label: 'Email us', val: 'contact@truvox.io' },
               { icon: <Phone size={20} />, label: 'Call us', val: '+33 6 00 00 00 00' },
               { icon: <MapPin size={20} />, label: 'Studio', val: 'Paris, France (Remote First)' },
             ].map((item, i) => (
               <Reveal key={i} delay={0.4 + (i * 0.1)}>
                 <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-bg-card rounded-2xl flex items-center justify-center text-brand-main border border-border-subtle group-hover:border-brand-main group-hover:shadow-glow transition-all duration-500">
                       {item.icon}
                    </div>
                    <div className="space-y-1">
                       <div className="text-[12px] text-text-muted font-bold uppercase tracking-widest">{item.label}</div>
                       <div className="text-[22px] font-semibold text-text-heading group-hover:text-brand-main transition-colors">{item.val}</div>
                    </div>
                 </div>
               </Reveal>
             ))}
          </div>
        </div>

        {/* Right Column - Form */}
        <Reveal delay={0.4}>
          <div className="bg-bg-card p-8 md:p-12 rounded-[40px] border border-border-subtle relative overflow-hidden group">
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-main/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand-main/10 transition-colors"></div>
            
            <form className="space-y-10 relative z-10">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <label className="text-[12px] font-bold text-text-muted uppercase tracking-widest ml-1">Full Name</label>
                     <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-bg-primary/50 border border-border-subtle rounded-2xl px-6 h-[60px] text-text-heading placeholder:text-text-muted/30 focus:border-brand-main focus:outline-none transition-all"
                     />
                  </div>
                  <div className="space-y-3">
                     <label className="text-[12px] font-bold text-text-muted uppercase tracking-widest ml-1">Email Address</label>
                     <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-bg-primary/50 border border-border-subtle rounded-2xl px-6 h-[60px] text-text-heading placeholder:text-text-muted/30 focus:border-brand-main focus:outline-none transition-all"
                     />
                  </div>
               </div>
               
               <div className="space-y-3">
                  <label className="text-[12px] font-bold text-text-muted uppercase tracking-widest ml-1">Project Type</label>
                  <select className="w-full bg-bg-primary/50 border border-border-subtle rounded-2xl px-6 h-[60px] text-text-heading focus:border-brand-main focus:outline-none transition-all appearance-none cursor-pointer">
                     <option>Digital Strategy & UI/UX</option>
                     <option>Full-Stack Development</option>
                     <option>E-commerce & Automation</option>
                     <option>Branding & Identity</option>
                  </select>
               </div>
               
               <div className="space-y-3">
                  <label className="text-[12px] font-bold text-text-muted uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your goals..." 
                    className="w-full bg-bg-primary/50 border border-border-subtle rounded-2xl px-6 py-6 text-text-heading placeholder:text-text-muted/30 focus:border-brand-main focus:outline-none transition-all resize-none"
                  ></textarea>
               </div>
               
               <Button variant="primary" className="w-full h-[64px] rounded-full text-[16px] font-bold bg-brand-main text-bg-primary hover:bg-brand-hover shadow-[0_0_20px_rgba(0,255,133,0.3)]">
                  Send Message <ArrowRight size={18} className="ml-2" />
               </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
