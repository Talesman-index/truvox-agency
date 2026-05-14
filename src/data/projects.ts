export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  fullDescription: string;
  designStyle: string;
  image: string;
  link: string;
  color: string;
  details: {
    client: string;
    services: string[];
    year: string;
    challenge: string;
    solution: string;
    impact: string;
    techStack: string[];
  }
}

export const allProjects: Project[] = [
  {
    id: "01",
    slug: 'sagana-agency',
    title: 'Sagana Agency',
    category: 'Design Studio',
    tags: ['Disruptive', 'Immersive', 'Authority'],
    description: 'Immersive platform establishing the digital authority of bold creative studios through disruptive design.',
    fullDescription: 'Sagana Agency required a digital presence that mirrored their radical approach to visual storytelling. We developed a high-fidelity "Editorial Engine" that treats every scroll as a cinematic moment, effectively shifting their market positioning from a service provider to a strategic authority.',
    designStyle: 'A high-fidelity editorial aesthetic characterized by maximalist typography, disruptive motion signatures, and a "Digital Pulse" neon-cyan accent over a deep-black void. The design prioritizes visual friction to ensure high-intensity brand recall.',
    image: '/assets/portfolio/sagana.png',
    link: 'https://www.sagana-agency.com/',
    color: 'from-blue-600/20 to-teal-400/20',
    details: {
      client: 'Sagana Collective',
      services: ['Brand Moat Strategy', 'UI/UX Architecture', 'Next.js Editorial Engine'],
      year: '2026',
      challenge: 'In a saturated market of minimalist design, the client needed a "Maximalist Authority" that felt both chaotic and perfectly controlled—a digital proof-of-concept for their radical motion philosophy.',
      solution: 'A motion-centric platform built on raw SVG manipulation and high-frequency frame-rate animations, creating a "living" brand ecosystem that commands immediate attention.',
      impact: 'Cited as a benchmark in design agency portfolios, leading to a significant increase in high-tier client acquisition and securing 3 major industry awards within the first quarter.',
      techStack: ['Next.js', 'Framer Motion', 'Raw SVG Shaders', 'TypeScript']
    }
  },
  {
    id: "02",
    slug: 'smart-petri-dish',
    title: 'Smart Petri Dish',
    category: 'Health Tech',
    tags: ['Innovation', 'MVP', 'Decentralized'],
    description: 'MVP development of an intelligent system for decentralized health screening. A major innovation validated by experts.',
    fullDescription: 'SPD is a global health initiative aiming to democratize lab-grade analysis through decentralized intelligence. We engineered a high-precision dashboard that translates complex biological data-streams into actionable insights for field researchers across the globe.',
    designStyle: 'Scientific minimalism under a design system called "Sterile OS." The interface eliminates all visual noise, using a high-contrast palette of emerald chroma for positive confirmation and cool-gray depth hierarchies for laboratory-grade precision.',
    image: '/assets/portfolio/spd.png',
    link: 'https://spd-zeta.vercel.app/',
    color: 'from-emerald-600/20 to-green-400/20',
    details: {
      client: 'BioTech Labs Inc.',
      services: ['Full-Stack Data Engineering', 'AI Diagnostic UI', 'Sterile OS Design System'],
      year: '2025',
      challenge: 'The primary obstacle was translating high-density medical telemetry into an intuitive interface that non-experts could navigate without sacrificing technical integrity or regulatory precision.',
      solution: 'A custom decentralized data architecture paired with a focus-heavy UI that uses intelligent anomaly detection to highlight critical health risks automatically.',
      impact: 'Validated by major health organizations as a new standard for remote diagnostic interfaces, reducing researcher cognitive load by 60% and cutting analysis time by 70%.',
      techStack: ['React', 'Node.js', 'Real-time Telemetry', 'AI/ML Models', 'Socket.io']
    }
  },
  {
    id: "03",
    slug: 'fuelup-mobile',
    title: 'FuelUp Mobile',
    category: 'Mobile App',
    tags: ['UI/UX', 'Fintech', 'Logistics'],
    description: 'A seamless mobile experience designed to streamline fuel procurement and digital payments for modern drivers.',
    fullDescription: 'FuelUp is a fintech-meets-logistics disruptor solving the critical "final mile" of energy procurement. The application integrates high-trust payment gateways with real-time geolocation and inventory tracking in a single, high-fidelity mobile interface.',
    designStyle: 'Glossmorphic utility blending tactile 3D elements with a "Hyper-Fluid" navigation philosophy. Used glassmorphic layers to indicate depth of security and biometric-inspired micro-interactions for a frictionless checkout experience.',
    image: '/assets/portfolio/fuelup.png',
    link: 'https://www.behance.net/gallery/218017715/Mobile-App-to-buy-fuel',
    color: 'from-purple-600/20 to-pink-400/20',
    details: {
      client: 'Energy Logistics Group',
      services: ['Fintech UX Architecture', 'Biometric Flow Design', 'Geospatial UI'],
      year: '2026',
      challenge: 'The app needed to combine the complexity of a real-time logistics tracker with the extreme security requirements of a payment gateway, all within a one-handed mobile UX.',
      solution: 'A "Hyper-Fluid" UI that treats every interaction as a physical movement, paired with an offline-first architecture for reliable operation in low-connectivity areas.',
      impact: 'Achieved significant market penetration following the MVP launch, with industry leaders citing the "intuitive clarity of the fintech architecture" as a primary competitive moat.',
      techStack: ['React Native', 'Stripe API', 'Mapbox', 'Biometric Auth']
    }
  },
  {
    id: "04",
    slug: 'tavares',
    title: 'Tavares',
    category: 'Cinematic',
    tags: ['Cinematic', 'Editorial', 'Visual Poetry'],
    description: 'Immersive cinematic portfolio for a visionary director, blending high-end editorial aesthetics with disruptive storytelling.',
    fullDescription: 'For Director Tavares, we built more than a portfolio—we engineered a "Narrative Arc." The platform adapts its mood and pacing to the cinematic work being viewed, acting as a silent, poetic backdrop to his visual storytelling.',
    designStyle: 'Cinematic Noir aesthetic utilizing custom grain-noise shaders and extreme letter-spacing. The layout follows a "Director’s Cut" philosophy, with silent-film transitions and custom easing curves to mimic the tactile feel of 35mm film.',
    image: '/assets/portfolio/tavares-cinematic.png',
    link: 'https://portfolio-tavares.vercel.app/',
    color: 'from-orange-600/20 to-red-400/20',
    details: {
      client: 'Tavares Films',
      services: ['Art Direction', 'Cinematic Noir Identity', 'Motion Narrative Design'],
      year: '2026',
      challenge: 'Standard portfolios felt like static archives. Tavares needed a "Living Reel" that captured his atmosphere-first approach to filmmaking without overwhelming the viewer.',
      solution: 'A custom video-lazy-loading engine paired with a grain-textured aesthetic that emphasizes visual poetry and narrative flow over traditional grid layouts.',
      impact: 'Directly attributed to securing prestigious collaborations with major global luxury houses within weeks of the new digital identity launch.',
      techStack: ['Next.js', 'Framer Motion', 'Custom Shaders', 'GSAP']
    }
  }
];
