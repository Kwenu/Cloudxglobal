import React from "react";
import { publicAsset } from "../utils/publicAsset";
const LOGO_SRC = publicAsset("WhatsApp_Image_2026-09-16_at_18.46.55.jpg");

/**
 * The supplied logo artwork sits on a large black canvas, so the globe mark is
 * cropped out of it and paired with the wordmark for horizontal lockups.
 */
const MARK = { x: 400, y: 68, w: 262, h: 254, imgW: 1050, imgH: 600 };

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  /** Rendered width of the globe mark in pixels. */
  size?: number;
}

export function Logo({
  className = "",
  showWordmark = true,
  size = 38,
}: LogoProps) {
  const s = size / MARK.w;

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        className="relative block shrink-0 overflow-hidden"
        style={{ width: size, height: MARK.h * s }}
      >
        <img
          src={LOGO_SRC}
          alt={showWordmark ? "" : "Cloud X Global (Pvt) Ltd"}
          aria-hidden={showWordmark || undefined}
          className="absolute max-w-none"
          style={{
            width: MARK.imgW * s,
            height: MARK.imgH * s,
            left: -MARK.x * s,
            top: -MARK.y * s,
          }}
        />
      </span>
      {showWordmark && (
        <span className="font-display leading-none">
          <span className="block text-[17px] font-bold tracking-[0.16em] text-white">
            CLOUD<span className="text-purple-500">X</span>
          </span>
          <span className="mt-1.5 block text-[8.5px] font-medium tracking-[0.28em] text-muted">
            GLOBAL (PVT) LTD
          </span>
        </span>
      )}
    </span>
  );
}

/** Full stacked artwork, cropped to its content, for large brand moments. */
export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Cloud X Global (Pvt) Ltd"
      className={`object-contain ${className}`}
    />
  );
}
