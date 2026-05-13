'use client';

import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

export default function TermsPage() {
  const lastUpdated = 'May 12, 2026';

  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24 md:pt-48 md:pb-32 px-6">
      <div className="max-w-[800px] mx-auto">
        <Reveal>
          <Badge variant="lime" rotation={-2} className="mb-8">Legal</Badge>
          <h1 className="text-5xl md:text-7xl font-medium text-text-heading leading-[1.1] tracking-tight mb-4">
            Terms of <span className="gradient-text italic">Service.</span>
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[12px] mb-16">Last Updated: {lastUpdated}</p>
        </Reveal>

        <div className="space-y-12 text-text-body prose prose-invert max-w-none">
          <Reveal delay={0.1}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.2}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">2. Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                The content, features, and functionality of our website are and will remain the exclusive property of Truvox and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.3}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">3. Use License</h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on Truvox's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.4}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">4. Disclaimer</h2>
              <p className="leading-relaxed">
                The materials on Truvox's website are provided on an 'as is' basis. Truvox makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.5}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">5. Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of France and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
