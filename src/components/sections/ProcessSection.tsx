'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    description: "We simplify complexity. Our interfaces are built to help users understand information quickly, take action confidently, and trust the businesses behind them.",
    tags: ["User research", "Prototypes", "Wireframes", "User flows", "Responsive Design"],
    icon: "/assets/icons3d/design.avif"
  },
  {
    id: "02",
    name: "WEBSITE CREATION",
    description: "We build custom websites with one goal: to make your business communicate clearly online. Every page, section, and call-to-action is designed to move visitors toward a decision.",
    tags: ["Custom Design", "Next.js development", "Responsive layout", "SEO optimization", "Contact integration"],
    icon: "/assets/icons3d/zJzgsbzn1lS3rCHLY4bpPxQ35g.avif"
  },
  {
    id: "03",
    name: "WEBSITE REDESIGN",
    description: "Your website redesign should feel like a business upgrade, not just a visual refresh. We improve communication, remove friction, and rebuild trust from the first scroll.",
    tags: ["Website analysis", "New structure", "Improved speed", "Modern visuals", "Better navigation"],
    icon: "/assets/icons3d/48ozxNxjmhGkuMCjHtIthSsL8.avif"
  },
  {
    id: "04",
    name: "STRATEGY",
    description: "Strategy is the foundation behind every website that performs. We align your messaging, structure, and user journey before a single line of code is written.",
    tags: ["Content strategy", "Conversion optimization", "Messaging framework", "Competitor analysis"],
    icon: "/assets/icons3d/cdmRdvAtWOA2Auwbo7D1WXEj8b0.avif"
  }
];

export function ProcessSection() {
  return (
    <section id="services" className="relative py-24 md:py-36 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#33FF0A]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#0000EE]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-20 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="max-w-2xl flex flex-col items-center text-center space-y-4 mb-16">
          <span className="font-mono text-[13px] text-[#33FF0A] tracking-[0.15em] font-medium block">
            [ What we do ]
          </span>
          
          <h2 className="font-display text-white text-[40px] sm:text-[56px] md:text-[68px] lg:text-[72px] font-normal leading-[1.0] tracking-normal uppercase">
            WHAT WE <span className="text-[#33FF0A]">BUILD</span>
          </h2>
          
          <p className="font-body text-[#A4A4A4] text-[16px] sm:text-[18px] max-w-lg leading-[1.4] mt-4">
            Four focused services, each built around a single outcome: helping your business communicate clearly and convert visitors into clients.
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
              className="border border-[#575757]/30 bg-[#0D0D0D] p-8 hover:border-[#33FF0A] hover:shadow-[0_0_30px_rgba(51,255,10,0.08)] transition-all duration-500 flex flex-col justify-between h-full relative group rounded-none"
            >
              <div>
                {/* ID Tag */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[12px] text-[#33FF0A] bg-[#33FF0A]/5 border border-[#33FF0A]/10 px-2 py-0.5 select-none">
                    {service.id}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#33FF0A] transition-colors" />
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
                <h3 className="font-display text-[22px] sm:text-[24px] text-white tracking-normal uppercase mb-3 text-center group-hover:text-[#33FF0A] transition-colors">
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
                      className="border border-[#575757]/20 bg-white/[0.02] px-2.5 py-1 text-[11px] font-sans text-[#A4A4A4] leading-none rounded-none group-hover:border-[#33FF0A]/20 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 md:mt-16 text-center select-none">
          <Link href="/services" className="relative group inline-block">
            {/* Corner Crop Marks */}
            <span className="absolute top-[-5px] left-[-5px] w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            <span className="absolute top-[-5px] right-[-5px] w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            
            <div className="flex items-center bg-[#FFFFFF] text-[#000000] font-mono text-[12px] uppercase tracking-[0.1em] h-[57px] rounded-none hover:bg-[#33FF0A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(51,255,10,0.2)] cursor-pointer border-none pl-6 pr-0 relative z-10">
              <span className="mr-6 font-medium">View all capabilities</span>
              <span className="flex items-center justify-center w-[50px] h-[57px] border-l border-black/25 text-[18px]">
                <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 leading-none">
                  →
                </span>
              </span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
