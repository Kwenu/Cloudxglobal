import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { solutions } from '../data/solutions';

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative w-full border-t border-white/5 bg-black py-24 sm:py-32">
      
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          label="Featured Solutions"
          title={
          <>
              One partner.{' '}
              <span className="text-purple-400">Multiple digital solutions.</span>
            </>
          } />
        

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map((solution, i) =>
          <Reveal key={solution.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-border bg-ink-850 transition-[border-color,box-shadow] duration-300 ease-premium hover:border-purple-500/55 hover:shadow-glow">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                  src={solution.image}
                  alt=""
                  className="h-full w-full object-cover opacity-80 transition-[transform,opacity] duration-500 ease-premium group-hover:scale-105 group-hover:opacity-100" />
                
                  <div
                  className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/30 to-transparent"
                  aria-hidden="true" />
                
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {solution.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {solution.points.map((point) =>
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-white/80">
                    
                        <span
                      className="h-1.5 w-1.5 rounded-full bg-purple-500"
                      aria-hidden="true" />
                    
                        {point}
                      </li>
                  )}
                  </ul>
                  <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-[13px] font-semibold tracking-wide text-purple-300 transition-colors duration-200 ease-premium hover:text-purple-200">
                  
                    Discuss this solution
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}