import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { processSteps } from '../data/process';

export function Process() {
  return (
    <section className="relative w-full border-t border-white/5 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8">
        <SectionHeading
          label="Our Process"
          title={
          <>
              From idea to <span className="text-purple-400">digital impact.</span>
            </>
          }
          align="center" />
        

        <div className="relative mt-20">
          <span
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-purple-600/60 via-purple-700/30 to-transparent sm:block lg:left-0 lg:top-6 lg:h-px lg:w-full lg:bg-gradient-to-r lg:from-purple-700/30 lg:via-purple-500/60 lg:to-purple-700/10"
            aria-hidden="true" />
          
          <ol className="relative grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) =>
            <Reveal as="li" key={step.number} delay={i * 0.08}>
                <div className="flex gap-5 sm:gap-6 lg:block">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-purple-500/50 bg-black font-display text-sm font-bold text-purple-300 shadow-glow-sm">
                    {step.number}
                  </span>
                  <div className="lg:mt-7">
                    <h3 className="font-display text-base font-bold uppercase tracking-[0.12em] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>);

}