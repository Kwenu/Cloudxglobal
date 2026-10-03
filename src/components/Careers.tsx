import React from 'react';
import { ArrowUpRightIcon, CheckIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { openRoles, careerBenefits } from '../data/careers';
import { contactDetails } from '../data/contact';

function applyHref(title: string) {
  return `mailto:${contactDetails.email}?subject=${encodeURIComponent(
    `Application — ${title}`
  )}&body=${encodeURIComponent(
    `Hello Cloud X Global team,\n\nI would like to apply for the ${title} role.\n\nName:\nPortfolio / GitHub:\nYears of experience:\n\n(Please attach your CV.)`
  )}`;
}

export function Careers() {
  return (
    <section
      id="careers"
      className="relative w-full overflow-hidden border-t border-white/5 bg-black py-24 sm:py-32">
      
      <div
        className="pointer-events-none absolute right-0 top-24 h-[480px] w-[480px] rounded-full bg-purple-800/15 blur-[150px]"
        aria-hidden="true" />
      
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="Careers"
            title={
            <>
                We're hiring developers for our{' '}
                <span className="text-purple-400">upcoming projects.</span>
              </>
            }
            description="Cloud X Global is growing its engineering and design team. If you want to build real products for real businesses, we'd like to hear from you." />
          
          <Reveal delay={0.1}>
            <ul className="space-y-3 lg:w-[22rem]">
              {careerBenefits.map((benefit) =>
              <li
                key={benefit}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
                
                  <CheckIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-purple-400"
                  strokeWidth={2}
                  aria-hidden="true" />
                
                  {benefit}
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <ul className="mt-16 divide-y divide-ink-border overflow-hidden rounded-2xl border border-ink-border bg-ink-850">
          {openRoles.map((role, i) =>
          <Reveal as="li" key={role.title} delay={Math.min(i, 4) * 0.05}>
              <div className="group flex flex-col gap-6 p-7 transition-colors duration-300 ease-premium hover:bg-ink-800 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-bold tracking-tight text-white">
                      {role.title}
                    </h3>
                    <span className="rounded-md border border-purple-500/40 bg-purple-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-200">
                      {role.type}
                    </span>
                  </div>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted">
                    {role.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/55">
                    <span>{role.location}</span>
                    <span aria-hidden="true" className="text-purple-500">
                      ·
                    </span>
                    <span>{role.level}</span>
                    <span aria-hidden="true" className="text-purple-500">
                      ·
                    </span>
                    <span>{role.skills.join(' / ')}</span>
                  </div>
                </div>
                <a
                href={applyHref(role.title)}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-purple-500/45 bg-black px-6 py-3 text-[13px] font-semibold tracking-wide text-white transition-[border-color,background-color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-500/10 sm:self-auto">
                
                  Apply
                  <ArrowUpRightIcon
                  className="h-4 w-4 text-purple-300"
                  aria-hidden="true" />
                
                </a>
              </div>
            </Reveal>
          )}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-10 text-sm text-muted">
            Don't see your role listed? Send your CV and portfolio to{' '}
            <a
              href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(
                'Open application — Cloud X Global'
              )}`}
              className="break-all font-medium text-purple-300 transition-colors duration-200 ease-premium hover:text-purple-200">
              
              {contactDetails.email}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>);

}