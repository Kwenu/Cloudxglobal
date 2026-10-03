import React, { useMemo, useState } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { projects, projectCategories } from '../data/projects';

export function Portfolio() {
  const [active, setActive] = useState<string>('All');

  const visible = useMemo(
    () =>
    active === 'All' ?
    projects :
    projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section
      id="portfolio"
      className="relative w-full border-t border-white/5 bg-black py-24 sm:py-32">
      
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="Selected Work"
            title={
            <>
                Built to make an <span className="text-purple-400">impact.</span>
              </>
            } />
          
          <Reveal delay={0.1}>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects by category">
              
              {projectCategories.map((category) => {
                const isActive = category === active;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActive(category)}
                    aria-pressed={isActive}
                    className={`whitespace-nowrap rounded-lg border px-4 py-2 text-xs font-semibold tracking-wide transition-[background-color,border-color,color] duration-200 ease-premium ${
                    isActive ?
                    'border-purple-500 bg-purple-500/15 text-white' :
                    'border-white/10 text-muted hover:border-purple-500/50 hover:text-white'}`
                    }>
                    
                    {category}
                  </button>);

              })}
            </div>
          </Reveal>
        </div>

        {visible.length === 0 ?
        <p className="mt-16 rounded-2xl border border-dashed border-white/10 p-12 text-center text-sm text-muted">
            No projects in this category yet — tell us what you need and it
            could be the next one.
          </p> :

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) =>
          <Reveal
            key={project.name}
            delay={i % 3 * 0.07}
            className={
            project.featured ? 'md:col-span-2 lg:col-span-2' : undefined
            }>
            
                <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-border bg-ink-850 transition-[border-color,box-shadow] duration-300 ease-premium hover:border-purple-500/55 hover:shadow-glow">
                  <div
                className={`relative overflow-hidden ${
                project.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`
                }>
                
                    <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="h-full w-full object-cover opacity-70 transition-[transform,opacity] duration-500 ease-premium group-hover:scale-105 group-hover:opacity-100" />
                
                    <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 transition-opacity duration-300 ease-premium group-hover:from-black/95"
                  aria-hidden="true" />
                
                    <span className="absolute left-5 top-5 rounded-md border border-purple-500/40 bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold tracking-tight text-white">
                      {project.name}
                    </h3>
                    <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-colors duration-200 ease-premium hover:text-purple-300">
                  
                      View Project
                      <ArrowUpRightIcon
                    className="h-4 w-4 text-purple-400 transition-transform duration-200 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true" />
                  
                    </a>
                  </div>
                </article>
              </Reveal>
          )}
          </div>
        }
      </div>
    </section>);

}