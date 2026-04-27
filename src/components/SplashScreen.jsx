import { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hmsvuqawwjywtkqvsznp.supabase.co',
  'sb_publishable_h_Av3qxNbMDCbVNaHGYPFg_AetCueCP'
);

// Four ecological conditions with Unsplash placeholder images
const IMAGES = [
  {
    condition: 'pristine',
    label: 'Pristine Ecosystem',
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80',
  },
  {
    condition: 'degraded',
    label: 'Degraded Ecosystem',
    url: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1600&q=80',
  },
  {
    condition: 'restoration',
    label: 'Ecosystem Restoration',
    url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80',
  },
  {
    condition: 'urban',
    label: 'Urban Environment',
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80',
  },
];

// Five-point affective scale
const EMOJIS = [
  { emoji: '😍', label: 'Very positive' },
  { emoji: '🙂', label: 'Positive' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😟', label: 'Negative' },
  { emoji: '😢', label: 'Very negative' },
];

export default function SplashScreen({ onDismiss }) {
  // Pick one random image for this session
  const [image] = useState(() => IMAGES[Math.floor(Math.random() * IMAGES.length)]);
  const [showEmojis, setShowEmojis] = useState(false);
  const [responded, setResponded] = useState(false);
  const [fading, setFading] = useState(false);
  const [saving, setSaving] = useState(false);
  const shownAt = useRef(null);

  // After 2.5 s of looking at the image, reveal the emoji row
  useEffect(() => {
    const t = setTimeout(() => {
      setShowEmojis(true);
      shownAt.current = Date.now();
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  async function handleResponse(e) {
    if (responded || saving) return;
    setResponded(true);
    setSaving(true);

    const responseTimeMs = shownAt.current ? Date.now() - shownAt.current : null;

    await supabase.from('splash_responses').insert({
      image_condition: image.condition,
      image_shown:     image.label,
      emoji_response:  e.emoji,
      emoji_label:     e.label,
      response_time_ms: responseTimeMs,
    });

    // Short "thank you" pause, then fade and dismiss
    setTimeout(() => {
      setFading(true);
      setTimeout(onDismiss, 500);
    }, 600);
  }

  function handleSkip() {
    setFading(true);
    setTimeout(onDismiss, 400);
  }

  return (
    <div style={{ ...styles.overlay, opacity: fading ? 0 : 1, transition: 'opacity 0.5s ease' }}>

      {/* Full-bleed background image */}
      <img src={image.url} alt="" style={styles.bgImage} />

      {/* Dark gradient overlay so text is readable */}
      <div style={styles.dimmer} />

      {/* Content layer */}
      <div style={styles.content}>

        {/* Top badge */}
        <div style={styles.badge}>🌿 GLOBE Research Pilot</div>

        {/* Instruction / thank-you text */}
        {!responded ? (
          <p style={{ ...styles.questionText, opacity: showEmojis ? 1 : 0, transition: 'opacity 0.6s ease' }}>
            How does this image make you feel?
          </p>
        ) : (
          <p style={styles.thankYou}>Thank you for your response 🙏</p>
        )}

        {/* "Keep looking" hint while emojis are hidden */}
        {!showEmojis && !responded && (
          <p style={styles.lookingText}>Take a moment to look…</p>
        )}

        {/* Emoji row */}
        {showEmojis && !responded && (
          <div style={styles.emojiRow}>
            {EMOJIS.map(e => (
              <button
                key={e.emoji}
                style={styles.emojiBtn}
                onClick={() => handleResponse(e)}
                title={e.label}
              >
                <span style={styles.emojiGlyph}>{e.emoji}</span>
                <span style={styles.emojiLabel}>{e.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Skip link — always visible */}
        {!responded && (
          <button style={styles.skipBtn} onClick={handleSkip}>
            Skip without responding
          </button>
        )}

        {/* Disclosure notice */}
        <p style={styles.disclosure}>
          This is part of anonymous academic research on environmental education.
          No personal data is stored. Your response is optional and does not affect your experience.
        </p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  dimmer: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 100%)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
    padding: '2rem 1.5rem',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  badge: {
    background: 'rgba(42, 210, 201, 0.85)',
    color: '#fff',
    fontSize: '0.78rem',
    fontWeight: '700',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '0.35rem 1rem',
    borderRadius: '20px',
  },
  questionText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ffffff',
    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
    lineHeight: '1.3',
  },
  lookingText: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.75)',
    fontStyle: 'italic',
    textShadow: '0 1px 4px rgba(0,0,0,0.5)',
  },
  thankYou: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#2ad2c9',
    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
  },
  emojiRow: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  emojiBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.3rem',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    border: '2px solid rgba(255,255,255,0.4)',
    borderRadius: '14px',
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    transition: 'transform 0.15s, background 0.15s',
    minWidth: '72px',
  },
  emojiGlyph: {
    fontSize: '2rem',
    lineHeight: 1,
  },
  emojiLabel: {
    fontSize: '0.65rem',
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  skipBtn: {
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.55)',
    fontSize: '0.78rem',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: '0.25rem',
  },
  disclosure: {
    fontSize: '0.72rem',
    color: 'rgba(255,255,255,0.5)',
    lineHeight: '1.6',
    maxWidth: '420px',
    marginTop: '0.5rem',
  },
};
