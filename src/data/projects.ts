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
  isConcept?: boolean;
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
    tags: ['Custom Design', 'Next.js', 'Clean Code'],
    description: 'Immersive platform establishing the credibility of creative studios through clean, bold design.',
    fullDescription: 'Sagana Agency required an online presence that mirrored their creative approach to visual storytelling. We developed a custom web platform that treats every scroll as a cinematic moment, helping them look credible and attract more high-value clients.',
    designStyle: 'A professional editorial layout characterized by bold typography, smooth transitions, and a vibrant color system that stands out.',
    image: '/assets/portfolio/sagana.png',
    link: 'https://www.sagana-agency.com/',
    color: 'from-blue-600/20 to-teal-400/20',
    details: {
      client: 'Sagana Collective',
      services: ['Brand Strategy', 'UI/UX Design', 'Next.js Development'],
      year: '2026',
      challenge: 'In a saturated market of minimalist design, the client needed a bold, memorable website that felt both chaotic and perfectly controlled, serving as a digital proof-of-concept for their radical motion philosophy.',
      solution: 'A motion-centric platform built on raw SVG manipulation and high-frequency animations, creating a dynamic, living brand ecosystem that commands immediate attention.',
      impact: 'Highly praised by peers, leading to a significant increase in client inquiries and securing 3 major industry design awards within the first quarter.',
      techStack: ['Next.js', 'Framer Motion', 'Raw SVG Shaders', 'TypeScript']
    }
  },
  {
    id: "02",
    slug: 'smart-petri-dish',
    title: 'Smart Petri Dish',
    category: 'Health Tech',
    tags: ['Innovation', 'Web Dashboard', 'Research'],
    description: 'An intuitive dashboard built to help health researchers analyze biological data in the field.',
    fullDescription: 'SPD is a global health initiative aiming to make lab-grade analysis accessible anywhere. We engineered an intuitive dashboard that translates complex biological data-streams into clear, actionable insights for researchers working in the field.',
    designStyle: 'A clean and simple layout with a high-contrast palette designed for absolute readability under low-light field conditions.',
    image: '/assets/portfolio/spd.png',
    link: 'https://spd-zeta.vercel.app/',
    color: 'from-emerald-600/20 to-green-400/20',
    isConcept: true,
    details: {
      client: 'BioTech Labs Inc.',
      services: ['Full-Stack Engineering', 'UI Design', 'Custom Design System'],
      year: '2025',
      challenge: 'The primary obstacle was translating complex medical data into a clean, simple layout that field teams could navigate quickly without losing technical accuracy.',
      solution: 'A custom data structure paired with a clean, focus-heavy layout that highlights critical findings automatically.',
      impact: 'Praised by field testers for reducing cognitive load and cutting data analysis time by 70% in remote field settings.',
      techStack: ['React', 'Node.js', 'Real-time Telemetry', 'Socket.io']
    }
  },
  {
    id: "03",
    slug: 'fuelup-mobile',
    title: 'FuelUp Mobile',
    category: 'Mobile App',
    tags: ['UI/UX Design', 'Mobile Development', 'Payments'],
    description: 'A clean and easy-to-use mobile app designed to simplify fuel purchases and secure digital payments.',
    fullDescription: 'FuelUp is a mobile utility designed to simplify fuel purchases. The application integrates secure payment processing with real-time location mapping and fuel levels in a single, clean mobile interface.',
    designStyle: 'A modern, clean design featuring glassmorphic accents, clear buttons, and a simple checkout flow.',
    image: '/assets/portfolio/fuelup.png',
    link: 'https://www.behance.net/gallery/218017715/Mobile-App-to-buy-fuel',
    color: 'from-purple-600/20 to-pink-400/20',
    isConcept: true,
    details: {
      client: 'Energy Logistics Group',
      services: ['Mobile App Design', 'Checkout Flow Strategy', 'Maps Integration'],
      year: '2026',
      challenge: 'The app needed to combine real-time mapping details with secure payment methods in a simple, one-handed mobile interface.',
      solution: 'An intuitive checkout flow that makes purchasing fuel as simple as a few taps, with offline caching for reliable use in low-signal areas.',
      impact: 'Highly praised by design critics for its simple, user-friendly payment flow and clear map navigation.',
      techStack: ['React Native', 'Stripe API', 'Mapbox']
    }
  },
  {
    id: "04",
    slug: 'tavares',
    title: 'Tavares',
    category: 'Cinematic',
    tags: ['Cinematic', 'Portfolio', 'Custom Video Player'],
    description: 'Cinematic portfolio for film director Tavares, designed to showcase his work and make a strong first impression.',
    fullDescription: 'For Director Tavares, we built a modern website that serves as a beautiful backdrop to his cinematic work, letting his projects be the main focus of the page.',
    designStyle: 'An elegant dark design with custom film grain and smooth transitions to match the aesthetic of his films.',
    image: '/assets/portfolio/tavares-cinematic.png',
    link: 'https://portfolio-tavares.vercel.app/',
    color: 'from-orange-600/20 to-red-400/20',
    details: {
      client: 'Tavares Films',
      services: ['Art Direction', 'Custom Web Design', 'Custom Video Player'],
      year: '2026',
      challenge: 'Standard portfolio grids felt static. Tavares needed a website that captured the atmosphere of his films without slowing down page load times.',
      solution: 'A highly optimized video-loading system paired with an elegant dark theme that emphasizes visual storytelling.',
      impact: 'Helped the client secure several new commercial directing projects with global fashion houses shortly after launch.',
      techStack: ['Next.js', 'Framer Motion', 'Custom Shaders', 'GSAP']
    }
  }
];
