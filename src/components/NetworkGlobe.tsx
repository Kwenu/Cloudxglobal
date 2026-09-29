import React from 'react';

interface NetworkGlobeProps {
  className?: string;
}

const NODES: {x: number;y: number;r: number;delay: number;}[] = [
{ x: 120, y: 92, r: 3.5, delay: 0 },
{ x: 268, y: 64, r: 2.5, delay: 0.6 },
{ x: 320, y: 172, r: 4, delay: 1.2 },
{ x: 92, y: 232, r: 3, delay: 1.8 },
{ x: 208, y: 300, r: 3.5, delay: 0.9 },
{ x: 60, y: 160, r: 2.5, delay: 2.2 },
{ x: 250, y: 226, r: 2.5, delay: 1.5 }];


/**
 * Wireframe globe with orbiting connection nodes — the visual language of the
 * Cloud X mark, rendered as vector so it stays crisp at any size.
 */
export function NetworkGlobe({ className = '' }: NetworkGlobeProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false">
      
      <defs>
        <linearGradient id="cxArc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b07dff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#5b12b8" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="cxCore" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#8b2bff" stopOpacity="0.28" />
          <stop offset="70%" stopColor="#4c10a8" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="190" fill="url(#cxCore)" />

      {/* meridians + parallels */}
      <g
        fill="none"
        stroke="url(#cxArc)"
        strokeWidth="1"
        className="origin-center animate-spin-slow">
        
        <circle cx="200" cy="200" r="150" strokeOpacity="0.55" />
        <ellipse cx="200" cy="200" rx="60" ry="150" />
        <ellipse cx="200" cy="200" rx="110" ry="150" strokeOpacity="0.5" />
        <ellipse cx="200" cy="200" rx="150" ry="60" />
        <ellipse cx="200" cy="200" rx="150" ry="110" strokeOpacity="0.5" />
      </g>

      {/* connection chords */}
      <g stroke="#8b2bff" strokeWidth="0.9" strokeOpacity="0.55" fill="none">
        <path d="M120 92 L320 172 L208 300 L92 232 Z" strokeOpacity="0.25" />
        <path d="M120 92 L268 64 L320 172" />
        <path d="M92 232 L250 226 L320 172" strokeOpacity="0.4" />
        <path d="M60 160 L120 92" strokeOpacity="0.35" />
      </g>

      {/* travelling signal */}
      <path
        d="M120 92 C 200 40, 300 90, 320 172 S 260 300, 208 300"
        fill="none"
        stroke="#b07dff"
        strokeWidth="1.6"
        strokeDasharray="14 186"
        className="animate-dash" />
      

      {NODES.map((n) =>
      <g key={`${n.x}-${n.y}`}>
          <circle
          cx={n.x}
          cy={n.y}
          r={n.r * 3}
          fill="#8b2bff"
          opacity="0.12"
          className="animate-pulse-node"
          style={{ animationDelay: `${n.delay}s` }} />
        
          <circle cx={n.x} cy={n.y} r={n.r} fill="#c9a5ff" />
        </g>
      )}

      {/* X mark from the logo, anchored in the core */}
      <g
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9">
        
        <path d="M170 170 L230 230" />
        <path d="M230 170 L170 230" />
      </g>
    </svg>);

}