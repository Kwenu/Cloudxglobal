import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Logo } from './Logo';
import { footerColumns } from '../data/navigation';
import { contactDetails } from '../data/contact';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Connecting businesses with technology, creativity and digital
              possibilities.
            </p>

            <ul className="mt-7 space-y-3.5">
              <li className="flex items-start gap-3">
                <MailIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-purple-400"
                  strokeWidth={1.5}
                  aria-hidden="true" />
                
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="break-all text-sm text-muted transition-colors duration-200 ease-premium hover:text-white">
                  
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-purple-400"
                  strokeWidth={1.5}
                  aria-hidden="true" />
                
                <a
                  href={contactDetails.phoneHref}
                  className="text-sm text-muted transition-colors duration-200 ease-premium hover:text-white">
                  
                  {contactDetails.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-purple-400"
                  strokeWidth={1.5}
                  aria-hidden="true" />
                
                <address className="max-w-[16rem] text-sm not-italic leading-relaxed text-muted">
                  {contactDetails.address}, {contactDetails.country}
                </address>
              </li>
            </ul>
          </div>

          {footerColumns.map((column) =>
          <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-300">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) =>
              <li key={link.label}>
                    <a
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-200 ease-premium hover:text-white">
                  
                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-wide text-muted">
            © CLOUD X GLOBAL (PVT) LTD. All Rights Reserved.
          </p>
          <p className="text-xs tracking-wide text-white/35">
            Technology · Digital Solutions · Business Growth
          </p>
        </div>
      </div>
    </footer>);

}