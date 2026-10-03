import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { capabilities } from '../data/strengths';

export function WhoWeAre() {
  return (
    <section className="relative w-full border-t border-white/5 bg-black py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <SectionHeading
          label="Who We Are"
          title={
          <>
              Technology that connects ideas with{' '}
              <span className="text-purple-400">possibilities.</span>
            </>
          }
          description="Cloud X Global combines technology, creativity and business thinking to create digital solutions designed around real-world business needs." />
        

        <ul className="grid grid-cols-1 gap-x-8 gap-y-7 self-center sm:grid-cols-2">
          {capabilities.map((item, i) =>
          <Reveal as="li" key={item.title} delay={i * 0.07}>
              <div className="flex h-full flex-col">
                <item.icon
                className="h-6 w-6 text-purple-400"
                strokeWidth={1.4}
                aria-hidden="true" />
              
                <h3 className="mt-4 font-display text-[15px] font-semibold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <span
                className="mt-5 h-px w-full bg-gradient-to-r from-purple-600/60 to-transparent"
                aria-hidden="true" />
              
              </div>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}