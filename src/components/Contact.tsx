import React, { useState } from 'react';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircle2Icon,
  Loader2Icon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageCircleIcon } from
'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { services } from '../data/services';
import { contactDetails } from '../data/contact';

type Status = 'idle' | 'submitting' | 'success';

const fieldClasses =
'w-full rounded-lg border border-ink-border bg-ink-850 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-[border-color,box-shadow] duration-200 ease-premium focus:border-purple-500 focus:shadow-glow-sm';

const socials = [
{ label: 'Facebook', icon: FacebookIcon, href: '#contact' },
{ label: 'Instagram', icon: InstagramIcon, href: '#contact' },
{ label: 'LinkedIn', icon: LinkedinIcon, href: '#contact' },
{
  label: 'WhatsApp',
  icon: MessageCircleIcon,
  href: contactDetails.whatsappHref
}];


export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 1100);
  };

  return (
    <section
      id="contact"
      className="relative w-full border-t border-white/5 bg-ink-900 py-24 sm:py-32">
      
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          label="Contact"
          title={
          <>
              Let's build something{' '}
              <span className="text-purple-400">great.</span>
            </>
          } />
        

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <div className="rounded-2xl border border-ink-border bg-ink-850/60 p-7 sm:p-9">
              {status === 'success' ?
              <div
                role="status"
                className="flex min-h-[420px] flex-col items-center justify-center text-center">
                
                  <CheckCircle2Icon
                  className="h-12 w-12 text-purple-400"
                  strokeWidth={1.3}
                  aria-hidden="true" />
                
                  <h3 className="mt-6 font-display text-xl font-bold text-white">
                    Inquiry received
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                    Thank you — a member of the Cloud X Global team will get
                    back to you within one business day.
                  </p>
                  <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-8 rounded-lg border border-purple-500/45 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 ease-premium hover:bg-purple-500/10">
                  
                    Send another inquiry
                  </button>
                </div> :

              <form onSubmit={handleSubmit} noValidate={false}>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      
                        Name
                      </label>
                      <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className={fieldClasses} />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="company"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      
                        Company
                      </label>
                      <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className={fieldClasses} />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      
                        Email
                      </label>
                      <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={fieldClasses} />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      
                        Phone
                      </label>
                      <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+94 __ ___ ____"
                      className={fieldClasses} />
                    
                    </div>
                    <div className="sm:col-span-2">
                      <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      
                        Service
                      </label>
                      <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                      className={fieldClasses}>
                      
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((service) =>
                      <option key={service.title} value={service.title}>
                            {service.title}
                          </option>
                      )}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                      htmlFor="details"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      
                        Project Details
                      </label>
                      <textarea
                      id="details"
                      name="details"
                      rows={5}
                      required
                      placeholder="Tell us about your goals, timeline and budget range."
                      className={`${fieldClasses} resize-none`} />
                    
                    </div>
                  </div>

                  <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-glow-sm transition-[transform,filter,opacity] duration-200 ease-premium hover:-translate-y-0.5 hover:brightness-110 disabled:translate-y-0 disabled:opacity-60">
                  
                    {status === 'submitting' &&
                  <Loader2Icon
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true" />

                  }
                    {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
                  </button>
                </form>
              }
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:pt-4">
              <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                Have a project in mind?
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                Reach out directly and we'll arrange a short call to understand
                your goals before anything else.
              </p>

              <dl className="mt-10 space-y-7">
                <div className="flex items-start gap-4">
                  <MailIcon
                    className="mt-0.5 h-5 w-5 text-purple-400"
                    strokeWidth={1.5}
                    aria-hidden="true" />
                  
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                      Email
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="break-all text-[15px] text-white transition-colors duration-200 ease-premium hover:text-purple-300">
                        
                        {contactDetails.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon
                    className="mt-0.5 h-5 w-5 text-purple-400"
                    strokeWidth={1.5}
                    aria-hidden="true" />
                  
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                      Phone
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={contactDetails.phoneHref}
                        className="text-[15px] text-white transition-colors duration-200 ease-premium hover:text-purple-300">
                        
                        {contactDetails.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPinIcon
                    className="mt-0.5 h-5 w-5 text-purple-400"
                    strokeWidth={1.5}
                    aria-hidden="true" />
                  
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                      Address
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-white">
                      {contactDetails.address}
                      <span className="mt-0.5 block text-sm text-muted">
                        {contactDetails.country}
                      </span>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                  Social Media
                </p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {socials.map((social) =>
                  <li key={social.label}>
                      <a
                      href={social.href}
                      aria-label={social.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-border bg-ink-850 text-white/70 transition-[border-color,color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:border-purple-500/60 hover:text-purple-300">
                      
                        <social.icon
                        className="h-[18px] w-[18px]"
                        strokeWidth={1.5} />
                      
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}