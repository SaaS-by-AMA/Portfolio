"use client";

import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg, rgba(55, 65, 81, 0.8) 0%, rgba(31, 41, 55, 0.9) 100%)';

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180
} as const;

const clamp = (v: number, min = 0, max = 100): number => Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number => parseFloat(v.toFixed(precision));
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number): number =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

interface ProfileCardProps {
  avatarUrl?: string;
  iconUrl?: string;
  grainUrl?: string;
  innerGradient?: string;
  behindGlowEnabled?: boolean;
  behindGlowColor?: string;
  behindGlowSize?: string;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  portfolioUrl?: string;
  onContactClick?: () => void;
  isGrayscale?: boolean;
}

// ... TiltEngine interface ...

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = '/team/placeholder.jpg',
  iconUrl,
  grainUrl,
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = '',
  name = 'Developer',
  title = 'Software Engineer',
  contactText = 'View Portfolio',
  portfolioUrl = '#',
  onContactClick,
  isGrayscale = false
}) => {
  const cardRadius = '24px';

  const handleContactClick = useCallback((): void => {
    if (portfolioUrl && portfolioUrl !== '#') {
      window.open(portfolioUrl.startsWith('http') ? portfolioUrl : `https://${portfolioUrl}`, '_blank');
    }
    onContactClick?.();
  }, [onContactClick, portfolioUrl]);

  return (
    <div
      className={`relative group ${className}`.trim()}
      style={{
        perspective: '1000px',
        width: '100%',
        maxWidth: '320px', // Fixed constraint for better alignment
        margin: '0 auto'
      }}
    >
      {/* Behind Glow - Subtle, static or gentle pulse */}
      {behindGlowEnabled && (
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-60"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${behindGlowColor ?? 'rgba(165, 86, 251, 0.3)'} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            transform: 'translateY(10px)'
          }}
        />
      )}

      {/* Main Card Container */}
      <div
        className="relative z-[1] overflow-hidden bg-[var(--surface)]/40 backdrop-blur-sm border border-white/10 transition-all duration-500 ease-out group-hover:border-[var(--secondary)]/30 group-hover:shadow-[0_0_30px_rgba(165,86,251,0.15)]"
        style={{
          borderRadius: cardRadius,
          aspectRatio: '0.8', // Consistent aspect ratio
          height: '420px',
        }}
      >
        {/* Inner Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: innerGradient ?? 'linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(10,10,10,0.8) 100%)',
          }}
        />

        {/* Engineer Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          src={avatarUrl}
          alt={name}
          loading="lazy"
          style={{
            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', // Soft fade at very bottom if needed, or remove
            filter: isGrayscale ? 'grayscale(100%)' : 'none'
          }}
          onError={e => {
            const t = e.target as HTMLImageElement;
            t.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=800&background=1e1e1e&color=fff`;
          }}
        />

        {/* Info - Single Glassy Bar at Bottom */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <div className="w-full bg-[var(--surface)]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 pl-5 flex items-center justify-between gap-4 shadow-xl transition-all duration-300 group-hover:bg-[var(--surface)] group-hover:border-white/20">

            {/* Name & Title */}
            <div className="flex flex-col items-start gap-0.5">
              <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                {name}
              </h3>
              <p className="text-xs font-bold text-[var(--secondary)] uppercase tracking-wider">
                {title}
              </p>
            </div>

            {/* Square Action Button */}
            <button
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white cursor-pointer transition-all duration-300 shadow-lg relative group/btn overflow-hidden"
              onClick={handleContactClick}
              style={{
                background: 'linear-gradient(135deg, rgba(73, 34, 229, 0.9), rgba(165, 86, 251, 0.9))',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              type="button"
              title={contactText}
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
            </button>

          </div>
        </div>

        {/* Subtle top sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />
      </div>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
