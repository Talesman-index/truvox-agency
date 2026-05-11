'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactPage() {

  return (
    <main className="flex-grow">
      {/* HERO CONTACT - DARK THEME */}
      <section className="relative pt-40 pb-32 px-6 bg-dark overflow-hidden">
        {/* Background Effects */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-brand-main/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-secondary/10 blur-[100px] rounded-full"></div>

        <div className="max-w-[1440px] mx-auto relative z-10 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-brand-main"></div>
              <span className="text-brand-main font-black uppercase tracking-[0.4em] text-[10px]">
                Get in touch
              </span>
            </motion.div>

            <div className="space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-white leading-[1.0] tracking-tighter"
              >
                Let&apos;s build <br /><span className="gradient-text">your presence.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/60 leading-relaxed max-w-lg"
              >
                Ready to take your business to the next level? Fill out the form and we&apos;ll get back to you within 24 hours.
              </motion.p>
            </div>

            <div className="space-y-8 pt-8">
               {[
                 { icon: <Mail size={24} />, label: 'Email us', val: 'contact@truvox.io' },
                 { icon: <Phone size={24} />, label: 'Call us', val: '+33 6 00 00 00 00' },
                 { icon: <MapPin size={24} />, label: 'Studio', val: 'Paris, France (Remote First)' },
               ].map((item, i) => (
                 <Reveal key={i} delay={0.6 + (i * 0.1)}>
                   <div className="flex items-center gap-8 group">
                      <div className="w-16 h-16 bg-white/5 rounded-[20px] flex items-center justify-center text-brand-main border border-white/10 group-hover:bg-brand-main group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-main/20">
                         {item.icon}
                      </div>
                      <div className="space-y-1">
                         <div className="text-[10px] text-white/40 font-black uppercase tracking-widest">{item.label}</div>
                         <div className="text-xl font-bold text-white tracking-tight">{item.val}</div>
                      </div>
                   </div>
                 </Reveal>
               ))}
            </div>
          </div>

          <Reveal delay={0.4} duration={1}>
            <div className="bg-white p-12 md:p-16 rounded-[60px] shadow-elevation5 border border-light relative group">
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight size={40} className="text-brand-main" />
              </div>

              <form className="space-y-10">
                 <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Full Name</label>
                       <input 
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full bg-sectionAlt border-none rounded-2xl px-8 py-5 text-primary placeholder:text-muted focus:ring-2 focus:ring-brand-main transition-all shadow-inner"
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Email Address</label>
                       <input 
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full bg-sectionAlt border-none rounded-2xl px-8 py-5 text-primary placeholder:text-muted focus:ring-2 focus:ring-brand-main transition-all shadow-inner"
                       />
                    </div>
                 </div>
                 
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Project Type</label>
                    <div className="relative">
                      <select className="w-full bg-sectionAlt border-none rounded-2xl px-8 py-5 text-primary focus:ring-2 focus:ring-brand-main transition-all appearance-none shadow-inner cursor-pointer font-bold">
                         <option>New Website Creation</option>
                         <option>Website Redesign</option>
                         <option>UI/UX Design Only</option>
                         <option>Other</option>
                      </select>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                         <ArrowUpRight size={20} className="rotate-90" />
                      </div>
                    </div>
                 </div>
                 
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Your Message</label>
                    <textarea 
                      rows={5} 
                      placeholder="Tell us about your goals..." 
                      className="w-full bg-sectionAlt border-none rounded-2xl px-8 py-5 text-primary placeholder:text-muted focus:ring-2 focus:ring-brand-main transition-all shadow-inner"
                    ></textarea>
                 </div>
                 
                 <Button variant="primary" className="w-full py-6 text-xl rounded-2xl shadow-elevation5">
                    Send Message
                 </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
