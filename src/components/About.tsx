import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { directors } from '../data/team';
import { publicAsset } from '../utils/publicAsset';

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden border-t border-white/5 bg-black py-24 sm:py-32">
      
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-purple-800/15 blur-[150px]"
        aria-hidden="true" />
      
      <div className="relative mx-auto grid max-w-[1480px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink-border">
            <img
              src={publicAsset("df6afa16-4868-4664-943e-844eef03d42b.jpg")}
              alt="Abstract purple wireframe globe representing Cloud X Global's connected network"
              className="h-full w-full object-cover" />
            
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              aria-hidden="true" />
            
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-md">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Global by design
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Teams, clients and infrastructure connected across regions.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            label="About Us"
            title={
            <>
                We connect technology, creativity and{' '}
                <span className="text-purple-400">business.</span>
              </>
            }
            description="Cloud X Global is focused on helping businesses establish, improve and scale their digital presence through modern technology and creative solutions." />
          
          <Reveal delay={0.18}>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-lg border border-purple-500/45 bg-black px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-[border-color,background-color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-500/10">
              
              Learn More About Us
              <ArrowRightIcon className="h-4 w-4 text-purple-300 transition-transform duration-200 ease-premium group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-[1280px] px-5 sm:px-8 sm:mt-28">
        <Reveal>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-12 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-[clamp(1.5rem,3vw,2.15rem)] font-bold leading-tight tracking-tight text-white">
              Led by our <span className="text-purple-400">founding team.</span>
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Three directors and co-founders who stay involved in every
              project we take on.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {directors.map((director, i) =>
          <Reveal as="li" key={director.email} delay={i * 0.07}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink-border bg-ink-850 p-7 transition-[border-color,transform,box-shadow] duration-300 ease-premium hover:-translate-y-1 hover:border-purple-500/55 hover:shadow-glow">
                <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/35 bg-purple-500/10 font-display text-base font-bold tracking-wide text-purple-200"
                aria-hidden="true">
                
                  {director.initials}
                </span>
                <h4 className="mt-6 font-display text-lg font-bold tracking-tight text-white">
                  {director.name}
                </h4>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                  {director.role}
                </p>
                <a
                href={`mailto:${director.email}`}
                className="mt-auto break-all pt-6 text-sm text-muted transition-colors duration-200 ease-premium hover:text-white">
                
                  {director.email}
                </a>
              </article>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}