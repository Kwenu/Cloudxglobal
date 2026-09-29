import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className = ''
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div
      className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-purple-300 ${
          centered ? 'justify-center' : ''}`
          }>
          
          <span className="h-px w-6 bg-purple-500" aria-hidden="true" />
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.15rem)] font-bold leading-[1.08] tracking-tight text-white">
          {title}
        </h2>
      </Reveal>
      {description &&
      <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-[17px]">
            {description}
          </p>
        </Reveal>
      }
    </div>);

}