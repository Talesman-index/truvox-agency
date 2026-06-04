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
    slug: 'the-refuge',
    title: 'The Refuge',
    category: 'Non-Profit / NGO',
    tags: ['Custom Design', 'Vite / CSS', 'Interactive Charts'],
    description: 'Humanitarian portal for a Christian organization providing meals, shelter, and reinsertion programs in Cotonou.',
    fullDescription: 'The Refuge required an online portal to connect with potential donors and volunteers, bridging digital communication with ground reality. We built a structured, responsive web application that tracks and displays program funding in real-time.',
    designStyle: 'A warm and organic design system featuring sage green, earthy terracotta accents, and soft curved borders that feel welcoming and credible.',
    image: '/assets/portfolio/your-refuge.jpg',
    link: 'https://your-refuge.vercel.app/',
    color: 'from-emerald-800/20 to-amber-700/20',
    details: {
      client: 'The Refuge NGO',
      services: ['Digital Strategy', 'UI/UX Design', 'Full-Stack Development'],
      year: '2026',
      challenge: 'The organization had difficulty converting local visitors into active supporters and volunteers, requiring a platform that establishes credibility and clearly demonstrates ground-level impact.',
      solution: 'We engineered a highly responsive site with interactive progression bars for tracking active campaigns, custom vector illustrations, and a simplified donation flow that builds trust.',
      impact: 'Significantly boosted volunteer registration rates and local funding, facilitating the distribution of over 15,200 meals and hygiene kits to Cotonou\'s homeless.',
      techStack: ['HTML5', 'Vanilla CSS', 'JavaScript', 'Vite']
    }
  },
  {
    id: "02",
    slug: 'tavares',
    title: 'Tavares',
    category: 'Cinematic',
    tags: ['Cinematic', 'Portfolio', 'Custom Video Player'],
    description: 'Cinematic portfolio for film director Tavares, designed to showcase his work and make a strong first impression.',
    fullDescription: 'For Director Tavares, we built a modern website that serves as a beautiful backdrop to his cinematic work, letting his projects be the main focus of the page.',
    designStyle: 'An elegant dark design with custom film grain and smooth transitions to match the aesthetic of his films.',
    image: '/assets/portfolio/tavares-cinematic.jpg',
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
  }
];
