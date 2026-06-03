'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] last:mr-0 inline-block">
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 25%"]
  });

  const words = text.split(" ");

  return (
    <h2 
      ref={containerRef}
      className="font-display text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-normal leading-[1.15] tracking-normal uppercase text-left flex flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h2>
  );
}

export function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(1); // "OUR MISSION" is index 1
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    {
      title: "OUR GOALS",
      image: "/assets/bg/about_nature_goals.png",
      gradient: "from-[#1E3040] via-[#0E1520] to-[#070A0F]",
      content: "We establish clear milestones, focus on user-centric layouts, ensure consistent performance, and plan for scalable long-term growth."
    },
    {
      title: "OUR MISSION",
      image: "/assets/bg/about_nature_mission.png",
      gradient: "from-[#3D7899] via-[#122A3C] to-[#0A0F17]",
      content: "We focus on understanding the problem before designing the solution, ensuring every layout, interaction, and visual element serves a real purpose."
    },
    {
      title: "OUR VISION",
      image: "/assets/bg/about_nature_vision.png",
      gradient: "from-[#4B2F7D] via-[#18112C] to-[#090712]",
      content: "We strive to lead digital innovation, building interfaces that set new standards for speed, accessibility, and clean aesthetic design."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4500); // Auto-scroll every 4.5 seconds
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleCardClick = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section id="about" className="relative py-24 md:py-36 px-6 bg-black overflow-hidden border-t border-[#575757]/10">
      

      <div className="max-w-[1200px] mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Big statement & Signature & Ratings */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-12">
            
            {/* Mission Statement */}
            <div className="space-y-6">
              <ScrollRevealText text="We believe great design always begins with understanding the goals and users behind every project to create meaningful and effective digital experiences." />
              
              {/* Handwritten Signature */}
              <div className="pt-4">
                <span className="font-signature text-[32px] sm:text-[40px] text-[#33FF0D] block leading-none select-none">
                  Truvox Team
                </span>
              </div>
            </div>

            {/* Agency Ratings Block */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#575757]/20 w-full select-none">
              {/* Rating 1: Capterra */}
              <div className="flex flex-col gap-2">
                {/* Logo Badge */}
                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#575757]/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 7.5 C15.3 6.0 13.3 5.0 11.0 5.0 C7.1 5.0 4.0 8.1 4.0 12.0 C4.0 15.9 7.1 19.0 11.0 19.0 C13.3 19.0 15.3 18.0 16.5 16.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <circle cx="11.5" cy="12.0" r="2.2" fill="#FF3333" />
                  </svg>
                </div>
                {/* Header Tag */}
                <span className="font-mono text-[#33FF0D] text-[10px] sm:text-[11px] uppercase tracking-wider block mt-2">
                  // CAPTERRA
                </span>
                {/* Value & Stars */}
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-[32px] sm:text-[40px] text-white leading-none font-bold">
                    4.9
                  </span>
                  <span className="font-mono text-[14px] sm:text-[16px] text-[#505250] font-normal">
                    /5
                  </span>
                </div>
                {/* Stars Rating */}
                <div className="flex items-center gap-0.5 text-white text-[12px] sm:text-[13px] my-0.5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                {/* Subtext */}
                <span className="font-mono text-[8px] sm:text-[9px] text-[#505250] uppercase tracking-widest mt-1">
                  Based on 230 reviews
                </span>
              </div>

              {/* Rating 2: Trustpilot */}
              <div className="flex flex-col gap-2 pl-8 border-l border-[#575757]/20">
                {/* Logo Badge */}
                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#575757]/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3C12 9 15 12 21 12C15 12 12 15 12 21C12 15 9 12 3 12C9 12 12 9 12 3Z" fill="white" />
                  </svg>
                </div>
                {/* Header Tag */}
                <span className="font-mono text-[#33FF0D] text-[10px] sm:text-[11px] uppercase tracking-wider block mt-2">
                  // TRUSTPILOT
                </span>
                {/* Value & Stars */}
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-[32px] sm:text-[40px] text-white leading-none font-bold">
                    4.7
                  </span>
                  <span className="font-mono text-[14px] sm:text-[16px] text-[#505250] font-normal">
                    /5
                  </span>
                </div>
                {/* Stars Rating */}
                <div className="flex items-center gap-0.5 text-white text-[12px] sm:text-[13px] my-0.5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                {/* Subtext */}
                <span className="font-mono text-[8px] sm:text-[9px] text-[#505250] uppercase tracking-widest mt-1">
                  Based on 120 reviews
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Carousel Card stack & CTA button */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-12">
            
            {/* Interactive Card Carousel */}
            <div 
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="relative w-full max-w-[340px] h-[340px] flex items-center justify-center"
            >
              <div className="absolute inset-0">
                {cards.map((card, idx) => {
                  const isActive = idx === activeIndex;
                  // Calculate left and right based on cyclic indices
                  const isLeft = idx === (activeIndex - 1 + cards.length) % cards.length;
                  const isRight = idx === (activeIndex + 1) % cards.length;

                  return (
                    <motion.div
                      key={card.title}
                      onClick={() => handleCardClick(idx)}
                      animate={{
                        x: isActive ? 0 : isLeft ? -45 : 45,
                        y: isActive ? 0 : 10,
                        scale: isActive ? 1.0 : 0.88,
                        rotate: isActive ? 0 : isLeft ? -8 : 8,
                        zIndex: isActive ? 20 : 10,
                        opacity: isActive ? 1.0 : 0.35,
                      }}
                      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                      className={`absolute w-full h-[300px] bg-gradient-to-b ${card.gradient} ${
                        isActive ? 'border border-[#33FF0D]/20 shadow-[0_0_40px_rgba(51,255,13,0.05)]' : 'border border-white/10'
                      } hover:border-[#33FF0D]/30 p-8 flex flex-col justify-between cursor-pointer select-none rounded-none overflow-hidden group transition-colors duration-500`}
                      style={{
                        pointerEvents: isActive ? 'auto' : 'all',
                        transformOrigin: 'bottom center',
                      }}
                    >
                      {/* Card Background Image & Gradient Overlay */}
                      <div className="absolute inset-0 z-0 select-none pointer-events-none">
                        <Image 
                          src={card.image} 
                          alt={card.title} 
                          fill 
                          className="object-cover opacity-35 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50" 
                          priority={isActive}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/75 to-black/95" />
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10 space-y-3">
                        <span className="font-mono text-[#33FF0D] text-[10px] uppercase tracking-[0.25em] block">
                          // 0{idx + 1}
                        </span>
                        <h3 className="font-display text-[22px] tracking-wide text-white uppercase mb-2 leading-none">
                          {card.title.replace("OUR ", "")}
                        </h3>
                        <p className="font-body text-[13px] sm:text-[14px] text-white/90 leading-[1.45]">
                          {card.content}
                        </p>
                      </div>

                      {/* Card Footer Details */}
                      <div className="flex justify-between items-center w-full pt-4 border-t border-white/10 relative z-10">
                        <span className="font-mono text-[9px] text-[#505250] uppercase tracking-[0.2em]">
                          TRV.{card.title.replace("OUR ", "").substring(0, 3)} // CLT.NC
                        </span>
                        <div className="flex items-center gap-2 relative">
                          {isActive && (
                            <>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#33FF0D] animate-ping absolute left-0" />
                              <span className="w-1.5 h-1.5 rounded-full bg-[#33FF0D] relative z-10" />
                            </>
                          )}
                          <span className={`font-mono text-[8px] uppercase tracking-widest ${isActive ? 'text-[#33FF0D] pl-3.5' : 'text-[#505250]'}`}>
                            {isActive ? "active" : "standby"}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Slider Dots/Dashes */}
            <div className="flex gap-2 justify-center w-full max-w-[340px]">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-0.5 transition-all duration-300 rounded-none cursor-pointer border-none ${
                    i === activeIndex ? 'w-10 bg-white' : 'w-6 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Bottom text block & CTA button */}
            <div className="w-full max-w-[340px] sm:max-w-md space-y-6 pt-4">
              <p className="font-body text-[#A4A4A4] text-[15px] sm:text-[16px] leading-[1.4] text-left">
                Our team works across branding, web design, and digital interfaces, helping companies present their ideas clearly and professionally.
              </p>
              
              <Link href="/about" className="relative group block w-fit">
                {/* Corner Crop Marks */}
                <span className="absolute top-[-5px] left-[-5px] w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute top-[-5px] right-[-5px] w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                
                <button className="flex items-center bg-[#FFFFFF] text-[#000000] font-mono text-[12px] uppercase tracking-[0.1em] h-[57px] rounded-none hover:bg-[#33FF0D] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(51,255,13,0.2)] cursor-pointer border-none pl-6 pr-0 w-fit relative z-10">
                  <span className="mr-6 font-medium">Learn more about us</span>
                  <span className="flex items-center justify-center w-[50px] h-[57px] border-l border-black/25 text-[18px]">
                    <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 leading-none">
                      →
                    </span>
                  </span>
                </button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
