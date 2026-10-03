import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-black py-28 sm:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/25 blur-[170px]"
        aria-hidden="true"
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#8b2bff" strokeOpacity="0.28" strokeWidth="1" fill="none">
          <path d="M-50 380 C 250 260, 420 460, 700 320 S 1100 180, 1260 260" />
          <path d="M-50 120 C 220 220, 480 40, 720 140 S 1080 320, 1260 200" />
          <path d="M120 -40 C 260 180, 520 220, 640 520" />
          <path d="M980 -40 C 900 200, 720 260, 700 520" strokeOpacity="0.16" />
        </g>
        <path
          d="M-50 120 C 220 220, 480 40, 720 140 S 1080 320, 1260 200"
          fill="none"
          stroke="#c9a5ff"
          strokeWidth="2"
          strokeDasharray="16 184"
          className="animate-dash"
        />

        {[
          [180, 168],
          [512, 96],
          [720, 140],
          [960, 246],
          [420, 372],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3"
            fill="#b07dff"
            className="animate-pulse-node"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2.1rem,5.4vw,4rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-white">
            Your idea.
            <br />
            Our technology.
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
              Let's build it.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-muted">
            Have a business idea, a digital challenge or a project ready to
            launch? Let's create something meaningful together.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-glow-sm transition-[transform,filter] duration-200 ease-premium hover:-translate-y-0.5 hover:brightness-110"
            >
              Start a Project
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-purple-500/45 bg-black/60 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-[border-color,background-color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-500/10"
            >
              Talk to Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
