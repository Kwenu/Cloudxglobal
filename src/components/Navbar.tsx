import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';
import { navLinks } from '../data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-premium ${
      scrolled ?
      'border-b border-white/5 bg-black/70 backdrop-blur-xl' :
      'border-b border-transparent bg-transparent'}`
      }>
      
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8">
        
        <a href="#home" className="shrink-0" aria-label="Cloud X Global home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-7 lg:flex xl:gap-12">
          {navLinks.map((link) =>
          <li key={link.label}>
              <a
              href={link.href}
              className="group relative whitespace-nowrap text-[13px] font-medium tracking-wide text-white/70 transition-colors duration-200 ease-premium hover:text-white">
              
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-purple-500 transition-[width] duration-200 ease-premium group-hover:w-full" />
              </a>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 px-5 py-2.5 text-[13px] font-semibold tracking-wide text-white shadow-glow-sm transition-[transform,box-shadow,filter] duration-200 ease-premium hover:-translate-y-0.5 hover:brightness-110 sm:inline-flex">
            
            Let's Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors duration-200 ease-premium hover:border-purple-500/60 lg:hidden">
            
            {open ?
            <XIcon className="h-5 w-5" /> :

            <MenuIcon className="h-5 w-5" />
            }
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl lg:hidden">
          
            <ul className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8">
              {navLinks.map((link) =>
            <li key={link.label}>
                  <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3.5 font-display text-sm font-medium tracking-wide text-white/80 transition-colors duration-200 ease-premium hover:text-purple-300">
                
                    {link.label}
                  </a>
                </li>
            )}
              <li className="pt-4">
                <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 py-3 text-center text-sm font-semibold text-white">
                
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}