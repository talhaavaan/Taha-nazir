import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const skills = ['Speed Ramping', 'Cinematic Editing', 'Color Grading', 'Motion Graphics', 'Sound Design', 'Short Form', 'YouTube', 'Commercial'];
const bioText = "I’m Taha Nazir, a professional video editor with over 2 years of experience in the digital content industry. I specialize in creating engaging, high-quality videos tailored to different audiences and platforms, including YouTube, Instagram, and TikTok. My focus is on combining strong storytelling, clean editing, and creative visuals to help brands and creators capture attention, retain viewers, and grow their online presence.";

export default function About() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  const labelOpacity = useTransform(progress, [0, 0.04, 0.9, 1], [0, 1, 1, 0]);
  const gridY = useTransform(progress, [0, 1], ['0%', '-18%']);
  const paragraphY = useTransform(progress, [0, 0.12, 0.78, 0.92], ['16px', '0px', '0px', '-12px']);
  const paragraphOpacity = useTransform(progress, [0, 0.04, 0.78, 0.92], [1, 1, 1, 1]);
  const accentFade = useTransform(progress, [0.2, 0.5, 0.8, 1], [0.4, 1, 1, 0.2]);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: 'relative',
        height: '105vh',
        background: 'hsl(var(--bg))',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(hsl(var(--stroke)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--stroke)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            opacity: 0.08,
            y: gridY,
          }}
        />


        <motion.p
          style={{
            position: 'absolute',
            top: '2.2rem',
            left: '50%',
            x: '-50%',
            fontSize: '.7rem',
            fontWeight: 600,
            letterSpacing: '.4em',
            textTransform: 'uppercase',
            color: 'var(--accent-from)',
            fontFamily: "'Inter',sans-serif",
            opacity: labelOpacity,
          }}
        >
          About — Taha Nazir
        </motion.p>

        <motion.div
          style={{
            position: 'absolute',
            left: '50%',
            top: '18%',
            x: '-50%',
            width: 'min(820px, calc(100vw - 4rem))',
            zIndex: 2,
            opacity: paragraphOpacity,
            y: paragraphY,
          }}
        >
          <p style={{
            margin: 0,
            fontFamily: "'Inter',sans-serif",
            fontSize: 'clamp(1.2rem, 2vw, 2.15rem)',
            lineHeight: 1.38,
            color: 'hsl(var(--muted))',
            maxWidth: '795px',
            textWrap: 'balance',
            letterSpacing: '-0.02em',
          }}>
            {bioText}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
