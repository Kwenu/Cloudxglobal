import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { strengths } from "../data/strengths";

export function WhyCloudX() {
  return (
    <section className="relative w-full border-t border-white/5 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8">
        <SectionHeading
          label="Why Cloud X Global"
          title={
            <>
              More than technology.
              <br />
              <span className="text-purple-400">A digital partner.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="group flex h-full flex-col bg-ink-850 p-8 transition-colors duration-300 ease-premium hover:bg-ink-800">
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/30">
                  <span
                    className="absolute inset-0 rounded-full bg-purple-500/10 opacity-0 transition-opacity duration-300 ease-premium group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <item.icon
                    className="relative h-5 w-5 text-purple-300"
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-7 font-display text-[15px] font-bold uppercase tracking-[0.1em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
