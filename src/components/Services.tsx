import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { services } from '../data/services';

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full border-t border-white/5 bg-ink-900 py-24 sm:py-32">
      
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-purple-800/10 blur-[150px]"
        aria-hidden="true" />
      
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          label="What We Do"
          title={
          <>
              Digital solutions.{' '}
              <span className="text-muted">Built around your business.</span>
            </>
          } />
        

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) =>
          <Reveal key={service.title} delay={i % 3 * 0.07}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink-border bg-ink-850 p-7 transition-[border-color,transform,box-shadow] duration-300 ease-premium hover:-translate-y-1 hover:border-purple-500/55 hover:shadow-glow">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/25 bg-purple-500/10 transition-colors duration-300 ease-premium group-hover:border-purple-400/60">
                  <service.icon
                  className="h-5 w-5 text-purple-300"
                  strokeWidth={1.5}
                  aria-hidden="true" />
                
                </span>
                <h3 className="mt-6 font-display text-[17px] font-semibold uppercase tracking-wide text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span
                className="mt-auto pt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-400/70 transition-colors duration-200 ease-premium group-hover:text-purple-300"
                aria-hidden="true">
                
                  0{i + 1}
                </span>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}