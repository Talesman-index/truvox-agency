'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from '@/components/ui/Badge';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Product Design & UI/UX',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call (replace with your Formspree ID or real API)
    // To use Formspree, replace the fetch URL with: https://formspree.io/f/YOUR_ID
    try {
      const response = await fetch('https://formspree.io/f/xbdwepay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
               { icon: <Mail size={20} />, label: 'Email us', val: 'hello@truvox.studio' },
               { icon: <Phone size={20} />, label: 'Call us', val: '+1 (515) 206-3535' },
               { icon: <MapPin size={20} />, label: 'Studio', val: 'Charlotte, NC' },
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
          <div className="bg-bg-card p-8 md:p-12 rounded-[40px] border border-border-subtle relative overflow-hidden group min-h-[600px] flex flex-col justify-center">
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-main/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand-main/10 transition-colors"></div>
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit} 
                  className="space-y-10 relative z-10"
                >
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[12px] font-bold text-text-muted uppercase tracking-widest ml-1">Full Name</label>
                         <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe" 
                            className="w-full bg-bg-dark border border-border-subtle rounded-2xl px-6 h-[60px] text-text-heading placeholder:text-text-muted/30 focus:border-brand-main focus:outline-none transition-all"
                         />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[12px] font-bold text-text-muted uppercase tracking-widest ml-1">Email Address</label>
                         <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com" 
                            className="w-full bg-bg-dark border border-border-subtle rounded-2xl px-6 h-[60px] text-text-heading placeholder:text-text-muted/30 focus:border-brand-main focus:outline-none transition-all"
                         />
                      </div>
                   </div>
                   
                   <div className="space-y-3">
                      <label className="text-[12px] font-bold text-text-muted uppercase tracking-widest ml-1">Project Type</label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-bg-dark border border-border-subtle rounded-2xl px-6 h-[60px] text-text-heading focus:border-brand-main focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                         <option>Product Design & UI/UX</option>
                         <option>Web & Mobile Development</option>
                         <option>Marketing & Data Strategy</option>
                         <option>Brand Identity Systems</option>
                      </select>
                   </div>
                   
                   <div className="space-y-3">
                      <label className="text-[12px] font-bold text-text-muted uppercase tracking-widest ml-1">Your Message</label>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        placeholder="Tell us about your goals..." 
                        className="w-full bg-bg-dark border border-border-subtle rounded-2xl px-6 py-6 text-text-heading placeholder:text-text-muted/30 focus:border-brand-main focus:outline-none transition-all resize-none"
                      ></textarea>
                   </div>
                   
                   <Button 
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary" 
                    className="w-full h-[64px] rounded-full text-[16px] font-bold bg-brand-main text-bg-primary hover:bg-brand-hover shadow-[0_0_20px_rgba(0,255,133,0.3)]"
                   >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-bg-primary border-t-transparent rounded-full"
                          />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          Send Message <ArrowRight size={18} />
                        </div>
                      )}
                   </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8 py-12 relative z-10"
                >
                  <div className="w-24 h-24 bg-brand-main/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-main/20">
                    <CheckCircle2 size={48} className="text-brand-main" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-text-heading">Message Sent!</h3>
                    <p className="text-text-muted text-lg max-w-sm mx-auto">
                      Thank you for reaching out. Our team will review your project and get back to you at <span className="text-brand-main font-medium">{formData.email}</span> within 24 hours.
                    </p>
                  </div>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    variant="secondary" 
                    className="rounded-full border-white/10 text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
