'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceData {
  id: string;
  name: string;
  description: string;
  tags: string[];
  icon: string;
}

const services: ServiceData[] = [
  {
    id: "01",
    name: "UI / UX DESIGN",
    description: "We design user interfaces and experiences that are easy to understand and simple to use.",
    tags: ["User research", "Prototypes", "Wireframes", "User flows", "Responsive Design"],
    icon: "/assets/icons3d/design.avif"
  },
  {
    id: "02",
    name: "WEBSITE CREATION",
    description: "We design and build professional websites from scratch, structured to present your services clearly and guide visitors.",
    tags: ["Custom Design", "Next.js development", "Responsive layout", "SEO optimization", "Contact integration"],
    icon: "/assets/icons3d/zJzgsbzn1lS3rCHLY4bpPxQ35g.avif"
  },
  {
    id: "03",
    name: "WEBSITE REDESIGN",
    description: "Transform your outdated website into a modern, high-performance platform that builds trust and brings in clients.",
    tags: ["Website analysis", "New structure", "Improved speed", "Modern visuals", "Better navigation"],
    icon: "/assets/icons3d/48ozxNxjmhGkuMCjHtIthSsL8.avif"
  },
  {
    id: "04",
    name: "STRATEGY",
    description: "We clarify your business message and structure your website layout to guide visitors toward taking action.",
    tags: ["Content strategy", "Conversion optimization", "Messaging framework", "Competitor analysis"],
    icon: "/assets/icons3d/cdmRdvAtWOA2Auwbo7D1WXEj8b0.avif"
  }
];

export function ProcessSection() {
  return (
    <section id="services" className="relative py-24 md:py-36 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#33FF0D]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#0000EE]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-20 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="max-w-2xl flex flex-col items-center text-center space-y-4 mb-16">
          <span className="font-mono text-[13px] text-[#33FF0D] tracking-[0.15em] font-medium block">
            [ What we do ]
          </span>
          
          <h2 className="font-display text-white text-[40px] sm:text-[56px] md:text-[68px] lg:text-[72px] font-normal leading-[1.0] tracking-normal uppercase">
            DESIGN <span className="text-[#33FF0D]">CAPABILITIES</span>
          </h2>
          
          <p className="font-body text-[#A4A4A4] text-[16px] sm:text-[18px] max-w-lg leading-[1.4] mt-4">
            We offer focused design services that improve clarity, usability, and consistency across digital products.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6">
          {services.map((service, idx) => (
            <motion.div 
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-[#575757]/30 bg-[#0D0D0D] p-8 hover:border-[#33FF0D] hover:shadow-[0_0_30px_rgba(51,255,13,0.08)] transition-all duration-500 flex flex-col justify-between h-full relative group rounded-none"
            >
              <div>
                {/* ID Tag */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[12px] text-[#33FF0D] bg-[#33FF0D]/5 border border-[#33FF0D]/10 px-2 py-0.5 select-none">
                    {service.id}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#33FF0D] transition-colors" />
                </div>

                {/* Floating 3D Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: idx * 0.3 }}
                  className="relative w-24 h-24 my-8 mx-auto filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500"
                >
                  <Image 
                    src={service.icon} 
                    alt={service.name} 
                    fill 
                    className="object-contain" 
                    unoptimized
                  />
                </motion.div>

                {/* Service Title */}
                <h3 className="font-display text-[22px] sm:text-[24px] text-white tracking-normal uppercase mb-3 text-center group-hover:text-[#33FF0D] transition-colors">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="font-body text-[14px] text-[#A4A4A4] leading-relaxed mb-8 text-center">
                  {service.description}
                </p>
              </div>

              {/* Included Items / Tags */}
              <div className="w-full pt-6 border-t border-[#575757]/20 flex flex-col gap-3">
                <span className="font-body text-[10px] font-bold text-[#505250] uppercase tracking-[0.15em] block text-center group-hover:text-white/40 transition-colors">
                  Included Capabilities
                </span>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="border border-[#575757]/20 bg-white/[0.02] px-2.5 py-1 text-[11px] font-sans text-[#A4A4A4] leading-none rounded-none group-hover:border-[#33FF0D]/20 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
