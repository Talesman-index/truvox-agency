'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { TruvoxLogo } from "@/components/ui/TruvoxLogo";

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className="p-7 bg-[#0D0D0D] rounded-none border border-[#1A1A1A] flex flex-col cursor-pointer group hover:border-brand-main transition-all duration-300 hover:shadow-[0_0_30px_rgba(51,255,13,0.08)]"
    >
      <div className="flex items-center justify-between w-full gap-4">
        <span className="text-[16px] md:text-[18px] font-medium text-white/90 group-hover:text-white transition-colors">{question}</span>
        <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center group-hover:bg-brand-main group-hover:text-[#000000] group-hover:border-brand-main transition-all duration-300 shrink-0">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Plus size={18} />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, marginTop: isOpen ? 16 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-[15px] md:text-[16px] text-text-muted leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Truvox Agency",
    "description": "Web Design for Small Businesses",
    "url": "https://truvox.studio",
    "logo": "https://truvox.studio/assets/truvox-logo.png",
    "image": "https://truvox.studio/assets/bg/hero-team.jpg",
    "telephone": "",
    "email": "hello@truvox.studio",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.8283,
        "longitude": -98.5795
      },
      "geoRadius": "4000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Creation" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Redesign" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategy" }}
      ]
    },
    "sameAs": []
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do we get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a free 30-minute call. We'll talk about your business and figure out together what your website needs. No commitment, no pressure."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most projects take between 2 and 4 weeks from our first call to launch. It depends on how many pages and how quickly you can provide content."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide the content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can guide you on what to write, or write it for you as part of the Growth package. Either way, we'll make sure the final text is clear and effective."
        }
      },
      {
        "@type": "Question",
        "name": "What if I already have a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can redesign it from scratch or improve what's already there. We'll be honest about which option makes more sense for your situation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer support after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Growth plan includes one month of support. After that, we offer simple maintenance packages if you need ongoing help."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "How do we get started?",
      a: "Book a free 30-minute call. We'll talk about your business and figure out together what your website needs. No commitment, no pressure."
    },
    {
      q: "How long does a project take?",
      a: "Most projects take between 2 and 4 weeks from our first call to launch. It depends on how many pages and how quickly you can provide content."
    },
    {
      q: "Do I need to provide the content?",
      a: "We can guide you on what to write, or write it for you as part of the Growth package. Either way, we'll make sure the final text is clear and effective."
    },
    {
      q: "What if I already have a website?",
      a: "We can redesign it from scratch or improve what's already there. We'll be honest about which option makes more sense for your situation."
    },
    {
      q: "Do you offer support after launch?",
      a: "Yes. The Growth plan includes one month of support. After that, we offer simple maintenance packages if you need ongoing help."
    }
  ];

  const blackRibbonItems = [
    "Have a project in mind?",
    "Need design clarity?",
    "Want to collaborate?",
    "Looking for high conversion?",
  ];

  return (
    <main className="flex-grow bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* HERO SECTION - NUVARA AGENCY STYLE */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-6 overflow-hidden bg-black">

        <motion.div
          className="max-w-[1200px] mx-auto w-full relative z-20 flex flex-col items-center text-center mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Main H1 Title (Truvox SVG Logo from public/logo.svg) - Interactive inlined version */}
          <motion.div 
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            className="relative w-[320px] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-[86px] sm:h-[161px] md:h-[215px] lg:h-[268px] xl:h-[322px] mb-8 select-none cursor-pointer"
          >
            <svg 
              viewBox="0 0 413 111" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full object-contain"
            >
              {/* Letters T, R, U, V, X */}
              <motion.path 
                d="M59.604 36.6413H36.0013V85H25.2915V36.6413H1.64766V25.9315H59.604V36.6413ZM125.741 45.7858C125.741 48.2298 125.439 50.4129 124.835 52.3352C124.23 54.2575 123.407 55.9601 122.363 57.4429C121.347 58.8984 120.166 60.1479 118.821 61.1914C117.475 62.2349 116.061 63.0999 114.578 63.7864C113.123 64.4455 111.64 64.9261 110.129 65.2281C108.646 65.5302 107.246 65.6812 105.928 65.6812L128.295 85H111.736L89.41 65.6812H81.7072V54.9715H105.928C107.273 54.8616 108.495 54.587 109.594 54.1476C110.72 53.6808 111.681 53.0629 112.477 52.294C113.301 51.5251 113.933 50.6052 114.372 49.5342C114.811 48.4358 115.031 47.1863 115.031 45.7858V39.0304C115.031 38.4262 114.949 37.9731 114.784 37.6711C114.647 37.3415 114.454 37.1081 114.207 36.9708C113.988 36.8061 113.74 36.7099 113.466 36.6825C113.219 36.655 112.985 36.6413 112.766 36.6413H77.4233V85H66.7135V31.3276C66.7135 30.5862 66.8508 29.8859 67.1254 29.2268C67.4 28.5678 67.7708 27.9911 68.2376 27.4968C68.7319 27.0025 69.3086 26.618 69.9676 26.3434C70.6267 26.0688 71.3407 25.9315 72.1096 25.9315H112.766C115.155 25.9315 117.173 26.3709 118.821 27.2496C120.468 28.1009 121.8 29.1856 122.816 30.5038C123.86 31.7944 124.601 33.1949 125.041 34.7053C125.507 36.2156 125.741 37.6299 125.741 38.948V45.7858ZM193.566 79.6039C193.566 80.3728 193.429 81.0868 193.155 81.7459C192.88 82.4049 192.496 82.9816 192.001 83.4759C191.507 83.9428 190.93 84.3135 190.271 84.5881C189.612 84.8627 188.912 85 188.17 85H164.032C161.753 85 159.446 84.7529 157.112 84.2586C154.778 83.7643 152.512 83.0091 150.316 81.993C148.146 80.9495 146.1 79.6314 144.178 78.0387C142.256 76.4459 140.567 74.5648 139.111 72.3954C137.683 70.1986 136.558 67.6996 135.734 64.8986C134.91 62.0701 134.498 58.9258 134.498 55.4658V25.9315H145.208V55.4658C145.208 58.4865 145.62 61.0403 146.444 63.1274C147.295 65.2144 148.366 66.9582 149.656 68.3587C150.947 69.7592 152.361 70.8576 153.899 71.654C155.437 72.4504 156.892 73.0408 158.265 73.4252C159.666 73.8097 160.888 74.0568 161.931 74.1667C163.002 74.249 163.703 74.2902 164.032 74.2902H182.857V25.9315H193.566V79.6039ZM264.358 25.9315L236.389 82.8992C235.95 83.778 235.291 84.4782 234.412 85C233.561 85.5492 232.613 85.8238 231.57 85.8238C230.554 85.8238 229.606 85.5492 228.727 85C227.876 84.4782 227.217 83.778 226.75 82.8992L198.822 25.9315H210.809L231.57 68.4822L252.412 25.9315H264.358ZM348.38 47.0215L366.422 25.9315H381.045L355.63 55.5481L380.88 85H366.339L348.38 64.0748L330.503 85H315.921L341.13 55.5481L315.839 25.9315H330.338L348.38 47.0215Z" 
                fill="#FFFFFF"
                animate={{ 
                  fill: isLogoHovered ? "#EAEAEA" : "#FFFFFF" 
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Stylized O: Dagger and Circle */}
              <motion.g
                animate={{ 
                  rotate: isLogoHovered ? 360 : 0, 
                  scale: isLogoHovered ? 1.08 : 1
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 70, 
                  damping: 15,
                  mass: 1 
                }}
                style={{ 
                  transformOrigin: "286.5px 55.5px"
                }}
              >
                {/* Sword/Dagger center & circle elements */}
                <motion.path 
                  d="M278.292 59.2794C277.142 58.996 276.49 59.4109 275.765 60.8193C274.247 59.3946 273.4 56.243 275.03 54.1438C276.495 52.2591 278.562 51.7085 280.775 51.5314C281.658 51.4608 282.566 51.579 283.465 51.6099C283.318 51.0577 283.297 51.0465 281.773 50.712C282.089 49.7311 282.349 48.7457 282.718 47.8207C283.926 44.7855 285.196 41.783 286.399 38.7452C287.068 37.0576 287.609 35.3021 288.279 33.6154C289.033 31.7189 289.867 29.8658 290.673 27.9975C290.894 27.4837 290.959 27.0791 290.608 26.4441C289.168 23.8354 289.378 20.848 291.142 18.6397C292.112 17.4245 293.279 16.3997 294.254 15.1877C295.955 13.0725 296.852 10.5871 296.366 7.56526C296.313 7.2428 296.216 6.92449 296.232 6.44503C296.974 7.09743 297.827 7.64628 298.437 8.41881C301.94 12.8591 303.718 17.7516 302.394 23.2922C301.889 25.4086 300.549 26.8734 298.708 27.6003C297.497 28.0781 296.916 28.9537 296.606 30.1716C296.16 31.9206 295.757 33.6865 295.366 35.4559C295.332 35.6082 295.492 35.9385 295.634 36.0221C298.865 37.9183 301.365 40.6432 303.278 44.0202C305.596 48.1138 306.519 52.4895 305.884 56.9697C304.943 63.6122 301.546 68.1469 295.784 70.5022C292.95 71.6601 289.852 72.0023 288.068 71.8403C288.18 71.4573 288.286 71.0966 288.392 70.7379C288.838 69.2218 289.295 67.7092 289.725 66.1867C289.843 65.7713 290.009 65.5818 290.458 65.5333C293.81 65.1664 296.715 63.8639 298.698 60.945C301.186 57.2818 301.495 53.1201 299.837 48.6232C298.763 45.7099 296.977 43.3609 294.58 41.5427C294.442 41.4373 294.304 41.3358 294.164 41.2329C294.106 41.1905 294.047 41.1487 293.9 41.0442C293.759 41.7039 293.623 42.2848 293.51 42.871C292.833 46.3903 292.157 49.911 291.496 53.4355C291.426 53.8092 291.215 54.2635 291.787 54.5328C292.314 54.7794 292.799 54.8105 292.991 54.1862C293.4 52.8485 293.821 51.5074 294.103 50.1252C294.478 48.2827 294.726 46.4005 295.039 44.476C296.639 46.0562 297.598 47.9765 298.282 50.0585C299.046 52.3818 298.977 54.6295 298.222 56.816C297.028 60.2757 294.024 61.6597 290.653 60.9087C289.356 60.6205 289.373 60.5733 289.016 61.8975C286.268 72.0758 282.329 81.562 276.659 90.0339C276.203 90.7139 275.688 91.3555 275.134 91.9406C274.614 92.4913 274.131 92.266 273.946 91.4454C273.88 91.1503 273.851 90.8447 273.831 90.5454C273.371 84.0476 273.858 77.7083 275.062 71.4812C275.786 67.7377 276.731 64.0858 277.959 60.5404C278.098 60.1376 278.182 59.7064 278.294 59.2803L278.292 59.2794ZM275.373 56.2941C276.988 55.296 278.77 55.1629 280.634 55.3946C282.841 55.6692 284.913 56.5323 286.968 57.5308C288.223 58.1408 289.514 58.6909 290.824 59.0903C291.757 59.3744 292.747 59.3606 293.71 59.4791C292.928 59.1862 292.137 59.1421 291.374 58.9229C290.606 58.7009 289.855 58.3417 289.121 57.9776C288.081 57.4618 287.07 56.8659 286.032 56.3409C283.528 55.0732 280.971 54.2505 278.292 54.7596C277.171 54.9717 276.071 55.2515 275.373 56.2941ZM296.894 12.7102C296.842 12.6873 296.789 12.663 296.736 12.6401C296.505 13.2079 296.29 13.7871 296.038 14.3432C295.291 15.9941 294.059 17.1777 292.785 18.3135C291.82 19.1757 291.077 20.199 290.747 21.5566C290.507 22.5423 290.576 23.6497 290.992 24.3568C290.807 21.5433 292.086 19.6912 293.784 18.0946C294.763 17.1734 295.654 16.1679 296.186 14.8518C296.466 14.1608 296.661 13.4252 296.894 12.7102ZM283.309 48.9419C283.399 48.9859 283.488 49.0299 283.577 49.0725C285.081 45.5307 286.586 41.989 288.091 38.4468C288.052 38.3836 288.013 38.3199 287.973 38.2553C287.818 38.3668 287.589 38.436 287.519 38.5969C286.283 41.4304 285.055 44.2693 283.854 47.1216C283.612 47.6936 283.489 48.3311 283.309 48.9386L283.309 48.9419ZM295.948 18.3119C295.894 18.2699 295.838 18.2285 295.783 18.1865C294.899 19.5867 293.656 20.7199 293.292 22.5045C294.177 21.1072 295.063 19.7093 295.948 18.3119ZM299.65 19.4983C299.383 20.1528 299.167 20.8422 298.834 21.4523C298.493 22.0795 298.042 22.6294 297.638 23.213C298.85 22.359 299.465 21.0814 299.65 19.4983ZM277.555 67.6199C277.051 68.0075 276.603 69.4579 276.845 70.2015C277.068 69.3877 277.292 68.5752 277.555 67.6199Z" 
                  animate={{ 
                    fill: isLogoHovered ? "#33FF0D" : "#FFFFFF" 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Outer crescents/details for circle */}
                <motion.path 
                  d="M284.769 37.416C284.193 38.8987 283.569 40.1949 283.179 41.5875C282.743 43.1477 281.972 43.8687 280.408 44.2728C275.67 45.4972 272.859 48.9193 272.241 54.2308C271.894 57.2038 272.802 60.0306 274.626 62.5166C275.03 63.0764 275.121 63.527 274.942 64.1527C274.5 65.6901 274.126 67.2561 273.702 68.9012C271.881 67.2188 270.239 65.4634 269.13 63.2119C267.215 59.3298 266.317 55.3145 267.234 51.1892C268.516 45.4183 271.565 41.1827 276.581 38.8256C278.819 37.7742 281.227 37.2607 283.758 37.3061C284.05 37.3115 284.345 37.3691 284.769 37.416ZM279.115 39.886C274.927 39.8232 267.909 47.6192 268.555 51.6567C270.222 45.7577 273.847 41.9528 279.115 39.886Z" 
                  animate={{ 
                    fill: isLogoHovered ? "#33FF0D" : "#FFFFFF" 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.g>
            </svg>
          </motion.div>
          
          {/* Subtitle / Description */}
          <p className="font-body text-[#A4A4A4] text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mb-12 leading-[1.4] px-4">
            We design <span className="text-white font-medium">digital experiences</span> that balance visual clarity, usability, and purpose to help <span className="text-white font-medium">brands communicate</span> better.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 z-30">
            <Link href="#projects">
              <button className="flex items-center bg-[#FFFFFF] text-[#000000] font-mono text-[12px] uppercase tracking-[0.1em] h-[57px] rounded-none hover:bg-[#F5F5F5] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] cursor-pointer border-none pl-6 pr-0 group">
                <span className="mr-6 font-medium">See our work</span>
                <span className="flex items-center justify-center w-[50px] h-[57px] border-l border-black/20 text-[16px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex items-center bg-[#000000] text-[#FFFFFF] border border-[#575757] font-mono text-[12px] uppercase tracking-[0.1em] h-[57px] rounded-none hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.05)] cursor-pointer pl-6 pr-0 group">
                <span className="mr-6 font-medium">Request a quote</span>
                <span className="flex items-center justify-center w-[50px] h-[57px] border-l border-[#575757] text-[16px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </button>
            </Link>
          </div>

          {/* Truvox Pixel Logo at the bottom */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-24 h-48 sm:w-32 sm:h-64 mt-8 overflow-hidden"
          >
            <Image 
              src="/truvox_pixel.svg" 
              alt="Truvox Pixel Logo" 
              fill 
              className="object-contain" 
              priority 
            />
          </motion.div>
        </motion.div>

        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#33FF0D]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#33FF0D]/10 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* ADVERTISING VIDEO SECTION */}
      <section className="relative w-full bg-black overflow-hidden py-0">

        {/* Stepped Pixel Grid Mask at the top */}
        <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-6 items-start">
            {/* Column 1: Far Left */}
            <div className="bg-black h-12 border-r border-white/[0.03]"></div>
            {/* Column 2: Mid Left */}
            <div className="bg-black h-20 border-r border-white/[0.03]"></div>
            {/* Column 3: Center Left */}
            <div className="bg-black h-28 border-r border-white/[0.03]"></div>
            {/* Column 4: Center Right */}
            <div className="bg-black h-28 border-r border-white/[0.03]"></div>
            {/* Column 5: Mid Right */}
            <div className="bg-black h-20 border-r border-white/[0.03]"></div>
            {/* Column 6: Far Right */}
            <div className="bg-black h-12"></div>
          </div>
        </div>

        {/* Outer container of the video spanning full width */}
        <div className="w-full relative aspect-[21/9] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.39/1] overflow-hidden bg-black">
          {/* Video itself */}
          <video 
            className="w-full h-full object-cover opacity-80"
            src="/truvox_herovideo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          
          {/* Darkening / Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black pointer-events-none z-10" />
          <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
        </div>

        {/* Absolute coordinates overlay (placed on top of the grid) */}
        <div className="absolute top-4 left-0 right-0 z-30 max-w-[1440px] mx-auto px-6 md:px-12 pointer-events-none">
          <div className="flex justify-between items-center text-[10px] md:text-[12px] font-mono text-[#A4A4A4] uppercase tracking-[0.2em]">
            <span>[ Charlotte, North Carolina, USA ]</span>
            <span>[ 35.2271° N, 80.8431° W ]</span>
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section className="overflow-hidden bg-black border-y border-white/5 py-10 md:py-14 select-none">
        <div className="animate-marquee">
          {/* First set of words */}
          <div className="flex items-center gap-16 md:gap-24 text-[24px] sm:text-[36px] md:text-[54px] font-mono text-brand-main tracking-[0.2em] font-bold pr-16 md:pr-24">
            <span>DESIGN</span>
            <span className="text-white/20">/</span>
            <span>DEVELOPMENT</span>
            <span className="text-white/20">/</span>
            <span>STRATEGY</span>
            <span className="text-white/20">/</span>
            <span>GROWTH</span>
            <span className="text-white/20">/</span>
          </div>
          {/* Second set of words (for seamless scrolling) */}
          <div className="flex items-center gap-16 md:gap-24 text-[24px] sm:text-[36px] md:text-[54px] font-mono text-brand-main tracking-[0.2em] font-bold pr-16 md:pr-24" aria-hidden="true">
            <span>DESIGN</span>
            <span className="text-white/20">/</span>
            <span>DEVELOPMENT</span>
            <span className="text-white/20">/</span>
            <span>STRATEGY</span>
            <span className="text-white/20">/</span>
            <span>GROWTH</span>
            <span className="text-white/20">/</span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* SERVICES SECTION */}
      <ProcessSection />

      {/* DOUBLE INTERSECTING MARQUEE SECTION */}
      <section className="relative h-[200px] md:h-[240px] w-full bg-black overflow-hidden flex items-center justify-center py-0 my-0 border-y border-white/5">

        {/* Black Ribbon (Slanted at -2.5deg) */}
        <div className="absolute w-[120vw] min-w-[1500px] h-[52px] md:h-[64px] bg-black border-y border-white/10 flex items-center overflow-hidden rotate-[-2.5deg] z-10 shadow-lg">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-white font-interDisplay text-[15px] md:text-[18px] font-medium tracking-normal select-none">
            {Array(5).fill(blackRibbonItems).flat().map((text, idx) => (
              <div key={idx} className="flex items-center gap-12 shrink-0">
                <span>{text}</span>
                <div className="w-2.5 h-2.5 bg-[#33FF0D] rotate-45 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Green Ribbon (Slanted at 2.5deg) */}
        <div className="absolute w-[120vw] min-w-[1500px] h-[52px] md:h-[64px] bg-[#33FF0D] flex items-center overflow-hidden rotate-[2.5deg] z-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-black font-interDisplay text-[15px] md:text-[18px] font-semibold tracking-normal select-none">
            {Array(16).fill(null).map((_, idx) => {
              const avatars = ["/assets/team/aida.jpg", "/assets/team/shalom.jpg"];
              const avatarSrc = avatars[idx % 2];
              
              return (
                <div key={idx} className="flex items-center gap-12 shrink-0">
                  <span>Schedule a call</span>
                  
                  {idx % 2 === 0 ? (
                    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/10 shrink-0">
                      <Image 
                        src={avatarSrc} 
                        alt="Avatar" 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <PortfolioSection />

      {/* METHODOLOGY SECTION */}
      <MethodologySection />

      {/* PRICING SECTION */}
      <PricingSection />

      {/* FAQ SECTION */}
      <section className="py-24 md:py-40 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-main/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-6 space-y-12">
              <Reveal>
                <div className="space-y-6">
                  <Badge variant="lime" rotation={2}>FAQ</Badge>
                  <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.15] break-words">
                    <span className="font-mono text-brand-main text-[14px] uppercase tracking-[0.2em] block mb-4 font-bold">
                      Common
                    </span>
                    <span className="font-display">
                      Questions
                    </span>
                  </h2>
                  <p className="text-text-muted text-[18px] max-w-md">
                    We believe in transparency. Here are answers to the questions we get most often.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.1}>
                    <FaqAccordion question={faq.q} answer={faq.a} />
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <Reveal delay={0.4}>
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] select-none group"
                >
                  <Image 
                    src="/faq.png" 
                    alt="Truvox FAQ Info" 
                    fill 
                    className="object-contain group-hover:scale-105 transition-transform duration-1000 filter drop-shadow-[0_20px_50px_rgba(51,255,13,0.12)]"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
                    <Badge variant="lime" rotation={-5} className="px-6 py-2 shadow-xl">Support & Care</Badge>
                  </div>
                </motion.div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="py-24 md:py-36 px-6 bg-black border-t border-white/5 relative overflow-hidden">

        <div className="max-w-[1200px] mx-auto text-center space-y-12 relative z-20">
          {/* Floating Truvox Pixel Logo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10 w-20 h-40 md:w-24 md:h-48 mx-auto overflow-hidden filter drop-shadow-[0_20px_40px_rgba(51,255,13,0.25)] -mb-12 md:-mb-18"
          >
            <Image 
              src="/truvox_pixel.svg" 
              alt="Truvox Pixel Logo" 
              fill 
              className="object-contain" 
              priority 
            />
          </motion.div>

          <Reveal>
            <h2 className="text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-display text-white tracking-normal leading-[1.0] uppercase text-center">
              Feel like <br /> collaborating?
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 z-30 relative mt-8">
              <Link href="/contact">
                <button className="flex items-center bg-[#33FF0D] text-black font-mono text-[12px] uppercase tracking-[0.15em] h-[52px] px-8 hover:bg-[#2DD90D] hover:shadow-[0_8px_20px_rgba(51,255,13,0.2)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border-none font-semibold rounded-none group">
                  <span>Start a project</span>
                  <span className="ml-4 text-[16px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center gap-3 bg-white text-black font-mono text-[12px] uppercase tracking-[0.15em] h-[52px] px-8 hover:bg-[#F5F5F5] hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border-none font-semibold rounded-none group">
                  <span>Schedule a call</span>
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border border-black/10">
                    <Image 
                      src="/assets/team/shalom.jpg" 
                      alt="Shalom" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#33FF0D] shadow-[0_0_8px_#33FF0D] transition-transform duration-300 group-hover:scale-110"></div>
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-main/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-main/5 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

    </main>
  );
}
