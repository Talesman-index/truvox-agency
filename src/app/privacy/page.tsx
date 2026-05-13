'use client';

import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

export default function PrivacyPage() {
  const lastUpdated = 'May 12, 2026';

  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24 md:pt-48 md:pb-32 px-6">
      <div className="max-w-[800px] mx-auto">
        <Reveal>
          <Badge variant="lime" rotation={-2} className="mb-8">Legal</Badge>
          <h1 className="text-5xl md:text-7xl font-medium text-text-heading leading-[1.1] tracking-tight mb-4">
            Privacy <span className="gradient-text italic">Policy.</span>
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[12px] mb-16">Last Updated: {lastUpdated}</p>
        </Reveal>

        <div className="space-y-12 text-text-body prose prose-invert max-w-none">
          <Reveal delay={0.1}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">1. Introduction</h2>
              <p className="leading-relaxed">
                Truvox ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Truvox. This Privacy Policy applies to our website, and its associated subdomains.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.2}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">2. Information Collection</h2>
              <p className="leading-relaxed">
                We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Name / Username</li>
                <li>Email Addresses</li>
                <li>Job Titles</li>
                <li>Billing Addresses</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.3}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">3. How We Use Your Information</h2>
              <p className="leading-relaxed">
                Any of the information we collect from you may be used in one of the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>To personalize your experience</li>
                <li>To improve our website</li>
                <li>To improve customer service</li>
                <li>To process transactions</li>
                <li>To send periodic emails</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.4}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We offer the use of a secure server.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.5}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-heading">5. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at <span className="text-brand-main font-bold">hello@truvox.studio</span>.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
