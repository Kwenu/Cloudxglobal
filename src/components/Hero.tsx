import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ActivityIcon, GlobeIcon } from 'lucide-react';
import { NetworkGlobe } from './NetworkGlobe';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black pt-28 pb-20">
      
      <div
        className="cx-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_60%_40%,black,transparent_72%)]"
        aria-hidden="true" />
      
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full bg-purple-700/20 blur-[160px]"
        aria-hidden="true" />
      

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-purple-500/30 bg-purple-500/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-200">
            
            <GlobeIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Global Technology Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-7 font-display text-[clamp(2.6rem,6.2vw,4.9rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-white">
            
            Building the{' '}
            <span className="relative bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              digital future
            </span>{' '}
            of business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted">
            
            Cloud X Global creates powerful websites, mobile applications,
            business systems and digital experiences that help businesses grow
            in a connected world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease }}
            className="mt-10 flex flex-wrap items-center gap-4">
            
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-glow-sm transition-[transform,filter] duration-200 ease-premium hover:-translate-y-0.5 hover:brightness-110">
              
              Start a Project
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-purple-500/45 bg-black px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-[border-color,background-color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-500/10">
              
              Explore Services
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42, ease }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            
            {[
            { value: '20+', label: 'Projects delivered' },
            { value: '12', label: 'Markets served' },
            { value: '100%', label: 'In-house team' }].
            map((stat) =>
            <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs tracking-wide text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            )}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-[540px]">
          
          <NetworkGlobe className="w-full drop-shadow-[0_0_70px_rgba(139,43,255,0.35)]" />

          <div className="pointer-events-none absolute left-0 top-10 animate-float rounded-xl border border-white/10 bg-ink-850/80 px-4 py-3 backdrop-blur-md">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-purple-300">
              Deployment
            </span>
            <span className="mt-1 block font-display text-sm font-semibold text-white">
              Live in 12 regions
            </span>
          </div>

          <div
            className="pointer-events-none absolute bottom-8 right-0 flex animate-float items-center gap-3 rounded-xl border border-white/10 bg-ink-850/80 px-4 py-3 backdrop-blur-md"
            style={{ animationDelay: '1.4s' }}>
            
            <ActivityIcon
              className="h-4 w-4 text-purple-400"
              aria-hidden="true" />
            
            <div>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-purple-300">
                Uptime
              </span>
              <span className="mt-0.5 block font-display text-sm font-semibold text-white">
                99.98%
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}